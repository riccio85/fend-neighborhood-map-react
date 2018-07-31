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

 const foursquareClientId = "DOMO5PTUBPLCTFIPF210EDB5KXIHJTGHBEIQJOCJTN5KRDWI";
 const foursquareSecret = "SC25BEFM21RMYT15UDPD23XNAWOIAPGOR440YRED1LZHKXMH";
 const getFoursquareUrl = (lat,lng) => {
     return "https://api.foursquare.com/v2/venues/search?client_id=" +
     foursquareClientId +
     "&client_secret=" +
     foursquareSecret +
     "&v=20130815&ll=" +
     lat +  "," + lng +  "&limit=1";
 }

 /**
  * Retrive the location data from the foursquare api
  */
export const getMarkerFoursquareInfo = (marker) => {
  const self = this;
  // Build the Foursquare api endpoint
  const url = getFoursquareUrl(marker.getPosition().lat(),marker.getPosition().lng());
  return fetch(url);
}

export const getFoursquareFormattedData = (data) => {
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
    return place + street + contact + checkinsCount + readMore;
}

export const mapCustomStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
]
