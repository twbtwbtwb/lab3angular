angular.module('app', [])
    .controller('mainCtrl', mainCtrl)
    .directive('avatar', avatarDirective);

function mainCtrl($scope) {
    $scope.users = [];
    $scope.addNew = function(user) {
        $scope.users.push({
            name: user.name,
            email: user.email,
            avatarUrl: user.url
        });

        user.name = '';
        user.email = '';
        user.url = '';
    };
}

function avatarDirective() {
    return {
        scope: {
            user: '='
        },
        restrict: 'E',
        replace: 'true',
        template: (
            '<div class="Avatar">' +
            '<img ng-src="{{user.avatarUrl}}" />' +
            '<h4>{{user.name}}</h4>' +
            '<h5>{{user.email}}</h5>' +
            '</div>'
        ),
        link: link
    };

    function link(scope) { /* [4] */
        if (!scope.user.avatarUrl) {
            scope.user.avatarUrl = 'https://www.drupal.org/files/issues/default-avatar.png';
        }
    }
}
