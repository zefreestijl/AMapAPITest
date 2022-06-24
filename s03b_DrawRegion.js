// 0. Declare Variables
var mpp = document.getElementById('container1');

var map1 = mpp.aMap1;

var c1 = document.getElementById('cities1');
var lat0 = Number(c1.value.split(',')[0].trim()); 
var lng0 = Number(c1.value.split(',')[1].trim());


// 00a. Set Elements & Draw Events
var btn1p = document.getElementById('button1p');

var marker1 = mpp.marker1;
var region1 = new AMap.Rectangle();


f1.addEventListener('change', setRegion);

function setRegion()
{

    marker1 = mpp.marker1;
    if (mpp.region1!=null){ region1 = mpp.region1; }
    
    if (marker1 == null)
    {
        btn1p.click();
        marker1 = mpp.marker1;
        
    }
        
    if (region1.getArea() > 0) 
    { region1.setMap(null); region1.destroy(); }
    
    map1 = mpp.aMap1;
    var pixel1 = map1.lngLatToContainer(marker1.getPosition());

    var lnglat1 = map1.containerToLngLat(pixel1);  



    var pixelAbs1 = map1.lngLatToPixel(lnglat1, f1.value);
    var pixelAbsMin1 = new AMap.Pixel( pixelAbs1.x + (7300/2), pixelAbs1.y - (4500/2) );
    var pixelAbsMax1 = new AMap.Pixel( pixelAbs1.x - (7300/2), pixelAbs1.y + (4500/2) );


    var lnglatAbsMin1 = map1.pixelToLngLat(pixelAbsMin1, f1.value);
    var lnglatAbsMax1 = map1.pixelToLngLat(pixelAbsMax1, f1.value);


    drawRegion(lnglatAbsMax1, lnglatAbsMin1);



    //console.log(lnglatAbsMin1);

    a5min.innerText = lnglatAbsMax1;
    a5max.innerText = lnglatAbsMin1;

    p1.innerText = Math.round(lnglatAbsMin1.distance(lnglatAbsMax1)/100)/10 + ' km';

    
    //
    /*
    var minLng1 = new AMap.LngLat(lnglatAbsMin1.lng,0);
    var maxLng1 = new AMap.LngLat(lnglatAbsMax1.lng,0);
    var distX = Math.round(minLng1.distance(maxLng1)/10)/100;
    */

    var minLat1 = new AMap.LngLat(0,lnglatAbsMin1.lat);
    var maxLat1 = new AMap.LngLat(0,lnglatAbsMax1.lat);
    var distY = Math.round(maxLat1.distance(minLat1)/10)/100;
    var distX = Math.round((distY * 7300 / 4500)*100)/100;

    a5n.innerText =  'Set Center on ' + lnglat1 + ' ( Zoom Level: ' + f1.value + " / " + distX +" x " + distY + " km )" ;
    mpp.distX = distX; mpp.distY = distY;


}


function drawRegion(lnglatAbsMin1, lnglatAbsMax1)
{
    region1 = new AMap.Rectangle
        ({
            bounds: new AMap.Bounds(lnglatAbsMin1, lnglatAbsMax1),
            strokeColor:'cc8800', strokeWeight: 3,
            strokeOpacity:0.5, strokeDasharray: [30,10],
            strokeStyle: 'dashed', 
            fillColor:'ffffb3', fillOpacity:0.2,
            cursor:'pointer', zIndex:50,
        })
    
    
        region1.setMap(map1);
        mpp.region1 = region1;

}