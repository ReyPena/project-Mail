angular.module("mailApp").controller("emailerController",function ($scope, $http) {
  $scope.email =[
    {
      emailAddress: "",
      subject: "",
      message: ""
    }
  ];

  $scope.submit = function () {
    var emailData = {
      // TODO: Place key in file not tracked by git
      key: "WxHumDCrhCP78sBDaNb9xg",
      message: {
        from_email: "mailapp@zonicblack.com",
        to: [
          {
            email: $scope.email.emailAddress,
            type: "to"
          }
        ],
        subject: $scope.email.subject,
        html: $scope.email.message
      }
    };

    var request = {
      method: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: emailData
    };
    console.log(request);
    $http(request).success(function successCallback(response){
      console.log(response);
    });
  };
});
