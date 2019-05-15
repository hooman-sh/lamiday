/**
 * Created by hooman on 12/25/16.
 */
app.directive('taskClass',function(){
    return{
        restrict:'E',
        scope:{
            info:'='
        },
        controller:'taskController',
        templateUrl: '../html/taskClass.html'
    }
});