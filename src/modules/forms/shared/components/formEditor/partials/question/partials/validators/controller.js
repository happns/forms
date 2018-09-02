export default function ($scope) {

    const validatorMap = [
        [['number', 'gt'], 'gt'],
        [['number', 'gte'], 'gte'],
        [['number', 'lt'], 'lt'],
        [['number', 'lte'], 'lte'],
        [['number', 'eq'], 'eq'],
        [['number', 'ne'], 'ne'],
        [['text', 'contains'], 'contains'],
        [['text', 'notContains'], 'notContains'],
        [['text', 'isEmail'], 'isEmail'],
        [['text', 'isURL'], 'isURL'],
        [['regex', 'matches'], 'matches'],
        [['regex', 'notMatches'], 'notMatches']
    ];

    const hasTextParam = [ 'contains', 'notContains', 'matches', 'notMatches' ];
    const hasNumberParam = [ 'gt', 'gte', 'lt', 'lte', 'eq', 'ne' ];

    const defaultValidator = {
        group: validatorMap[0][0][0],
        name: validatorMap[0][0][1]        
    };

    if ($scope.question.validation) {
        $scope.question.validation.items = $scope.question.validation.items || [ defaultValidator ];

        var item = $scope.question.validation.items[0];

        $scope.validator = {
            group: validatorMap.filter(x => x[1] === item.name)[0][0][0],
            name: validatorMap.filter(x => x[1] === item.name)[0][0][1],
            param: item.param,
            message: item.message
        };
    }

    $scope.validator = $scope.validator || {
        group: 'number',
        name: 'gt',
        param: undefined
    };

    $scope.getValidatorsForGroup = function (group) {
        return validatorMap.filter(entry => entry[0][0] === group);
    }

    $scope.hasParam = function (type) {
        const name = $scope.validator.name;
        if (type === 'text') {
            return hasTextParam.indexOf(name) !== -1;
        } else if (type === 'number') {
            return hasNumberParam.indexOf(name) !== -1;
        }
    }

    $scope.$watch('validator.group', (group, oldGroup) => {
        if (group === oldGroup) {
            return;
        }

        delete $scope.validator.param;

        $scope.validator.name = validatorMap.filter(x => x[0][0] === group)[0][1];        
    });

    $scope.$watch('validator', validator => {
        $scope.question.validation.items = [ { name: validator.name, param: validator.param, message: validator.message }];
    }, true);
}
