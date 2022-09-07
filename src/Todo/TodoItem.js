import React, { useContext } from "react";
import PropTypes from 'prop-types';
import Context from "../context";


const TodoItem = ({ todo, index, onChange }) => {
    const { removeTodo } = useContext(Context);

    const classes = []
    if (todo.completed) {
        classes.push('done')
    }
    const style = {
        li: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '.5rem 1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginBottom: '.5rem',
            boxShadow: "0 0 10px rgba(0,0,0,0.9)"


        },
        input: {
            marginRight: '1rem',
            // boxShadow: "0 0 18px rgba(0,0,0,0.9)"
        }

    }
    return (
        <li style={style.li} >
            <span className={classes.join(' ')}>
                <input type='checkbox'
                    style={style.input}
                    checked={todo.completed}
                    onChange={() => onChange(todo.id)} />
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}

            </span>

            <button className='rm' onClick={(() => removeTodo(todo.id))} >&times;</button>

        </li>
    )

}
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}
export default TodoItem
