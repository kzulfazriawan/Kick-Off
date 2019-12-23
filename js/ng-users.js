app.controller('Users', ['$scope', '$http', '$window', '$cookies', '$rootScope',
    function($scope, $http, $window, $cookies, $rootScope) {
        $scope.data = null;

        var getXHR = function(target, auth, respond){
            var header = {"Content-Type": 'application/json; charset=utf-8'};
            if(typeof auth !== 'undefined' && auth != null) {
                header.Authorization = 'Bearer' + $rootScope.session.token
            }

            $http.get(target, {"headers": header}).then(function success(response) {
                var data = response.data;
                $scope.data = data.data;

                if(typeof respond.redirect !== 'undefined' && respond.redirect != null){
                    $window.location.href = respond.redirect;
                }
            }, function failed(){

            });
        }

        $scope.initGetAll = function(){
            getXHR(route.api.user, true, null);
        }
    }
]);