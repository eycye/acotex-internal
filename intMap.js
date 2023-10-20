// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'index.html', true);
// xhr.send();

// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4) {
//         if (xhr.status == 200) {
//             console.log('Successfully loaded index.html');
//         } else {
//             console.error('Failed to load index.html. Status: ' + xhr.status);
//         }
//     }
// };

mapboxgl.accessToken = 'pk.eyJ1IjoiZXljeWUiLCJhIjoiY2xtYm41YjM3MTBlbjN2bXNkM3JnaWgzdyJ9.9La4BJbd6ir5ojji4NwEuA'; // Replace with your access token
    const map = new mapboxgl.Map({
        container: 'map', // Specify the container ID
        style: 'mapbox://styles/mapbox/streets-v12', // Use a Mapbox style
        center: [-98, 31], // Center the map around Texas
        zoom: 6 // Set an initial zoom level
    });

    // Add interactivity code here
    
map.on('load', function () {
    map.resize();
    // Add a GeoJSON source
    map.addSource('warehouses', {
        type: 'geojson',
        data: 'map.geojson' // Replace with your data source
    });

    // Add a layer to display the warehouses
    map.addLayer({
        id: 'warehouses-layer',
        type: 'circle',
        source: 'warehouses',
        paint: {
            'circle-radius': 6,
            'circle-color': 'blue'
        }
    });
});

map.on('click', 'warehouses-layer', function (e) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    var description = e.features[0].properties.description;

    // Ensure that if the map is zoomed out, the pop-up displays at a readable size
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);
});

// Change the cursor to a pointer when the mouse is over the warehouses layer
map.on('mouseenter', 'warehouses-layer', function () {
    map.getCanvas().style.cursor = 'pointer';
});

// Change it back to the default cursor when it leaves
map.on('mouseleave', 'warehouses-layer', function () {
    map.getCanvas().style.cursor = '';
});
