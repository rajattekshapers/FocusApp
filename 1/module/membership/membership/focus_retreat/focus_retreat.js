app.controller('focus_retreat', function ($rootScope, $scope, $http, $location, $interval, $cookieStore, model, loading, $filter) {

    
    $scope.mastery = function(){
        $location.path('/membership/membership_plans/focus_retreat/self_mastery')
    }

    $scope.leaderships = function(){
        // alert()
        $location.path('/membership/membership_plans/focus_retreat/leadership/content')
    }
   


});