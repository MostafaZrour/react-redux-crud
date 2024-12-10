import store from "./Store";
import { addTodo, removeTodo , increment } from "./Action";

export default function Home() {

  store.subscribe(() => console.log(store.getState())); // Logs state changes

  store.dispatch(addTodo("Learn Redux"));
  store.dispatch(addTodo("Build a project"));
  store.dispatch(removeTodo(0));
  store.dispatch(increment());
  
}
