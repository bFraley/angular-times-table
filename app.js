angular.module('app', [])
    .controller('MainCtrl', mainController);


function mainController($scope) {
    $scope.userRows = 12;
    $scope.userCols = 12;
    $scope.selectedValue = null;

    $scope.getRows = function() {
        return R.range(1, $scope.userRows + 1);
    }

    $scope.getCols = function() {
        return R.range(1, $scope.userCols + 1);
    } 

    $scope.getTableValue = function(row, col) {
        return row * col;
    }

    $scope.showTable = function() {
        return $scope.userRows > 0 && $scope.userCols > 0;
    }

    $scope.setSelectedValue = function(row, col) {
        $scope.selectedValue = {
            row: row,
            col: col
        }
    }

    $scope.clearSelectedValue = function() {
        $scope.selectedValue = null;
    }
}















































