/**
 * Created by hooman on 10/13/16.
 */
app.directive('mainPage', function () {
    return{
        retrict:'E',
        scope:{
            info:'='
        },
        controller:'mainCtrl',
        templateUrl:'../html/main-page.html'
    }
});