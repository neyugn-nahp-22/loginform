import { AppState } from '../../../redux/reducer';

export const userTokenSelector = (state: AppState) => state.auth.loading;

export const userDetailSelector = (state: AppState) => state.auth.userDetail;
