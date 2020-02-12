export default function ($scope) {
    $scope.question.answer = [];

    $scope.toggle = function (item, list) {
        var idx = list.indexOf(item.name);
        if (idx > -1) {
            list.splice(idx, 1);
        }
        else {
            list.push(item.name);
        }
    };

    $scope.exists = function (item, list) {
        return list && list.indexOf(item.name) > -1;
    };
}
