/**
 * Created by hooman on 11/9/16.
 */
app.factory('userService',['$resource','authentication','$location',function ($resource, authentication,$location) {
   var token = authentication.getWebToken;
   var fact={};
    fact.Infos = $resource('http://lamiday.ir/api/v1/users/info',{},{
       get: {
           method:'GET',
           headers: {
               'token': token
           }
       }
   });
    fact.editInfos = $resource('http://lamiday.ir/api/v1/users/updateprofile',{},{
        update:{
            method:'PUT',
            headers:{
                'token':token
            }
        }
    });
    fact.getTasks = $resource('http://lamiday.ir/api/v1/users/tasks',{},{
        get:{
            method:'GET',
            headers: {
                'token': token
            }
        }
    });
    fact.getPayments = $resource('http://lamiday.ir/api/v1/users/transactions',{},{
        get:{
            method:'GET',
            headers: {
                'token': token
            }
        }
    });
    fact.resetpass = $resource('http://lamiday.ir/api/v1/users/resetpassword',{},{
        post:{
            method:'POST',
            headers:{
                'token':token
            }
        }
    });
    fact.raiseCredit = $resource('http://lamiday.ir/api/v1/users/raisecredit',{},{
        post:{
            method:'POST',
            headers:{
                'token':token
            }
        }
    });

   return fact;
}]);