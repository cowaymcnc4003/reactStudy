const Main = () => {
  const number = 10;
  const obj = { a: 1 };
  return (
    <>
      <h1>main</h1>
      <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
      <h3>{obj.a}</h3>

    </>
  )
}

export default Main;