import React from 'react'
import { mainApi } from '../../../API';
import useFetch from '../../../hook/useFetch';
import Loading from '../../common/Loading';
import JobCard from '../JobCard';

const SevedJob = () => {
  const { data, isLoading, error } = useFetch(`${mainApi}jobs?isSaved=true`);
  if (isLoading) {
    return <Loading />
  }
  if (error) {
    return <>
      <h1>there is error :</h1>
      <p>{error}</p>
    </>
  }
  return (
    <>
    {
      data?.map((el) => {
        return <JobCard key={el.id} data={el} />
      })
    }
    </>
  )
}

export default SevedJob