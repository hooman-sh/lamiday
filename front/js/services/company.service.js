/**
 * Created by hooman on 12/15/16.
 */
app.factory('companyService',['$resource', 'authentication','$cookies',function ($resource, authentication,$cookies) {
        var fact = {};
        fact.postCompanyCorp = $resource('http://lamiday.ir/api/v1/utils/companysubmit',{},{
            post:{
                method:'POST'
            }
        });
        fact.postCompanyOrder = $resource('http://lamiday.ir/api/v1/utils/companyorder',{},{
            post:{
                method:'POST'
            }
        });
        return fact;
}]);