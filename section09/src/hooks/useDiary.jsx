import { useContext, useEffect, useState } from 'react';
import { DiarySateContext } from '../App';
import { useNavigate } from 'react-router-dom';

const useDiary = (id) => {
  const data = useContext(DiarySateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();

  const nav = useNavigate();

  useEffect(() => {
    const currentDiaryitem = data.find((item) => String(item.id) === String(id));

    if (!currentDiaryitem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }
    setCurDiaryItem(currentDiaryitem);
  }, [id, data]);

  return curDiaryItem;
}

export default useDiary