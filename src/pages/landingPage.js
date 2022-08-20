import React, { Component } from "react"
import Header from "components/Header"
import Footer from "components/Footer"

export default class landingPages extends Component {
  constructor(props) {
    super(props)
    this.refMostPicked = React.createRef()
  }
  componentDidMount() {
    window.title = "Staycation | Home"
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <Footer />
      </>
    )
  }
}
