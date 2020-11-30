import { connect } from 'react-redux';
import TodoList from './todo_list';
import { receiveTodo, receiveTodos } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';

const mapStateToProps = (state) => {
    return {
        todos: allTodos(state), 
        state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        receiveTodo: (todo) => dispatch(receiveTodo(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
