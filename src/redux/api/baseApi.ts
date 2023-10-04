import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQyery'
import { getAuthBaseUrl,  } from '@/helpers/config/envConfig'
import { createApi } from '@reduxjs/toolkit/query/react'
import { tagTypesList } from '../tags'


// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: getAuthBaseUrl() }),
  endpoints: (builder) => ({}),
  tagTypes: tagTypesList
})
