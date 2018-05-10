app.controller('EntryController', ['TimeService', function (TimeService) {
    console.log('EntryController has been loaded');
    const self = this;

    self.newTime = TimeService.newTime;
    self.entries = TimeService.entries;
    self.submitTimeEntry = TimeService.submitTimeEntry; 
    self.deleteEntry = TimeService.deleteEntry;
}]);