let map;

async function initMap() {
  const position = { lat: -25.344, lng: 131.031 };

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "df0d5421b2d94e45",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();