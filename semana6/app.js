(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

angular.module('LunchCheck').directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if(event.which === 13) {
                scope.$apply(function(){
                    scope.$eval(attrs.ngEnter, {'event': event});
                });

                event.preventDefault();
            }
        });
    };
});

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.list = null;
  $scope.message = "";

  $scope.checkLunch = function () {
    if(!$scope.list || $scope.list === "" || $scope.list.length == 0) {
      $scope.message = "Please enter data first";
      $scope.list = "";
      return;
    }
    var splitted = $scope.list.split(",");
    var count = 0;
    for(var i = 0; i < splitted.length; i++) {
      if(splitted[i] && splitted[i].trim().length > 0) {
        count++;
      }
    }
    if(count == 0) {
      $scope.message = "Please enter data first";
      $scope.list = "";
      return;
    }
    if(count <= 3) {
      $scope.message = "Enjoy!";
    } else {
      $scope.message = "Too much!";
    }

  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}

})();
