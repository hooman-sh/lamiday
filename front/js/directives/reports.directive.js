/**
 * Created by hooman on 10/20/16.
 */

app.directive('reports',function(){
    return{
        restrict:'E',
        scope:{
            info:'='
        },
        controller:'userController',
        templateUrl:'../html/reports.html'
    }
});