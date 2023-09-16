
import React, { useEffect, useState } from 'react';
import mapboxgl, { Marker } from 'mapbox-gl';
import { SearchBox } from '@mapbox/search-js-react';

var token = 'pk.eyJ1IjoiZGhydXZjNzciLCJhIjoiY2xtbDEzY3NnMDc1aDJqcGdzZnk5eTQ0ZSJ9._pO069NGf3DrLP5x1Bhz9Q'
mapboxgl.accessToken = token
const MapboxMap = () => {
    const [map, setmap] = useState(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [72.8777, 19.0760], // starting position [lng, lat]
            zoom: 11, // starting zoom
        });

        const marker1 = new mapboxgl.Marker()
            .setLngLat([12.554729, 55.70651])
            .addTo(map);

        // Create a default Marker, colored black, rotated 45 degrees.
        const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
            .setLngLat([12.65147, 55.608166])
            .addTo(map);

        setmap(map);
        // Clean up the map when the component unmounts
        return () => map.remove();
    }, []);

    return (
        <div className='h-full'>
            <SearchBox accessToken={token}
                map={map}
            />

            <div id="map" style={{ width: '1600px', height: '700px' }}></div>

        </div>



    );
};

export default MapboxMap;


