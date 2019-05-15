/**
 * Created by hooman on 12/10/16.
 */
app.controller('taskController',['taskService','$scope','userService','$location','$cookies',function (taskService,$scope,userService,$location,$cookies) {
    $scope.questions = [];
    $scope.radioAnswer = [];
    $scope.taskQuestionForm = {}
    $scope.taskQuestionForm.description = String;
    $scope.taskQuestionForm.key_value = [];
    $scope.addNewAdress = false;
    $scope.selected_adress = String;
    $scope.selected_time=String;
    $scope.selected_date = "";
    $scope.taskId;
    $scope.paymentLogo = '../pictures/credit-card-copy.png';
    $scope.timeLogo = '../pictures/clock-circular-outline.png';
    $scope.detailLogo = '../pictures/edit-copy.png';
    $scope.name = $cookies.get('name');
    $scope.balance = $cookies.get('balance');
    $scope.taskName = $cookies.get('nameOfTask');
    console.log('name of task');
    $scope.canPayCredit;
    $scope.daysOfWeek=[
       {name:'شنبه', value:0},
        {name:'یکشنبه', value:1},
        {name:'دوشنبه', value:2},
        {name:"سه‌شنبه", value:3},
       {name:'چهار‌شنبه', value:4},
        {name:"پنج‌شنبه", value:5},
        {name:'جمعه',value:6}
    ];


    if($location.path() == '/task-sub/class'){
        $scope.selectedClass = $cookies.get('className');
        taskService.getTaskOfClass.get({classtitle:$cookies.get('taskClass')},function (response) {
            $scope.taskofClass = response.task;
            console.log(response);
        },function (err) {
            console.log(err);
        });
    }

    if($location.path() == '/task-sub/questions'){
        $scope.detailLogo = '../pictures/edit-copy-blue.png';
            taskService.getTask.get({tasktitle: $cookies.get('tasktitle')}, function (response) {
            $scope.questions = response.questions;
            $scope.summ = response.summary;
        },function (err) {
            console.log(err);
        });
        $cookies.put('orderstatus', 'درحال بررسی');
        $cookies.put('paymentstatus', 'انجام نشده');
    }
    if($location.path() == '/task-sub/time-set') {
        var today = moment();
        var todayNum = today.day()+1;

        $scope.timeLogo = '../pictures/clock-circular-outline-blue.png';
        taskService.getAddress.get(function (response) {
            $scope.adresses = response.addresses;
            console.log($scope.adresses);
        }, function (err) {
            console.log(err);
        });
        taskService.taskTimes.GETIT({tasktitle:$cookies.get('tasktitle')},function (response) {
            $scope.times = response.times;
            $scope.days=[];
            $scope.duedate;
            $scope.day = response.day;
            $scope.year = response.year;
            $scope.month = response.month;
            console.log(response);
            $scope.times.forEach(function (times) {
                if(times.day == todayNum){
                    $scope.days.push({slots:$scope.daysOfWeek[times.day].name + " امروز ",value:times, dayNum:$scope.daysOfWeek[times.day].value});
                }
                else if(times.day > todayNum){
                    $scope.days.push({slots:$scope.daysOfWeek[times.day].name + " هفته جاری ", value:times, dayNum:$scope.daysOfWeek[times.day].value});

                }
                else if(times.day < todayNum){
                    $scope.days.push({slots:$scope.daysOfWeek[times.day].name + " هفته آینده ", value:times, dayNum:$scope.daysOfWeek[times.day].value});
                }
            });
        },function (err) {
            console.log(err);
        });
    }
    $scope.getavailableTimes=function () {
       return $scope.selected_date.value.times;
    };
    if($location.path() == '/task-sub/result'){
        $scope.paymentLogo = '../pictures/credit-card-copy-blue.png';
        var taskid = $cookies.get('taskid');
        $scope.orderStatus = $cookies.get('orderstatus');
        $scope.paymentStatus = $cookies.get('paymentstatus');
        $scope.track_code = $cookies.get('tracking_code');

        taskService.setStatus();
        taskService.getTaskReceipt.get({taskid:taskid},function (response) {
            $scope.taskReceipt = response;
            console.log(response);
        },function (err) {
            console.log(err);
        });

    }
    $scope.navigate2 = function (title) {
        $cookies.put('tasktitle',title);
        $location.path('/task-sub/questions');
    }
    $scope.payment = function (type) {
        taskService.postPaymentType.post({taskid:taskid,type:type},function (response) {
            // console.log(response);
            if(type == 'Bank')
                window.location.href = response.url;
        },function (err) {
            console.log(err);
        });
        if(type == 'Credit'){
            if(Number($scope.taskReceipt.price) > Number($scope.balance))
                $scope.canPayCredit = false;
            else
                $scope.canPayCredit = true;
        }
    }

    $scope.creditPayment = function () {
        var newBalance = Number($scope.balance) - Number($scope.taskReceipt.price);
        $cookies.put('balance',parseInt(newBalance));
        $cookies.put('paymentstatus','انجام شد');
        window.location.reload(true);
    }
    $scope.typeNewAdress = function () {
        if($scope.addNewAdress == false)
            $scope.addNewAdress = true;
        else
            $scope.addNewAdress = false;
    }
    $scope.addAdress =function (newAdd) {
        console.log(newAdd);
        var adaddress = {'title':'work',
            'address':newAdd
        }
        taskService.postNewAddress.post(adaddress,function (response) {
            taskService.getAddress.get(function (response) {
                $scope.adresses = response.addresses;
                $scope.addNewAdress = false;
                console.log($scope.adresses);
            },function (err) {
                console.log(err);
            });
        });
    }


    $scope.setTime = function () {
        $scope.taskId = $cookies.get('taskid');
        var today = moment();
        var todayNum = today.day()+1;
        console.log('selected date is',$scope.selected_date);
        if($scope.selected_date.dayNum == todayNum){
            $scope.duedate = response.year+'/' +$scope.month+'/'+$scope.day;
        }
        else if($scope.selected_date.dayNum > todayNum){
            var days_left = $scope.selected_date.dayNum - todayNum;
            var day,month,year;
            if($scope.month<=6 && $scope.month >=1 && ($scope.day+ days_left)>31){
                $scope.duedate = $scope.year+'/' +$scope.month+1+'/'+($scope.day+ days_left-31);
            }
            else if($scope.month<=11 && $scope.month >=7 && ($scope.day+ days_left)>30){
                $scope.duedate = $scope.year+'/' +$scope.month+1+'/'+($scope.day+ days_left-30);
            }
            else if($scope.month==12 && $scope.day+ days_left>29){
                $scope.duedate = ($scope.year+1)+'/' +1+'/'+($scope.day+ days_left-29);
            }
            else{
                $scope.duedate = $scope.year+'/' +$scope.month+'/'+($scope.day+ days_left);
            }
        }
        else if($scope.selected_date.dayNum < todayNum){
            var days_left2 = 7-(todayNum-$scope.selected_date.dayNum);
            if($scope.month<=6 && $scope.month >=1 && ($scope.day+ days_left2)>31){
                $scope.duedate = $scope.year+'/' +$scope.month+1+'/'+($scope.day+ days_left2-31);
            }
            else if($scope.month<=11 && $scope.month >=7 && ($scope.day+ days_left2)>30){
                $scope.duedate = $scope.year+'/' +$scope.month+1+'/'+($scope.day+ days_left2-30);
            }
            else if($scope.month==12 && $scope.day+ days_left2>29){
                $scope.duedate = ($scope.year+1)+'/' +1+'/'+($scope.day+ days_left2-29);
            }
            else{
                $scope.duedate = $scope.year+'/' +$scope.month+'/'+($scope.day+ days_left2);
            }
        }
        var taskTime = {
            'taskid':$scope.taskId,
            'address':$scope.selected_adress,
            'repeat':'',
            'date':$scope.duedate,
            'time':$scope.selected_time
        };
        console.log($scope.taskId);

        taskService.postTaskTime.post({tasktitle:$cookies.get('tasktitle')},taskTime,function (response) {
            $cookies.put('taskid',response.taskid);
            console.log(response);
            $location.path('/task-sub/result');

        },function (err) {
            console.log(err);
        });
    };
    $scope.sendInfo = function () {
        for(var i=0 ; i < $scope.questions.length ; i++){
            $scope.taskQuestionForm.key_value.push({
                'question':$scope.questions[i].question,
                'answer':$scope.radioAnswer[i]
            });
        }
        $scope.taskQuestionForm.description = $scope.aditionalInfo;
        taskService.postTaskInfo.post({tasktitle:$cookies.get('tasktitle')},$scope.taskQuestionForm,function (response) {
            $cookies.put('taskid',response.task);
            // console.log(response);
            console.log($cookies.get('taskid'));
            $location.path('/task-sub/time-set');
        },function (err) {
            console.log(err);
        })
    }
}]);

app.filter('nameOfSelectedDay',function () {
    return function (day) {
        return day.slots;
    }
});