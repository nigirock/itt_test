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
    console.log();
});
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
    console.log(question);
});