'use strict';

/**
 * @ngdoc function
 * @name requirementsBazaarWebFrontendApp.controller:ProjectManagementCtrl
 * @description
 * # ProjectManagementCtrl
 * Controller of the requirementsBazaarWebFrontendApp
 */
angular.module('requirementsBazaarWebFrontendApp')
  .controller('ProjectManagementCtrl', function ($scope, $http, $routeParams, $location, UtilityService, reqBazService, AuthorizationService){
    //Keep the current version of the project
    var project = null;
    $scope.dirtyProject = null;

    $scope.activeTab = 'settings';
    $scope.isDirty = false;

    $scope.projectRoles = JSON.parse('{ "roles" : [{"role" : "Project members","users": ["Max 1", "Max 2"]},{"role" : "project admin","users": ["Max 3", "Max 4","Max 5", "Max 6"]}]}');


    /*
     * Loads the project
     * */
    (function(){
      reqBazService.getProject($routeParams.projectId)
        .success(function (proj) {
          project = angular.copy(proj);
          //Create a copy of the project that the user can edit
          $scope.dirtyProject = angular.copy(proj);
        })
        .error(function () {
          UtilityService.showFeedback('WARN_PROJ_NOT_LOADED');
        });
    })();

    $scope.saveChanges = function(){
      reqBazService.updateProject($scope.dirtyProject.id,$scope.dirtyProject)
        .success(function (message) {
          if(AuthorizationService.isAuthorized(message)) {
            project = angular.copy($scope.dirtyProject);
            $scope.isDirty = false;
          }
        })
        .error(function () {
          UtilityService.showFeedback('WARN_PROJ_NOT_UPDATED');
        });
    };

    $scope.cancelChanges = function(){
      $scope.isDirty = false;
      $scope.dirtyProject = angular.copy(project);
    };

    $scope.deleteProject = function(){
      UtilityService.showFeedback('WARN_NOT_IMPL');
    };

    $scope.confirmDelete = function(){
      document.getElementById('confirmDelete').toggle();
    };

    $scope.go = function ( path ) {
      $location.path( path );
    };


  });
