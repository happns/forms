export default function($scope, $timeout, $mdMedia) {
    var defaultQuestion = { type: 'question', question: { options: [{}], type: 'radioButtonList' } };
    var defaultHeading = { type: 'heading' };

    var sections;

    $scope.editingItem;
    $scope.editingSection;

    $scope.sortable = {
        options: {
            accept: function(sourceItemHandleScope, destSortableScope, destItemScope) {
                var isTheSameScope = sourceItemHandleScope.sortableScope.$id === destSortableScope.$id;
                var isLocked = _.get(destItemScope, 'item.settings.locked');

                return isTheSameScope && !isLocked;
            }
        }
    }

    $scope.copyItem = function(item) {
        var duplicate = angular.copy(item);

        $scope.editingSection.items.push(duplicate);
        $scope.setEditingItem(duplicate);
    }

    $scope.deleteItem = function(item) {
        var index = $scope.editingSection.items.indexOf(item);

        $scope.editingSection.items.splice(index, 1);
    }

    $scope.addNewItemFromTemplate = function(itemTemplate) {
        var item = angular.copy(itemTemplate);

        $scope.editingSection.items.push(item);
        $scope.setEditingItem(item, $scope.editingSection);

        return item;
    }

    $scope.addNewQuestion = function() {
        return $scope.addNewItemFromTemplate(defaultQuestion);
    }

    $scope.addNewHeading = function() {
        return $scope.addNewItemFromTemplate(defaultHeading);
    }

    $scope.addNewSection = function() {
        if (!$scope.hasSections($scope.form)) {
            $scope.form.items = [{
                type: 'section',
                items: $scope.form.items
            }];
        }

        $scope.form.items.push({
            type: 'section',
            items: []
        });
    }

    $scope.setEditingItem = function(item, section, $event) {
        $scope.editingSection = section
        $scope.editingItem = item;

        if ($event) {
            let currentTarget = $event.currentTarget;
            currentTarget.select && currentTarget.select();

            $event.stopPropagation();
        }
    }

    $scope.hasSections = function(form) {
        return form.items[0].type === 'section';
    }

    $scope.getSections = function() {

        if ($scope.hasSections($scope.form)) {
            return $scope.form.items;
        } else {
            sections = sections || [{ type: 'section', items: $scope.form.items }];
            return sections;
        }
    };

    var placeEditingMenuPosition = function() {
        const editingMenu = document.querySelector('form-editor_editing-menu');

        let editable = document.querySelector('.editable.editing');

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

    $scope.$watch('editingItem', function() {
        $timeout(function() {
            if ($mdMedia('gt-sm')) {
                placeEditingMenuPosition();
            }
        });
    });

    const formEditor = document.querySelector('form-editor');

    $scope.$watch(() => formEditor.getBoundingClientRect().top, () => {
        const editingMenu = document.querySelector('form-editor_editing-menu');

        let top = Math.max(editingMenu.getBoundingClientRect().top, 0);
        const formEditorBoundingClientRect = formEditor.getBoundingClientRect();

        const minTop = formEditorBoundingClientRect.top;
        const maxTop = formEditorBoundingClientRect.top + formEditorBoundingClientRect.height - editingMenu.getBoundingClientRect().height;

        top = Math.min(Math.max(top, minTop), maxTop);

        angular.element(editingMenu).css({ top });
    })
}