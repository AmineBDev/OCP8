import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React from 'react';

const Map = () => {

    const mapStyle = {
        width: '600px',
        height: '450px'
    };

    const center = {
        lat: 47.2184,
        lng: -1.5536
    };

    return (
        <LoadScript googleMapsApiKey='AIzaSyAVKFXbMcLIGNY_A5EUyBlbAEd2A_2oqJI'>
            <GoogleMap
                mapContainerStyle={mapStyle}
                center={center}
                zoom={12}></GoogleMap>
        </LoadScript>
    );
};

export default Map;