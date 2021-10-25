// Longitutes and Latitutes
let latitude = 22.7868542
let longitude = 88.3643296;

mapboxgl.accessToken = 'pk.eyJ1IjoiZGhhaXJ5YXJham1hbG9vMjgxMjA4IiwiYSI6ImNrdjZldG1uOTFia3kybm8wOHVud2Z0OG4ifQ.mhhsIkbcImiC4KfbFVJVRw';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 5
});

// Selecting all Images

var img1 = document.querySelector('#amber')
var img2 = document.querySelector('#gateway')
var img3 = document.querySelector('#gate')
var img5 = document.querySelector('#victoria')
var img4 = document.querySelector('#lotus')

// var map = document.querySelector("#map")

// Adding Markers

var marker1 = new mapboxgl.Marker({
    element: img1
})
    .setLngLat([75.85125952796238, 26.986059869852816])
    .addTo(map);


var marker2 = new mapboxgl.Marker({
    element: img2
})
    .setLngLat([72.83474008679661, 18.922714625569103])
    .addTo(map);


var marker3 = new mapboxgl.Marker({
    element: img3
})
    .setLngLat([77.22968132063244, 28.613815898366166])
    .addTo(map);


var marker4 = new mapboxgl.Marker({
    element: img4
})
    .setLngLat([77.25865469786645, 28.553793283581882])
    .addTo(map);


var marker5 = new mapboxgl.Marker({
    element: img5
})
    .setLngLat([88.34255775714644, 22.54524395573212])
    .addTo(map);


// adding controls
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);