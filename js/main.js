$(function () {

    new WOW().init();
    $('nav a, #goBack').bind('click', function (event) {
        var anchor = $(this);
        var navHeight = 50;
        var animateTime = 1500;
        var tar = anchor.attr('href');

        var timingFunction = 'easeOutBack'; //找函數速查表

        $('html,body').stop().animate({
            scrollTop: ($(tar).offset().top - navHeight)
        }, animateTime, timingFunction);

        event.preventDefault();

    });

    //note google map api 設定
    function initMap() {
        var myLocation = {
            lat: 25.051504, //經度
            lng: 121.3703863 //緯度
        };
        var map = new google.maps.Map(document.getElementById('map'), {
            center: myLocation, //對準
            zoom: 15, //縮放設定
            scrollwheel: false, //取消滾動放大縮小
            draggable: false, //取消拖曳
            disableDefaultUI: true, //取消地景圖選擇
            styles: [
                {
                    "featureType": "all",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "on"
            }
        ]
    },
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": 36
            },
                        {
                            "color": "#dfcc90"
            },
                        {
                            "lightness": 40
            }
        ]
    },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#000000"
            },
                        {
                            "lightness": 16
            }
        ]
    },
                {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
            },
                        {
                            "lightness": 20
            }
        ]
    },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#000000"
            },
                        {
                            "lightness": 17
            },
                        {
                            "weight": 1.2
            }
        ]
    },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#dfcc90"
            }
        ]
    },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
            },
                        {
                            "lightness": 20
            }
        ]
    },
                {
                    "featureType": "landscape",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#dfcc90"
            }
        ]
    },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
            },
                        {
                            "lightness": 21
            }
        ]
    },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
            },
                        {
                            "lightness": 17
            }
        ]
    },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#000000"
            },
                        {
                            "lightness": 29
            },
                        {
                            "weight": 0.2
            }
        ]
    },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
            },
                        {
                            "lightness": 18
            }
        ]
    },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
            },
                        {
                            "lightness": 16
            }
        ]
    },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
            },
                        {
                            "lightness": 19
            }
        ]
    },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dfcc90"
            },
                        {
                            "lightness": 17
            }
        ]
    }
]




        }); //格式要一樣

        var marker = new google.maps.Marker({
            position: myLocation,
            // 可以放標記的圖icon:'img/...'  
            map: map
        });
    }

    google.maps.event.addDomListener(window, 'load', initMap); //固定的
});
