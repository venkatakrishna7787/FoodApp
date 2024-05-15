import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import createProductsApi from './productsApi';

const createApiConfig = () => {
  return createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
    endpoints: () => ({}),
    tagTypes: ['products'],
  });
};

const createRootApi = () => {
  const api = createApiConfig();
  const products = createProductsApi(api);
  return {api, endpoints: {...products.endpoints}, hooks: {...products.hooks}};
};
export default createRootApi;
