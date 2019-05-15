/**
 * Created by hooman on 10/19/16.
 */

app.directive('editInfos',function(){
    return{
        restrict:'E',
        scope:{
            info:'='
        },
        templateUrl:'../html/edit-infos.html'
    }
});