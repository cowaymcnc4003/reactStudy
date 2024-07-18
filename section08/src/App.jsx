import "./App.css";
import { useState, useRef, useReducer, useCallback, createContext, useMemo } from 'react'
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
// import Exam from "./components/Exam";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId
          ? { ...item, isDone: !item.isDone }
          : item
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.targetId)
    default:
      return state;
  }
}

// export const TodoContext = createContext();

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  // const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime()
      }
    })
    // const newTodo = {
    //   id: idRef.current++,
    //   isDone: false,
    //   content: content,
    //   date: new Date().getTime()
    // }

  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId
    })
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === targetId
    //       ? { ...todo, isDone: !todo.isDone }
    //       : todo
    //   )
    // );
  }, []);

  // const onDelete = (targetId) => {
  //   dispatch({
  //     type: "DELETE",
  //     targetId: targetId
  //   })
  //   // setTodos(todos.filter((todo) => todo.id !== targetId));
  // };

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId
    })
    // setTodos(todos.filter((todo) => todo.id !== targetId));
  }, []);

  const memoizedDispatch = useMemo(() => {
    return {
      onCreate, onDelete, onUpdate,
    }
  }, []);

  return (
    <div className="App">
      {/* <Exam /> */}
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
}

export default App
