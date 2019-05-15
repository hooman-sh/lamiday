/**
 * Created by hooman on 10/27/16.
 */
app.directive('payments',function(){
    return{
        restrict:'E',
        scope:{
            info:'='
        },
        controller:'userController',
        templateUrl:'../html/payments.html'
    }
});