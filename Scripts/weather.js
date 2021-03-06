// Api token zetten
mapboxgl.accessToken = 'pk.eyJ1Ijoibmlja3RhbmloYXR1IiwiYSI6ImNrOGs1NXM3NDAxeXozbm5rY2hnbDhrNTEifQ.xoKLjZVxmLUYA4pnfsQICw';

// De kaart implementeren incl. beginpunt met zoom
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [21.242447, -28.453630],
zoom: 14
});
 
// De kaart opmaken 
map.on('load', function() {
map.addSource('places', {
'type': 'geojson',
'data': {
'type': 'FeatureCollection',
'features': [
{
'type': 'Feature',
'properties': {
'description':
'<strong>Make it Mount Pleasant</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
'icon': 'theatre'
},
'geometry': {
'type': 'Point',
'coordinates': [-77.038659, 38.931567]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Mad Men Season Five Finale Watch Party</strong><p>Head to Lounge 201 (201 Massachusetts Avenue NE) Sunday for a <a href="http://madmens5finale.eventbrite.com/" target="_blank" title="Opens in a new window">Mad Men Season Five Finale Watch Party</a>, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar.</p>',
'icon': 'theatre'
},
'geometry': {
'type': 'Point',
'coordinates': [-77.003168, 38.894651]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Big Backyard Beach Bash and Wine Fest</strong><p>EatBar (2761 Washington Boulevard Arlington VA) is throwing a <a href="http://tallulaeatbar.ticketleap.com/2012beachblanket/" target="_blank" title="Opens in a new window">Big Backyard Beach Bash and Wine Fest</a> on Saturday, serving up conch fritters, fish tacos and crab sliders, and Red Apron hot dogs. 12:00-3:00 p.m. $25.grill hot dogs.</p>',
'icon': 'bar'
},
'geometry': {
'type': 'Point',
'coordinates': [-77.090372, 38.881189]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Ballston Arts & Crafts Market</strong><p>The <a href="http://ballstonarts-craftsmarket.blogspot.com/" target="_blank" title="Opens in a new window">Ballston Arts & Crafts Market</a> sets up shop next to the Ballston metro this Saturday for the first of five dates this summer. Nearly 35 artists and crafters will be on hand selling their wares. 10:00-4:00 p.m.</p>',
'icon': 'art-gallery'
},
'geometry': {
'type': 'Point',
'coordinates': [-77.111561, 38.882342]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Seersucker Bike Ride and Social</strong><p>Feeling dandy? Get fancy, grab your bike, and take part in this year\'s <a href="http://dandiesandquaintrelles.com/2012/04/the-seersucker-social-is-set-for-june-9th-save-the-date-and-start-planning-your-look/" target="_blank" title="Opens in a new window">Seersucker Social</a> bike ride from Dandies and Quaintrelles. After the ride enjoy a lawn party at Hillwood with jazz, cocktails, paper hat-making, and more. 11:00-7:00 p.m.</p>',
'icon': 'bicycle'
},
'geometry': {
'type': 'Point',
'coordinates': [-77.052477, 38.943951]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Capital Pride Parade</strong><p>The annual <a href="http://www.capitalpride.org/parade" target="_blank" title="Opens in a new window">Capital Pride Parade</a> makes its way through Dupont this Saturday. 4:30 p.m. Free.</p>',
'icon': 'rocket'
},
'geometry': {
'type': 'Point',
'coordinates': [-77.043444, 38.909664]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Muhsinah</strong><p>Jazz-influenced hip hop artist <a href="http://www.muhsinah.com" target="_blank" title="Opens in a new window">Muhsinah</a> plays the <a href="http://www.blackcatdc.com">Black Cat</a> (1811 14th Street NW) tonight with <a href="http://www.exitclov.com" target="_blank" title="Opens in a new window">Exit Clov</a> and <a href="http://godsilla.bandcamp.com" target="_blank" title="Opens in a new window">Gods’illa</a>. 9:00 p.m. $12.</p>',
'icon': 'music'
},
'geometry': {
'type': 'Point',
'coordinates': [-77.031706, 38.914581]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>A Little Night Music</strong><p>The Arlington Players\' production of Stephen Sondheim\'s  <a href="http://www.thearlingtonplayers.org/drupal-6.20/node/4661/show" target="_blank" title="Opens in a new window"><em>A Little Night Music</em></a> comes to the Kogod Cradle at The Mead Center for American Theater (1101 6th Street SW) this weekend and next. 8:00 p.m.</p>',
'icon': 'music'
},
'geometry': {
'type': 'Point',
'coordinates': [-77.020945, 38.878241]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Truckeroo</strong><p><a href="http://www.truckeroodc.com/www/" target="_blank">Truckeroo</a> brings dozens of food trucks, live music, and games to half and M Street SE (across from Navy Yard Metro Station) today from 11:00 a.m. to 11:00 p.m.</p>',
'icon': 'music'
},
'geometry': {
'type': 'Point',
'coordinates': [-77.007481, 38.876516]
}
}
]
}
});
// Een laag toevoegen met de plaatsen
map.addLayer({
'id': 'places',
'type': 'symbol',
'source': 'places',
'layout': {
'icon-image': '{icon}-15',
'icon-allow-overlap': true
}
});
 
map.on('click', 'places', function(e) {
var coordinates = e.features[0].geometry.coordinates.slice();
var description = e.features[0].properties.description;
 
// Kaart zodanig uitzoomen dat meerdere eigenschappen te zien zijn
while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
}
 
new mapboxgl.Popup()
.setLngLat(coordinates)
.setHTML(description)
.addTo(map);
});
 
// Wanneer je op de kaart bent, de cursor veranderen in een hand icoontje
map.on('mouseenter', 'places', function() {
map.getCanvas().style.cursor = 'pointer';
});
 
// Het hand icoontje terug veranderen in de cursor, wanneer je de kaart verlaat
map.on('mouseleave', 'places', function() {
map.getCanvas().style.cursor = '';
});
});

