import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://classic-it.vercel.app/api/v1/product",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/`,
    }),
    getSingleProduct: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
});
export const { useGetAllProductsQuery, useGetSingleProductQuery } = productApi;
