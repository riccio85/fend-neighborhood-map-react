import React from 'react'

class ListView extends React.Component {

  state = {
    query:''
  }
/*Updates the state when user inputs the search query */
  updateQuery = (query) => {
    this.setState({ query: query })
  }

/*Clears the search query */
  clearQuery = () => {
    this.setState({ query: '' })
  }

/* Opens the InfoWindow */
  handleClick = (marker) => {
    this.props.openInfo(marker)
  }

/* Updates the markers to show on the page in parent component */
  updateMarkers =(places) => {
    this.props.updatePlaces(places)
  }

  render() {

    const { query } = this.state

    let showingPlaces

    if(query){
      const match = new RegExp((this.state.query),'i')
      //filter the places/marker to show on the map based on user search input
      showingPlaces = this.props.places.filter((place)=> match.test(place.name))
      this.updateMarkers(showingPlaces)
    } else {
      //if user didn't search then the map show all the places
      showingPlaces = this.props.places
      this.updateMarkers(showingPlaces)
    }

    return (
        <div className={this.props.menuStatus} id='menu'>
            <ul  role="menu" aria-labelledby="mainmenulabel" >
              <span id="mainmenulabel" className="visuallyhidden">Places list</span>
               <li>
                  <input type="text" placeholder="filter"
                    value={query}
                    onChange={ (event) => this.updateQuery(event.target.value)}
                    className="search-input"/>
               </li>
               {
                   showingPlaces.map((place,i) =>
                     <li key={i}  role="none" onClick={ () => this.handleClick(place.marker)} onKeyPress={ () => this.handleClick(place.marker)}  tabIndex="0">
                       <span role="menuitem">{place.name}</span>
                     </li>
                   )
               }
            </ul>
        </div>
    )
  }
}

export default ListView
