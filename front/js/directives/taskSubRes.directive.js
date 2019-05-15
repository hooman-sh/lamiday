/**
 * Created by hooman on 12/14/16.
 */
app.directive('taskSubres',function () {
    return{
        restrict:'E',
        scope:{
            info:'='
        },
        controller:'taskController',
        templateUrl:'../html/task-sub-results.html'
    }
});