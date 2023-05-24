function initMap() {
   const uluru = { lat: -25.344, lng: 131.031 };
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
    mapID: "df0d5421b2d94e45"
  });
  new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;
