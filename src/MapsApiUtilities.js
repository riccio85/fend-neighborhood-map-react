const API_KEY = 'AIzaSyAnVk1yQzOQbKeSAExms-eu2q_6y2xsK00';
const googleMapsSrc = 'https://maps.googleapis.com/maps/api/js?key='+API_KEY+'&callback=initMap';

/**
 * Load the google maps Asynchronously
 * @param {url} url of the google maps script
 */
export const loadMapScript = () => {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = googleMapsSrc;
    script.async = true;
    script.onerror = function () {
        document.write("Google Maps can't be loaded");
    };
    ref.parentNode.insertBefore(script, ref);
}

/**
 * Retrive the location data from the foursquare api
 */

 // Add the api keys for foursquare
 const foursquareClientId = "DOMO5PTUBPLCTFIPF210EDB5KXIHJTGHBEIQJOCJTN5KRDWI";
 const foursquareSecret = "SC25BEFM21RMYT15UDPD23XNAWOIAPGOR440YRED1LZHKXMH";
 const getFoursquareUrl = (lat,lng)=>{
     return "https://api.foursquare.com/v2/venues/search?client_id=" +
     foursquareClientId +
     "&client_secret=" +
     foursquareSecret +
     "&v=20130815&ll=" +
     lat +  "," + lng +  "&limit=1";
 }

export const getMarkerFoursquareInfo = (marker) => {
  const self = this;
  // Build the Foursquare api endpoint
  const url = getFoursquareUrl(marker.getPosition().lat(),marker.getPosition().lng());

  fetch(url).then(response => {
    if (response.status !== 200) {
      return Promise.reject(Error('error'));
    }
    // Get the response data
    response.json().then(function(data) {
        console.log(data);
        var location_data = data.response.venues[0];
        var place = `<h3>${location_data.name}</h3>`;
        var street = `<p>${location_data.location.formattedAddress[0]}</p>`;
        var contact = "";
        if (location_data.contact.phone)
          contact = `<p><small>${location_data.contact.phone}</small></p>`;
        var checkinsCount =
          "<b>Number of CheckIn: </b>" +
          location_data.stats.checkinsCount +
          "<br>";
        var readMore =
          '<a href="https://foursquare.com/v/' +
          location_data.id +
          '" target="_blank">Read More on <b>Foursquare Website</b></a>';
          return Promise.resolve(
            place + street + contact + checkinsCount + readMore
          );

    });
    return Promise.reject(Error('error'))
  }).catch(error => {
    return Promise.reject(Error(error.message))
  })
}
