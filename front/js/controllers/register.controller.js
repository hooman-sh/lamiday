/**
 * Created by hooman on 11/2/16.
 */
app.controller('registerController',['$scope','authentication','$http','$location',function($scope,authentication,$http,$location){
    $scope.alert = false;
    $scope.maxlength = 11;
    $scope.conflict=false;
    $scope.internalerr = false;

    $scope.che1;
    $scope.che2;

    $scope.register = function(){
        authentication.signup.register({name:$scope.name , phone:$scope.mobile, email:$scope.email , password:$scope.pass},
            function (data) {
                console.log(data.success);
                console.log('register success');
                $scope.conflict=false;
                $scope.internalerr = false;
                $('#modal1').modal('show');
            },function (err) {
                var statusCode = err.status;
                console.log(statusCode);
                if(statusCode == 401) $scope.conflict = true;
                else if(statusCode == 500) $scope.internalerr = true;
            });
    };
    $scope.verify = function () {
        authentication.verify.post({phone:$scope.mobile , code:$scope.code},
            function (response) {
                console.log(response);
                var token = response.token;
                authentication.saveWebToken(token);
                authentication.signin.post({username:$scope.email, password:$scope.pass},
                    function (response) {
                        console.log(response);
                        $location.path('/profile');
                    },function (err) {
                        console.log(err);
                    });
            }, function (err) {
                console.log(err);
            });
    }
}]);