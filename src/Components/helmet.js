import React from "react"
import { Helmet } from "react-helmet"
import Favicon from "../img/favicon.ico"
export default function helmet(props) {
  return (
    <Helmet>
      <html lang="en" />
      <title>Marco Azzurrini | Frontend Web Developer</title>
      <meta
        name="description"
        content="Marco Azzurini, Frontend web developer specializing in React.js. With an emphansis on testing, performance and elegant design patterns Marco has built several web applications."
      />
      <meta charset="utf-8" />
      <meta name="author" content="Marco Azzurrini" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href={Favicon} />
    </Helmet>
  )
}
