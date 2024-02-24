import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//Step 1: Run the solution.js file without looking at the code.
//Step 2: You can go to the recipe.json file to see the full structure of the recipeJSON below.
const recipeJSON =
  '[{"id": "0001","type": "taco","name": "Chicken Taco","price": 2.99,"ingredients": {"protein": {"name": "Chicken","preparation": "Grilled"},  "salsa": {"name": "Tomato Salsa","spiciness": "Medium"},  "toppings": [{"name": "Lettuce",  "quantity": "1 cup",  "ingredients": ["Iceberg Lettuce"]  },      {"name": "Cheese",  "quantity": "1/2 cup",  "ingredients": ["Cheddar Cheese", "Monterey Jack Cheese"]  },      {"name": "Guacamole",  "quantity": "2 tablespoons",  "ingredients": ["Avocado", "Lime Juice", "Salt", "Onion", "Cilantro"]  },      {"name": "Sour Cream",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream"]  }      ]    }  },{"id": "0002","type": "taco","name": "Beef Taco","price": 3.49,"ingredients": {"protein": {"name": "Beef","preparation": "Seasoned and Grilled"},  "salsa": {"name": "Salsa Verde","spiciness": "Hot"},  "toppings": [{"name": "Onions",  "quantity": "1/4 cup",  "ingredients": ["White Onion", "Red Onion"]  },      {"name": "Cilantro",  "quantity": "2 tablespoons",  "ingredients": ["Fresh Cilantro"]  },      {"name": "Queso Fresco",  "quantity": "1/4 cup",  "ingredients": ["Queso Fresco"]  }      ]    }  },{"id": "0003","type": "taco","name": "Fish Taco","price": 4.99,"ingredients": {"protein": {"name": "Fish","preparation": "Battered and Fried"},  "salsa": {"name": "Chipotle Mayo","spiciness": "Mild"},  "toppings": [{"name": "Cabbage Slaw",  "quantity": "1 cup",  "ingredients": [    "Shredded Cabbage",    "Carrot",    "Mayonnaise",    "Lime Juice",    "Salt"          ]  },      {"name": "Pico de Gallo",  "quantity": "1/2 cup",  "ingredients": ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"]  },      {"name": "Lime Crema",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream", "Lime Juice", "Salt"]  }      ]    }  }]';

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/recipe", (req, res) => {
  const dish = req.body["choice"];
  let ProteinName, proteinPreparation, SalsaName, otherTopping;

  if (dish === "chicken") {
    const recipe = JSON.parse(recipeJSON)[0];
    ProteinName = recipe.ingredients.protein.name;
    proteinPreparation = recipe.ingredients.protein.preparation;
    SalsaName = recipe.ingredients.salsa.name;
    otherTopping = recipe.ingredients.toppings.map(topping => `${topping.quantity} of ${topping.name}`);
  } else if (dish === "beef") {
    const recipe = JSON.parse(recipeJSON)[1];
    ProteinName = recipe.ingredients.protein.name;
    proteinPreparation = recipe.ingredients.protein.preparation;
    SalsaName = recipe.ingredients.salsa.name;
    otherTopping = recipe.ingredients.toppings.map(topping => `${topping.quantity} of ${topping.name}`);
  } else if (dish === "fish") {
    const recipe = JSON.parse(recipeJSON)[2];
    ProteinName = recipe.ingredients.protein.name;
    proteinPreparation = recipe.ingredients.protein.preparation;
    SalsaName = recipe.ingredients.salsa.name;
    otherTopping = recipe.ingredients.toppings.map(topping => `${topping.quantity} of ${topping.name}`);
  }

  res.render("index.ejs", {
    dish: dish,
    ProteinName: ProteinName,
    proteinPreparation: proteinPreparation,
    SalsaName: SalsaName,
    otherTopping: otherTopping,
  });
});


app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
