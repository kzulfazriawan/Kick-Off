app.controller('Tasks', ['$scope', '$http', '$window', '$cookies', '$rootScope','Upload', '$route', '$routeParams',
    function($scope, $http, $window, $cookies, $rootScope, Upload, $route, $routeParams) {
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

        var getXHR = function(target, auth, respond){
            var header = {"Content-Type": 'application/json; charset=utf-8'};
            if(typeof auth !== 'undefined' && auth != null) {
                header.Authorization = 'Bearer ' + $rootScope.session.token
            }

            $http.get(target, {"headers": header}).then(function success(response) {
                var data = response.data;
                $scope.data = data.data;

                if(respond != null){
                    if(typeof respond.redirect !== 'undefined' && respond.redirect != null){
                        $window.location.href = respond.redirect;
                    }
                }
            }, function failed(){

            });
        }

        $scope.initGetAll = function(){
            getXHR(route.api.tasks, true, null);
        }

        $scope.initGetOne = function(target){
            if(target == 'detail'){
                getXHR(route.api.task + '?endpoint=' + $routeParams.endpoint, true, null)
            } else {
                getXHR(route.api.task_generate + '?endpoint=' + $routeParams.endpoint, true, null)
            }
        }

        $scope.uploadTask = function(){
            var target = route.api.task;
            upload(target, $scope.form);
        }
    }
]);