angular.module("mailApp",["ui.router"])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("home", {
      url: "/home",
      templateUrl: "views/homeTemplate.html"
    })
    .state("emailer",{
      url: "/emailer",
      templateUrl: "views/emailerTemplate.html",
      controller: "emailerController"
    })

  $urlRouterProvider
    .otherwise("/home");
})
