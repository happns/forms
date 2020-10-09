class FormValidationError extends Error {
    constructor(params) {
        super(...params);

        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError);
        }
    }
}

export default function ($scope, $resource, FormResource, Config) {
    const endpoint = Config.forms.api.endpoint;

    $scope.loadForm = async ({ type }) => {
        let form = await $resource(`${endpoint}/forms/request?@type=${encodeURIComponent(type)}`)
            .get()
            .$promise;

        $scope.form = form;
        $scope.$apply();
    };

    $scope.loadResource = async ({ type, client_id }) => {
        const resources = await $resource(`${endpoint}/resources?@type=${encodeURIComponent(type)}`)
            .query({
                client_id
            })
            .$promise;

        const resource = resources[0] || angular.copy($scope.form.request);

        $scope.loadResourceFromObject(resource);
    };

    $scope.loadResourceFromObject = async (resource) => {
        $scope.resource = resource;

        FormResource.toForm($scope.form, $scope.resource);
    }

    $scope.save = async () => {
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
        } else {
            throw new FormValidationError('form is not valid')
        }
    };

    $scope.ngModel = $scope;
}