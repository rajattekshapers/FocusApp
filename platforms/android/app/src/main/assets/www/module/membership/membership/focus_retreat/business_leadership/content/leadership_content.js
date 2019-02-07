app.controller('leadership_content', function ($rootScope, $scope, $http, $location, $interval, $cookieStore, model, loading, $filter) {

    $scope.contents = function(){
        $location.path('/membership/membership_plans/focus_retreat/leadership/content')
    }
    $scope.video = function(){
        $location.path('/membership/membership_plans/focus_retreat/leadership/video')
    }


        
    if (!$cookieStore.get('userinfo')) {
        $scope.loggedin = false;
       
    }

    if ($cookieStore.get('userinfo')) {
        $scope.loggedin = true;
        
    }

    console.log($cookieStore.get('userinfo').id)

    $scope.truelist = false;
    $scope.get_morning_focus = function () {

        loading.active();

        var args = $.param({
            user_id : $cookieStore.get('userinfo').id,
            apikey : apikey,
            typeofgoal:'content'
        })
        $http({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            url: app_url + '/get_business',
            data : args   
        }).then(function (response) {
            //alert();
            loading.deactive();
            res = response;
            console.log(res.data.data)
            if(res.data.ErrorCode == 0){
               $scope.morningfocus = res.data.data;
               $scope.truelist = true;
            }
                
        })

    }


    $scope.focus_detail = function(id){
       // alert(id)
    }

});
