app.controller('ProjectController', ['TimeService', function (TimeService) {
    console.log('ProjectController has been loaded');
    const self = this;

    self.formActive = false;
    self.showForm = function() {
        self.formActive = !self.formActive;
    }

    self.newProject = TimeService.newProject;
    self.projects = TimeService.projects;
    self.submitProject = TimeService.submitProject;
    self.deleteProject = TimeService.deleteProject;
    self.getProjects = TimeService.getProjects();

}]);