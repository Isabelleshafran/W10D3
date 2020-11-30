import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';


const TodoList = (props) => {
    // console.log(props.todos)
    return (
        <div>
            <h3>Todo List:</h3>
            <ul>
                {props.todos.map(todo => (
                    <TodoListItem title={todo.title} body={todo.body} key={todo.id}/>
                ))}
            </ul>

            <TodoForm receiveTodo={ receiveTodo }/>
        </div>
    )
}

export default TodoList;