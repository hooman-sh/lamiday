/**
 * Created by hooman on 4/21/17.
 */
app.directive('aboutUs',function(){
    return{
        restrict:'E',
        scope:{
            info:'='
        },
        templateUrl:'../html/about_us.html'
    }
});