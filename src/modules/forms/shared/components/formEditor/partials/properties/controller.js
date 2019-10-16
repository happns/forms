export default function ($scope) {
    $scope.getProperties = function () {
        return $scope.form.items.filter(x => x.type === 'property');
    };
}
