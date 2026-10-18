import axios from 'axios';
import { useState } from 'react';
import { putMockData } from '../services/mockService';

const usePutData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const postData = async (dataToPut) => {
    setIsLoading(true);
    try {
      if (url && !url.includes('undefined') && (url.startsWith('http://') || url.startsWith('https://'))) {
        try {
          const response = await axios.put(url, dataToPut, { timeout: 2500 });
          setData(response.data);
          setIsLoading(false);
          return;
        } catch (err) {
          console.warn('API PUT failed, saving to local mock storage:', err.message);
        }
      }

      const updated = putMockData(url, dataToPut);
      setData(updated);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading, postData };
};

export default usePutData;