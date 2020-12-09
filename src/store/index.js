import ProductStore from './product/product.store';

class RootStore {
  constructor() {
    this.productStore = ProductStore;
  }
}

export default new RootStore();
