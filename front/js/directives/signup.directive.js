app.directive('signupPage',function(){
    return{
        restrict:'E',
        scope:{
            info:'='
        },
        controller:'registerController',
        templateUrl: '../html/signup.html'
    }
});