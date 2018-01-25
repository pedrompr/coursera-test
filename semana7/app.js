(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    this.getShoppingList = ShoppingListCheckOffService.getShoppingList;
    this.purchase = ShoppingListCheckOffService.purchase;
    this.isEmpty = function() {
      return ShoppingListCheckOffService.getShoppingList().length == 0;
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    this.getBoughtItems = ShoppingListCheckOffService.getBoughtItems;
    this.isEmpty = function() {
      return ShoppingListCheckOffService.getBoughtItems().length == 0;
    };
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var shoppingList = [
      {name: "Soap",    n: 5 },
      {name: "Soup",    n: 1 },
      {name: "Banana",  n: 12 },
      {name: "Pasta",   n: 2 },
      {name: "Cookies", n: 4 },
      {name: "Soda",    n: 1 },
      {name: "Butter",  n: 2 }
    ];
    var boughtList = [];

    service.purchase = function(index) {
      var item = shoppingList[index];
      shoppingList.splice(index, 1);
      boughtList.push(item);
    };

    service.getShoppingList = function() {
      return shoppingList;
    };

    service.getBoughtItems = function() {
      return boughtList;
    };
  }
})();