// Zoekfunctie kaart
map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
  })
);

// De constante genaamd api de apikey en afkomst als waarden geven
const api = {
  key: "379797c7595b3c8aa42f614b8c99aee4",
  base: "https://api.openweathermap.org/data/2.5/"
}

// De constante genaamd searchbox linken met de html class .search-box
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

// Resultaat opvragen van de stadnaam in de zoekfunctie
function setQuery(evt) {
	if (evt.keyCode == 13) {
	getResults(searchbox.value);
	}
}

// Resultaat van het weer opvragen met fetch (manipuleren van het systeem)
function getResults (query) {
	fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
    return weather.json();
    }).then(displayResults);
}

// Functie dat gegevens opvraagt van de gevraagde locatie
function displayResults (weather) {
	let city = document.querySelector('.location .city');
	city.innerText = `${weather.name}, ${weather.sys.country}`;

// Datum
	let now = new Date();
	let date = document.querySelector('.location .date');
	date.innerText = dateBuilder(now);

// Temperatuur in celsius
	let temp = document.querySelector('.current .temp');
	temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

// Eigenschap van het weer
	let weather_el = document.querySelector('.current .weather');
	weather_el.innerText = weather.weather[0].main;

// Marges van temperatuur
	let hilow = document.querySelector('.hi-low');
	hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}

// Functie dat de huidige datum plaatst
function dateBuilder (d) {
	let months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
	let days = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];

	let day = days[d.getDay()];
	let date = d.getDate();
	let month = months[d.getMonth()];
	let year = d.getFullYear();
	return `${day} ${date} ${month} ${year}`;
}

var slideIndex = 0;
showSlides();

// Functie dat ervoor zorgt dat elke 2 seconde de afbeelding veranderd
function showSlides() {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
  
 // Na 2 seconde gaat de index naar de volgende -> overige worden gedisplay blocked
slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}