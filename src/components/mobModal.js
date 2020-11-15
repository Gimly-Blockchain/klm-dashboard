import React, {Component} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../scss/components/mobModal.scss'


class MobModal extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className="modal">
        <button className="close" onClick={this.props.close}>
          &times;
        </button>
        <div className="header">MOP details</div>
        <div className="content">
          {' '}
          <div className="row">
            <div className="col">
              <input type="text"/>
            </div>
            <div className="col">
              <input type="text"/>
            </div>
            <div className="col">
              <input type="text"/>
            </div>
          </div>
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button"> Add sub-MOP</button>}
            position="top center"
            nested
          >
            <span>
              creating new MOP...
            </span>
          </Popup>
          <Popup
            trigger={<button className="button"> Print label </button>}
            position="top center"
            nested
          >
            <span>
              Searching for printer...
            </span>
          </Popup>
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              this.props.close()
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )
  }
}

export default  MobModal;