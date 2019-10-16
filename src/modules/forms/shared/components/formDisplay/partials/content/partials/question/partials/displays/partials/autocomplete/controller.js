export default function ($scope, $http) {
    $scope.querySearch = async function (searchText) {
        let response = await $http.get($scope.question.source.url);
        
        return response.data;
    };
}
