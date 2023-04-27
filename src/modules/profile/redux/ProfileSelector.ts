import { AppState } from '../../../redux/reducer';

export const infoUserSelector = (state: AppState) => state.profileUser.profile;
