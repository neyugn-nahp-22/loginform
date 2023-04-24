export interface ListTodo {
  listPhoto: Array<IPhoto>;
}

export interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface ChangeTitle {
  id: number;
  title: string;
}

export interface IAction {
  type: string;
  payload?: any;
}