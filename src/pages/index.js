import React from "react"
import { Link } from "gatsby"
import { TextField } from "@material-ui/core"
import Header from "../components/header"

export default () => {
  const [value, setValue] = React.useState("0")

  const handleChange = event => {
    const nextValue = event.target.value
      .replace(/^0\./, "A")
      .replace(/^0/, "")
      .replace(/^A/, "0.")

    if (nextValue.length > 0 && !nextValue.match(/^\d+\.?\d*$/)) return

    setValue(nextValue)
  }

  return (
    <div style={{ color: "teal" }}>
      <Link to="/">Home</Link>
      <Header />
      <p>テストページ</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <TextField
        type="number"
        value={value || "0"}
        onChange={handleChange}
        inputProps={{ inputMode: "decimal" }}
      />
    </div>
  )
}
