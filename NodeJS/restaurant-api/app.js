const Joi = require('joi')
const express = require('express')

const restaurants = [
	{id: 1, name:"honeygrill"},
	{id: 2, name:"chicken republic"},
	{id: 3, name:"mr biggs"},
];

const app = express()
app.use(express.json())


//GET METHOD
app.get('/api/restaurants',(req, res)=>{
	res.send(restaurants)
	console.log(req.method,':', req.url)
})

app.get('/api/restaurants/:id', (req, res)=>{
	const restaurant = restaurants.find(r => r.id === parseInt(req.params.id))
	if (!restaurant) return res.status(404).send('The restaurant was not found')
	res.send(restaurant)  
	console.log(req.method,':', req.url)
})



//POST METHOD
app.post('/api/restaurants', (req, res)=>{
	const { error } = validateRestaurant(req.body) 

	if(error) return res.status(400).send(error.details[0].message)

	const restaurant = {
		id: restaurants.length + 1,
		name: req.body.name
	}
	restaurants.push(restaurant)
	res.send(restaurant)
	console.log(req.method,':', req.url)
})



//PUT METHOD
app.put('/api/restaurants/:id', (req, res)=>{
	const restaurant = restaurants.find(r => r.id === parseInt(req.params.id))
	if (!restaurant) return res.status(404).send('The restaurant was not found')
 
	const { error } = validateRestaurant(req.body) 
	console.log('-----')

	if(error) return res.status(400).send(error.details[0].message)
	console.log('-----')
	restaurant.name = req.body.name
	console.log('-----')
	res.send(restaurant)
	console.log(req.method,':', req.url)

})


function validateRestaurant(restaurant){
	const schema = {
		name : Joi.string().min(4).required()
	}
	return Joi.validate(restaurant, schema)
}



//DELETE METHOD
app.delete('/api/restaurants/:id', (req, res)=>{
	const restaurant = restaurants.find(r => r. id === parseInt(req.params.id))
	if (!restaurant) return res.status(404).send('The restaurant was not found')
 	
 	const index = restaurants.indexOf(restaurant)
 	restaurants.splice(index, 1)

 	res.send(restaurant)

})



//PORT
const port = process.env.PORT || 3000;

app.listen(port, ()=>{console.log('Listening on port ',port,'.....')})