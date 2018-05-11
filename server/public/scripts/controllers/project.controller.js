app.controller('ProjectController', ['TimeService', function (TimeService) {
    console.log('ProjectController has been loaded');
    const self = this;

    self.newProject = TimeService.newProject;
    self.projects = TimeService.projects;
    self.submitProject = TimeService.submitProject;

}]);