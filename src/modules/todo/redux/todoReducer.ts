import { ChangeTitle, IPhoto } from './../../../models/todo';
import { IAction } from '../../../models/todo';
import { COMFIRM_TITLE_PHOTO, GET_PHOTO_SUCCESS, OFF_LOADING, ON_LOADING } from './action';

export interface TodoState {
  listPhoto: Array<IPhoto>;
  loading: Boolean;
  hasMore: boolean;
}
const intlPhoto = { listPhoto: [], loading: false, hasMore: true };

export default function todoReducer(state: TodoState = intlPhoto, action: IAction) {
  switch (action.type) {
    case GET_PHOTO_SUCCESS:
      return { ...state, listPhoto: [...state.listPhoto, ...action.payload] };
    case ON_LOADING:
      return {
        ...state,
        loading: true,
      };
    case OFF_LOADING:
      return {
        ...state,
        loading: false,
      };
    case COMFIRM_TITLE_PHOTO:
      const newdata = [...state.listPhoto].map((el) => {
        const currentData = action.payload.find((data: ChangeTitle) => data.id === el.id);
        if (currentData && el.id === currentData.id) {
          return {
            ...el,
            title: currentData.title,
          };
        }
        return el;
      });

      return {
        ...state,
        listPhoto: newdata,
      };
    default:
      return state;
  }
}
