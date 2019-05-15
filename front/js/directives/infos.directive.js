/**
 * Created by hooman on 10/19/16.
 */
app.directive('infos',function(){
    return{
        restrict:'E',
        scope:{
            info:'='
        },
        controller:"userController",
        templateUrl:'../html/infos.html'
    }
});