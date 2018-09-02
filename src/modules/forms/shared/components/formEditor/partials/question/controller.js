export default function ($scope, $mdMenu) {
    $scope.$mdMenu = $mdMenu;

    $scope.setQuestionType = function (type) {
        $scope.question.type = type;
    }

    $scope.toggleValidation = function (question) {
        if (question.validation) {
            delete question.validation;
        } else {
            question.validation = {};
        }
    }
}
