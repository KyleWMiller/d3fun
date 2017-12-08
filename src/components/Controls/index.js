import React, { Component } from "react"
import _ from "lodash"

import ControlRow from "./ControlRow"

export default class Controls extends Component {
  state = {
    yearFilter: () => true,
    jobTitleFilter: () => true,
    USstateFilter: () => true,
    year: "*",
    USstate: "*",
    jobTitle: "*"
  }

  updateYearFilter(year, reset) {
    let filter = (d) => d.submit_date.getFullYear() === year

    if(reset || !year) {
      filter = () => true
      year = "*"
    }

    this.setState({yearFilter: filter, year: year})
  }
  updateJobTitleFilter(title, reset) {
    let filter = d => d.clean_job_title === title

    if(reset || !title) {
      filter = () => true
      title = "*"
    }

    this.setState({jobTitleFilter: filter, jobTitle: title})
  }
  updateUSstateFilter(USstate, reset) {
    
  }
  componentDidUpdate() {
    this.reportUpdateUpTheChain()
  }

  reportUpdateUpTheChain = () => {
    this.props.updateDataFilter(
      ((filters) => {
        return (d) => filters.yearFilter(d)
      })(this.state),
      {
        year: this.state.year
      }
    )
  }
  shouldComponentUpdate(nextProps, nextState) {
    return!_.isEqual(this.state, nextState)
  }
  render() {
    const data = this.props.data,
          now = new Date(),
          years = now.getFullYear()// new Set(data.map(d => d.submit_date.getFullYear()))
          console.log(data)

    return (
      <div>
        <ControlRow data={data}
                    toggleNames={Array.from(USstates.values())}
                    picked={this.state.year}
                    updateDataFilter={this.updateYearFilter} />
      </div>
    )
  }

}
