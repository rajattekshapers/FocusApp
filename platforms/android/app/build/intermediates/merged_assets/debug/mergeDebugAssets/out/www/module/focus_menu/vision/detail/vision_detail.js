app.controller('vision_detail', function ($rootScope, $scope, $http, $location, $interval, $cookieStore, model, loading, $filter) {


   if (!$cookieStore.get('userinfo')) {
      $location.path('/login')
  }
  
  if (!$cookieStore.get('vision_id')) {
      $location.path('/focus_menu/vision/listing')
  }



 $scope.edit_meeting = function(){
    $location.path('focus_menu/vision/add');
 } 
 
 $scope.meeting_detail = function(){
  $location.path('/focus_menu/vision/detail');
 } 
 
 
 $scope.truelist = false;
 
 $scope.get_vision_detail = function () {
    
     loading.active();

     var args = $.param({
         user_id : $cookieStore.get('userinfo').id,
         vision_id : $cookieStore.get('vision_id'),
         apikey : apikey
     })
     $http({
         headers: {
             'Content-Type': 'application/x-www-form-urlencoded'
         },
         method: 'POST',
         url: app_url + '/get_focus_vision_detail',
         data : args   
     }).then(function (response) {
         //alert();
         loading.deactive();
         res = response;
         console.log(res.data.data)
         if(res.data.ErrorCode == 0){
            $scope.focus_details = res.data.data.focus_data;
            $scope.goal_name = res.data.data.goal_name;
            $scope.vision_url = res.data.data.vision_url;
            $scope.truelist = true;
         }
             
     })

 }


 $scope.edit_focus_detail = function(id){
    $location.path('/focus_menu/vision/add');

  } 

 
   
});