import React, { Component } from "react"

export default class Toggle extends Component {
  handleClick = (e) => {
    this.props.onClick(this.props.name, !this.props.value)
  }

  render() {
    let className = "btn btn-default"

    if(this.props.value) {
      className += " btn-primary"
    }

    return (
      <button className={className} onClick={this.handleClick}>
        {this.props.label}
      </button>
    )
  }
}
