export default {
  Query: {
    products: (_, __, context) => context.Product.loadAll(),
    product: (_, { sku }, context) => context.Product.loadBySku(sku)
  }
};