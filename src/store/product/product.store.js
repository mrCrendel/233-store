import { computed, makeObservable, observable } from 'mobx';
import { ProductActionAction } from './product.action';

class ProductStore extends ProductActionAction {
}

// eslint-disable-next-line no-class-assign
ProductStore = makeObservable(ProductStore, {

});

export default new ProductStore();
