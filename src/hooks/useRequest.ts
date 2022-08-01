import { useState, useEffect } from 'react';
import axios from 'axios';

export const useRequest = <T>(url: string) => {
  const [data, setData] = useState<T>();

  useEffect(() => {
    const fetchData = async () => {
      const res: any = await axios.get(`http://localhost:3000/api/${url}`);
      setData(res.data);
    };
    fetchData();
  }, [url]);

  return data;
};
