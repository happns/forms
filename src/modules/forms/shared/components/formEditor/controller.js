export default function ($scope, $timeout, $mdMedia) {
    var defaultQuestion = { type: 'question', question: { options: [{}], type: 'radioButtonList' } };
    var defaultHeading = { type: 'heading' };

    $scope.editingItem;

    $scope.sortable = {
        options: {
            accept: function (sourceItemHandleScope, destSortableScope, destItemScope) {
                var isTheSameScope = sourceItemHandleScope.sortableScope.$id === destSortableScope.$id;
                var isLocked = _.get(destItemScope, 'item.settings.locked');

                return isTheSameScope && !isLocked;
            }
        }
    }

    $scope.copyItem = function (item) {
        var duplicate = angular.copy(item);

        $scope.form.items.push(duplicate);
        $scope.setEditingItem(duplicate);
    }

    $scope.deleteItem = function (item) {
        var index = $scope.form.items.indexOf(item);

        $scope.form.items.splice(index, 1);
    }

    $scope.addNewItemFromTemplate = function (itemTemplate) {
        var item = angular.copy(itemTemplate);

        $scope.form.items.push(item);
        $scope.setEditingItem(item);

        return item;
    }

    $scope.addNewQuestion = function () {
        return $scope.addNewItemFromTemplate(defaultQuestion);
    }

    $scope.addNewHeading = function () {
        return $scope.addNewItemFromTemplate(defaultHeading);
    }

    $scope.setEditingItem = function (item, $event) {
        $scope.editingItem = item;

        if ($event) {
            let currentTarget = $event.currentTarget;
            currentTarget.select && currentTarget.select();
        }
    }

    var placeEditingMenuPosition = function () {
        var editingMenu = document.querySelector('form-editor_editing-menu');
        var editable = document.querySelector('.editable.editing');

        if (!editable) {
            editable = document.querySelector('.editable');
        }

        if (!editable) {
            return;
        }

        var { top, left, width, height } = editable.getBoundingClientRect();

        angular.element(editingMenu).css({ top, left: left + width + 15 });
        angular.element(editingMenu).css('display', 'block');
    };

    $scope.$watch('editingItem', function () {
        $timeout(function () {
            if ($mdMedia('gt-sm')) {
                placeEditingMenuPosition();
            }
        });
    });
}
