import { useState, useEffect, useCallback } from "react";
import counterFiles from "../../domain/useCases/findCounterFiles";

export default function useCounterFiles() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCounterFiles = useCallback(async () => {
    try {
      const response = await counterFiles();
      setData(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCounterFiles();
  }, [fetchCounterFiles]);
  return {
    data,
    isLoading,
  };
}
