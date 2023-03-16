import React from 'react'
import { mainApi } from '../../../API';
import useFetch from '../../../hook/useFetch';
import Loading from '../../common/Loading';
import JobCard from '../JobCard';

const BestMatches = () => {
  const { data, isLoading, error } = useFetch(`${mainApi}jobs`);
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
      <p>Browse jobs that match your experience to a client's hiring preferences. Ordered by most relevant.</p>
      {
        data.map((el) => {
          return <JobCard key={el.id} data={el} />
        })
      }
    </>
  )
}

export default BestMatches