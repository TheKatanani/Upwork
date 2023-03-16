import React, { useEffect, useState } from 'react';
import { mainApi } from '../../../API';
import { PrimaryButton } from '../../../assets/styled-components/components';
import useFetch from '../../../hook/useFetch';
import Loading from '../../common/Loading';
import JobCard from '../JobCard';

const BestMatches = () => {
  const [jobs, setJobs] = useState([]); // initialize jobs as an empty array
  const [count, setCount] = useState(5);

  const handleLoadMoreJobs = () => {
    setCount(prevCount => prevCount + 3); // use the function form of setState to avoid issues with asynchronous updates
  };

  // use the useFetch hook to fetch data from the API and handle loading and errors
  const { data, isLoading, error } = useFetch(`${mainApi}jobs?_page=1&_limit=${count}`);

  useEffect(() => {
    // if there's no error and the data is not loading, update the jobs state with the fetched data
    if (!isLoading && !error) {
      setJobs(data);
    }
  }, [data, isLoading, error]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <>
        <h1>There was an error:</h1>
        <p>{error}</p>
      </>
    );
  }

  return (
    <>
      <p>Browse jobs that match your experience to a client's hiring preferences. Ordered by most relevant.</p>
      {jobs.map(job => (
        <JobCard key={job.id} data={job} />
      ))}
      <PrimaryButton onClick={handleLoadMoreJobs}>Load more jobs</PrimaryButton>
    </>
  );
};

export default BestMatches;
