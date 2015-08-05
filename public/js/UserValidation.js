var app = angular.module('Codeloud', ['UserValidation']);

angular.module('UserValidation', []).directive('validPasswordC', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue, $scope) {
                var noMatch = viewValue != scope.register.password.$viewValue
                ctrl.$setValidity('noMatch', !noMatch)
            })
        }
    }
})