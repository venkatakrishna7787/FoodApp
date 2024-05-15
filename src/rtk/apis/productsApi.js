const createProductsApi = api => {
  const service = api.injectEndpoints({
    endpoints: builder => ({
      getProducts: builder.query({
        query: () => '/products',
      }),
      getProductById: builder.query({
        query: id => ({
          url: '/products/' + id,
        }),
        providesTags: ['products'],
      }),
      updateProductById: builder.mutation({
        query: id => ({
          url: '/products/' + id,
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            title: 'iPhone Galaxy +16',
          }),
        }),
        invalidatesTags: ['products'],
      }),
    }),
  });
  const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useUpdateProductByIdMutation,
  } = service;
  return {
    endpoints: service.endpoints,
    hooks: {
      useGetProductsQuery,
      useGetProductByIdQuery,
      useUpdateProductByIdMutation,
    },
  };
};
export default createProductsApi;
