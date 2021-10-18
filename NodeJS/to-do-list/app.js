const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const _ = require("lodash");
const app = express();
// setting the ejs template engine.
app.set("view engine","ejs");
// configuring middleware functions.
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

// connecting to database.
mongoose.connect("mongodb://localhost/listDB",{
	useNewUrlParser:true,
	useUnifiedTopology:true,
	useFindAndModify: false
});
// Defining listSchema which consists single string field.
const itemSchema = new mongoose.Schema({
	name : String
});
// Creating a model that maps to the corresponding mongoDB document
const Item = mongoose.model('Item',itemSchema);

const item1 = new Item(
	{
	  name : 'Welcome to My Todolist App'
    }
);
const item2 = new Item(
	{
      name: 'Press + button to add a new list item'
    }
);
const item3 = new Item({
	name: "<-- Hit this to delete an item."
  });
// creating the default items to display when the user first loads the root.
const defaultItems = [item1,item2,item3];

const listSchema = {
	name: String,
	items: [itemSchema]
  };

  const List = mongoose.model("List", listSchema);

// handling get request to root route.
app.get("/",function(req,res){
	var today = new Date();
	var options={
		weekday: "long",
		day: "numeric",
		month: "long"
	};
	var day = today.toLocaleDateString("en-US",options);
	Item.find({},function(err,foundItems){
        if(err)
		 res.send(err);
		else 
		{
		  if(foundItems.length===0)
		  {
			Item.insertMany(defaultItems,function(err){
				if(err)
				 res.send(err);
			});
			res.redirect("/");
		  }
		  else
		  res.render("list",{Day: day,listTitle: "To-Do-List App", newItems:foundItems});
		}
	});
	
});

// handling route to customList.
app.get("/:customListName", function(req, res){
     
	var today = new Date();
	var options={
		weekday: "long",
		day: "numeric",
		month: "long"
	};
	var day = today.toLocaleDateString("en-US",options);
	const customListName = _.capitalize(req.params.customListName);
  
	List.findOne({name: customListName}, function(err, foundList){
	  if (!err){
		if (!foundList){
		  //Create a new list
		  const list = new List({
			name: customListName,
			items: defaultItems
		  });
		  list.save();
		  res.redirect("/" + customListName);
		} else {
		  //Show an existing list
  
		  res.render("list", {Day: day,listTitle: foundList.name, newItems: foundList.items});
		}
	  }
	});
  
  
  
  });
// handling post request to root route.
app.post("/",function(req,res){

	const itemName = req.body.newItem;
	const listName = req.body.list;
	// console.log(listName);
	const item = new Item(
		{
		  name : itemName
	    }
	);
	if(listName === "To-Do-List App"){
		item.save();
		res.redirect("/");
	}
	else {
		List.findOne({name: listName}, function(err, foundList){
		
		  foundList.items.push(item);
		  foundList.save();
		  res.redirect("/" + listName);
		});
	}
});
// handling delete request.
app.post("/delete",function(req,res){
	const checkedItemId = req.body.checkbox;
    const listName = req.body.listName;

	if(listName === "To-Do-List App"){
		Item.findByIdAndRemove(checkedItemId, function(err){
			if (!err) {
			//   console.log("Successfully deleted checked item.");
			  res.redirect("/");
			}
		  });
	}
	else {
		List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}}, function(err, foundList){
		  if (!err){
			res.redirect("/" + listName);
		  }
		});
	  }
   
});
app.listen(process.env.PORT || 3000,function(){
	console.log("server running");
});