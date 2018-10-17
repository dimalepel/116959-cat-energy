// Активация мобильного меню
var pageHeaderTop = document.querySelector(".page-header__top");
var menuToggle = document.querySelector(".page-header__menu-toggle");

if (menuToggle) {
  menuToggle.classList.remove("page-header__menu-toggle--hidden");
  pageHeaderTop.classList.add("page-header__top--main-nav-closed");

  menuToggle.addEventListener("click", function () {
    pageHeaderTop.classList.toggle("page-header__top--main-nav-opened");
    pageHeaderTop.classList.toggle("page-header__top--main-nav-closed");
  })
};

// Яндекс-карта
ymaps.ready(init);
var myMap, myPlacemark, phoneImageSize, phoneImageOffset, clientWidth, centerMap, zoomMap;
function init(){
  clientWidth = document.documentElement.clientWidth;
  if(clientWidth < 768) {
    centerMap = [59.938778, 30.323197];
    phoneImageSize = [62, 53];
    phoneImageOffset = [-31, -53];
  } else {
    phoneImageSize = [113, 106];
    phoneImageOffset = [-51, -106];
  }
  if(clientWidth < 1300) {
    centerMap = [59.938778, 30.323197];
    zoomMap = 17;
  } else {
    centerMap = [59.938818, 30.315597];
    zoomMap = 16;
  }
  myMap = new ymaps.Map("map", {
    center: centerMap,
    zoom: zoomMap,
    controls: []
  });
  myPlacemark = new ymaps.Placemark([59.938778, 30.323197], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/map-pin.png',
    iconImageSize: phoneImageSize,
    iconImageOffset: phoneImageOffset
  });
  myMap.geoObjects.add(myPlacemark);
};
