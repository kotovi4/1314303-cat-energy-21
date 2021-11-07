const map = L.map('map')
  .on('load', () => {
    console.log('Карта инициализирована');
  })
  .setView({
    lat: 59.938635,
    lng: 30.323118
  }, 15);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/map-pin.svg',
  iconSize: [113, 106],
  iconAnchor: [60.5, 106],
});

const marker = L.marker(
  {
    lat: 59.938635,
    lng: 30.323118
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

marker.on('moveend', (evt) => {
  console.log(evt.target.getLatLng());
});

marker.addTo(map);

resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng({
    lat: 59.938635,
    lng: 30.323118
  });

  map.setView({
    lat: 59.938635,
    lng: 30.323118
  }, 15);
});
