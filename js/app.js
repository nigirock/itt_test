var app = angular.module("APP",[]);

app.controller("mainCtrl",function($scope,$http){
    $http.get("./js/data.json").success(function(data){
        $scope.city = data.city;
        $scope.phone = $scope.city[2].phone;
        $scope.activeClass = 'activeLi';
        $scope.textHotel = 'Simferopol Crimea Ukraine Train Station White Hostel';
        $scope.textHotel = $scope.textHotel.slice(0,45);
        $scope.visible = {};
        $scope.openPopup = false;

        $scope.addSpanPhone = function(phone){
            $scope.phone = phone;
        };
    })
    console.log($scope.numberSlice);
});
$( document ).ready(function() {
    $(window).resize(function(){
        $('.b-popup-content').css({
            position:'absolute',
            left: ($(window).width()
            - $('.b-popup-content').outerWidth())/2,
            top: ($(window).height()
            - $('.b-popup-content').outerHeight())/2
        });
    });
    $(window).resize();
});