app.controller('Tasks', ['$scope', '$http', '$window', '$cookies', '$rootScope','Upload',
    function($scope, $http, $window, $cookies, $rootScope, Upload) {
        var upload = function(target, data){
            data = data;

            Upload.upload({
                url: target,
                data: data,
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer '+ $rootScope.session.token
                }
            }).then(function(response){
                console.log(response);
            });
        }

        $scope.uploadTask = function(){
            var target = route.api.task;
            upload(target, $scope.form);
        }
    }
]);