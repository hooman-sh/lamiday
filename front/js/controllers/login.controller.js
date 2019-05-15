/**
 * Created by hooman on 11/11/16.
 */
app.controller('loginController',['$scope','authentication','$location', function ($scope, authentication,$location) {
    $scope.signin = function(){
        $scope.notFound = false;
        var statusCode;
        authentication.signin.post({username:$scope.email, password:$scope.password},
            function (response) {
                authentication.saveWebToken(response.token);
                $location.path('/profile');
            },function(err){
                console.log(err);
                statusCode = err.status;
                if(statusCode === 404 || 500)
                    $scope.notFound = true;
            });
    }
}]);