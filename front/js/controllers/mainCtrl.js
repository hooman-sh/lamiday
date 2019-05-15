/**
 * Created by hooman on 10/13/16.
 */
app.controller('mainCtrl',['$scope','$q','taskService','$location','$cookies','authentication',function($scope,$q,taskService,$location,$cookies,authentication){
    var oldSearchText = '';
    $scope.selected_ones = [];
    $scope.tasks = [];
    $scope.taskClasses = [];
    $scope.textSearch = '';
    $scope.userSignedin;
    $scope.name = $cookies.get('name');
    $scope.balance = $cookies.get('balance');
    if(authentication.isLogedIn()){
        $scope.userSignedin = true;
        console.log('signed in');
    }else {
        $scope.userSignedin = false;
        console.log('signed out');
    }
    if($location.path() === '/') {
        taskService.getTasks.get(function (response) {
            $scope.tasks = response.tasks;
            console.log($scope.tasks);
        }, function (err) {
            console.log(err);
        });

        taskService.getTaskClass.get(function (response) {
            $scope.taskClasses = response.classes;
            console.log($scope.taskClasses);
        },function (err) {
            console.log(err);
        });
    }
    $scope.goToTaskClass = function (classTask) {
        if(!authentication.isLogedIn()){
            $location.path('/signin');
        }else {
            $cookies.put('taskClass', classTask.title);
            $cookies.put('className', classTask.name);
            $cookies.put('nameOfTask',$scope.tasks.title);
            $location.path('/task-sub/class');
        }
    };
    $scope.logout = function () {
        authentication.logOut();
        window.location.reload(true);
    };
    $scope.searchIn= function () {
        if($scope.textSearch.length === 0) {
            $('#searchRes').css('display','none');
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
    };
    $scope.navigate = function () {
        $('#modal2').modal("hide");
        setTimeout(function () {
            $location.path('/company-sub');
        },500);
    };

    $scope.navigate2 = function (title) {
        if(!authentication.isLogedIn()){
            $location.path('/signin');
        }else{
            $cookies.put('tasktitle',title);
            $location.path('/task-sub/questions');
        }
    }

}]);
