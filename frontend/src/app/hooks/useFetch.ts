import { useState, useEffect } from 'react';

interface UseFetchOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: unknown;
}

export const useFetch = <T>(
  url: string,
  options?: UseFetchOptions
): { data: T | null; error: string | null; loading: boolean } => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          method: options?.method || 'GET',
          headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
          },
          body: options?.body ? JSON.stringify(options.body) : undefined,
          signal: controller.signal,
        });

        if (!response.ok) {
          const message = await response.text();
          setError(`Error ${response.status}: ${message}`);
          return;
        }

        const result = await response.json();
        setData(result);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Unexpected error');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url, options]);

  return { data, error, loading };
};
