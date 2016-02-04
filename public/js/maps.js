
var map, heatmap;

var markers = [];

var beaches = [
            ["Apollo Hospital",28.5285546,77.2883731],
            ["AIIMS",28.5665994,77.207425],
            ["Sharma Nursing Home",29.5665994,76.207425],
            ["Moolchand Hospital",28.5653707,77.2309153],
            ["Dwarka Hospital",28.6166827,77.0294173],
            ["Fortis",28.5193969,77.1254208],
            ["National Heart Institute",28.5573607,77.243497],
            ["Janakpuri Nursing Home",28.6207947,77.0925366]
];

var disease = [ "STDs" , "Dengue" , "Malaria" , "Cholera" , "Chikunguniya" , "Swine Flu" ];

var hmap = [];
var hmap2 = [];

$.getJSON("https://api.myjson.com/bins/2y1et", function(result){
            $.each(result, function(j, field){
                  hmap.push(new google.maps.LatLng(field["latitude"],field["longitude"]));
                });
            });


function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: 28.5, lng: 77.42}
  });


  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(hmap),
    map: map
      });

  heatmap.set('radius', 20);

  if(map.getZoom()>=11)
        heatmap.setMap(map);
  else
        heatmap.setMap(null);

  var image = {
    url: '/img/h.png',
    // This marker is 30 pixels wide by 30 pixels high.
    size: new google.maps.Size(30, 30),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(15, 15)
  };

          for(var i=0;i<beaches.length;i++)                     
            {    
                var beach = beaches[i];
                var marker = new google.maps.Marker({
                  position: {lat: beach[1], lng: beach[2]},
                  map: map,
                  icon: image,
                  draggable: false,
                  raiseOnDrag: false,
                  clickable: true,
                  title: beach[0]
                });
                markers.push(marker);
            }

                map.addListener('zoom_changed', function() {
                    if(map.getZoom()>=11)
                    {
                        heatmap.setMap(map);
                        // clearMarkers();
                    }
                    else
                    {
                        heatmap.setMap(null);
                        // showMarkers();
                    }
                });
        }

function showMarkers() {
  // alert("now");
  setMapOnAll(true);
}
 	
function clearMarkers() {
    // alert("called");
  setMapOnAll(false);
}

function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setVisible(map);
  }
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]
  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
  heatmap.set('radius', heatmap.get('radius') ? null : 20);
}

function changeOpacity() {
  heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}

// Heatmap data: 500 Points
function getPoints(hmap) {
  return hmap;
}
/*
function findPoints(disease)
{
  $.getJSON("https://api.myjson.com/bins/5376t", function(result){
            $.each(result, function(j, field){
                  hmap.push(new google.maps.LatLng(field["latitude"],field["longitude"]));
                });
            });
}

function diseaseWise() {
  var disease1 = prompt("Disease: ", "");
  for(var i=0;i<disease.length;i++)
  { 
    if(disease1=="all")
    {
      heatmap.setMap(null);
      hmap2=hmap;
      heatmap.setData(hmap2);
      heatmap.setMap(map);
      heatmap.set('gradient',null);
    }
    if(disease[i]==disease1)
    {
      heatmap.setMap(null);
      hmap2=findPoints(disease1);
      heatmap.setData(hmap2);
      heatmap.setMap(map);
      heatmap.set('gradient',null);
      changeGradient();
      break;
    }
  }
}*/