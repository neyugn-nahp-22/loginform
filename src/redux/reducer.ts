import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import authReducer, { AuthState } from '../modules/auth/redux/authReducer';
import intlReducer, { IntlState } from '../modules/intl/redux/intlReducer';
import todoReducer, { TodoState } from '../modules/todo/redux/todoReducer';
import productReducer, { ProductState } from '../modules/product/redux/productReducer';
import profileReducer, { ProfileState } from '../modules/profile/redux/ProfileReducer';

export interface AppState {
  router: RouterState;
  intl: IntlState;
  profile: AuthState;
  todo: TodoState;
  product: ProductState;
  profileUser: ProfileState;
}

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    intl: intlReducer,
    profile: authReducer,
    todo: todoReducer,
    product: productReducer,
    profileUser: profileReducer,
  });
}
