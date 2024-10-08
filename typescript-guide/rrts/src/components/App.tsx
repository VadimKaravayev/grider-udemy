import React from "react";
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";


type AppProps = {
  todos: Todo[];
  fetchTodos: any;
  deleteTodo: any;
}

type AppState = {
  fetching: boolean;
}


class _App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false };

  }

  componentDidUpdate(prevProps: Readonly<AppProps>, prevState: Readonly<AppState>, snapshot?: any): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({fetching: false});
    }
  }
  
  onButtonClick(): void { 
    this.props.fetchTodos();
    this.setState({ fetching: true });
  }

  onTodoClick(id: number): void {
    this.props.deleteTodo(id);
  }
  
  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>{todo.title}</div>
    })
  }

  render(): React.ReactNode {
    return (
      <div>
        <button onClick={this.onButtonClick.bind(this)}>Fetch</button>
        {this.state.fetching ? 'LOADING' : null}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    todos: state.todos
  }
}

export const App = connect(mapStateToProps, {fetchTodos, deleteTodo})(_App);