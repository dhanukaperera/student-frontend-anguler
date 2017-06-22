/**
 * Created by Dhanuka Perera on 6/21/2017.
 */


angular.module('studentApp').controller('studentController', StudentCtrl);

StudentCtrl.$inject = ['$http', '$scope'];


function StudentCtrl($http, $scope) {

    $scope.getData = function () {
        $http.get('http://localhost:5001/students').then(function (result) {
            var vm = this;
            vm.studentdata = result.data;
            $scope.students = vm.studentdata;
            console.log($scope.students);
        });
    }

    $scope.getCourses = function () {
        $http.get('http://localhost:5001/courses').then(function (result) {

            var vm = this;
            vm.courseData = result.data;
            $scope.courses = vm.courseData;
            console.log($scope.courses);
            $scope.course = $scope.courses[0];
            $scope.courses.unshift({courseName:""});
        });
    }

    $scope.courseTest = function () {
        console.log($scope.course._id);
    }

    $scope.getData();
    $scope.getCourses();

    $scope.clear = function () {
        $scope.name = "";
        $scope.age = 0;
    }


    $scope.test = function () {
        /*
         $scope.courseId = $scope.courses.indexOf($scope.course);
         console.log(`course id ${$scope.courseId}`);*/

        $scope.abc = {
            firstName: $scope.name,
            lastName: "sample",
            age: $scope.age,
            course: $scope.course._id
        };


        $http.post('http://localhost:5001/students', $scope.abc).then(function (result) {
            console.log(result);
            if (result.status === 200) {
                $scope.students.push($scope.abc);
                $scope.getData();
                $scope.clear();
            }

        });


        console.log($scope.abc);
    };

    $scope.deleteStudent = function (val) {
        console.log(val);
        $http.delete('http://localhost:5001/students/' + val._id, val).then(function (result) {
            console.log(result);
            $scope.students.slice();
            console.log($scope.students)
            $scope.getData();
        })
    }

    $scope.updateStudent = function (val) {
        console.log(val);
        $scope.name = val.firstName;
        $scope.age = val.age;
        $scope.id = val._id;
        $scope.showBtn = true;
    }

    $scope.saveUpdate = function () {
        $scope.d = {
            firstName: $scope.name,
            lastName: "sample",
            age: $scope.age,
            course: "594a09e0a0187e07ac80cf82"
        };
        $http.put('http://localhost:5001/students/' + $scope.id, $scope.d).then(function (result) {
            console.log(result);
            $scope.getData();
            $scope.clear();
            $scope.showBtn = false;
        })
    }

}
