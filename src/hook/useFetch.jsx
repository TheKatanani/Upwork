import { useState, useEffect } from 'react';
import axios from 'axios';
import { getMockData } from '../services/mockService';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      // Try live API if configured and valid
      if (url && !url.includes('undefined') && (url.startsWith('http://') || url.startsWith('https://'))) {
        try {
          const response = await axios.get(url, { timeout: 2500 });
          if (isMounted) {
            setData(response.data);
            setIsLoading(false);
            return;
          }
        } catch (err) {
          console.warn('API request failed, falling back to mock data:', err.message);
        }
      }

      // Standalone Mock fallback (works 100% offline and in production showcase)
      try {
        const mockResult = getMockData(url);
        if (isMounted) {
          setData(mockResult);
        }
      } catch (err) {
        if (isMounted) setError(err.message || 'Error loading data');
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchData();

    // Listen to custom update event (e.g. saving/unsaving jobs)
    const handleUpdate = () => {
      if (isMounted) {
        const updated = getMockData(url);
        setData(updated);
      }
    };
    window.addEventListener('upwork_jobs_updated', handleUpdate);

    return () => {
      isMounted = false;
      window.removeEventListener('upwork_jobs_updated', handleUpdate);
    };
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
