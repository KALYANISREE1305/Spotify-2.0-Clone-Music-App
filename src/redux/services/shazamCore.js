import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
           headers.set('X-RapidAPI-Key','53c5996586msh011e9c6fbb16e47p1bb2dajsn153fa2d4c747') 
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query:() => '/charts/world '}),
    }),
});

export const {
    useGetTopChartsQuery,
}   = shazamCoreApi;
    