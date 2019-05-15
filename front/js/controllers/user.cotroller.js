/**
 * Created by hooman on 11/9/16.
 */
app.controller('userController',function ($scope, userService , $location, authentication,taskService,$cookies) {
    $scope.user;
    var oldSearchText = '';
    $scope.selected_ones = [];
    $scope.tasks = [];
    $scope.selectedTask ={};
    $scope.textSearch=""

    $scope.noItem = false;
    var result;
    $scope.userUpdate = {};
    $scope.name = $cookies.get('name');
    $scope.balance = $cookies.get('balance');

    if($location.path() == '/profile'){
        taskService.getTasks.get(function (response) {
            $scope.tasks = response.tasks;
            console.log($scope.tasks);
        }, function (err) {
            console.log(err);
        });

        userService.Infos.get(function (response) {
            console.log(response);
            $scope.user = response;
            $cookies.put('name',response.name);
            $cookies.put('balance',response.balance);

            $scope.name = $cookies.get('name');
            $scope.balance = $cookies.get('balance');

            $scope.userUpdate.name = response.name;
            $scope.userUpdate.phone_number = response.mobile;
            $scope.userUpdate.email = response.email;
            $scope.userUpdate.home = response.home;
        },function (err) {
            console.log(err);
        });

        taskService.getTaskClass.get(function (response) {
            $scope.taskClasses = response.classes;
            for(var i=0 ; i < $scope.taskClasses.length;i++){
                var image = 'url('+$scope.taskClasses[i].photo+');';
                console.log(image);
                $('job').css('background',image);

            }
        });
        $scope.goToTaskClass = function (classTask) {
            $cookies.put('taskClass',classTask.title);
            $cookies.put('className',classTask.name);
            $location.path('/task-sub/class');
        };
    }

    if($location.path() == '/dashboard/infos' || $location.path() == '/dashboard/edit-infos'){
        userService.Infos.get(function (response) {
            console.log(response);
            $scope.user = response;
            $scope.userUpdate.name = response.name;
            $scope.userUpdate.phone_number = response.mobile;
            $scope.userUpdate.email = response.email;
            $scope.userUpdate.home = response.home;
        },function (err) {
            console.log(err);
        });
    }

    $scope.searchIn= function () {
        if($scope.textSearch.length === 0) {
            $('#searchRes').css('display', 'none');
            return [];
        }
        else {
            $scope.selected_ones.splice(0, $scope.selected_ones.length);
            for (var i = 0; i < $scope.tasks.length; i++) {
                if ($scope.tasks[i].title.indexOf($scope.textSearch) != -1) $scope.selected_ones.push($scope.tasks[i]);
            }
            oldSearchText = $scope.textSearch;
            console.log(oldSearchText);
            if($scope.selected_ones.length !=0 )
                $('#searchRes').css('display','');

            return $scope.selected_ones;
        }
    }
    $scope.navigate2 = function (title) {
        $cookies.put('tasktitle',title);
        $location.path('/task-sub/questions');
    }

    $scope.update = function () {
        userService.editInfos.update($scope.userUpdate,function (response) {
            console.log(response);
            $location.path('/dashboard/infos');
        },function (err) {
            console.log(err);
        });
    }
    $scope.logout = function () {
        authentication.logOut();
    }
    if($location.path() == '/dashboard/reports') {
        userService.getTasks.get(function (response) {
                $scope.tasks = response.tasks;
                console.log($scope.tasks);

        }, function (err) {
                console.log(err);
            });
            if($scope.tasks.length == 0){
                $scope.noItem = false;
            }
    }
    if($location.path() == '/dashboard/payments'){
        userService.getPayments.get(function (response) {
            $scope.payments = response.transactions;
            console.log($scope.payments);
        },function (err) {
            console.log(err);
        });
    }

    $scope.resetpass = function () {
        userService.resetpass.post({password:$scope.password, newpassword:$scope.newpassword},function (response) {
            console.log(response);
            $location.path('/infos');
        },function (err) {
            console.log(err);
        })
    }

    $scope.raise_credit = function () {
        userService.raiseCredit.post({amount:$scope.amount},function (response) {
            window.open(response.bank_url);
            console.log('ok');
        },function (err) {
            console.log(err);
        });
    }

    $scope.getSelectedTask = function (selectedTask) {
        $scope.selectedTask = selectedTask;
    }
});
