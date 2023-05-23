// $(document).bind( 'heading-arrow', function (e) { 
//   const headingArrow = $(document.body).scrollTop()-(e.deltaY*e.deltaFactor*100); 
//   e.preventDefault(); 
//   e.stopPropagation(); 
//   $(document.body).stop().animate( { 
//        scrollTop : nt 
//    } , 500 , 'easeInOutCubic' );  
// } )

// let slides = document.querySelectorAll('.slide');
//     let navigationItems = document.querySelectorAll('.navigation-item');

//     function showSlide(index) {
//       for (var i = 0; i < slides.length; i++) {
//         slides[i].classList.remove('active');
//         navigationItems[i].classList.remove('active');
//       }

//       slides[index].classList.add('active');
//       navigationItems[index].classList.add('active');
//     }
// // Initialize and add the map
// function initMap(): void {
//   // The location of Uluru
//   const uluru = { lat: -25.344, lng: 131.031 };
//   // The map, centered at Uluru
//   const map = new google.maps.Map(
//     document.getElementById("map") as HTMLElement,
//     {
//       zoom: 4,
//       center: uluru,
//     }
//   );

//   // The marker, positioned at Uluru
//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//   });
// }

// declare global {
//   interface Window {
//     initMap: () => void;
//   }
// }
// window.initMap = initMap;



// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
    // mapID: 97e2a5d75405ae11
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;
