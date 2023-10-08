import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQyery'
import { getAuthBaseUrl, getCoreBaseUrl,  } from '@/helpers/config/envConfig'
import { createApi } from '@reduxjs/toolkit/query/react'
import { tagTypesList } from '../tag-types'


// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: getAuthBaseUrl() }),
  endpoints: (builder) => ({}),
  tagTypes: tagTypesList
})

// Define a service using a base URL and expected endpoints
export const baseCoreApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: getCoreBaseUrl() }),
  endpoints: (builder) => ({}),
  tagTypes: tagTypesList
})
