var app = angular.module("APP",[]);

app.controller("mainCtrl",function($scope,$http){
    $http.get("./js/data.json").success(function(data){
        $scope.city = data.city;
        $scope.phone = $scope.city[2].phone;
        $scope.activeClass = 'activeLi';
        $scope.addSpanPhone = function(phone){
            $scope.phone = phone;
        };
        $scope.enter = function(name){
            name = $scope.activeClass;
        }
    })
});