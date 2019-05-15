/**
 * Created by hooman on 12/9/16.
 */

app.directive('companyCorp',function(){
    return{
        restrict:'E',
        scope:{
            info:'='
        },
        controller:'companyControll',
        templateUrl:'../html/company-corp.html'
    }
});