// 0. Declare Variables
var mpp = document.getElementById('container1');

var map1 = mpp.aMap1;
var lat0 = 32.0504, lng0 = 118.7965;


var lay1 = document.getElementById('layer1');
var lay2 = document.getElementById('layer2');
var lay3 = document.getElementById('layer3');
var lay4 = document.getElementById('layer4');
var lay5 = document.getElementById('layer5');


// 1. Set Elements & Events
var btn1s = document.getElementById('button1s');

var styleR1 = 'amap://styles/4617be67f1147b31d4e8d7a1ec3c0668';
var styleS2 = 'amap://styles/7e95c92abf1675fd590a14959d19c3e1';
var styleB3 = 'amap://styles/0c0ba0b425142c801f1dc2f3f017a03d';

var styleA0 = 'amap://styles/4301c63fa910f307a80adaf1e313edad';
var styleE4 = new AMap.TileLayer.Satellite();
var styleT5 = new AMap.TileLayer.Traffic();


var styleO0 = map1.getMapStyle();


btn1s.addEventListener('click', switchNormal);

lay1.addEventListener('change', switchLayer);
lay2.addEventListener('change', switchLayer);
lay3.addEventListener('change', switchLayer);
lay4.addEventListener('change', switchLayer);
lay5.addEventListener('change', switchLayer);


function switchLayer()
{
    map1 = mpp.aMap1;
    
    if (this == lay1)
    {        
        map1.setMapStyle(styleR1);
        map1.removeLayer(styleE4);
        map1.removeLayer(styleT5);
        btn1s.innerText = "1. Region";
    }
    else if (this == lay2)
    {        
        map1.setMapStyle(styleS2);
        map1.removeLayer(styleE4);
        map1.removeLayer(styleT5);
        btn1s.innerText = "2. Street";
    }
    else if (this == lay3)
    {        
        map1.setMapStyle(styleB3);
        map1.removeLayer(styleE4);
        map1.removeLayer(styleT5);
        btn1s.innerText = "3. Building";
    }
    
    else if (this == lay4)
    {        
        map1.setMapStyle('amap://styles/normal');
        map1.addLayer(styleE4);
        map1.addLayer(styleT5);
        btn1s.innerText = "4. Satellite";
    }

    else if (this == lay5)
    {        
        map1.setMapStyle(styleA0);
        map1.addLayer(styleT5);
        map1.removeLayer(styleE4);
        btn1s.innerText = "5. Traffic";
    }

}


function switchNormal()
{
    $('input[name=chk1]').attr('checked',false);

    map1 = mpp.aMap1;
    map1.removeLayer(styleT4);
    map1.removeLayer(styleT5);

    map1.setMapStyle('amap://styles/normal');
    btn1s.innerText = "Switch MapStyle";

    
    //console.log(mpp.clientWidth + " / " + mpp.clientHeight);


}
