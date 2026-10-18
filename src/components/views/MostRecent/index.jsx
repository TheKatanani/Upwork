import React from 'react';
import { mainApi } from '../../../API';
import useFetch from '../../../hook/useFetch';
import Loading from '../../common/Loading';
import JobCard from '../JobCard';

const MostResent = () => {
  const { data, isLoading, error } = useFetch(`${mainApi}jobs?_sort=id&_order=desc`);

  if (isLoading) {
    return <Loading />;
  }

  if (error && (!data || data.length === 0)) {
    return (
      <div style={{ padding: '20px' }}>
        <h3>Notice:</h3>
        <p>{typeof error === 'string' ? error : (error?.message || 'Failed to load recent jobs')}</p>
      </div>
    );
  }

  return (
    <>
      <p>Browse the most recent jobs that match your skills and profile description to the skills clients are looking for.</p>
      {data && Array.isArray(data) && data.map((el) => {
        return <JobCard key={el.id} data={el} />;
      })}
    </>
  );
};

export default MostResent;