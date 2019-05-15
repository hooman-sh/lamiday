/**
 * Created by hooman on 12/5/16.
 */
app.directive('resetpass',function(){
    return{
        restrict:'E',
        scope:{
            info:'='
        },
        controller:'userController',
        templateUrl:'../html/reset-pass.html'
    }
});