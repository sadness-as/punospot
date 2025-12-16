const map = L.map("map").setView([-15.8402, -70.0219], 13);

let y=L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors"
}).addTo(map);

L.marker([-15.8402, -70.0219])
  .addTo(map)
  .bindPopup("<b>Puno</b><br>Lago Titicaca")
  .openPopup();