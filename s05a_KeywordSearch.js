// 0. Declare Variables
var mpp = document.getElementById('container1');

var map1 = mpp.aMap1;

var c1 = document.getElementById('cities1');
var lat0 = Number(c1.value.split(',')[0].trim()); 
var lng0 = Number(c1.value.split(',')[1].trim());



var sp1 = document.getElementById('sp1');

var panel1 = document.getElementById('panel1');

// 00a. Set Elements & Draw Events
var marker1 = mpp.marker1;
var region1 = new AMap.Rectangle();

var keyword1 = "";

panel1.addEventListener('mouseover', function() {panel1.style.left = '8px'; panel1.style.background = 'white';} );
panel1.addEventListener('mouseout', function() {panel1.style.left = '-300px'; panel1.style.background = 'gainsboro'; } );


s1.addEventListener('mouseover', updateCenterInfo);

function updateCenterInfo()
{

    sp1.innerText = map1.getCenter().lat + ", " + map1.getCenter().lng;
}



s1.addEventListener('change', searchAddress);

function searchAddress()
{
    keyword1 = s1.value;

    AMap.plugin(["AMap.PlaceSearch"], function() {
        //构造地点查询类
        var placeSearch = new AMap.PlaceSearch({
            pageSize: 10, // 单页显示结果条数
            pageIndex: 1, // 页码

            map: map1, // 展现结果的地图实例
            panel: "panel1", // 结果列表将在此容器中进行展示。
            autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
        });

        
        //关键字查询
        placeSearch.search(keyword1);

        sp1.innerText = map1.getCenter().lat + ", " + map1.getCenter().lng;

    });

    // Reset Map Center if It's LatLng
    if (keyword1.includes(','))
    { 
        var ss1 = keyword1.split(',')[0].trim();
        var ss2 = keyword1.split(',')[1].trim();
        
        lat0 = Number(ss1); lng0 = Number(ss2);
        
        var centerNew1 = [lng0, lat0];
        map1.setCenter(centerNew1, true);

        sp1.innerText = "AMap: " + map1.getCenter().lat + ", " + map1.getCenter().lng + " -> " + "GPS: ";
    }

}


