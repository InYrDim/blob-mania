import { useEffect, useState } from "react";

export const useFetchWithAbort = (url, path) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [abortController, setAbortController] = useState(null);

  useEffect(() => {
    if (!url) {
      setData(null);
      setError(null);
      setIsLoading(false);
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      setData(null);

      const controller = new AbortController();
      setAbortController(controller);

      try {
        const response = await fetch(url, { signal: controller.signal });
        const responseData = await response.json();
        if (!controller.signal.aborted) {
          setData(responseData);
        }
      } catch (err) {
        if (!controller.signal.aborted) {
          setError(err);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      if (abortController) {
        abortController.abort();
        setAbortController(null); // Reset abort controller
      }
    };
  }, [url, path]);

  return { data, error, isLoading };
};
