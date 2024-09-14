import { useReducer, useEffect } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
	localStorage.setItem('todos', JSON.stringify(todos) || []);
  }, [todos]);

  const handleNewTodo = (todo) => {
	const action = {
	  type: 'add',
	  payload: todo
	};
	dispatch(action);
  };

  const handleDeleteTodo = (id) => {
	const action = {
	  type: 'delete',
	  payload: id
	};
	dispatch(action);
  };

  const handleToggleTodo = (id) => {
	const action = {
	  type: 'toggle',
	  payload: id
	};
	dispatch(action);
  };
	const todosCount = ()=> todos.length;

	const pendingTodosCount = ()=> todos.filter(todo => !todo.done).length;

  return {
	todos,
	handleNewTodo,
	handleDeleteTodo,
	handleToggleTodo,
	todosCount,
	pendingTodosCount
	}
};