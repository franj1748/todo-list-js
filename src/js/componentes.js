import { Todo, TodoList } from "../classes";
import { todo00 } from "..";

// Referencias HTML
const divTodoList   = document.querySelector('.todo-list'),
      txtInput      = document.querySelector('.new-todo'),
      btnBorrar     = document.querySelector('.clear-completed'),
      ulFiltros     = document.querySelector('.filters'),
      anchorFiltros = document.querySelectorAll('.filtro');

export const crearTodoHtml = (todo) => {

    const htmlTodo = `
    <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    
    divTodoList.append(div.firstElementChild); 

    return div.firstElementChild;

}

// Eventos
txtInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13 && txtInput.value.length > 0){
        const nuevoTodo = new Todo(txtInput.value);
        todo00.nuevoTodo(nuevoTodo);
        crearTodoHtml(nuevoTodo);
        txtInput.value = '';
    }

});

divTodoList.addEventListener('click', (e) => {

    const nombreElemento = e.target.localName;
    const todoElemento = e.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    if (nombreElemento.includes('input')){
        todo00.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed'); 
    } else if (nombreElemento.includes('button')){
        todo00.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    }
});

btnBorrar.addEventListener('click', () => {

    todo00.eliminarCompletados();

    for (let i = divTodoList.children.length - 1; i >= 0; i--){

        const elemento = divTodoList.children[i];

        if (elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
        
    }

});

ulFiltros.addEventListener('click', (e) => {

    const filtro = e.target.text;
    if (!filtro) { return; };

    anchorFiltros.forEach(elem => elem.classList.remove('selected'));
    console.log(e.target);
    e.target.classList.add('selected');

    for (const elemento of divTodoList.children){
        
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch (filtro){
            case 'Pendientes':
                if (completado){
                    elemento.classList.add('hidden');
                }
                break;
        
            case 'Completados':
                if (!completado){
                    elemento.classList.add('hidden');
                }
                break;
        }

    }

});
