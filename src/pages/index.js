import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => {
  return (
    <div style={{ color: "teal" }}>
      <Link to="/">Home</Link>
      <Header />
      <p>テストページ</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
