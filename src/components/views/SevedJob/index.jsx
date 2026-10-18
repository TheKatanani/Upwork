import React from 'react';
import { mainApi } from '../../../API';
import useFetch from '../../../hook/useFetch';
import Loading from '../../common/Loading';
import JobCard from '../JobCard';

const SevedJob = () => {
  const { data, isLoading, error } = useFetch(`${mainApi}jobs?isSaved=true`);

  if (isLoading) {
    return <Loading />;
  }

  if (error && (!data || data.length === 0)) {
    return (
      <div style={{ padding: '20px' }}>
        <h3>Notice:</h3>
        <p>{typeof error === 'string' ? error : (error?.message || 'Failed to load saved jobs')}</p>
      </div>
    );
  }

  return (
    <>
      {data && data.length > 0 ? (
        data.map((el) => <JobCard key={el.id} data={el} />)
      ) : (
        <p style={{ padding: '24px 0', color: '#666' }}>
          No saved jobs yet. Click the heart icon on any job to save it here.
        </p>
      )}
    </>
  );
};

export default SevedJob;