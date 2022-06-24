// 0. Declare Variables
var mpp = document.getElementById('container1');

var map1 = mpp.aMap1;
var zoomTemp1 = map1.getZoom();

var c1 = document.getElementById('cities1');
var lat0 = Number(c1.value.split(',')[0].trim()); 
var lng0 = Number(c1.value.split(',')[1].trim());

var btn1a = document.getElementById('button1a');
var a5n = document.getElementById('a5n');
var f2 = document.getElementById('f2');


// 00a. Set Elements & Draw Events
var c1 = document.getElementById('cities1');

var marker1 = new AMap.Marker();
var region1 = new AMap.Rectangle();


var timeoutId = null;
btn1a.addEventListener('click', exportNew);
btn1a.addEventListener('mouseover', function() { timeoutId = window.setTimeout( resizeByFrame, 1000);} );
btn1a.addEventListener('mouseout', function() { window.clearTimeout(timeoutId); timeoutId = null; resizeToNormal(); });




function resizeByFrame()
{
    map1 = mpp.aMap1;

    zoomTemp1 = map1.getZoom();
    map1.setZoom(f1.value);

    if (mpp.marker1!=null){ marker1 = mpp.marker1; }
    if (mpp.region1!=null){ region1 = mpp.region1; }
    //if (marker1.getPosition() == null) { document.getElementById('button1p').click(); }
    
    marker1.hide(); region1.hide();
    map1.setCenter(marker1.getPosition());

    // 00. Resize Canvas to 1200x800
    mpp.style.width = '7300px';
    mpp.style.height = '4500px';

    map1.setZoom(f1.value);


}

function exportNew()
{
    map1 = mpp.aMap1;

    let now = new Date();
    let stop = now.getTime() + 6000;

    while(true) 
    {
        now = new Date();
        if(now.getTime() > stop || $('.container1').data('loaded')) 
        { 
            exportImage();
            break;
        }
    }
}

function drawRect()
{
    map1 = mpp.aMap1;

    var rect1 = new AMap.Rectangle
        ({
            bounds: bb1,
            strokeColor:'cc8800', strokeWeight: 3,
            strokeOpacity:0.5, strokeDasharray: [30,10],
            strokeStyle: 'dashed', 
            fillColor:'ffffb3', fillOpacity:0.2,
            cursor:'pointer', zIndex:50,
        })

        rect1.setMap(map1);
}


function resizeToNormal()
{
    map1 = mpp.aMap1;

    map1.setZoom(zoomTemp1);

    if (mpp.marker1!=null){ region1 = mpp.marker1; }
    if (mpp.region1!=null){ region1 = mpp.region1; }
    marker1.show(); region1.show();

    // 02. Reset Canvas Size
    var h1 = window.innerHeight -50 + 'px'
    var w1 = window.innerWidth -20 + 'px'

    mpp.style.height = h1;
    mpp.style.width = w1;
}


function exportImage()
{
    map1 = mpp.aMap1;

    var lat1 = Math.round(map1.getCenter().lat*100)/100;
    var lng1 = Math.round(map1.getCenter().lng*100)/100;

    a5n.innerText = "Image Captured: " + mpp.clientWidth + " x " + mpp.clientHeight + " px (" 
    + mpp.distX + " x " + mpp.distY + " km / Zoom: " + f1.value + ")";




    // 01. Save File to Previous Download Location
    const a = document.createElement('a');
    var prefix1 = c1.options[c1.selectedIndex].text;

    var fileName1 = f2.value;


    html2canvas(document.querySelector("#container1"), { backgroundColor: null, useCORS: true}).
    then(canvas => 
        { 
            console.log(canvas.style.width + " / " + canvas.style.height);

            document.body.appendChild(canvas); canvas.style.display="none"; 
            var img1 = canvas.toDataURL("image/png"); 
            
            document.body.appendChild(a);
            a.href = img1;
            a.download = prefix1 + '_' + fileName1+'.png';
            a.click();
            document.body.removeChild(a);

        }  );


}



function sleep(msec = 1000) 
{
    map1 = mpp.aMap1;

    let now = new Date();
    let stop = now.getTime() + msec;

    while(true) 
    {
        now = new Date();
        if(now.getTime() > stop) return;
    }
}
