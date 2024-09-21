import {useState, useEffect, useCallback} from 'react';

type FetchState<T> = {
    loading: boolean;
    error: boolean;
    data: T | null;
    refetch: () => void;
};

export function useFetch<T>(
    fetchFunction: (signal: AbortSignal) => Promise<T | null>
): FetchState<T> {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState(false);
    const [reload, setReload] = useState(0);

    const fetchData = useCallback(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        setLoading(true);
        fetchFunction(signal)
            .then(response => {
                if (response) {
                    setData(response);
                    setError(false);
                } else {
                    setError(true);
                }
            })
            .catch((err) => {
                if (err instanceof DOMException && err.name === "AbortError") {
                    console.log(`Запрос отменен`);
                } else {
                    setError(true);
                }
            })
            .finally(() => setLoading(false));

        return controller;
    }, [fetchFunction]);

    useEffect(() => {
        const controller = fetchData();

        return () => {
            controller.abort();
        };
    }, [fetchData, reload]);

    const refetch = () => {
        setReload(prev => prev + 1);
    };

    return {
        data,
        error,
        loading,
        refetch
    };
}