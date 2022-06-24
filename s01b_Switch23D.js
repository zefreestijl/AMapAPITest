// 0. Declare Variables
var mpp = document.getElementById('container1');

var map1 = mpp.aMap1;

var c1 = document.getElementById('cities1');
var lat0 = Number(c1.value.split(',')[0].trim()); 
var lng0 = Number(c1.value.split(',')[1].trim());


// 00a. Set Elements & Draw Events
var btn23d = document.getElementById('button23d');

btn23d.addEventListener('click', switch3D);

var mode1 = '2D';
var scale1; 
var hawkeye1;





function switch3D()
{
    var style0 = map1.getMapStyle();
    var layer0 = map1.getLayers();

    var zoomTemp1 = map1.getZoom();
    var centerTemp1 = map1.getCenter();

    mpp.hawkeye1 = null; 
    mpp.scale1 = null;

    //if (mpp.marker1 != null){ centerTemp1 = mpp.marker1.getPosition();}

    if (mode1 == '2D')
    {
        map1.clearMap();
        map1 = new AMap.Map('container1', 
        {
            zoom:zoomTemp1, center: centerTemp1,
            viewMode: '3D',
            skyColor: 'rgb(250,250,250)',
            showIndoorMap: true,
        })
        mpp.aMap1 = map1;
        mode1 = '3D';
        btn23d.innerText = "3D -> 2D";
    }
    
    else
    {
        map1.clearMap();
        map1 = new AMap.Map('container1', 
        {
            zoom:zoomTemp1, center: centerTemp1,
            viewMode: '2D'
    
        })
        mpp.aMap1 = map1;
        mode1 = '2D';
        btn23d.innerText = "2D -> 3D";
    }

    map1.setLayers(layer0);
    map1.setMapStyle(style0);

    mpp.hawkeye1 = null; 
    mpp.scale1 = null;
    
    addScale(); addHawkEye();

}


function addScale()
{
    map1 = mpp.aMap1;

    // Scale
    map1.plugin(["AMap.Scale"],function()
    {        
        scale1 = new AMap.Scale( {offset:[250, 0]} );
      
        map1.addControl(scale1);
    });

    mpp.scale1 = scale1;

}


function addHawkEye()
{        
    map1 = mpp.aMap1;

    // Hawk
    map1.plugin(["AMap.HawkEye"],function()
    {
    
        hawkeye1 = new AMap.HawkEye( { isOpen:false, width:'200px', height:'120px', autoMove: true } );
        
        map1.addControl(hawkeye1);
    });

    mpp.hawkeye1 = hawkeye1;

}
