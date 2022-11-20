/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const rochester = { lat: 43.157, lng: -77.609 };
    // The map, centered at rochester
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: rochester,
    });
    // The marker, positioned at rochester
    const marker = new google.maps.Marker({
      position: rochester,
      map: map,
    });
  }


  window.onload=function(){
    const menu = document.querySelector("#menu-btn");
    const nav = document.querySelector(".mobile-nav");
  
    
    function mobileMenu() {
      menu.classList.add("show");
      nav.classList.toggle("show");
      
    }
    
  
    menu.addEventListener("click", mobileMenu);
  }

 
  window.initMap = initMap;
  


  