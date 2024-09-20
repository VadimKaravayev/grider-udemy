const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const todo = data as Todo;
    console.log(todo.title);
    console.log(todo.id);
  });
