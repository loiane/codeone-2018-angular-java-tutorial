enum UsersActionTypes {
  LOAD_REQUEST = '[Users] Load Request',
  LOAD_SUCCESS = '[Users] Load Success'
}

interface User {
  name: string;
}

type UserActions =
  | { type: UsersActionTypes.LOAD_REQUEST; }
  | { type: UsersActionTypes.LOAD_SUCCESS; payload: User[] };

