app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl : "/parts/pages/dashboard.html",
        controller: "Dashboard"
    })

    // USERS CATEGORY =============================
    .when("/users", {
        templateUrl : "/parts/pages/users/show.html",
        controller: "Users"
    })
});