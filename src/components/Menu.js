import React from 'react'
import ListView from './ListView'

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this._menuToggle = this._menuToggle.bind(this);
    // this._handleDocumentClick = this._handleDocumentClick.bind(this);
  }
  componentDidMount() {
    document.addEventListener('click', this._handleDocumentClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this._handleDocumentClick, false);
  }
  _handleDocumentClick(e) {
    // if (!this.refs.root.contains(e.target) && this.state.isOpen === true) {
    //   this.setState({
    //   isOpen: false
    // });
    // };
  }
  _menuToggle(e) {
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
            <div className="menu-icon" onClick={ this._menuToggle }></div>
            <div id="hambmenu" className={ menuStatus }>
                <span></span> <span></span> <span></span> <span></span>
            </div>
            <div className="title">
              <span>{ this.props.title }</span>
            </div>
          </div>
          <ListView menuStatus={ menuStatus } places={ this.props.places } />
        </div>
    )
  }
}

export default Menu
