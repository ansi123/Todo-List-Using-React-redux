import React from 'react'
import todos from '../../reducers/todos'
import {connect} from 'react-redux'
import {deleteTodo} from '../../actions';

const List = (props) => {
    return <ul>
        {props.todos.map((todo,index)=>(
            <li key={index}>{todo.message}<button onClick={()=>props.dispatch(deleteTodo(todo.id))}>delete</button></li>
        ))}</ul>

        
};
const mapStateToProps = (state) => {
    return {
       todos:state.todos.data, 
    }
}
export default connect(mapStateToProps)(List)
