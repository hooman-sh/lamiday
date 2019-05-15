/**
 * Created by hooman on 11/2/16.
 */
app.factory('authentication',['$resource','$http','$window','$cookies', function ($resource,$http,$window,$cookies) {
    var fact={};
    fact.signup = $resource('http://lamiday.ir/api/v1/users/register' , {}, {
            register:{
                method:'POST'
            }
        });
    fact.signin = $resource('http://lamiday.ir/api/v1/users/login',{},{
        post:{
            method:'POST'
        }
    });
    fact.verify = $resource('http://lamiday.ir/api/v1/users/regverify',{},{
        post:{
            method:'POST'
        }
    });
    fact.saveWebToken = function (token) {
        $window.localStorage['user-token'] = token;
    }
    fact.getWebToken = function () {
        return $window.localStorage['user-token'];
    }
    fact.logOut = function () {
        $window.localStorage.removeItem('user-token');
        $cookies.remove('name');
        $cookies.remove('balance');
    }
    fact.isLogedIn = function () {
        var token =fact.getWebToken();
        var payload;
        if(token) {
            return true;
        }else
            return false;
    }
    return fact;
}]);

