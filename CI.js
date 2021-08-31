const Shopify = require('shopify-api-node');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
	path: 'output.csv',
	header: [
		{ id: 'email', title: "Customer Email"},
		{ id: 'shipping_address', title: 'Shipping Address'},
		{ id: 'product_title', title: "Product Title"},
		{ id: 'product_sku', title: "Product SKU"},
	]
	});
	
	console.log('pulling data....');
	const shopify = new Shopify({
								shopName: 'testci-mn',
								apiKey: 'df826b5b76c2ac3aa580711d361336ac',
								password: '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'
							});
	shopify.on('callLimits', (limits) => console.log(limits));
	
	shopify.location.list()
	.then( (locations) => {
		shopify.order
		.list({ limit: 5 })
		.then((orders) => {
				const data  = [];
				orders.forEach( order => {
					shopify.fulfillment.create(order.id, {
						location_id: locations[0].id,
						tracking_number: null,
						line_items: [ { id: order.line_items[0].id } ]
					})
					.then( res => console.log(res) );
					data.push({ email:              order.customer.email, 
								shipping_address:   Object.values(order.shipping_address), 
								product_title:      order.line_items[0].title, 
								product_sku:        order.line_items[0].sku });
								
				})
				csvWriter.writeRecords(data)       // returns a promise
				.then(() => {
					console.log('...Done');
				});
			}
		)
	})
	.catch((err) => console.error(err));