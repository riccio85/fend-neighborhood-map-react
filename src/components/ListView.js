import React from 'react'
import escapeRegExp from 'escape-string-regexp'

class ListView extends React.Component {

  state = {
    query:''
  }

  updateQuery = (query) => {
    this.setState({ query: query })
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  handleClick = (marker) => {
    this.props.openInfo(marker)
  }

  updateMarkers =(places) => {
    this.props.updatePlaces(places)
  }

  render() {

    const { query } = this.state

    let showingPlaces

    if(query){
      const match = new RegExp((this.state.query),'i')
      showingPlaces = this.props.places.filter((place)=> match.test(place.name))
      this.updateMarkers(showingPlaces)
    } else {
      showingPlaces = this.props.places
    }

    return (
        <div className={this.props.menuStatus} id='menu'>
            <ul aria-labelledby="mainmenulabel">
              <span id="mainmenulabel" className="visuallyhidden">Places list</span>
               <li>
                  <input type="text" placeholder="filter"
                    value={query}
                    onChange={ (event) => this.updateQuery(event.target.value)}
                    className="search-input"/>
               </li>
               {
                   showingPlaces.map((place,i) =>
                     <li key={i} onClick={ () => this.handleClick(place.marker)}>
                       <span>{place.name}</span>
                     </li>
                   )
               }
            </ul>
        </div>
    )
  }
}

export default ListView
