import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const token = import.meta.env.VITE_TOKEN;

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://cors-anywhere.herokuapp.com/https://live.devnimble.com/api/v1/',
    prepareHeaders: (headers) => {
      headers.set('authorization', `Bearer ${token}`);
    },
  }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => 'contacts',
    }),
    getContactById: builder.query({
      query: (id) => `contact/${id}`,
    }),
  }),
});

export const { useGetContactsQuery, useGetContactByIdQuery } = contactsApi;
