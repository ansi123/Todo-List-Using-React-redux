export const addTodo=()=>(dispach:any)=>{
    let url="https://jsonplaceholder.typicode.com/posts"
    let result=fetch(url).then((data)=>{
        data.json().then((dataJson)=>{
            return dispach({
            
                type:'ADD_TODO',
                id:dataJson[0].userId,
            })
        })
    })
}
