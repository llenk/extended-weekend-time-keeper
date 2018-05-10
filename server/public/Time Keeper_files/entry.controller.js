app.controller('EntryController', ['TimeService', function (TimeService) {
    console.log('EntryController has been loaded');
    const self = this;

    self.newTime = TimeService.newTime;
    self.submitTimeEntry = TimeService.submitTimeEntry; 
}]);