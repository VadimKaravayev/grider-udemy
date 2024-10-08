import { Dispatch } from 'redux';
import axios from 'axios';
import { ActionTypes } from './types';

const url = 'https://jsonplaceholder.typicode.com/todos';

export type Todo = {
  id: number;
  title: string;
  complete: boolean;
};

export type FetchTodosAction = {
  type: ActionTypes.FETCH_TODOS;
  payload: Todo[];
};

export type DeleteTodoAction = {
  type: ActionTypes.DELETE_TODO;
  payload: number;
};

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
      type: ActionTypes.FETCH_TODOS,
      payload: response.data,
    });
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.DELETE_TODO,
    payload: id,
  };
};
