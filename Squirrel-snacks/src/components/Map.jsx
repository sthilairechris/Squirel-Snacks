import React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
    width: '300px',
    height: '300px',
  };

  //Prop drilling - look up
function Map() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDWdLwjbWFS-F_LlywH39YUVDYQ117xPVQ',
        libraries,
      });
    
      if (loadError) {
        return <div>Error loading maps</div>;
      }
    
      if (!isLoaded) {
        return <div>Loading maps</div>;
      }
    const center = {
        lat: 35.8104362487793, // default latitude
        lng: -78.702392578125, // default longitude
      };
      
      return (
        <div>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={center}
          >
            <Marker position={center} />
          </GoogleMap>
        </div>
      );
}

export default Map