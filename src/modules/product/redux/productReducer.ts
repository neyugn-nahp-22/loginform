import { ActionType, createCustomAction, getType } from 'typesafe-actions';
import { IProduct } from '../../../models/product';

export interface ProductState {
  product?: IProduct;
}

export const getProduct = createCustomAction('product/getProduct', (data: IProduct) => ({
  data,
}));

export const getProductById = createCustomAction('product/getProductById', (data: IProduct) => ({
  data,
}));

export const deleteProduct = createCustomAction('product/deleteProduct', (data: IProduct) => ({
  data,
}));

const actions = { getProduct, getProductById, deleteProduct };

type Action = ActionType<typeof actions>;

export default function reducer(state: ProductState = {}, action: Action) {
  switch (action.type) {
    case getType(getProduct):
      return {
        ...state,
        product: action.data,
      };
    case getType(getProductById):
      return {
        ...state,
        product: action.data,
      };
    case getType(deleteProduct):
      return {
        ...state,
        product: action.data,
      };
    default:
      return state;
  }
}
