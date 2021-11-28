(function(){
    'use strict';

    angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.lunchItem = '';
        $scope.checkData = function (){
            var menu = $scope.lunchItem;
            var output = '';
            if(menu == '')
                output = 'Please enter data first';
            else{    
                var totalItem = menu.split(',').length;
            
                if(totalItem <=3 )
                    output = 'Enjoy!';
                else if(totalItem > 3 )
                    output = 'Too much!';
            }
            $scope.textValue = output;    
        };
    };
})();