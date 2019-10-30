# Bamazon

Bamazon is a CLI application using Node.js and MySQL.  It is an app created to simmulate an Amazon like storefront, where users can purchase various items listed for sale.

## Screenshots to show functionality

![Image1](bamazon/Images/Image 1.png)
Format: ![Alt Text](url)

This screenshot demonstrates how when the user runs bamazonCustomer.js, they are presented with a list of items for sale, and various information about the item, such as price and department.
Then the user is prompted enter the item ID of the product they would like to purchase.  This prompt is done with the use of inquirer.

## Screenshot 2

![Image1](bamazon/Images/Image 1.png)
Format: ![Alt Text](url)

This screenshot demonstartes how once the user selects a product to purchase, they will be prompted to select a quantity.  This is also done with the use of inquirer.

## Screenshot 3

![Image1](bamazon/Images/Image 1.png)
Format: ![Alt Text](url)

This screenshot demonstartes how once the user selects a product and a quantity, it will let them know that their purchase is complete, the total for the items, and how many of that item are still in stock.

## Screenshot 4

![Image1](bamazon/Images/Image 1.png)
Format: ![Alt Text](url)

This screenshot demonsrates that if a user elects to purchase more items than are in stock, they weill be instructed that there is not enough of the item for them to purchase.

## Screenshot 5

![Image1](bamazon/Images/Image 1.png)
Format: ![Alt Text](url)

This screenshot demonstrates how once the user has made a purchase, the remiaing inventory is updated for them to see in the console log.  THe remaining inventory is also being update in the MySQL data base, as you can see once the program is run again, the inventory reflects the previous purchase.
