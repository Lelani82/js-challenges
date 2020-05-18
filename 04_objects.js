/*

JSON Practice
-------------

JSON can be parsed and turned into a plain old JS object.
This makes it much easier to read from and write to.

Check out the shop JS object and run the tests.

Complete methods below, one by one.

TEST: npm test

*/

const drinkShop = {
	title: "My Fancy Drink Shop",
	products: [
		{
			id: 1,
			title: "Coca Cola",
			price: 4.32
		},
		{
			id: 2,
			title: "Fanta",
			price: 4.22
		},
		{
			id: 3,
			title: "Lift",
			price: 4.11
		}
	],
	customers: {
		"jane@doe.com": {
			firstName: "John",
			lastName: "Doe",
			address: {
				streetNumber: 12,
				street: "Main St",
				city: "Brisbane",
				postcode: 4000
			},
			orders: [
				{
					id: 61721,
					status: "delivered",
					items: [
						{
							productId: 1,
							qty: 2
						},
						{
							productId: 3,
							qty: 1
						},
						{
							productId: 2,
							qty: 3
						}
					],
					notes: "Please leave on doorstep"
				},
				{
					id: 82721,
					status: "delivered",
					items: [
						{
							productId: 4,
							qty: 100
						}
					],
					notes: "Really enjoying coke ATM"
				}
			]
		}
	}
}
const shop = {
	shopTitle: () => {
		// Return the shop title (you have access to the shop object from here)
		return drinkShop.title;
	},

	upperCase: (string) => {
		// Return an uppercase version of string
		return string.toUpperCase();
	},

	upperCaseShopTitle: () => {
		// Return an uppercase shop title.
		// Don't repeat yourself. Use the two functions you just built!
		return this.upperCase(this.shopTitle());		//this.method(this.method())
	},

	productById: productId => {
		// Return a specific product object
		// When the product is not found return null
		let prodArr = drinkShop.products;			// create array that stores all shop.products
		for (let product of prodArr) {				// using for loop to check each item in array &
			if (product.id === product.Id)			// compares array product.id to input product.Id
				return product;						// returns product name if found
		}
		return null;								// returns null if not found
	},

	productCost: productId => {
		// given a product id, return its price. DRY ;)
		let product = shop.productById(productId);	// using shop & productById functions created ealier
		return product.price;
	},

	formatAddress: email => {
		// return(drinkShop.customers.'jane@doe.com'.address.(streetNumber, street, city, postcode))
		// Given a user's email, return their address in the format:
		// streetNumber street, city, postcode
		// E.g. 10 Amelia St, Sydney, 2000
		// Hint: some destructuring might save you a few lines.
		// Return null if customer not found
		let customer = drinkShop.customers[email];		//assign customer var to customer with email input
		if (customer) {									// checking if input customers address matches ...
			let {
				streetNumber,
				street,
				city,
				postcode
			} = drinkShop.customers[email].address;		// ... customers stored email & address
			return `${streetNumber} ${street}, ${city}, ${postcode}` // return address string interpolation
		} else {
			return null;								// else return null if not found
		}
	},

	customerOrderById: (email, orderId) => {
		// Returns the customer order for the provided customer and orderId
		// Returns null if the order isn't found
		let customer = drinkShop.customers[email];			// create customer var using email input
		let orders = customer ? customer.orders : [];		//customer var ? execute true : execute false
		for (let order of orders) {							// for each item in items
			if (order.id === orderId) {						// check if stored order id === input orderId
				return order;								// return order if true
			}
		}
	},

	totalCost: (email, orderId) => {
		// Return the total cost of an order.
		// If the order isn't valid, return 0
		let order = shop.customerOrderById(email, orderId); // create order var using 
		if (order === null) {
			return 0;
		}
		let items = order.items;
		let total = 0;
		for (let item of items) {
			total += shop.productCost(item.productId) * item.qty;
		}
		return total;
	},

	addProduct: (id, title, price) => {
		// Add a product to the shop.
		drinkShop.products.push({
			id: id,
			title: title,
			price: price
		})
	},

	updateProductPrice: (id, newPrice) => {
		// update the price of a specific product
		for (product of drinkShop.products) {
			if (product.id == id) {
				product.price = newPrice;
			}
		}
		return true;
	}
}


module.exports = shop
