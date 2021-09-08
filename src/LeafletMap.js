import React, {Component} from 'react';

//import bibliotek leaflet
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
//import danych

//naprawa zwalonych ikonek
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
            iconUrl: icon,
            shadowUrl: iconShadow
        });
        L.Marker.prototype.options.icon = DefaultIcon;

class LeafletMap extends Component {
  componentDidMount() {
    // create map
    this.map = L.map('map', {
      center: [52.29756190868707,21.250407],
      zoom: 1,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
    
    //obiekt geojson przepisany do zmiennej
    let geodata = this.props.obiekty; // tak odwołuję się do obiektu który jest wysłany przez rodzica
      
    this.layerMarkers=L.geoJSON(geodata , {
        
      }
      ).addTo(this.map);

  } //koniec Component didMount

    updateMarkers(markersData) {
     this.layerMarkers.clearLayers();
     this.layerMarkers = L.geoJSON(markersData , {
          pointToLayer: function (feature, latlng) 
            {//wstawia marker w postaci okręgu
              return L.circleMarker(latlng, 
              ).bindPopup(feature.properties.description.name);
              }
        }
        ).addTo(this.map);
    }

    componentDidUpdate({obiekty, geodata}) {
    // check if data has changed -->> sprawdzam co sie zmieniło w danych i wyzwalam funkcję
        if (this.props.obiekty !== geodata) {  
          this.updateMarkers(this.props.obiekty);
        }
    }//koniec componetdidupdate

  render() {
    return <div className='fl w-75 pa2 vh-100' id="map"></div>
  }
}
export default LeafletMap;