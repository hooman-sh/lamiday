/**
 * Created by hooman on 10/5/16.
 */
var app = angular.module('mainApp',["ngMessages","ngAria","ngResource","ngAnimate",'ngTouch','ui.router','ngCookies']);

app.config(function ($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('mainpage',{
            url:'/',
            template:'<main-page></main-page>'
        })
        .state('profile',{
            url:'/profile',
            template:'<user-profile></user-profile>'
        })
        .state('dashboard',{
            url:'/dashboard',
            template:'<dashboard-controll></dashboard-controll>'
        })
        .state('dashboard.editinfos',{
            url:'/edit-infos',
            template:'<edit-infos></edit-infos>'
        })
        .state('dashboard.infos',{
            url:'/infos',
            template:'<infos></infos>'
        })
        .state('dashboard.payments',{
            url:'/payments',
            template:'<payments></payments>'
        })
        .state('dashboard.reports',{
            url:'/reports',
            template:'<reports></reports>'
        })
        .state('dashboard.resetPass',{
            url:'/reset-pass',
            template:'<resetpass></resetpass>'
        })
        .state('dashboard.cash',{
            url:'/cash',
            template:'<cash></cash>'
        })
        .state('signup',{
            url:'/signup',
            template:'<signup-page></signup-page>'
        })
        .state('signin',{
            url:'/signin',
            template:'<signin-page></signin-page>'
        })
        .state('companyCorp',{
            url:'/company-corp',
            template:'<company-corp></company-corp>'
        })
        .state('companySub',{
            url:'/company-sub',
            template:'<company-submit></company-submit>'
        })
        .state('taskSub',{
            url:'/task-sub',
            template:'<task-submit></task-submit>'
        })
        .state('taskSub.timeSet',{
            url:'/time-set',
            template:'<task-subt></task-subt>'
        })
        .state('taskSub.question',{
            url:'/questions',
            template:'<task-subq></task-subq>'
        })
        .state('taskSub.results',{
            url:'/result',
            template:'<task-subres></task-subres>'
        })
        .state('taskSub.classes',{
            url:'/class',
            template:'<task-class></task-class>'
        })
        .state('about_us',{
            url:'/about_us',
            template:'<about-us></about-us>'
        })
        // .state('useless',{
        //     url:'/collapseOne'
        // })
        // .state('useless2',{
        //     url:'/collapseTwo'
        // });

}).run(['$rootScope','$location','authentication', function ($rootScope,$location,authentication) {
    $rootScope.$on('$routeChangeStart', function (event, nextRoute, currentRoute) {
        // if($rootScope.loggedInUser == null)
            console.log('hiiiiiiiiiiiiiii');
        // if( !authentication.isLogedIn()){
        //     $location.path('/signin');
        //     console.log('not signed in');
        // }
    })
}]);
