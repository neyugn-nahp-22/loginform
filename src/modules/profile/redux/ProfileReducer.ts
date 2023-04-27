import { ActionType, createCustomAction, getType } from 'typesafe-actions';
import { IProfile } from '../../../models/profile';

export interface ProfileState {
  profile?: IProfile;
}

export const getProfileUser = createCustomAction('profile/getUser', (data: IProfile) => ({
  data,
}));

const actions = { getProfileUser };

type Action = ActionType<typeof actions>;

export default function reducer(state: ProfileState = {}, action: Action) {
  switch (action.type) {
    case getType(getProfileUser):
      return {
        ...state,
        payload: action.data,
      };
    default:
      return state;
  }
}
