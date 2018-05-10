app.service('TimeService', ['$http', '$mdDialog', '$mdToast', function ($http, $mdDialog, $mdToast) {
    console.log('TimeService has been loaded');
    const self = this;

    self.newTime = {
        description: '',
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
        project: 2
    };

    self.submitTimeEntry = function () {
        // TODO: entry validation

        console.log(self.newTime);
        $http({
            method: 'POST',
            url: '/entry',
            data: self.formatTime(self.newTime)
        }).then(function (response) {
            console.log(response.status);
            self.getEntries();
        }).catch(function (error) {
            console.log(error);
        });
    };

    self.getEntries = function() {
        $http({
            method: 'GET',
            url: '/entry'
        }).then(function(response) {
            console.log(response.data);
        }).catch(function(error) {
            console.log(error);
        });
    };

    self.formatTime = function (entry) {
        let formatted = {
            description: '',
            startDate: '',
            endDate: '',
            project: 2, // TODO: change this
            time: ''
        }
        formatted.description = entry.description;
        let start = {
            year: entry.startDate.getFullYear(),
            month: entry.startDate.getMonth(),
            day: entry.startDate.getDate(),
            hour: entry.startTime.getHours(),
            minute: entry.startTime.getMinutes()
        };
        let end = {
            year: entry.endDate.getFullYear(),
            month: entry.endDate.getMonth(),
            day: entry.endDate.getDate(),
            hour: entry.endTime.getHours(),
            minute: entry.endTime.getMinutes()
        };

        formatted.startDate = [start.year, start.month, start.day, start.hour, start.minute];
        let startDateObj = new Date(...formatted.startDate);
        formatted.endDate = [end.year, end.month, end.day, end.hour, end.minute];
        let endDateObj = new Date(...formatted.endDate);

        formatted.time = Math.ceil((endDateObj.getTime() - startDateObj.getTime())/900000);
        console.log(formatted);
        return formatted;
    }
}]);    