// type ServerFetchResult<T> = {
//     data: T | null;
//     isLoading: boolean;
//     error: Error | null;
// };

// export async function serverFetch<T>(
//     endpoint: string,
//     method: 'GET' | 'POST' = 'GET'
// ): Promise<ServerFetchResult<T>> {
//     const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

//     if (!baseUrl) {
//         return {
//             data: null,
//             isLoading: false,
//             error: new Error('Base API URL is not defined in environment variables'),
//         };
//     }

//     try {
//         const response = await fetch(`${baseUrl}${endpoint}`, {
//             method,
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (!response.ok) {
//             throw new Error(`Failed to fetch data: ${response.statusText}`);
//         }

//         const data = await response.json();
//         return { data, isLoading: false, error: null };
//     } catch (err) {
//         const error = err instanceof Error ? err : new Error('An unknown error occurred');
//         return { data: null, isLoading: false, error };
//     }
// }
