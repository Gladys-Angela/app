import React from 'react'

const TodoCard = (props) => {
    const {todo } = props;
    console.log(todo);
    const { title, completed} = todo;
    return (
        <div>
            <h4> {title} </h4>
            <h6> {`Completed: ${completed}`} </h6>
            </div>
    );
};

export default TodoCard