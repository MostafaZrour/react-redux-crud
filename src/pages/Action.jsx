const addTodo = (text) => ({ type: "ADD_TODO", payload: text });
const removeTodo = (index) => ({ type: "REMOVE_TODO", payload: index });
const increment = () => ({type : "INCREMENT"});
export { addTodo, removeTodo , increment };
