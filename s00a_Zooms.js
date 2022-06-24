// 0. Declare Variables
var mpp = document.getElementById('container1');

var map1 = mpp.aMap1;

var c1 = document.getElementById('cities1');


// 00a. Set Elements & Zooms
var z0 = document.getElementById('z0'); 
var z1 = document.getElementById('z1');
var z2 = document.getElementById('z2');

z0.addEventListener('click', zoomAll );
z1.addEventListener('click', zoomIn ); 
z2.addEventListener('click', zoomOut );


function zoomAll()
{
    //if (!rect1) { drawRectangle(); }
    map1 = mpp.aMap1;

    var lat0 = Number(c1.value.split(',')[0].trim()); 
    var lng0 = Number(c1.value.split(',')[1].trim());

    var centerNew1 = [lng0, lat0];
    map1.setCenter(centerNew1, true);
    map1.setZoom(11, true); 

}


function zoomIn() { map1 = mpp.aMap1; map1.setZoom(Number(map1.getZoom())+1, true);  }
function zoomOut() { map1 = mpp.aMap1; map1.setZoom(Number(map1.getZoom())-1, true);  }

// 00-0. Simulate Keydown Events
mpp.addEventListener('keydown', function(e) { { pressZoom(e); } });
//document.addEventListener('keydown', function(e) { { pressMove(e); } });


function pressZoom(e)
{ 
    map1 = mpp.aMap1;

    if ( e.keyCode == 107 ) { map1 = mpp.aMap1; map1.setZoom(map1.getZoom()+1, true) ; } //+
    if ( e.keyCode == 106 ) { map1 = mpp.aMap1; zoomAll(); } //*

    
    var xx = 1200;
    var yy = 775;

    if ( e.keyCode == 98 ) { map1 = mpp.aMap1; map1.panBy(0,-yy, 0); } //2
    if ( e.keyCode == 100 ) { map1 = mpp.aMap1; map1.panBy(xx,0, 0); } //4
    if ( e.keyCode == 102 ) { map1 = mpp.aMap1; map1.panBy(-xx,0, 0); } //6
    if ( e.keyCode == 104 ) { map1 = mpp.aMap1; map1.panBy(0,yy, 0); } //8


}










// 00-1. Get Zoom Level
var a5z = document.getElementById('a5z');

mpp.addEventListener('mouseover', getZoom);

function getZoom()
{    
    map1 = mpp.aMap1;

    map1.on('zoomchange', getCurrentZoom);

}

function getCurrentZoom()
{     
    map1 = mpp.aMap1;

    var z1 = map1.getZoom(); 
    a5z.innerText = z1;
}