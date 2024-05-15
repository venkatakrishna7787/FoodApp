import createRootApi from '../apis/api';
import createSlices from '../slices';
import storeConfiguration from './storeConfigurarion';

const initializeStore = () => {
  const queryApi = createRootApi();
  const slices = createSlices(queryApi.api);
  const redux = storeConfiguration(slices, queryApi.api);

  return {
    slices,
    redux,
    queryApi,
  };
};
export default initializeStore;
