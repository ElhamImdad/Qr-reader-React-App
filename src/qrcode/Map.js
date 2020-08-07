import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { withGoogleMap, GoogleMap, Marker } from 'google-map-react';
import { InfoWindow } from 'google-map-react';
//import Geolocation from 'react-geolocation';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: { lat: 21.40842719151758 , lng: 39.81367113921764 },
    zoom: 15
  };

  constructor(props) {
    super(props);

    this.state = props;
    //  lat= this.state.Lat;
    //  lng= this.state.Lag;
  }

  // geoSuccess = position => {
  //   //console.log("position.coords.latitude: ", position.coords.latitude);
  //   //console.log("position.coords.longitude: ", position.coords.longitude);
    
  //   let coords = {
  //     lat: 21.40842719151758,
  //     lng: 39.81367113921764
  //   }
    
  //   this.setState({
  //     center: coords
  //   })
  // };

  render() {
    console.log(this.state.center);
    console.log(this.state.zoom);

    const Marker = () => (
      <img
        src={
          "http://icons.iconarchive.com/icons/paomedia/small-n-flat/256/map-marker-icon.png"
        }
        alt="MyPin"
      />
    );
    return (
      // <Geolocation
      //   onSuccess={this.geoSuccess}
      //   render={({
      //     fetchingPosition,
      //     position: { coords: { latitude, longitude } = {} } = {},
      //     error,
      //     getCurrentPosition
      //   }) => (
          <div>
            {/* <button onClick={getCurrentPosition}>Get Position</button>
            {error && <div>{error.message}</div>} */}
            <pre>
              latitude: {this.state.Lat}
              longitude: {this.state.Lag}
            </pre>
            <div
              //className="google-map"
              style={{ height: "80vh", width: "100%" }}
            >
              <GoogleMapReact
                  bootstrapURLKeys={{
                  key: 'AIzaSyDZ6LLCf_H_2jGMjh3oxB75j-lhUUel52A' }}
                  center={this.state.center}
                  zoom={this.state.zoom}
              >
                <AnyReactComponent
                  // lat={21.40842719151758}
                  // lng={39.81367113921764}
                  // name={"--"}
                />
                {/* <Marker lat={21.40842719151758} lng={39.81367113921764} /> */}
              </GoogleMapReact>
            </div>
          </div>
      //  )}
      // />
    );
  }
}


// const MyMapComponent = withGoogleMap((props) =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: props.cordLat, lng: props.cordLng }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: props.cordLat, lng: props.cordLng  }} />}
//   </GoogleMap>
// )
// const Map = (props) => {
//     //  defaultProps = {
//     //     center: {
//     //       lat: 59.95,
//     //       lng: 30.33
//     //     },
//     //     zoom: 11
//     //   };
//     const AnyReactComponent = ({ text }) => <div>{text}</div>;
//     return (
//         <div style={{ height: '100vh', width: '100%' }}>
//             <GoogleMap
//                // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
//                 // defaultCenter={this.props.center}
//                 // defaultZoom={this.props.zoom}
//                 defaultCenter={{lat: 59.95,lng: 30.33}}
//                 defaultZoom={11}
//             >
//                 {/* <AnyReactComponent
//                  lat={59.955413}
//                  lng={30.337844}
//                 text="Your place"
//                 /> */}
//                 <h2>{props.place}</h2>
//             </GoogleMap>
//             </div>
//     );
// }

export default Map;