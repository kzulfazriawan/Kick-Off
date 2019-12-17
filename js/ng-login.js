app.controller('Login', ['$scope', '$http', '$window', '$cookies', '$rootScope',
    function($scope, $http, $window, $cookies, $rootScope) {
        $scope.alert = {"success": null, "error": null};

        // SEND XHR REQUST TO TARGET URL WITH METHOD AND DATA
        var sendXHR = function(method, target, data, response){
            $http({
                "url": target,
                "method": method,
                "data": data,
                "header": {"Content-Type": 'application/json; charset=utf-8'}
            }).then(function success(response) {
                var data = response.data;
                if(response.status == 200 && data.status == 'success'){
                    $scope.alert.success = data.message;

                    // put cookies to authentication
                    if(typeof response.put_cookies !== 'undefined' && response.put_cookies != null){
                        $cookies.put('token', data.token);
                        $cookies.put('user', data.user);
                        $cookies.put('role', data.role);
                    }
                    
                    // redirect in 3 seconds
                    if(typeof response.redirect !== 'undefined' && response.redirect != null){
                        setTimeout(function(){
                            $window.location.href = response.redirect;
                        }, 3000);
                    } else if(typeof data.callback !== 'undefined' && data.callback != null) {
                        $window.location.href = data.callback;                        
                    }
                } else {
                    $scope.alert.error = data.message;
                    return false;
                }
            }, function failed(response) {
                $scope.alert.error = 'Request Timeout, try Refresh(F5)';
                return false;
            });
        }

        $scope.login  = sendXHR('post', route.api.login, $scope.auth, {"redirect": '/', "put_cookies": true});
        $scope.forget = sendXHR('post', route.api.forget, $scope.forget, null);
    }
]);