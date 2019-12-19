var app = angular.module('Engine', ['ngCookies','ngFileUpload', 'ngRoute']);
app.controller('Global', ['$scope', '$http', '$window', '$cookies', '$rootScope',
    function($scope, $http, $window, $cookies, $rootScope) {
        $rootScope.session = {};
        $rootScope.alert = {"success": null, "error": null};

        // SEND XHR REQUST TO TARGET URL WITH METHOD AND DATA
        var sendXHR = function(method, target, data, auth, response){
            var header = {"Content-Type": 'application/json; charset=utf-8'};
            if(typeof auth !== 'undefined' && auth != null) {
                header.Authorization = 'Bearer' + $rootScope.session.token
            }

            $http({
                "url": target,
                "method": method,
                "data": data,
                "header": header
            }).then(function success(response) {
                var data = response.data;
                if(response.status == 200 && data.status == 'success'){
                    $rootScope.alert.success = data.message;
                    
                    // redirect in 3 seconds
                    if(typeof response.redirect !== 'undefined' && response.redirect != null){
                        setTimeout(function(){
                            $window.location.href = response.redirect;
                        }, 3000);
                    } else if(typeof data.callback !== 'undefined' && data.callback != null) {
                        $window.location.href = data.callback;                        
                    }
                } else {
                    $rootScope.error = data.message;
                    return false;
                }
            }, function failed(response) {
                $rootScope.error = 'Request Timeout, try Refresh(F5)';
                return false;
            });
        }

        var getXHR = function(target, auth, respond){
            var header = {"Content-Type": 'application/json; charset=utf-8'};
            if(typeof auth !== 'undefined' && auth != null) {
                header.Authorization = 'Bearer' + $rootScope.session.token
            }

            $http.get(target, {"headers": header}).then(function success(response) {
                var data = response.data;
                $rootScope.session.profile = data.data;

                if(typeof respond.redirect !== 'undefined' && respond.redirect != null){
                    $window.location.href = respond.redirect;
                }
            }, function failed(){

            });
        }

        var token = $cookies.get('token');
        if(typeof token === 'undefined' || token == null || token == ''){
            $window.location.href = '/login-dark.html';
        } else {
            $rootScope.session.token = token;

            $scope.initProfile = function(){
                var target = route.api.profile + '/1';
                getXHR(target, true, null);
            }    
        }
    }]
);