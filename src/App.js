import { TodoProvider } from './Todo.Context'
import Header from './components/Header'
import TodoInput from './components/TodoInput'
import TodoList from './components/ListTodos.jsx'
import 'bulma/css/bulma.min.css'

const App = () => {
  return (
    <TodoProvider>
      <Header />
      <div style={{ maxWidth: "500px", margin: "20px auto" }}>
        <TodoInput />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
