import { fetchErrorHandler } from "@/utils/fetchErrorHandler";

import { useState, useEffect } from "react";

const useFetch = (url) => {
  const controller = new AbortController();
  const signal = controller.signal;

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!url) return;

      setLoading(true);

      try {
        const response = await fetch(url, { signal: signal });
        if (!response.ok) {
          throw new Error("Request failed");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
        fetchErrorHandler(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;

// try {
//   const fetchData = async () => {
//     try {
//       const response = await fetch(url, { signal });
//       const data = await response.json();

//       setComicResult(data);
//     } catch (err) {
//       fetchErrorHandler(err);
//     }
//   };
//   fetchData();
// } catch (err) {
//   fetchErrorHandler(err);
// }

// return () => {
//   controller.abort();
// };