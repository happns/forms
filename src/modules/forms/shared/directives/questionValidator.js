import validator from 'validator-js/validator';

export default function() {
    angular.extend(validator, {
        gt: function(value, param) {
            return validator.isInt(value, { gt: param });
        },
        lt: function(value, param) {
            return validator.isInt(value, { lt: param });
        },
        gte: function(value, param) {
            return validator.isInt(value, { min: param });
        },
        lte: function(value, param) {
            return validator.isInt(value, { max: param });
        },
        eq: function(value, param) {
            return value === param;
        },
        ne: function(value, param) {
            return value !== param;
        },
        notContains: function(value, param) {
            return !validator.contains(value, param);
        },
        notMatches: function(value, param) {
            return !validator.matches(value, param);
        }
    });

    return {
        require: 'ngModel',
        link: function(scope, elem, attr, ngModel) {
            var validationItem = scope.question.validation ? scope.question.validation.items[0] : undefined;

            if (validationItem) {
                //For DOM -> model validation
                ngModel.$parsers.unshift(function(value) {
                    var isValid = value ? validator[validationItem.name](value.toString(), validationItem.param) : false;

                    ngModel.$setValidity(validationItem.name, isValid);
                    return isValid ? value : undefined;
                });

                //For model -> DOM validation
                ngModel.$formatters.unshift(function(value) {
                    var isValid = value ? validator[validationItem.name](value.toString(), validationItem.param) : false;

                    ngModel.$setValidity(validationItem.name, isValid);
                    return value;
                });
            }
        }
    };
}