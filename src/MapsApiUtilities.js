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
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]
