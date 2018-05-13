app.controller('EntryController', ['TimeService', function (TimeService) {
    console.log('EntryController has been loaded');
    const self = this;

    self.formActive = false;
    self.showForm = function() {
        self.formActive = !self.formActive;
    }

    self.newTime = TimeService.newTime;
    self.entries = TimeService.entries;
    self.submitTimeEntry = TimeService.submitTimeEntry; 
    self.deleteEntry = TimeService.deleteEntry;
    self.projects = TimeService.projects;
}]);