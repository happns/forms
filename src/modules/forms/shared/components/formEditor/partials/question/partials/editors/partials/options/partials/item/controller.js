export default function ($scope) {
    $scope.handleKeyUp = function ($event) {
        if ($event.keyCode == 13) { 
            $scope.addNewOption($event);
        }
    }
}
