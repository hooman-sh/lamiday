/**
 * Created by hooman on 12/11/16.
 */
app.directive('taskSubq',function(){
    return{
        restrict:'E',
        scope:{
            info:'='
        },
        controller:'taskController',
        templateUrl: '../html/task-sub-question.html'
    }
});