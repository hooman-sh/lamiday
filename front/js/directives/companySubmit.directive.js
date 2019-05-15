/**
 * Created by hooman on 12/9/16.
 */
app.directive('companySubmit',function(){
    return{
        restrict:'E',
        scope:{
            info:'='
        },
        controller:'companyControll',
        templateUrl:'../html/company-submit.html'
    }
});