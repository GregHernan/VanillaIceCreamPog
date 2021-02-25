const axios = require('axios').default;

module.exports = (app) => {
	app.get('/fortnite/api/storefront/v2/catalog', (req, res) => {
		axios.get('https://benbotfn.tk/api/v1/shop/raw').then(response =>{
			res.send(response.data);
		});
	});
}