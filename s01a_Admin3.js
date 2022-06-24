// https://lbs.amap.com/api/jsapi-v2/guide/layers/districtlayer

// 0. Declare Variables
var mpp = document.getElementById('container1');
var bt3a = document.getElementById('button3a');

var map1 = mpp.aMap1;


var c1 = document.getElementById('cities1');
var lat0 = Number(c1.value.split(',')[0].trim()); 
var lng0 = Number(c1.value.split(',')[1].trim());





// 3a-0. Create District Layers
var disWorld = new AMap.DistrictLayer.World({
    zIndex:10,
    styles:{
        'nation-stroke':function(props){
            if(props.type=='Nation_Border_China'){
                return 'red'
            }else{
                return 'red'
            }
        },
        'coastline-stroke': [0.8, 0.63, 1, 1], 
        
    }
})

var disCountry = new AMap.DistrictLayer.Country({
    zIndex:11, SOC:'CHN', depth:2,
    styles:{
        'nation-stroke':'#22ffff',
        'coastline-stroke':[0.8, 0.63, 0.94, 1],
        'province-stroke':'Black',
        'fill':'#eee',
        'city-stroke': 'rgba(255,255,255,0.5)',
        
    }
})

var disProvince = new AMap.DistrictLayer.Province({
    zIndex:12,
    depth:2,
    styles:{
        'fill':'#eee',
        'province-stroke':'red',
        'city-stroke': '#999',
        'county-stroke': 'rgba(150,150,150,0.2)'
    }
})

var disSatellite = new AMap.TileLayer.Satellite();

var styleA0 = 'amap://styles/4301c63fa910f307a80adaf1e313edad';


// 3a-1. Events
var trigger3a = 0;

bt3a.addEventListener('click', test1);


function test1()
{            
    map1 = mpp.aMap1; map1.clearMap();

    if (trigger3a > 1) { trigger3a = 0};
    
    c1 = document.getElementById('cities1');
    lat0 = Number(c1.value.split(',')[0].trim()); 
    lng0 = Number(c1.value.split(',')[1].trim());

    switch (trigger3a)
    {
        case 0: 
        {
            map1.setMapStyle(styleA0);
            
            map1.addLayer(disSatellite);
            map1.addLayer(disWorld);
            map1.addLayer(disProvince);

            break;
        }            
            
        case 1: 
        {
            map1.setMapStyle('amap://styles/normal');
            
            map1.removeLayer(disSatellite);
            map1.removeLayer(disWorld);
            map1.removeLayer(disProvince);
            
            break;
        } 

        default: break;
    }

    trigger3a++;
}


// 01. Switch to Normal Layer
var btn1s = document.getElementById('button1s');

btn1s.addEventListener('click', switchNormal);

function switchNormal()
{
    map1 = mpp.aMap1;
    map1.setMapStyle('amap://styles/normal');
            
    map1.removeLayer(disSatellite);
    map1.removeLayer(disWorld);
    map1.removeLayer(disProvince);
}
