app.controller('Login', ['$scope', '$http', '$window', '$cookies', '$rootScope',
    function($scope, $http, $window, $cookies, $rootScope) {
        $scope.alert = {"success": null, "error": null};
        var login = false;

        // SEND XHR REQUST TO TARGET URL WITH METHOD AND DATA

            var sendXHR = function(method, target, data, respond){
                $http({
                    "url": target,
                    "method": method,
                    "data": data,
                    "headers": {"Content-Type": 'application/json; charset=utf-8'}
                }).then(function success(response) {
                    var data = response.data;
                    $scope.alert.success = translation[language].login[data.msg.toLowerCase()];

                    // put cookies to authentication
                    if(typeof respond.put_cookies !== 'undefined' && respond.put_cookies != null){
                        $cookies.put('token', data.data.token);
                    }
                    
                    // redirect in 3 seconds
                    if(typeof respond.redirect !== 'undefined' && respond.redirect != null){
                        setTimeout(function(){
                            $window.location.href = respond.redirect;
                        }, 3000);
                    } else if(typeof data.callback !== 'undefined' && data.callback != null) {
                        $window.location.href = data.callback;                        
                    }
                }, function failed(response) {
                    $scope.alert.success = null;
                    $scope.alert.error = translation[language].login[data.msg.toLowerCase()];
                    return false;
                });
            }
    
            $scope.login = function() {
                var respond = {"redirect": '/', "put_cookies": true};
                sendXHR('post', route.api.login, $scope.auth, respond);
            }    
    }
]);