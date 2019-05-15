/**
 * Created by hooman on 12/15/16.
 */
app.controller('companyControll',['companyService','$scope','$location',function (companyServive, $scope,$location) {
    $scope.companyOrder = function () {
        companyServive.postCompanyOrder.post({
            person_name:$scope.name,
            company_name:$scope.company,
            phone_email:$scope.phone_mail,
            website:$scope.site,
            service:$scope.service,
            description:$scope.description
        },function (response) {
            console.log(response);
            $location.path('/');
        },function (err) {
            console.log(err);
        });
    }
    $scope.companyCorp = function () {
        companyServive.postCompanyCorp.post({
            person_name:$scope.name2,
            company_name:$scope.company2,
            phone_email:$scope.phone_mail2,
            website:$scope.site2,
            description:$scope.description2
        },function (response) {
            console.log(response);
            $location.path('/');
        },function (err) {
            console.log(err);
        });
    }

}]);