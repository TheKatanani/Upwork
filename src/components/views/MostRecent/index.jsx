import React from 'react'
import { mainApi } from '../../../API';
import useFetch from '../../../hook/useFetch';
import Loading from '../../common/Loading';
import JobCard from '../JobCard';

const MostResent = () => {
  const { data, isLoading, error } = useFetch(`${mainApi}jobs?_sort=id&_order=desc`);
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
      <p>Browse the most recent jobs that match your skills and profile description to the skills clients are looking for.</p>
      {
        data.map((el) => {
          return <JobCard key={el.id} data={el} />
        })
      }
    </>
  )
}

export default MostResent