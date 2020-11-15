import React, { Component } from 'react'
import Data from '../data/data'

class Table extends Component {
  constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = { //state is by default an object
      data: Data,
    }
  }

  renderTableData() {
    return this.state.data.map((data, index) => {
      const { mopItems } = data //destructuring

      return mopItems.map((mop, index) =>
        this.mop(mop)
      );
    })
  }


  mop(mop){

    console.log(mop.mopItems)

    this.mops = '';

    if (mop.mopItems){
      mop.mopItems.map((mopChild, index) => {
        this.mopComponent(mopChild)
      })
    }

    console.log(this.mopComponent(mop))
  }

  mopComponent(mop){
    return (
      <div
        key={mop.id}
        className='mopRow'
      >
        <h1>{mop.id}</h1>
      </div>
    )
  }


  mobChildren(){



  }


  render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
    return (
      <div>
        <div id='mop_table'>
          <div>
          {this.renderTableData()}
          </div>
        </div>
      </div>
    )
  }
}

export default Table //exporting a component make it reusable and this is the beauty of react