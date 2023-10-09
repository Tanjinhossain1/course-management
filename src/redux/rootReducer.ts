import { baseApi, baseCoreApi } from "./api/baseApi";

export const reducer = {
    [baseApi.reducerPath]: baseApi.reducer,
    [baseCoreApi.reducerPath]: baseCoreApi.reducer,
} 