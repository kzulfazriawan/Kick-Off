app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl : "/parts/pages/dashboard.html",
        controller: "Dashboard"
    })

    // Users categories =============================
    .when("/users", {
        templateUrl : "/parts/pages/users/show.html",
        controller: "Users"
    })
    .when("/user/create", {
        templateUrl : "/parts/pages/users/create.html",
        controller: "Users"
    })
    // ============================= Users categories

    // Mitra categories =============================
    .when("/mitras", {
        templateUrl : "/parts/pages/mitra/show.html",
        controller: "Mitra"
    })
    .when("/mitra/create", {
        templateUrl : "/parts/pages/mitra/create.html",
        controller: "Mitra"
    })
    .when("/mitra/:mitraId", {
        templateUrl : "/parts/pages/mitra/detail.html",
        controller: "Mitra"
    })
    // ============================= Mitra categories

    // Agents categories =============================
    .when("/agents", {
        templateUrl : "/parts/pages/agents/show.html",
        controller: "Agents"
    })
    .when("/agent/create", {
        templateUrl : "/parts/pages/agents/create.html",
        controller: "Agents"
    })
    .when("/agent/:agentId", {
        templateUrl : "/parts/pages/agents/detail.html",
        controller: "Agents"
    })
    // ============================= Agents categories

    .when("/finance/cashflow", {
        templateUrl : "/parts/pages/finance/cashflow.html",
        controller: "Agents"
    })
    // ============================= Agents categories

    // Mitra categories =============================
    .when("/tasks", {
        templateUrl : "/parts/pages/tasks/show.html",
        controller: "Tasks"
    })
    .when("/tasks/create", {
        templateUrl : "/parts/pages/tasks/create.html",
        controller: "Tasks"
    })

});