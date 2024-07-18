import { useEffect } from "react";

const Even = () => {

  // 3. 언마운트 : 죽음
  useEffect(() => {
    return (() => {
      
    })
  },[]);// des 의존성 배열
  return <div>짝수입니다</div>
}

export default Even