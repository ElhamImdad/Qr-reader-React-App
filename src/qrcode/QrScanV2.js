import React, { Component } from 'react';
import QrReader from 'react-qr-scanner'
import GoogleMapReact from 'google-map-react';
import Map from './Map';

class QrScan extends Component {
  static defaultProps = {
    center: { lat: 21.40842719151758 , lng: 39.81367113921764 },
    zoom: 15
  };
    constructor(props){
        super(props)
        this.state = {
          delay: 300,
          result: 'No result',
          lag: '',
          lat: '',
          place:'',
          showMap: false
        }
    
        this.handleScan = this.handleScan.bind(this)
      }
      
    places = [
        {name: "Alnahdi", latitude: "21.391239", longitude: "39.884621", id:"a12345"}
        // {name: "Alnahdi", latitude: "21.391239", longitude: "39.884621", id:"a12345"}
    ]
    handleScan(data){
      if (data && data!==this.state.result){
        let center = {
              lat: this.state.place.latitude,
              lng: this.state.place.longitude
            }
        this.setState({
          result: data,
        })
        this.setState({
          place:this.places.find(placeID => placeID.id === data)
        })
        this.setState({
          center:center

        })
        window.open(`https://maps.google.com/maps?q=${this.state.place.latitude},${this.state.place.longitude}`, "_blank")
      }
      
  
    }
    handleError(err){
      console.error(err)
    }

    toggleMapsHandler = ()=>{
      const doseShow = this.state.showMap;
      this.setState({showMap: !doseShow});
    }
   //  timer = null;
  
  // componentDidMount() {
  //   setTimeout(() => 

  //   this.state.place.longitude !==null?
  //                   (<div>
  //                     <pre>
  //                       latitude: {this.state.place.latitude}
  //                       longitude: {this.state.place.longitude}
  //                     </pre>
  //                     <div
  //                       className="google-map"
  //                       style={{ height: "80vh", width: "100%" }}
  //                     >
  //                       <GoogleMapReact
  //                           bootstrapURLKeys={{
  //                           key: 'AIzaSyDZ6LLCf_H_2jGMjh3oxB75j-lhUUel52A' }}
  //                           center={this.state.center}
  //                           zoom={this.state.zoom}>
  //                       </GoogleMapReact>
  //                     </div>
  //                   </div>)
  //                    :null
  //   , 3000)
  // }
  
  // componentWillUnmount() {
  //   clearTimeout(this.timer);
  // }
    render() {
        const previewStyle = {
            height: 300,
            width: 320,
        }

        console.log(this.state.place);
        if (this.state.place!=null){
         // console.log(this.state.place.longitude);
          // this.setState({lag: place.longitude,});
          // this.setState({lat: place.latitude,});
        }
        return (
            <div>
              <div>
                <QrReader
                  delay={this.state.delay}
                  style={previewStyle}
                  onError={this.handleError}
                  onScan={this.handleScan}
                  time={this.setTimeout}
                />
              </div>
                {/* <p>{this.state.result}</p> */}
                {/* Check if longtiude not null 
                @return <p/>
                */}
                {
                  this.state.place.longitude !==null ? 
                 <p>{this.state.place.longitude}</p>:
                 null

                }
                <p>{this.state.place.latitude!==null ? this.state.place.latitude : ""}</p>
               
              
            
                {/* <div>
                  {
                    this.state.place.longitude !==null?
                    <App style={{ height: '80vh', width: '100%' }}
                      Lat={this.state.place.latitude}
                      Lag={this.state.place.longitude}/>
                     :null
                  }
                </div> */}

                <div>
                  {
                    this.state.place.longitude !==null?
                    (<div>
                      <pre>
                        latitude: {this.state.place.latitude}
                        longitude: {this.state.place.longitude}
                      </pre>

                      
                    </div>)
                     :null
                  }
                </div>
                {
                  // this.state.center !==null ?
                  //   <div
                  //     style={{ height: "80vh", width: "100%" }}
                  //   >
                  //     {/* <GoogleMapReact
                  //         bootstrapURLKeys={{
                  //         key: 'AIzaSyDZ6LLCf_H_2jGMjh3oxB75j-lhUUel52A' }}
                  //         center={this.state.center}
                  //         zoom={this.state.zoom}>
                  //     </GoogleMapReact> */}
                  //    {/* window.open(https://www.google.com/maps/@${this.state.place.longitude},${this.state.place.latitude},15z, "_blank") */}
                  //   </div>:null
                }
                
            </div>
        );
    }
}

export default QrScan;