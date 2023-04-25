import { ActionType, createCustomAction, getType } from 'typesafe-actions';
import { IProduct, IProductId } from '../../../models/product';

export interface ProductState {
  product?: IProduct;
}

export const getProduct = createCustomAction('product/getProduct', (data: IProduct) => ({
  data,
}));

export const getProductById = createCustomAction('product/getProductById', (data: IProduct) => ({
  data,
}));

export const deleteProduct = createCustomAction('product/deleteProduct', (data: IProductId) => ({
  data,
}));

export const filterStatus = createCustomAction('product/filterStatus', (data: IProduct) => ({
  data,
}));

const actions = { getProduct, getProductById, deleteProduct, filterStatus };

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
    case getType(filterStatus):
      return {
        ...state,
        status: action.data.status,
      };
    default:
      return state;
  }
}
