var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,


    user: "root",
    password: "Oliver413!",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    //console.log("connected as id " + connection.threadId);

    showProducts();
});
function showProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        //console.log(res);
        for (var i = 0; i < res.length; i++) {
            console.log("Item ID:" + res[i].id + " |  Product:" + res[i].product_name + " | Deptartment: " + res[i].department_name + " | Price:" + res[i].price + " | Quantity:" + res[i].stock_quantity)
        };

        buyProduct()
    })
};

var buyProduct = function () {
    inquirer.prompt([
        {
            type: "input",
            name: "productChoice",
            message: "Please enter the item ID of the product you would like"
        },
        {
            type: "input",
            name: "quantityChoice",
            message: "Please enter how many you would like to buy"
        }
    ]).then(function (purchase) {
        connection.query("SELECT price, product_name, stock_quantity FROM products WHERE id = ?", [purchase.productChoice], function(err, res) {
            var amountSold = purchase.quantityChoice;
            var total = res[0].price * amountSold;
            var itemsRemaining = parseInt(res[0].stock_quantity - amountSold);
            if (err) {
                return console.log("err");

            }

            if (res[0].stock_quantity < purchase.quantityChoice) {
                return console.log("Sorry we do not have enough of that item");
            }
connection.query ("UPDATE products SET stock_quantity = ? WHERE id = ?",[itemsRemaining, purchase.productChoice]);
console.log ("Your order has been placed");
console.log ("Your total is $" + total);
console.log ("Quantity Remaining:" + itemsRemaining);

connection.end();

        });

    });

}

