// MAIN URL
var uri = {
    "root": "",
    //"api": "http://localhost:8000/api",
    "api": "http://localhost:5000"
}

// ROUTE LOCATION
var route = {
    "api": {
//        "login": uri.api + '/authentication/login',
        "login": uri.api + '/auth/login',
        "self": uri.api + '/user/self',
        "user" : uri.api + '/user',
        "mitra": uri.api + '/mitra',
        "task": uri.api+ '/task/',
        "profile": uri.api + '/user/profile'
    }
}

// LANGUAGE
var en = {
    "login":{
        "ok": "Welcome! You'll be redirecting in 3 sec",
        "notfound": "Your authorization isn't exist"
    },
    "global":{
        "NotFound": "Data Not Found"
    }
}

var language = 'en';
var translation = {
    "en": en
}

var app_name = 'My-App';