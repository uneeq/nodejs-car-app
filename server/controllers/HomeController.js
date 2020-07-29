module.exports = {
	async index(req, res){
		console.log('HomeController');

		res.json({
			status: 'ok',
			route: req.url
		});
	}
}