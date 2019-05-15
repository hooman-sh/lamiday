/**
 * Created by hooman on 10/10/16.
 */
app.directive('userProfile',function(){
    return{
        restrict:'E',
        scope:{
            info:'='
        },
        templateUrl: '../html/user-profile.html'
    }
});