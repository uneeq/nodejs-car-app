module.exports = {
	async index(req, res) {
		let routes = [
			{
				"method": "GET",
				"path": "/api"
			},
			{
				"method": "GET",
				"path": "/api/owners"
			},
			{
				"method": "GET",
				"path": "/api/owners/:id"
			},
			{
				"method": "POST",
				"path": "/api/owners", 
				"payload": [
					"name:string:required",
					"bio:string"
				]
			},
			{
				"method": "PATCH",
				"path": "/api/owners/:id",
				"payload": ["name:string", "bio:string"]
			},
			{
				"method": "DELETE",
				"path": "/api/owners/:id"
			},
			{
				"method": "GET",
				"path": "/api/cars"
			},
			{
				"method": "GET",
				"path": "/api/cars/:id"
			},
			{
				"method": "POST",
				"path": "/api/cars",
				"payload": [
					"model:string:required", 
					"registration_number:string:required"
				]

			},
			{
				"method": "PATCH",
				"path": "/api/cars/:id",
				"payload": [
					"model:string",
					"registration_number:string"
				]
			},
			{
				"method": "DELETE",
				"path": "/api/cars/:id"
			},
			{
				"method": "POST",
				"path": "/api/auctions/sell_car/",
				"payload": ["car_id:string:required"]
			},
			{
				"method": "POST",
				"path": "/api/auctions/buy_car/",
				"payload": [
					"car_id:string:required",
					"owner_id:string:required"
				]
			}
		]

		res.status(200).json({routes: routes});
	}
}