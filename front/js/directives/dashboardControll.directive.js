/**
 * Created by hooman on 10/16/16.
 */
app.directive('dashboardControll',function(){
   return{
       restrict:'E',
       scope:{
           info:'='
       },
       controller:'userController',
       templateUrl:'../html/dashboard.html'
   }
});