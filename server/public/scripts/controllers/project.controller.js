app.controller('ProjectController', ['TimeService', function (TimeService) {
    console.log('ProjectController has been loaded');
    const self = this;

    self.newProject = TimeService.newProject;
    self.submitProject = TimeService.submitProject;

}]);