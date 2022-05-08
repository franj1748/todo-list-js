import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todo00 = new TodoList();

todo00.todos.forEach(todo => crearTodoHtml(todo));

