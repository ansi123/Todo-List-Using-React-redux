import {connect} from 'react-redux';
import {addTodo} from './action';
import App from './App';

const mapStateToProps= state=>({
    todos:state.id
})

const mapDispatchToParops=dispatch=>({
        addTodo:()=>dispatch(addTodo())

})

export default connect(mapStateToProps,mapDispatchToParops)(App)