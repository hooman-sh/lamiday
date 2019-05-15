/**
 * Created by hooman on 12/7/16.
 */
app.factory('taskService',['$resource', 'authentication','$cookies',function ($resource, authentication,$cookies) {
    var fact = {};
    var token = authentication.getWebToken;
    fact.getTasks = $resource('http://lamiday.ir/api/v1/tasks/list',{},{
        get:{
            method:'GET',
            headers:{
                'token':token
            }
        }
    });
    fact.getTaskClass = $resource('http://lamiday.ir/api/v1/tasks/classes',{},{
        get:{
            method:'GET',
            headers:{
                'token':token
            }
        }

    });
    fact.getTask = $resource('http://lamiday.ir/api/v1/tasks/details/:tasktitle',{tasktitle:'@tasktitle'},{
        get:{
            method:'GET',
            headers:{
                'token':token
            }
        }
    });
    fact.postTaskInfo = $resource('http://lamiday.ir/api/v1/tasks/order/:tasktitle',{tasktitle:'@tasktitle'},{
        post:{
            method:'POST',
            headers:{
                'token':token
            }
        }
    });
    fact.taskTimes = $resource('http://lamiday.ir/api/v1/tasks/time/:tasktitle',{tasktitle:'@tasktitle'},{
        GETIT:{
            method:'GET',
            headers:{
                'token':token
            }
        }
    });
    fact.getAddress = $resource('http://lamiday.ir/api/v1/users/addresses',{},{
        get:{
            method:'GET',
            headers:{
                'token':token
            }
        }
    });
    fact.postNewAddress = $resource('http://lamiday.ir/api/v1/users/newaddress',{},{
        post:{
            method:'POST',
            headers:{
                'token':token
            }
        }
    });
    fact.postTaskTime = $resource('http://lamiday.ir/api/v1/tasks/ordertime/:tasktitle',{tasktitle:'@tasktitle'},{
        post:{
            method:'POST',
            headers:{
                'token':token
            }
        }
    });
    fact.getTaskReceipt = $resource('http://lamiday.ir/api/v1/tasks/receipt/:taskid',{taskid:'@taskid'},{
        get:{
            method:'GET',
            headers:{
                'token':token
            }
        }
    });
    fact.setStatus = function () {
        if($cookies.get('orderstatus') == undefined) {
            $cookies.put('orderstatus', 'درحال بررسی');
        }

        if($cookies.get('paymentstatus') == undefined) {
            $cookies.put('paymentstatus', 'انجام نشده');
        }

    }
    fact.postPaymentType = $resource('http://lamiday.ir/api/v1/tasks/payment',{},{
        post:{
            method:'POST',
            headers:{
                'token':token
            }
        }
    });
    fact.getTaskOfClass = $resource('http://lamiday.ir/api/v1/tasks/:classtitle',{classtitle:'@classtitle'},{
        get:{
            method:'GET',
            headers:{
                'token':token
            }
        }
    });
    return fact
}]);