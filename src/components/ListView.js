import React from 'react'

class ListView extends React.Component {

  render() {
    let links = this.props.places.map((link, i) =>
          <li key={i}>
            <i className={`fa ${ link.icon }`}></i>
            <a href={link.link} target="_blank">{link.name}</a>
          </li>
    )

    return (
        <div className={this.props.menuStatus} id='menu'>
            <ul>
               { links }
            </ul>
        </div>
    )
  }
}

export default ListView
