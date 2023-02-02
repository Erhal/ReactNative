import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IPic } from "../../slices/pics/type";

export const picsApi = createApi({
  reducerPath: 'picsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://picsum.photos/v2/',
  }),
  endpoints: builder => ({
    getStartPics: builder.query<IPic[], number>({
      query: ( page ) => `list?limit=6&page=${page}`,
    }),
    getMorePics: builder.mutation<IPic[], number>({
      query: ( page ) => `list?limit=6&page=${page}`,
    })
  }),
});

export const { useGetStartPicsQuery, useGetMorePicsMutation } = picsApi;
export default picsApi;