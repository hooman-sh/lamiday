/**
 * Created by hooman on 12/12/16.
 */
app.directive('taskSubt',function(){
    return{
        restrict:'E',
        scope:{
            info:'='
        },
        controller:'taskController',
        templateUrl: '../html/task-sub-timeSet.html'
    }
});