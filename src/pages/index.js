import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => {
  const [value, setValue] = React.useState(0)

  const [value2, setValue2] = React.useState(0)

  const [value3, setValue3] = React.useState(0)

  const handleChange = event => {
    setValue(Number(event.target.value))
  }

  const handleChange2 = event => {
    setValue2(Number(event.target.value))
  }

  const handleChange3 = event => {
    setValue3(Number(event.target.value))
  }

  return (
    <div style={{ color: "teal" }}>
      <Link to="/">Home</Link>
      <Header />
      <p>テストページ</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <input
        type="text"
        value={String(value)}
        required
        inputmode="decimal"
        onChange={handleChange}
      />
      <input
        type="number"
        value={String(value2)}
        onChange={handleChange2}
        inputmode="decimal"
        step="0.1"
      />
      <input type="number" value={value3} onChange={handleChange3} />
    </div>
  )
}
