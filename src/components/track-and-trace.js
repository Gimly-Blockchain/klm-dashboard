import React from 'react';
import Table from "./table";
import data from "../data/data.js";

class TrackAndTrace extends React.Component {
  render() {
    return <div className={'trackAndTrace'}>
      <h6 id='title'>Track & Trace MOP Timeline</h6>
      <div className="row">
      <Table data={data}  />
      </div>
    </div>;
  }
}

export default TrackAndTrace;