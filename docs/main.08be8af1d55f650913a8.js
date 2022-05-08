(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=1)})([function(){},function(a,b,c){'use strict';c.r(b);c(0);class d{static fromJson({id:a,tarea:b,completado:c,creado:e}){const f=new d(b);return f.id=a,f.completado=c,f.creado=e,f}constructor(a){this.tarea=a,this.id=new Date().getTime(),this.completado=!1,this.creado=new Date}}const f=document.querySelector('.todo-list'),g=document.querySelector('.new-todo'),e=document.querySelector('.clear-completed'),h=document.querySelector('.filters'),i=document.querySelectorAll('.filtro'),j=(a)=>{const b=`
    <li class="${a.completado?'completed':''}" data-id="${a.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${a.completado?'checked':''}>
            <label>${a.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`,c=document.createElement('div');return c.innerHTML=b,f.append(c.firstElementChild),c.firstElementChild};g.addEventListener('keyup',(a)=>{if(13===a.keyCode&&0<g.value.length){const a=new d(g.value);k.nuevoTodo(a),j(a),g.value=''}}),f.addEventListener('click',(a)=>{const b=a.target.localName,c=a.target.parentElement.parentElement,d=c.getAttribute('data-id');b.includes('input')?(k.marcarCompletado(d),c.classList.toggle('completed')):b.includes('button')&&(k.eliminarTodo(d),f.removeChild(c))}),e.addEventListener('click',()=>{k.eliminarCompletados();for(let a=f.children.length-1;0<=a;a--){const b=f.children[a];b.classList.contains('completed')&&f.removeChild(b)}}),h.addEventListener('click',(a)=>{const b=a.target.text;if(b){i.forEach((a)=>a.classList.remove('selected')),console.log(a.target),a.target.classList.add('selected');for(const a of f.children){a.classList.remove('hidden');const c=a.classList.contains('completed');'Pendientes'===b?c&&a.classList.add('hidden'):'Completados'===b?c||a.classList.add('hidden'):void 0}}}),c.d(b,'todo00',function(){return k});const k=new class{constructor(){this.cargarLocalStorage()}nuevoTodo(a){this.todos.push(a),this.guardarLocalStorage()}eliminarTodo(a){this.todos=this.todos.filter((b)=>b.id!==+a),this.guardarLocalStorage()}marcarCompletado(a){for(const b of this.todos)if(b.id===+a){b.completado=!b.completado,this.guardarLocalStorage();break}}eliminarCompletados(){this.todos=this.todos.filter((a)=>!a.completado),this.guardarLocalStorage()}guardarLocalStorage(){localStorage.setItem('todo',JSON.stringify(this.todos))}cargarLocalStorage(){this.todos=localStorage.getItem('todo')?JSON.parse(localStorage.getItem('todo')):[],this.todos=this.todos.map(d.fromJson)}};k.todos.forEach((a)=>j(a))}]);