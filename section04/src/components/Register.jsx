import { useState } from "react";

// 간단한 회원가입 폼
const Register = () => {
  const [name, setName] = useState("이름");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  }
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  }
  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  }
  const onChangeBio = (e) => {
    setBio(e.target.value);
  }
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder={"이름"} type="text" />
        {name}
      </div>
      <div>
        <input value={birth} onChange={onChangeBirth} type="date" />
        {birth}
      </div>
      <div>
        <select value={country} onChange={onChangeCountry}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {country}
      </div>

      <div>
        <textarea value={bio} name="" id="" onChange={onChangeBio}></textarea>
        {bio}
      </div>
    </div>
  )
}

export default Register;