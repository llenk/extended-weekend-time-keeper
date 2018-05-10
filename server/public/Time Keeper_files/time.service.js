app.service('TimeService', ['$http', '$mdDialog', '$mdToast', function($http, $mdDialog, $mdToast) {
    console.log('TimeService has been loaded');
    const self = this;

    self.newTime = {
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
        project: ''
    };

    self.submitTimeEntry = function() {
        console.log(self.newTime);
    };
}]);