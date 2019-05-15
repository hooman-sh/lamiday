/**
 * Created by hooman on 11/2/16.
 */
app.directive('cash',function(){
    return{
        restrict:'E',
        scope:{
            info:'='
        },
        controller:'userController',
        templateUrl:'../html/cash.html'
    }
});