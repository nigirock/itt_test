var app = angular.module("APP",[]);

app.controller("mainCtrl",function($scope,$http){
    $http.get("./js/data.json").success(function(data){
        $scope.city = data.city;
        $scope.money = data.money;
        $scope.phone = $scope.city[2].phone;
        $scope.name = $scope.money[0].name;
        $scope.activeClass = 'activeLi';
        $scope.textHotel = 'Simferopol Crimea Ukraine Train Station White Hostel';
        $scope.textHotel = $scope.textHotel.slice(0,45);
        $scope.caretClass = false;
        $scope.caretClass2 = false;
        $scope.birdClass = "bird";

        $scope.caretRevers = function(index){
            $scope.caretClass = $scope.caretClass == false ? true : false;
            $scope.money[index] = $scope.money[index].birdClass;
            console.log($scope.money[index])
        };
        $scope.caretRevers2 = function(){
            $scope.caretClass2 = $scope.caretClass2 == false ? true : false;
        };
        $scope.addSpanPhone = function(phone){
            $scope.phone = phone;
        };
        $scope.addSpanName = function(name){
            $scope.name = name;
        };
    });
});
app.directive("myDirective",function(){
    return {
        link:function(scope,elements,attr){
console.log(angular.isObject(scope))
        },
        restrict:"A",
        template: "<div>Hello</div>"
    }
})
$( document ).ready(function() {

    $('#popup').magnificPopup({
        delegate: 'a',
        removalDelay: 500,
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        midClick: true
    });
    function stickyNav() {
        var scrollTop = $(window).scrollTop();
        $('.scroll_block').toggleClass('sticky', scrollTop > 0);
    }
    $(window).one('scroll', stickyNav);
    stickyNav();

});