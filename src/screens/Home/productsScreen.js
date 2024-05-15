import {Text, View, Button} from 'react-native';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {queryApi} from '../..';

const ProductsScreen = () => {
  const dispatch = useDispatch();

  // Fetch Request query
  // Selecting the Data from store & api
  // const response = useSelector(queryApi.endpoints.getProducts.select()); // diectly fetch the api data
  // const response = useSelector(state => state.products.products); // get the data from redux
  // const response = useSelector(queryApi.endpoints.getProductById.select(1));
  // const response = useSelector(state => state.products.productByUser);

  // Hooks Api calling with hooks
  // const response1 = queryApi.hooks.useGetProductsQuery();
  const response2 = queryApi.hooks.useGetProductByIdQuery(1);
  console.log(response2);

  // Update Request Mutation
  const [updateProductById] = queryApi.hooks.useUpdateProductByIdMutation();

  useEffect(() => {
    // dispatch(queryApi.endpoints.getProducts.initiate());
    // dispatch(queryApi.endpoints.getProductById.initiate(1));
    return () => {};
  }, []);

  const updatedata = () => {
    updateProductById(1)
      .then(response => {
        // Handle successful response
        console.log(response);
        // queryApi.hooks.useGetProductByIdQuery(1)
      })
      .catch(error => {
        // Handle error
        console.error('Error updating product:', error);
      });
  };
  return (
    <View>
      <Text>Products Screen:{response2?.title}</Text>
      <Button title={'Update product'} onPress={updatedata} />
    </View>
  );
};
export default ProductsScreen;
