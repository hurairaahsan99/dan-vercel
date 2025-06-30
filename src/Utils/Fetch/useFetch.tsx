import { useState, useEffect } from 'react';

type FetchResult<T> = {
    data: T | null;
    isLoading: boolean;
    error: Error | null;
};

function useFetch<T>(endpoint: string, method: 'GET' | 'POST'): FetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_BASE_API_URL}${endpoint}`,
                    {
                        method,
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    },
                );

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result: T = await response.json();
                setData(result);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err);
                } else {
                    setError(new Error('An unknown error occurred'));
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [endpoint, method]);

    return { data, isLoading, error };
}

export default useFetch;
