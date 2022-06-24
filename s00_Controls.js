// 0. Declare Variables
var mpp = document.getElementById('container1');

var map1 = mpp.aMap1;
var lat0 = 32.0504, lng0 = 118.7965;



// 00. Set Elements & Controls
var scale1; 
var hawkeye1;


mpp.addEventListener('mousemove', function(e){ openHawkEye(e) });


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


function openHawkEye(e)
{
    map1 = mpp.aMap1;
    hawkeye1 = mpp.hawkeye1;
    scale1 = mpp.scale1;

    
    if (scale1 == null) { addScale();  }
    if (hawkeye1 == null)  { addHawkEye();  }


    if (e.x > mpp.clientWidth-200 && e.y > mpp.clientHeight-90)
    {
        hawkeye1.open();
    }
    
    else { hawkeye1.close(); }


}
