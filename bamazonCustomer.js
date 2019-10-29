var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

 
  user: "root",
  password: "Oliver413!",
  database: "bamazon"
});

connection.connect(function(error){
    if (error) throw error
    console.log("connected as id " + connection.threadId);

    //showProducts()
});
connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    //console.log(res);
    for (var i = 0; i < res.length; i++){
        console.log (res[i].id + " |  Product:" + res[i].product_name + " | Deptartment: " + res[1].department_name + " | Price:" + res[i].price + " | Quantity:" + res[1].stock_quantity)};
    });

