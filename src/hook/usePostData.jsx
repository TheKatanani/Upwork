import axios from 'axios';
import { useState } from 'react';

const usePostData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const postData = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(url, data);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading, postData };
};

export default usePostData;