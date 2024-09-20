import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

export type StoreState =
  | {
      todos: Todo[];
    }
  | any;

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
