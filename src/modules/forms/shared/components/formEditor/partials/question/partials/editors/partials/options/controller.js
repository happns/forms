export default function ($scope, $timeout) {
    $scope.item = $scope.$parent.item;
    $scope.question = $scope.$parent.question;

    $scope.setEditingItem = $scope.$parent.setEditingItem;

    $scope.addNewOption = function ($event) {

        var focusAddedOption = () => {
            $($event.currentTarget)
                .closest('.answer-editor')
                .find('input')
                .last()
                .focus();
        }

        $scope.question.options.push({});
        $timeout(focusAddedOption);
    }

    $scope.deleteOption = function (option) {
        var index = $scope.question.options.indexOf(option);

        $scope.question.options.splice(index, 1);
    }

    $scope.sortable = {
        options: {
            accept: function (sourceItemHandleScope, destSortableScope) {
                var isTheSameScope = sourceItemHandleScope.sortableScope.$id === destSortableScope.$id;

                return isTheSameScope;
            }
        }
    }
}
