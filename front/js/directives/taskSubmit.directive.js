/**
 * Created by hooman on 12/10/16.
 */
app.directive('taskSubmit',function(){
    return{
        restrict:'E',
        scope:{
            info:'='
        },
        // controller:'taskController',
        templateUrl: '../html/task-submit1.html'
    }
});