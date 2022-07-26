// https://lbs.amap.com/api/jsapi-v2/guide/map/lifecycle


// 0. Declare Variables
var map1;
var mpp = document.getElementById('container1');
var c1 = document.getElementById('cities1');

var lat0 = Number(c1.value.split(',')[0].trim()); 
var lng0 = Number(c1.value.split(',')[1].trim());

//mpp.width = window.innerWidth

console.log(mpp);

// 1a-1. Load & Initiate Maps
Window.onload = initMap();

function initMap()
{
    map1 = new AMap.Map('container1', 
        {
            zoom:11, center: [lng0, lat0],
            viewMode: '2D'
        })

}

console.log(map1);


mpp.aMap1 = map1;


// 1a-2. Switch Mode

var trigger2 = false;


// 1a-3. Change Map Center by Controls
c1.addEventListener('change', changeCenter)

function changeCenter()
{
    var s1 = c1.value.split(',')[0].trim();
    var s2 = c1.value.split(',')[1].trim();
    
    lat0 = Number(s1); lng0 = Number(s2);
    
    var centerNew1 = [lng0, lat0];
    map1.setCenter(centerNew1, true);


    //console.log(center1);
}




// 2a-1. Test Mouse Hover Locations
var a5a = document.getElementById('a5a');


mpp.addEventListener('mousemove', function(e){ test2(e) });

function test2(e)
{
    map1 = mpp.aMap1;
    
    var pixel1 = new AMap.Pixel(e.x, e.y);

    var lnglat1 = map1.containerToLngLat(pixel1);  

    var lng1 = Math.round(lnglat1.lng*10000) / 10000;
    var lat1 = Math.round(lnglat1.lat*10000) / 10000;
    //var alt1 = map1.getAltitude(lnglat1);
    //a5a.innerText = lat1 + ", " + lng1  +  ' (' + e.x + " / " + e.y + ')';

    a5a.innerText = lat1 + ", " + lng1;

}




//
//document.addEventListener(onresize, test0());
window.onresize = test0;

function test0()
{    
    map1 = mpp.aMap1;

    var h1 = window.innerHeight -50 + 'px'
    var w1 = window.innerWidth -20 + 'px'

    mpp.style.height = h1;
    mpp.style.width = w1;

}
