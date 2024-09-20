import { Todo, FetchTodosAction, DeleteTodoAction } from '../actions';
import { ActionTypes } from '../actions/types';
import { Action } from '../actions/types';

export const todosReducer = (state: Todo[] = [], action: Action): Todo[] => {
  switch (action.type) {
    case ActionTypes.FETCH_TODOS:
      return action.payload;
    case ActionTypes.DELETE_TODO:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
