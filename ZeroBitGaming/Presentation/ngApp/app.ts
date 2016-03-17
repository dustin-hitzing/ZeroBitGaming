namespace ZeroBitGaming {
    
    angular.module('ZeroBitGaming', ['ngRoute']);

    angular.module('ZeroBitGaming').factory('authInterceptor',
        ($q: ng.IQService, $window: ng.IWindowService, $location: ng.ILocationService) => {
            return {
                request: (config) => {
                    config.headers = config.headers || {};
                    let token = $window.localStorage.getItem('token');
                    if (token) {
                        config.headers.Authorization = `Bearer ${token}`;
                    }
                    return config;
                },
                responseError: (response) => {
                    if (response.status === 401) {
                        $location.path('/login');
                    }
                    return response || $q.when(response);
                }
            };
        });

    angular.module('ZeroBitGaming')
        .config(function ($routeProvider: ng.route.IRouteProvider, $httpProvider: ng.IHttpProvider) {

            $httpProvider.interceptors.push('authInterceptor');

            $routeProvider.when('/quiz', {
                templateUrl: '/Presentation/ngApp/views/quizPage.html',
                controller: ZeroBitGaming.Controllers.QuizController,
                controllerAs: 'controller'
            });
        });
}
