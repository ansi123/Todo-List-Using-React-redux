

const initialData={
    data:[],
};

const todos=(state=initialData,actions)=>{
    switch(actions.type){
       case "ADD_TODO":
           return{
               ...state,
                   data:[
                   ...state.data,
                   {
                        message:actions.message,
                        id:actions.id,
                   },
               ],
           };
       case "DELETE_TODO":
           const todos=state.data.filter((todo)=>todo.id!=actions.id)
           return{
               ...state,
               data:todos,
           };
        default:
            return state;
}};

export default todos;