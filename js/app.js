// name our angular app
angular.module('firstApp', [])

.controller('mainController', function() {
    // bind this to vm (view-model)
    var vm = this;
    
    // define variables and objects on this
    // this lets them be available to our views
    // define a basic variable
    vm.message = 'Hey there! Come and see how good I look!';
    
    // define a list of items
    vm.computers = [
        {name: 'Macbook Pro', colour: 'Silver', nerdness: 7},
        {name: 'Yoga 2 Pro', colour: 'Gray', nerdness: 6},
        {name: 'Chromebook', colour: 'Black', nerdness: 5}
    ];
});