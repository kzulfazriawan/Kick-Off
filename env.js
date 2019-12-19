var uri = {
    "root": "",
    "api": "http://localhost:8000/api",
}

var route = {
    "api": {
        "login": uri.api + '/authentication/login',
        "users": uri.api + '/users',
        "user" : uri.api + '/user',
        "profile": uri.api + '/user/profile'
    }
}

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