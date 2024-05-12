import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query';
import userApis from './usersApis';

const createMainApi = () => {
  return createApi({
    baseQuery: fetchBaseQuery({baseUrl: ''}),
    reducerPath: 'apis',
    endpoints: () => ({}),
  });
};

const createRootApi = () => {
  const api = createMainApi();
  const products = userApis(api);
  return {
    api,
  }
};
export default createRootApi;
