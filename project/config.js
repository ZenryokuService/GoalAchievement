app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
      template: "<h1>Template Test</h1>"
//    templateUrl : "main.htm"
  })
  .when("/red", {
    templateUrl : "red.htm"
  })
  .when("/green", {
    templateUrl : "green.htm"
  })
  .when("/blue", {
    templateUrl : "blue.htm"
  });
});