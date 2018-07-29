import React from 'react'
import ListView from './ListView'

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.menuToggle = this.menuToggle.bind(this);
  }

  menuToggle(e) {
    e.stopPropagation();
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let menuStatus = this.state.isOpen ? 'isopen' : '';

    return (
    <div ref="root">
          <div className="menubar">
            <div className="menu-icon" onClick={ this.menuToggle } tabIndex="0" ></div>
            <div id="hambmenu" className={ menuStatus } >
                <span></span> <span></span> <span></span> <span></span>
            </div>

            <div className="title">
              <span>{ this.props.title }</span>
            </div>
          </div>
          <ListView menuStatus={ menuStatus }
            places={ this.props.places }
            openInfo = { this.props.openInfo}
            updatePlaces = {this.props.updatePlaces}/>

            />
        </div>
    )
  }
}

export default Menu
