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

    self.newProject = {
        name: '',
        description: ''
    };

    self.entries = {
        list: [], //what comes right from the get request
        displayList: [] //formatted with exactly what I want in the table
    };

    self.projects = {
        list: [],
        displayList: []
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

    self.getEntries = function () {
        $http({
            method: 'GET',
            url: '/entry'
        }).then(function (response) {
            self.entries.list = response.data;
            console.log(self.entries.list);
            // self.entries.displayList = self.formatEntriesForDisplay(self.entries.list);
        }).catch(function (error) {
            console.log(error);
        });
    };

    self.deleteEntry = function (entry) {
        $http({
            method: 'DELETE',
            url: '/entry/' + entry.id
        }).then(function (response) {
            console.log(response.status);
            self.getEntries();
        }).catch(function (error) {
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

        formatted.time = Math.ceil((endDateObj.getTime() - startDateObj.getTime()) / 900000);
        console.log(formatted);
        return formatted;
    };

    self.formatEntriesForDisplay = function (entries) {
        let formattedArray = [];
        for (let i = 0; i < entries.length; i++) {
            let formattedEntry = {};
            formattedEntry.name = entries[i].name;
            formattedEntry.start_time = entries[i].start_time[1] + '/' + entries[i].start_time[2]
                + '/' + entries[i].start_time[0] + ' '
                + entries[i].start_time[3].toLocaleString('en', { minimumIntegerDigits: 2 }) + ':'
                + entries[i].start_time[4].toLocaleString('en', { minimumIntegerDigits: 2 });
            formattedEntry.end_time = entries[i].end_time[1] + '/' + entries[i].end_time[2]
                + '/' + entries[i].end_time[0] + ' '
                + entries[i].end_time[3].toLocaleString('en', { minimumIntegerDigits: 2 }) + ':'
                + entries[i].end_time[4].toLocaleString('en', { minimumIntegerDigits: 2 });
            formattedEntry.project = entries[i].project;
            formattedEntry.time = entries[i].time_quarter_hours / 4;
        }
    }

    self.submitProject = function () {
        $http({
            method: 'POST',
            url: '/project',
            data: self.newProject
        }).then(function (response) {
            // self.getProjects();
            console.log(response.status);
        }).catch(function (error) {
            console.log(error);
        });
    };

    self.getProjects = function () {
        $http({
            method: 'GET',
            url: '/project'
        }).then(function (response) {
            self.projects.list = response.data;
            console.log(self.projects.list);
        }).catch(function(error) {
            console.log(error);
        });
    };

    self.getEntries();
    self.getProjects();
}]);    