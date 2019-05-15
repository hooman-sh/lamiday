/**
 * Created by hooman on 10/7/16.
 */
/**
 * Created by hooman on 10/7/16.
 */

app.directive('signinPage',function(){
    return{
        restrict:'E',
        scope:{
            info:'='
        },
        controller:'loginController',
        templateUrl: '../html/signin.html'
    }
});