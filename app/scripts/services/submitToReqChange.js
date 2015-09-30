'use strict';

/**
 * @ngdoc service
 * @name requirementsBazaarWebFrontendApp.SubmitToReqChange
 * @description The service is used to push updates from the main Ctrl to the individual Requirement Ctrls
 * # SubmitToReqChange
 * Service in the requirementsBazaarWebFrontendApp.
 *
 * The service is used to signal requirement controllers if they should be opened or closed.
 *
 */
angular.module('requirementsBazaarWebFrontendApp')
  .service('SubmitToReqChange', function SubmitToReqChange($rootScope) {

    this.emit = function(id,oldListIndex, newListIndex) {
      $rootScope.$emit('selectedReqIdChange',{'val':id, 'oldListIndex':oldListIndex, 'newListIndex':newListIndex});
    };

    this.listen = function(callback) {
      $rootScope.$on('selectedReqIdChange',callback);
    };

  });
