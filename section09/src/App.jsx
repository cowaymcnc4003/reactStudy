import { useReducer, useRef, createContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Diary from './page/Diary';
import New from './page/New';
import Edit from './page/Edit';
import './App.css'
import Notfound from './page/Notfound';

function reducer(state, action) {
  let nextState;

  switch (action.type) {
    case 'INIT':
      return action.data;
    case 'CREATE':
      nextState = [action.data, ...state];
      break;
    case 'UPDATE':
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
      break;
    case 'DELETE':
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    default:
      return state;
  }
  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

export const DiarySateContext = createContext();
export const DirayDispatchContext = createContext();

function App() {
  const [isLoading, setIsloading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    const storedData = localStorage.getItem("diary");
    console.log(storedData);
    if (!storedData) {
      setIsloading(false);
      return;
    }
    const parsedData = JSON.parse(storedData);
    if (!Array.isArray(parsedData)) {
      setIsloading(false);
      return;
    }
    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id)
      }
    });

    idRef.current = maxId + 1;

    dispatch({
      type: "INIT",
      data: parsedData,
    });
    setIsloading(false);
  }, []);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    })
  }
  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch(
      {
        type: "UPDATE",
        data: {
          id,
          createdDate,
          emotionId,
          content,
        }
      }
    )
  }
  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch(
      {
        type: "DELETE",
        id
      }
    )
  }

  if (isLoading) {
    return <div>데이터 로딩 중입니다....</div>
  }

  return (
    <>
      <DiarySateContext.Provider value={data}>
        <DirayDispatchContext.Provider value={{
          onCreate,
          onDelete,
          onUpdate,
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DirayDispatchContext.Provider>
      </DiarySateContext.Provider>
    </>
  );
}

export default App;
