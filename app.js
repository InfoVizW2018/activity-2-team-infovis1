var app = angular.module('myApp', ['ui.grid']);

app.controller('myCtrl', function($scope) {
    $scope.gridOptions = {
		enableSorting: true,
		columnDefs: [{displayName: "Vessel", field: "vessel"}, 
					 {displayName: "Status", field: "status"}, 
					 {displayName: "Departure", field: "dept"},
					 {displayName: "Estimated Arrival Time", field: "eta"},
					 {displayName: "Departure Port", field: "dport"},
					 {displayName: "Departure Berth", field: "dberth"},
					 {displayName: "Destination Port", field: "port"},
					 {displayName: "Destination Berth", field: "berth"},
					 {displayName: "Current Capacity (%)", field: "capacity"}
					]
	};
	$scope.gridOptions.data = [
		{
		 vessel: "SR",
		 status: "Docked",
		 dept: "13:30",
	     eta: "17:45",
		 dport: "Swartz Bay",
		 dberth: 3,
	     port: "Duke Point",
		 berth: 2,
		 capacity: 94
		},
		{
	     vessel: "PS",
		 status: "In Transit",
		 dept: "14:15",
	     eta: "18:30",
		 dport: "Duke Point",
		 dberth: 2,
	     port: "Tilbury",
		 berth: 1,
		 capacity: 76
	    },
		{
	     vessel: "SS",
		 status: "In Transit",
		 dept: "13: 15",
	     eta: "16:25",
		 dport: "Tilbury",
		 dberth: 2,
	     port: "Duke Point",
		 berth: 1,
		 capacity: 84
	    },
		{
	     vessel: "SS",
		 status: "Docked",
		 dept: "14:30",
	     eta: "16:25",
		 dport: "Tilbury",
		 dberth: 1,
	     port: "Swartz Bay",
		 berth: 3,
		 capacity: 98
	    },
		
		{
	     vessel: "CS",
		 status: "In Transit",
		 dept: "13:45",
	     eta: "17:15",
		 dport: "Duke Point",
		 dberth: 2,
	     port: "Swartz Bay",
		 berth: 2,
		 capacity: 43
	    },
		
		{
	     vessel: "FL",
		 status: "Docked",
		 dept: "12:30",
	     eta: "14: 15",
		 dport: "Tilbury",
		 dberth: 3,
	     port: "Swartz Bay",
		 berth: 1,
		 capacity: 91
	    },
		
		{
	     vessel: "VIL",
		 status: "In Transit",
		 dept: "12: 05",
	     eta: "17:40",
		 dport: "Swartz Bay",
		 dberth: 2,
	     port: "Tilbury",
		 berth: 1,
		 capacity: 91
	    }
	];
});