import createRootApi from '../apis/apis';
import createSlices from '../slices';
import storeConfiguration from './storeConfigurarion';

const initializeStore = () => {
  const queryApi = createRootApi();
  const slices = createSlices();
  const redux = storeConfiguration(slices, queryApi);

  return {
    slices,
    redux,
  };
};
export default initializeStore;
