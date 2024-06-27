import { useRef, useState } from "react";

// 간단한 회원가입 폼
const Register = () => {
  const [input, setInput] = useState({ // 값이 변경되면 리렌더링
    name: "",
    birth: "",
    country: "",
    bio: ""
  });
  const countRef = useRef(0);
  const inputRef = useRef();
  console.log("countRef 랜더링");


  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = () => {
    if (input.name === "") {
      inputRef.current.focus();
    }
  }

  return (
    <div>
      <button onClick={() => {
        countRef.current++;
        console.log(countRef.current);
      }}>ref ++</button>
      <div>
        <input ref={inputRef} value={input.name} name="name" onChange={onChange} placeholder={"이름"} type="text" />
        {input.name}
      </div>
      <div>
        <input value={input.birth} name="birth" onChange={onChange} type="date" />
        {input.birth}
      </div>
      <div>
        <select value={input.country} name="country" onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {input.country}
      </div>

      <div>
        <textarea value={input.bio} name="bio" id="" onChange={onChange}></textarea>
        {input.bio}
      </div>
      <button onClick={onSubmit} >submit</button>
    </div>
  )
}

export default Register;