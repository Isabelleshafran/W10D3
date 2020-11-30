import React from 'react';



const TodoListItem = (props) => {

    return (
        <ul>
            <li>Title: {props.title}</li>
            <li>Body: {props.body}</li>
            <br/>
        </ul>
    )

}

export default TodoListItem;