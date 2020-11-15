import React, {Component} from 'react';
import styled from 'styled-components';
import Mop from './mop';
const StyledWrapper = styled.div`
    margin-left: ${props => `${props.level * 30}px`};
`

export default class Table extends Component {

  hasChildren(mop) {
    return mop.mopItems && mop.mopItems.length;
  }

  render() {
    const level = this.props.level || 0;
    return <div className={'mopGroupContainer'}>
      <StyledWrapper level={level}>
        {this.props.data.map((mop, i) => {
          return <div
            key={`level-${level}-${i}`}
          >
            <Mop {...mop} />
            {this.hasChildren(mop) && <Table data={mop.mopItems} level={level + 1}/>}
          </div>
        })}
      </StyledWrapper>
    </div>
  }
}


