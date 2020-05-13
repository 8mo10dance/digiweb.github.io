import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => {
  const [value, setValue] = React.useState("0")

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <div style={{ color: "teal" }}>
      <Link to="/">Home</Link>
      <Header />
      <p>テストページ</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <input type="text" inputmode="decimal" />
      <input
        type="text"
        value={value}
        inputmode="decimal"
        onChange={handleChange}
      />
    </div>
  )
}
