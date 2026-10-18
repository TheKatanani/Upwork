import initialData from '../mock/index.json';

const STORAGE_KEY = 'upwork_mock_jobs';

export const getStoredJobs = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Error reading jobs from localStorage:', e);
  }
  const defaultJobs = initialData.jobs || [];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultJobs));
  } catch (e) {}
  return defaultJobs;
};

export const saveStoredJobs = (jobs) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
    window.dispatchEvent(new Event('upwork_jobs_updated'));
  } catch (e) {
    console.error('Error saving jobs to localStorage:', e);
  }
};

export const getMockData = (url) => {
  if (!url) return null;
  const urlStr = String(url);

  // If requesting user profile:
  if (urlStr.includes('user')) {
    const user = initialData.user && initialData.user[0] ? initialData.user[0] : {
      id: 1,
      title: 'Full Stack & Frontend Developer',
      location: 'Palestine',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      overview: 'Experienced Frontend Developer crafting beautiful, responsive web applications.',
      hourlyRate: 25
    };
    return user;
  }

  // If requesting jobs:
  if (urlStr.includes('jobs')) {
    const jobs = getStoredJobs();

    // Check single job by ID: e.g., jobs/5 or jobs/5?something
    const singleJobMatch = urlStr.match(/jobs\/(\d+)/);
    if (singleJobMatch) {
      const jobId = Number(singleJobMatch[1]);
      const found = jobs.find((j) => j.id === jobId);
      return found || jobs[0] || null;
    }

    // Check for isSaved filter:
    if (urlStr.includes('isSaved=true')) {
      return jobs.filter((j) => j.isSaved);
    }

    // Check for title_like search:
    const searchMatch = urlStr.match(/title_like=([^&]+)/);
    if (searchMatch) {
      const searchTerm = decodeURIComponent(searchMatch[1]).toLowerCase();
      return jobs.filter(
        (j) =>
          (j.title || '').toLowerCase().includes(searchTerm) ||
          (j.description || '').toLowerCase().includes(searchTerm) ||
          (j.skills || []).some((s) => s.toLowerCase().includes(searchTerm))
      );
    }

    // Check for sort:
    let result = [...jobs];
    if (urlStr.includes('_sort=id') && urlStr.includes('_order=desc')) {
      result.sort((a, b) => b.id - a.id);
    }

    // Check for pagination / limit:
    const limitMatch = urlStr.match(/_limit=(\d+)/);
    if (limitMatch) {
      const limit = Number(limitMatch[1]);
      result = result.slice(0, limit);
    }

    return result;
  }

  return null;
};

export const putMockData = (url, updatedData) => {
  const jobs = getStoredJobs();
  let targetId = updatedData?.id;

  if (!targetId && url) {
    const match = String(url).match(/jobs\/(\d+)/);
    if (match) targetId = Number(match[1]);
  }

  if (targetId !== undefined) {
    const updatedJobs = jobs.map((j) => (j.id === targetId ? { ...j, ...updatedData } : j));
    saveStoredJobs(updatedJobs);
    return updatedData;
  }

  return updatedData;
};

export const postMockData = (url, data) => {
  if (String(url).includes('jobs')) {
    const jobs = getStoredJobs();
    const newJob = { ...data, id: jobs.length + 1 };
    jobs.unshift(newJob);
    saveStoredJobs(jobs);
    return newJob;
  }
  return data;
};
