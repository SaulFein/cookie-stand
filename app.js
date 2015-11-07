var times = ['10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', 'Total'];
var tbl = document.createElement('table');
var locations = [];
var tableSpot = document.getElementById('tablespot');

function CookieStand(storeLocation, minCustHr, maxCustHr, avgCookPerCust){
  this.storeLocation = storeLocation;
  this.minCustHr = minCustHr;
  this.maxCustHr = maxCustHr;
  this.avgCookPerCust = avgCookPerCust;
  this.hourlyTotals = [];
  this.dailyTotal = 0;
  locations.push(this); //taking the object and pushing it into an array. (this refers to the object)

  this.calcRandHrlyCust = function(){
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
  }

  this.calcTotalPerHr = function(){
    return Math.ceil(this.calcRandHrlyCust() * this.avgCookPerCust);
  }

  this.getTotalsPerHr = function(){
    for (var i = 0; i < times.length; i++) {
      this.hourlyTotals[i] = this.calcTotalPerHr();
      this.dailyTotal += this.hourlyTotals[i];
    }
  }

  this.display = function(){
    var trElement2 = document.createElement('tr');
    var thStoreName = document.createElement('th');
    thStoreName.textContent = this.storeLocation;
    trElement2.appendChild(thStoreName);
    for (var i = 0; i < times.length; i++) {
      var tdElement1 = document.createElement('td');
      tdElement1.textContent = this.hourlyTotals[i];
      trElement2.appendChild(tdElement1);
    }
    tdElement1.textContent = this.dailyTotal;
    trElement2.appendChild(tdElement1);
    tbl.appendChild(trElement2);
    // document.body.appendChild(tbl);
    tablespot.appendChild(tbl);
  }

  this.renderAll = function(){
    this.calcRandHrlyCust();
    this.calcTotalPerHr();
    this.getTotalsPerHr();
    this.display();
  }
}

var setUpTable = function(){
  var trElement = document.createElement('tr');
  var tdLocation = document.createElement('th');
  tdLocation.textContent = ('Location');
  trElement.appendChild(tdLocation);
  tbl.appendChild(trElement);
  for (var i = 0; i < times.length; i++) {
    var thElement = document.createElement('th');
    thElement.textContent = times[i];
    trElement.appendChild(thElement);
  }
}

var pikePlace = new CookieStand ("Pike Place", 17, 88, 5.2);
var seaTac = new CookieStand ("Sea Tac", 8, 44, 1.2);
var southCenter = new CookieStand ("South Center", 11, 38, 1.9);
var bellevue = new CookieStand ("Bellevue Square", 20, 48, 3.3);
var alki = new CookieStand ("Alki", 3, 24, 2.6);

setUpTable();

function displayAllLocations(){
for (var i = 0; i < locations.length; i++) {
    locations[i].renderAll();
  }
  // document.body.appendChild(tbl);
  tablespot.appendChild(tbl);
}

displayAllLocations();

var locationForm = document.getElementById('locationform');
var locName = document.getElementById('locname');
var minCust = document.getElementById('mincust');
var maxCust = document.getElementById('maxcust');
var avgCook = document.getElementById('avgcook');

var handleNewShopSubmit = function(event){
  event.preventDefault();

  var storeLocation = event.target.locname.value;
  var minCustHr = event.target.mincust.value;
  var maxCustHr = event.target.maxcust.value;
  var avgCookPerCust = event.target.avgcook.value;

  var newShop = new CookieStand(storeLocation, minCustHr, maxCustHr, avgCookPerCust);

  console.log('New shop ' + event.target.locname.value);

  newShop.renderAll();
}

locationForm.addEventListener('submit', handleNewShopSubmit);

function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: new google.maps.LatLng(47.606662, -122.331107),
          zoom: 10,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var pikePlaceLatLng = {lat: 47.609648, lng: -122.342172};
        var seaTacLatLng = {lat: 47.450366, lng: -122.308795};
        var southCenterLatLng = {lat: 47.458288, lng: -122.258630};
        var bellevueLatLng = {lat: 47.615508, lng: -122.203617};
        var alkiLatLng = {lat: 47.574784, lng: -122.408822};

        var iconBase = 'img/';

        function addMarker(feature) {
          var marker = new google.maps.Marker({
          position: feature.position,
          icon: icons[feature.type].icon,
          map: map
          });
        }

        var map = new google.maps.Map(mapCanvas, mapOptions)
        var pikePlaceMarker = new google.maps.Marker({
          position: pikePlaceLatLng,
          map: map,
          icon: 'img/smallcook.png',
          title: 'Pike Place!'
        });
        var seaTacMarker = new google.maps.Marker({
          position: seaTacLatLng,
          map: map,
          icon: iconBase + 'smallcook.png',
          title: 'Sea Tac!'
        });
        var southCenterMarker = new google.maps.Marker({
          position: southCenterLatLng,
          map: map,
          icon: iconBase + 'smallcook.png',
          title: 'Southcenter Mall!'
        });
        var bellevueMarker = new google.maps.Marker({
          position: bellevueLatLng,
          map: map,
          icon: iconBase + 'smallcook.png',
          title: 'Bellevue Square Mall!'
        });
        var alkiMarker = new google.maps.Marker({
          position: alkiLatLng,
          map: map,
          icon: iconBase + 'smallcook.png',
          title: 'Alki!'
        });
      }
      google.maps.event.addDomListener(window, 'load', initialize);
