import React, { useEffect, useState } from 'react';
import { mainApi } from '../../../API';
import { PrimaryButton } from '../../../assets/styled-components/components';
import useFetch from '../../../hook/useFetch';
import Loading from '../../common/Loading';
import JobCard from '../JobCard';

const BestMatches = () => {
  const [jobs, setJobs] = useState([]);
  const [count, setCount] = useState(5);

  const handleLoadMoreJobs = () => {
    setCount((prevCount) => prevCount + 3);
  };

  const { data, isLoading, error } = useFetch(`${mainApi}jobs?_page=1&_limit=${count}`);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setJobs(data);
    }
  }, [data]);

  if (isLoading && (!jobs || jobs.length === 0)) {
    return <Loading />;
  }

  if (error && (!jobs || jobs.length === 0)) {
    return (
      <div style={{ padding: '20px' }}>
        <h3>Notice:</h3>
        <p>{typeof error === 'string' ? error : (error?.message || 'Failed to load jobs')}</p>
      </div>
    );
  }

  return (
    <>
      <p>Browse jobs that match your experience to a client's hiring preferences. Ordered by most relevant.</p>
      {jobs && jobs.map((job) => (
        <JobCard key={job.id} data={job} />
      ))}
      {jobs && jobs.length >= count && (
        <PrimaryButton onClick={handleLoadMoreJobs}>Load more jobs</PrimaryButton>
      )}
    </>
  );
};

export default BestMatches;
