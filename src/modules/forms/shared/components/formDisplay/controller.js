export default async function($scope, $resource, FormResource, Config) {
    const endpoint = Config.forms.api.endpoint;

    $scope.loadForm = async({ type }) => {
        let form = await $resource(`${endpoint}/forms/request?@type=${encodeURIComponent(type)}`)
            .get()
            .$promise;

        $scope.form = form;
        $scope.$apply();
    };

    $scope.loadResource = async({ type, client_id }) => {
        const resources = await $resource(`${endpoint}/resources?@type=${encodeURIComponent(type)}`)
            .query({
                client_id
            })
            .$promise;

        $scope.resource = resources[0] || angular.copy($scope.form.request);
        FormResource.toForm($scope.form, $scope.resource);

        $scope.$apply();
    };

    $scope.save = async() => {
        const client_id = $scope.clientId;

        Object.assign($scope.resource, FormResource.fromForm($scope.form));

        $scope.ngForm.$setSubmitted();

        if ($scope.ngForm.$valid) {

            $scope.resource = await FormResource
                .save({ formId: $scope.form._id, client_id }, $scope.resource)
                .$promise;

            $scope.ngForm.$setPristine();
            $scope.ngForm.$setUntouched();

            $scope.$$phase || $scope.$apply();
        }
    };

    $scope.ngModel = $scope;
}