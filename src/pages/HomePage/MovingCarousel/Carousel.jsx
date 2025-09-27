import { useNavigate } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.css"
import Card from "./Card"

export default function Carousel() {
    const data = [
    {
      "id": 641730,
      "image": "https://img.spoonacular.com/recipes/641730-556x370.jpg",
      "imageType": "jpg",
      "title": "Dulce De Leche Cheesecake",
      "readyInMinutes": 45,
      "servings": 10,
      "sourceUrl": "https://www.foodista.com/recipe/5LN8R7Z4/dulce-de-leche-cheesecake",
      "vegetarian": true,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 19,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 32,
      "healthScore": 2,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 126.95,
      "extendedIngredients": [
        {
          "id": 12061,
          "aisle": "Nuts",
          "image": "almonds.jpg",
          "consistency": "SOLID",
          "name": "almond cookies",
          "nameClean": "almond cookies",
          "original": "150 grams Almond cookies, crumbed",
          "originalName": "Almond cookies, crumbed",
          "amount": 150,
          "unit": "grams",
          "meta": [],
          "measures": {
            "us": {
              "amount": 5.291,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 150,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 20027,
          "aisle": "Baking",
          "image": "white-powder.jpg",
          "consistency": "SOLID",
          "name": "cornstarch",
          "nameClean": "cornstarch",
          "original": "1 tablespoon Cornstarch",
          "originalName": "Cornstarch",
          "amount": 1,
          "unit": "tablespoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 1017,
          "aisle": "Cheese",
          "image": "cream-cheese.jpg",
          "consistency": "SOLID",
          "name": "philiadelphia balance cream cheese",
          "nameClean": "philiadelphia balance cream cheese",
          "original": "450 grams Philiadelphia 13% balance cream cheese",
          "originalName": "Philiadelphia 13% balance cream cheese",
          "amount": 450,
          "unit": "grams",
          "meta": [
            "13%"
          ],
          "measures": {
            "us": {
              "amount": 15.873,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 450,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 98861,
          "aisle": "Baking",
          "image": "dulce-de-leche.png",
          "consistency": "SOLID",
          "name": "dulce de leche",
          "nameClean": "dulce de leche",
          "original": "240 ml Dulce de leche",
          "originalName": "Dulce de leche",
          "amount": 240,
          "unit": "ml",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.014,
              "unitShort": "cups",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 240,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 1123,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg.png",
          "consistency": "SOLID",
          "name": "eggs",
          "nameClean": "eggs",
          "original": "2 Eggs",
          "originalName": "Eggs",
          "amount": 2,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 9152,
          "aisle": "Produce",
          "image": "lemon-juice.jpg",
          "consistency": "LIQUID",
          "name": "juice of lemon",
          "nameClean": "juice of lemon",
          "original": "Juice and zest of 1 lemon",
          "originalName": "Juice and zest of lemon",
          "amount": 1,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 2047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "salt",
          "nameClean": "salt",
          "original": "Pinch of salt",
          "originalName": "Pinch of salt",
          "amount": 1,
          "unit": "pinch",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "pinch",
              "unitLong": "pinch"
            },
            "metric": {
              "amount": 1,
              "unitShort": "pinch",
              "unitLong": "pinch"
            }
          }
        },
        {
          "id": 19335,
          "aisle": "Baking",
          "image": "sugar-in-bowl.png",
          "consistency": "SOLID",
          "name": "sugar",
          "nameClean": "sugar",
          "original": "1/2 cup organic sugar",
          "originalName": "organic sugar",
          "amount": 0.5,
          "unit": "cup",
          "meta": [
            "organic"
          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 100,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1145,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "butter-sliced.jpg",
          "consistency": "SOLID",
          "name": "butter",
          "nameClean": "butter",
          "original": "1 1/2 sticks cold butter cut into small pieces (if you use unsalted butter add a little 2 cups organic flour1/2 cup organic sugar1 teaspoon vanilla",
          "originalName": "cold butter cut into small pieces (if you use unsalted butter add a little 2 cups organic flour1/2 cup organic sugar1 teaspoon vanilla",
          "amount": 1.5,
          "unit": "sticks",
          "meta": [
            "unsalted",
            "organic",
            "cold",
            "cut into small pieces (if you use  butter add a little 2 cups  flour1/2 cup  sugar1 teaspoon vanilla"
          ],
          "measures": {
            "us": {
              "amount": 1.5,
              "unitShort": "sticks",
              "unitLong": "sticks"
            },
            "metric": {
              "amount": 1.5,
              "unitShort": "sticks",
              "unitLong": "sticks"
            }
          }
        },
        {
          "id": 1116,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "plain-yogurt.jpg",
          "consistency": "SOLID",
          "name": "yogurt",
          "nameClean": "yogurt",
          "original": "150 grams 3. 5% yogurt",
          "originalName": "3. 5% yogurt",
          "amount": 150,
          "unit": "grams",
          "meta": [
            "5%"
          ],
          "measures": {
            "us": {
              "amount": 5.291,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 150,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        }
      ],
      "summary": "If you have about \u003Cb\u003E45 minutes\u003C/b\u003E to spend in the kitchen, Dulce De Leche Cheesecake might be a super \u003Cb\u003Egluten free and lacto ovo vegetarian\u003C/b\u003E recipe to try. One serving contains \u003Cb\u003E430 calories\u003C/b\u003E, \u003Cb\u003E8g of protein\u003C/b\u003E, and \u003Cb\u003E38g of fat\u003C/b\u003E. This recipe serves 10. For \u003Cb\u003E$1.27 per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 9%\u003C/b\u003E of your daily requirements of vitamins and minerals. A few people made this recipe, and 32 would say it hit the spot. If you have almond cookies, eggs, philiadelphia balance cream cheese, and a few other ingredients on hand, you can make it. It works well as a dessert. It is brought to you by Foodista. Taking all factors into account, this recipe \u003Cb\u003Eearns a spoonacular score of 31%\u003C/b\u003E, which is not so great. Similar recipes are \u003Ca href=\"https://spoonacular.com/recipes/russian-dulce-de-leche-waffle-cake-and-instant-pot-dulce-de-leche-1062236\"\u003ERussian Dulce De Leche Waffle Cake and Instant Pot Dulce De Leche\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/dulce-de-leche-cheesecake-61816\"\u003EDulce De Leche Cheesecake\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/dulce-de-leche-cheesecake-62261\"\u003EDulce de Leche Cheesecake\u003C/a\u003E.",
      "cuisines": [],
      "dishTypes": [
        "dessert"
      ],
      "diets": [
        "gluten free",
        "lacto ovo vegetarian"
      ],
      "occasions": [],
      "instructions": "\u003Col\u003E\u003Cli\u003EToss the cookie crumbs into the melted butter in a mixing bowl. Reserve 1 tablespoon of the mixture for the topping. Press the rest of the mixture onto the bottom and up 3cm high of a greased 24cm spring form pan. Chill until its ready for use.\u003C/li\u003E\u003Cli\u003EUsing electric mixer beat balance cream cheese and sugar in a large mixing bowl until smooth. Add yogurt and eggs, beating until just blended. Stir in cornstarch, dulce de leche, lemon juice and zest until blended.\u003C/li\u003E\u003Cli\u003EPour the mixture into the crust and sprinkle the top with reserved cookie crumbs. Steamed bake the cheesecake at 165C/330F for 65 minutes until almost set. Turn oven off. Leave the cake with the oven door ajar for 1 hour. Cool completely and chill at least 4 hours or overnight until firm.\u003C/li\u003E\u003C/ol\u003E",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Toss the cookie crumbs into the melted butter in a mixing bowl. Reserve 1 tablespoon of the mixture for the topping. Press the rest of the mixture onto the bottom and up 3cm high of a greased 24cm spring form pan. Chill until its ready for use.Using electric mixer beat balance cream cheese and sugar in a large mixing bowl until smooth.",
              "ingredients": [
                {
                  "id": 10018192,
                  "name": "cookie crumbs",
                  "localizedName": "cookie crumbs",
                  "image": ""
                },
                {
                  "id": 1017,
                  "name": "cream cheese",
                  "localizedName": "cream cheese",
                  "image": "cream-cheese.jpg"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 19335,
                  "name": "sugar",
                  "localizedName": "sugar",
                  "image": "sugar-in-bowl.png"
                }
              ],
              "equipment": [
                {
                  "id": 404628,
                  "name": "hand mixer",
                  "localizedName": "hand mixer",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/hand-mixer.png"
                },
                {
                  "id": 405907,
                  "name": "mixing bowl",
                  "localizedName": "mixing bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/mixing-bowl.jpg"
                },
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 2,
              "step": "Add yogurt and eggs, beating until just blended. Stir in cornstarch, dulce de leche, lemon juice and zest until blended.",
              "ingredients": [
                {
                  "id": 98861,
                  "name": "dulce de leche",
                  "localizedName": "dulce de leche",
                  "image": "dulce-de-leche.png"
                },
                {
                  "id": 9152,
                  "name": "lemon juice",
                  "localizedName": "lemon juice",
                  "image": "lemon-juice.jpg"
                },
                {
                  "id": 20027,
                  "name": "corn starch",
                  "localizedName": "corn starch",
                  "image": "white-powder.jpg"
                },
                {
                  "id": 1116,
                  "name": "yogurt",
                  "localizedName": "yogurt",
                  "image": "plain-yogurt.jpg"
                },
                {
                  "id": 1123,
                  "name": "egg",
                  "localizedName": "egg",
                  "image": "egg.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 3,
              "step": "Pour the mixture into the crust and sprinkle the top with reserved cookie crumbs. Steamed bake the cheesecake at 165C/330F for 65 minutes until almost set. Turn oven off. Leave the cake with the oven door ajar for 1 hour. Cool completely and chill at least 4 hours or overnight until firm.",
              "ingredients": [
                {
                  "id": 10018192,
                  "name": "cookie crumbs",
                  "localizedName": "cookie crumbs",
                  "image": ""
                },
                {
                  "id": 0,
                  "name": "crust",
                  "localizedName": "crust",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                  "temperature": {
                    "number": 165,
                    "unit": "Celsius"
                  }
                }
              ],
              "length": {
                "number": 365,
                "unit": "minutes"
              }
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 38.7740325927734,
      "spoonacularSourceUrl": "https://spoonacular.com/dulce-de-leche-cheesecake-641730"
    },
    {
      "id": 661059,
      "image": "https://img.spoonacular.com/recipes/661059-556x370.jpg",
      "imageType": "jpg",
      "title": "Spicy Chicken with Salsa Verde",
      "readyInMinutes": 45,
      "servings": 6,
      "sourceUrl": "https://www.foodista.com/recipe/J2MM37RF/spicy-chicken-with-salsa-verde",
      "vegetarian": false,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 12,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 2,
      "healthScore": 28,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 181.48,
      "extendedIngredients": [
        {
          "id": 9037,
          "aisle": "Produce",
          "image": "avocado.jpg",
          "consistency": "SOLID",
          "name": "avocado",
          "nameClean": "avocado",
          "original": "1 medium avocado, mashed",
          "originalName": "avocado, mashed",
          "amount": 1,
          "unit": "medium",
          "meta": [
            "mashed"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "medium",
              "unitLong": "medium"
            },
            "metric": {
              "amount": 1,
              "unitShort": "medium",
              "unitLong": "medium"
            }
          }
        },
        {
          "id": 5091,
          "aisle": "Meat",
          "image": "chicken-thighs.png",
          "consistency": "SOLID",
          "name": "chicken thigh fillets",
          "nameClean": "chicken thigh fillets",
          "original": "200g chicken thigh fillets, trimmed",
          "originalName": "chicken thigh fillets, trimmed",
          "amount": 200,
          "unit": "g",
          "meta": [
            "trimmed"
          ],
          "measures": {
            "us": {
              "amount": 7.055,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 200,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 2009,
          "aisle": "Spices and Seasonings",
          "image": "chili-powder.jpg",
          "consistency": "SOLID",
          "name": "chili powder",
          "nameClean": "chili powder",
          "original": "1 teaspoon chili powder",
          "originalName": "chili powder",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 10218364,
          "aisle": "Pasta and Rice",
          "image": "flour-tortilla.jpg",
          "consistency": "SOLID",
          "name": "flour tortilla wraps",
          "nameClean": "flour tortilla wraps",
          "original": "1 package of Flour Tortilla wraps",
          "originalName": "Flour Tortilla wraps",
          "amount": 1,
          "unit": "package",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "pkg",
              "unitLong": "package"
            },
            "metric": {
              "amount": 1,
              "unitShort": "pkg",
              "unitLong": "package"
            }
          }
        },
        {
          "id": 2012,
          "aisle": "Spices and Seasonings",
          "image": "ground-coriander.jpg",
          "consistency": "SOLID",
          "name": "coriander leaves",
          "nameClean": "coriander leaves",
          "original": "1/4 cup Coriander leaves",
          "originalName": "Coriander leaves",
          "amount": 0.25,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 59.147,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 11215,
          "aisle": "Produce",
          "image": "garlic.png",
          "consistency": "SOLID",
          "name": "garlic",
          "nameClean": "garlic",
          "original": "2 cloves garlic, minced",
          "originalName": "garlic, minced",
          "amount": 2,
          "unit": "cloves",
          "meta": [
            "minced"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "cloves",
              "unitLong": "cloves"
            },
            "metric": {
              "amount": 2,
              "unitShort": "cloves",
              "unitLong": "cloves"
            }
          }
        },
        {
          "id": 11291,
          "aisle": "Produce",
          "image": "spring-onions.jpg",
          "consistency": "SOLID",
          "name": "green onions",
          "nameClean": "green onions",
          "original": "2 green onions roughly chopped",
          "originalName": "green onions roughly chopped",
          "amount": 2,
          "unit": "",
          "meta": [
            "roughly chopped"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 11979,
          "aisle": "Canned and Jarred",
          "image": "jalapeno-pepper.png",
          "consistency": "SOLID",
          "name": "jalapeño peppers",
          "nameClean": "jalapeño peppers",
          "original": "2 jalapeño peppers, chopped",
          "originalName": "jalapeño peppers, chopped",
          "amount": 2,
          "unit": "",
          "meta": [
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 9159,
          "aisle": "Produce",
          "image": "lime.jpg",
          "consistency": "SOLID",
          "name": "limes",
          "nameClean": "limes",
          "original": "2 limes",
          "originalName": "limes",
          "amount": 2,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 2064,
          "aisle": "Produce",
          "image": "mint.jpg",
          "consistency": "SOLID",
          "name": "mint leaves",
          "nameClean": "mint leaves",
          "original": "1/4 cup mint leaves",
          "originalName": "mint leaves",
          "amount": 0.25,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 11.25,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1072047,
          "aisle": "Spices and Seasonings",
          "image": "garlic-salt.jpg",
          "consistency": "SOLID",
          "name": "onion salt",
          "nameClean": "onion salt",
          "original": "1 teaspoon onion salt",
          "originalName": "onion salt",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 2027,
          "aisle": "Produce",
          "image": "oregano.jpg",
          "consistency": "SOLID",
          "name": "oregano",
          "nameClean": "oregano",
          "original": "1 teaspoon dried oregano",
          "originalName": "dried oregano",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [
            "dried"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 2028,
          "aisle": "Spices and Seasonings",
          "image": "paprika.jpg",
          "consistency": "SOLID",
          "name": "paprika",
          "nameClean": "paprika",
          "original": "1 tsp. paprika",
          "originalName": "paprika",
          "amount": 1,
          "unit": "tsp",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 10511819,
          "aisle": "Produce",
          "image": "red-chili.jpg",
          "consistency": "SOLID",
          "name": "chilli",
          "nameClean": "chilli",
          "original": "1 red Chilli",
          "originalName": "red Chilli",
          "amount": 1,
          "unit": "",
          "meta": [
            "red"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 1056,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "sour-cream.jpg",
          "consistency": "SOLID",
          "name": "cream",
          "nameClean": "cream",
          "original": "1 small tub of Sour Cream.",
          "originalName": "Sour Cream",
          "amount": 1,
          "unit": "small tub",
          "meta": [
            "sour"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "small tub",
              "unitLong": "small tub"
            },
            "metric": {
              "amount": 1,
              "unitShort": "small tub",
              "unitLong": "small tub"
            }
          }
        },
        {
          "id": 4669,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "vegetable-oil.jpg",
          "consistency": "LIQUID",
          "name": "vegetable oil",
          "nameClean": "vegetable oil",
          "original": "1 Teaspoon Vegetable Oil",
          "originalName": "Vegetable Oil",
          "amount": 1,
          "unit": "Teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        }
      ],
      "summary": "Forget going out to eat or ordering takeout every time you crave Mexican food. Try making Spicy Chicken with Salsa Verde at home. This recipe makes 6 servings with \u003Cb\u003E398 calories\u003C/b\u003E, \u003Cb\u003E14g of protein\u003C/b\u003E, and \u003Cb\u003E23g of fat\u003C/b\u003E each. For \u003Cb\u003E$1.81 per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 28%\u003C/b\u003E of your daily requirements of vitamins and minerals. Only a few people made this recipe, and 2 would say it hit the spot. From preparation to the plate, this recipe takes approximately \u003Cb\u003E45 minutes\u003C/b\u003E. It is brought to you by Foodista. Head to the store and pick up jalapeño peppers, oregano, mint leaves, and a few other things to make it today. It works well as an affordable side dish. Taking all factors into account, this recipe \u003Cb\u003Eearns a spoonacular score of 46%\u003C/b\u003E, which is solid. Try \u003Ca href=\"https://spoonacular.com/recipes/spicy-salsa-verde-chicken-588221\"\u003ESpicy salsa verde chicken\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/skillet-nachos-with-spicy-salsa-verde-chicken-603500\"\u003ESkillet Nachos with Spicy Salsa Verde Chicken\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/spicy-chicken-empanadas-with-orange-salsa-verde-320791\"\u003ESpicy Chicken Empanadas with Orange Salsa Verde\u003C/a\u003E for similar recipes.",
      "cuisines": [
        "Mexican"
      ],
      "dishTypes": [
        "side dish"
      ],
      "diets": [],
      "occasions": [],
      "instructions": "\u003Col\u003E\u003Cli\u003ETurn oven on to lowest setting and place your plates inside.\u003C/li\u003E\u003Cli\u003EPrepare your pre bought flour tortilla wraps by sprinkling each tortilla with a little water then stacking them together, wrap in tin foil and place in the oven alongside the plates.\u003C/li\u003E\u003Cli\u003EPrepare the chicken, cut chicken thighs into strips and mix with onion salt, chilli power, oregano, paprika and oil in a bowl and toss to coat.  set aside.\u003C/li\u003E\u003Cli\u003ESalsa Verde:  Place the chili, garlic, green onion, coriander, mint and vegetable oil in a food processor and pulse until combined. Set aside later for serving. Makes 1 cup (250ml).\u003C/li\u003E\u003Cli\u003EGuacamole: Scoop out flesh of 1 ripe Avocado, Chop and de-seed 1 red chilli and add to the Avocado, Squeeze in juice of 1/2 lime and mix to combine. Set aside later for serving\u003C/li\u003E\u003Cli\u003ESour Cream: Turn out tub of sour cream into a serving bowl, sprinkle lightly over the top with course black pepper. set aside.\u003C/li\u003E\u003Cli\u003EPreheat a char-grill pan or barbecue over high heat. Char-grill or barbecue the chicken for 4-5 minutes each side or until cooked through.\u003C/li\u003E\u003Cli\u003EChop 1 red bell pepper into lengthy strips and toss on the hot griddle for 1 min.\u003C/li\u003E\u003Cli\u003EPlace the Chicken in a serving bowl, with pepper and bring the Salsa Verde, Guacamole and sour cream to the table along with hot plates and the tortilla wraps.  Serve with extra fresh bowl of coriander leaves and lime wedges. .\u003C/li\u003E\u003Cli\u003EServes 6\u003C/li\u003E\u003C/ol\u003E",
      "analyzedInstructions": [
        {
          "name": "Turn oven on to lowest setting and place your plates inside.Prepare your pre bought flour tortilla wraps by sprinkling each tortilla with a little water then stacking them together, wrap in tin foil and place in the oven alongside the plates.Prepare the chicken, cut chicken thighs into strips and mix with onion salt, chilli power, oregano, paprika and oil in a bowl and toss to coat.  set aside.Salsa Verde",
          "steps": [
            {
              "number": 1,
              "step": "Place the chili, garlic, green onion, coriander, mint and vegetable oil in a food processor and pulse until combined. Set aside later for serving. Makes 1 cup (250ml).Guacamole: Scoop out flesh of 1 ripe Avocado, Chop and de-seed 1 red chilli and add to the Avocado, Squeeze in juice of 1/2 lime and mix to combine. Set aside later for serving",
              "ingredients": [
                {
                  "id": 4669,
                  "name": "vegetable oil",
                  "localizedName": "vegetable oil",
                  "image": "vegetable-oil.jpg"
                },
                {
                  "id": 11291,
                  "name": "green onions",
                  "localizedName": "green onions",
                  "image": "spring-onions.jpg"
                },
                {
                  "id": 10511819,
                  "name": "red chili pepper",
                  "localizedName": "red chili pepper",
                  "image": "red-chili.jpg"
                },
                {
                  "id": 1012013,
                  "name": "coriander",
                  "localizedName": "coriander",
                  "image": "ground-coriander.jpg"
                },
                {
                  "id": 1009037,
                  "name": "guacamole",
                  "localizedName": "guacamole",
                  "image": "guacamole.jpg"
                },
                {
                  "id": 9037,
                  "name": "avocado",
                  "localizedName": "avocado",
                  "image": "avocado.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                },
                {
                  "id": 11819,
                  "name": "chili pepper",
                  "localizedName": "chili pepper",
                  "image": "red-chili.jpg"
                },
                {
                  "id": 1019016,
                  "name": "juice",
                  "localizedName": "juice",
                  "image": "apple-juice.jpg"
                },
                {
                  "id": 9159,
                  "name": "lime",
                  "localizedName": "lime",
                  "image": "lime.jpg"
                },
                {
                  "id": 2064,
                  "name": "mint",
                  "localizedName": "mint",
                  "image": "mint.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404771,
                  "name": "food processor",
                  "localizedName": "food processor",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/food-processor.png"
                }
              ]
            },
            {
              "number": 2,
              "step": "Sour Cream: Turn out tub of sour cream into a serving bowl, sprinkle lightly over the top with course black pepper. set aside.Preheat a char-grill pan or barbecue over high heat. Char-grill or barbecue the chicken for 4-5 minutes each side or until cooked through.Chop 1 red bell pepper into lengthy strips and toss on the hot griddle for 1 min.",
              "ingredients": [
                {
                  "id": 11821,
                  "name": "red pepper",
                  "localizedName": "red pepper",
                  "image": "red-pepper.jpg"
                },
                {
                  "id": 1002030,
                  "name": "black pepper",
                  "localizedName": "black pepper",
                  "image": "pepper.jpg"
                },
                {
                  "id": 1056,
                  "name": "sour cream",
                  "localizedName": "sour cream",
                  "image": "sour-cream.jpg"
                },
                {
                  "id": 0,
                  "name": "chicken",
                  "localizedName": "chicken",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/whole-chicken.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404648,
                  "name": "grill pan",
                  "localizedName": "grill pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/grill-pan.jpg"
                },
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                },
                {
                  "id": 404706,
                  "name": "grill",
                  "localizedName": "grill",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/grill.jpg"
                },
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ],
              "length": {
                "number": 6,
                "unit": "minutes"
              }
            },
            {
              "number": 3,
              "step": "Place the Chicken in a serving bowl, with pepper and bring the Salsa Verde, Guacamole and sour cream to the table along with hot plates and the tortilla wraps.",
              "ingredients": [
                {
                  "id": 18364,
                  "name": "tortilla",
                  "localizedName": "tortilla",
                  "image": "flour-tortilla.jpg"
                },
                {
                  "id": 27028,
                  "name": "salsa verde",
                  "localizedName": "salsa verde",
                  "image": "salsa-verde.png"
                },
                {
                  "id": 1056,
                  "name": "sour cream",
                  "localizedName": "sour cream",
                  "image": "sour-cream.jpg"
                },
                {
                  "id": 1009037,
                  "name": "guacamole",
                  "localizedName": "guacamole",
                  "image": "guacamole.jpg"
                },
                {
                  "id": 0,
                  "name": "chicken",
                  "localizedName": "chicken",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/whole-chicken.jpg"
                },
                {
                  "id": 1002030,
                  "name": "pepper",
                  "localizedName": "pepper",
                  "image": "pepper.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 4,
              "step": "Serve with extra fresh bowl of coriander leaves and lime wedges. .",
              "ingredients": [
                {
                  "id": 1029159,
                  "name": "lime wedge",
                  "localizedName": "lime wedge",
                  "image": "lime-wedge.jpg"
                },
                {
                  "id": 1012013,
                  "name": "coriander",
                  "localizedName": "coriander",
                  "image": "ground-coriander.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 5,
              "step": "Serves 6",
              "ingredients": [],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 77.1264495849609,
      "spoonacularSourceUrl": "https://spoonacular.com/spicy-chicken-with-salsa-verde-661059"
    },
    {
      "id": 636901,
      "image": "https://img.spoonacular.com/recipes/636901-556x370.jpg",
      "imageType": "jpg",
      "title": "Cannellini Bean Side Dish With Fennel, Red Onion, and Saffron",
      "readyInMinutes": 45,
      "servings": 6,
      "sourceUrl": "https://www.foodista.com/recipe/ML5WHHCX/cannellini-beans-with-fennel-red-onion-and-saffron",
      "vegetarian": true,
      "vegan": true,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 3,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 9,
      "healthScore": 1,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 107.8,
      "extendedIngredients": [
        {
          "id": 10716050,
          "aisle": "Canned and Jarred",
          "image": "cooked-cannellini-beans.png",
          "consistency": "SOLID",
          "name": "cannellini beans",
          "nameClean": "cannellini beans",
          "original": "3 cups cooked cannellini beans, with the liquid that clings to them",
          "originalName": "cooked cannellini beans, with the liquid that clings to them",
          "amount": 3,
          "unit": "cups",
          "meta": [
            "with the liquid that clings to them",
            "cooked"
          ],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 537,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1034053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "olive-oil.jpg",
          "consistency": "LIQUID",
          "name": "extra virgin olive oil",
          "nameClean": "extra virgin olive oil",
          "original": "1 tablespoon extra virgin olive oil",
          "originalName": "extra virgin olive oil",
          "amount": 1,
          "unit": "tablespoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 11957,
          "aisle": "Produce",
          "image": "fennel.png",
          "consistency": "SOLID",
          "name": "fennel",
          "nameClean": "fennel",
          "original": "1 cup chopped fennel, fronds reserved",
          "originalName": "chopped fennel, fronds reserved",
          "amount": 1,
          "unit": "cup",
          "meta": [
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 87,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 10311297,
          "aisle": "Produce",
          "image": "parsley.jpg",
          "consistency": "SOLID",
          "name": "flat parsley",
          "nameClean": "flat parsley",
          "original": "Minced flat-leaf parsley",
          "originalName": "Minced flat parsley",
          "amount": 1,
          "unit": "leaf",
          "meta": [
            "minced"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "leaf",
              "unitLong": "leave"
            },
            "metric": {
              "amount": 1,
              "unitShort": "leaf",
              "unitLong": "leave"
            }
          }
        },
        {
          "id": 10011282,
          "aisle": "Produce",
          "image": "red-onion.png",
          "consistency": "SOLID",
          "name": "onion",
          "nameClean": "onion",
          "original": "1/2 cup chopped red onion",
          "originalName": "chopped red onion",
          "amount": 0.5,
          "unit": "cup",
          "meta": [
            "red",
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 80,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 2037,
          "aisle": "Gourmet",
          "image": "saffron.jpg",
          "consistency": "SOLID",
          "name": "saffron threads",
          "nameClean": "saffron threads",
          "original": "1/4 teaspoon saffron threads",
          "originalName": "saffron threads",
          "amount": 0.25,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 1002030,
          "aisle": "Spices and Seasonings",
          "image": "pepper.jpg",
          "consistency": "SOLID",
          "name": "salt and pepper",
          "nameClean": "salt and pepper",
          "original": "Salt and freshly ground black pepper",
          "originalName": "Salt and freshly ground black pepper",
          "amount": 6,
          "unit": "servings",
          "meta": [
            "black",
            "freshly ground"
          ],
          "measures": {
            "us": {
              "amount": 6,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 6,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 6615,
          "aisle": "Canned and Jarred",
          "image": "chicken-broth.png",
          "consistency": "LIQUID",
          "name": "vegetable broth",
          "nameClean": "vegetable broth",
          "original": "vegetable broth, as needed",
          "originalName": "vegetable broth, as needed",
          "amount": 6,
          "unit": "servings",
          "meta": [
            "as needed"
          ],
          "measures": {
            "us": {
              "amount": 6,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 6,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 14412,
          "aisle": "Beverages",
          "image": "water.png",
          "consistency": "LIQUID",
          "name": "water",
          "nameClean": "water",
          "original": "2 tablespoons boiling water",
          "originalName": "boiling water",
          "amount": 2,
          "unit": "tablespoons",
          "meta": [
            "boiling"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        }
      ],
      "summary": "If you want to add more \u003Cb\u003Egluten free, dairy free, lacto ovo vegetarian, and vegan\u003C/b\u003E recipes to your repertoire, Cannellini Bean Side Dish With Fennel, Red Onion, and Saffron might be a recipe you should try. This recipe makes 6 servings with \u003Cb\u003E107 calories\u003C/b\u003E, \u003Cb\u003E5g of protein\u003C/b\u003E, and \u003Cb\u003E2g of fat\u003C/b\u003E each. For \u003Cb\u003E$1.08 per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 4%\u003C/b\u003E of your daily requirements of vitamins and minerals. A mixture of cannellini beans, extra virgin olive oil, salt and pepper, and a handful of other ingredients are all it takes to make this recipe so scrumptious. 9 people found this recipe to be tasty and satisfying. It is brought to you by Foodista. It works well as a reasonably priced side dish. From preparation to the plate, this recipe takes about \u003Cb\u003E45 minutes\u003C/b\u003E. With a spoonacular \u003Cb\u003Escore of 22%\u003C/b\u003E, this dish is not so super. If you like this recipe, take a look at these similar recipes: \u003Ca href=\"https://spoonacular.com/recipes/creamy-cannellini-bean-side-dish-640607\"\u003ECreamy Cannellini Bean Side Dish\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/cannellini-bean-red-onion-and-arugula-salad-313335\"\u003ECannellini Bean, Red Onion, and Arugula Salad\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/cannellini-bean-parsley-tomato-red-onion-salad-890246\"\u003ECannellini Bean, Parsley, Tomato, Red Onion Salad\u003C/a\u003E.",
      "cuisines": [],
      "dishTypes": [
        "side dish"
      ],
      "diets": [
        "gluten free",
        "dairy free",
        "lacto ovo vegetarian",
        "vegan"
      ],
      "occasions": [],
      "instructions": "\u003Col\u003E\u003Cli\u003ECombine saffron and boiling water in small heat-proof bowl or measuring cup; set aside for 5 minutes.\u003C/li\u003E\u003Cli\u003EHeat oil in large nonstick skillet; add fennel and onion. Cook, stirring occasionally, until tender, about 5 minutes.\u003C/li\u003E\u003Cli\u003EAdd beans and saffron mixture to skillet and stir to blend. Season to taste with salt and pepper. If mixture seems dry, add bean cooking liquid or vegetable broth to achieve desired consistency. Sprinkle with parsley or fennel fronds and serve immediately.\u003C/li\u003E\u003C/ol\u003E",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Combine saffron and boiling water in small heat-proof bowl or measuring cup; set aside for 5 minutes.",
              "ingredients": [
                {
                  "id": 2037,
                  "name": "saffron",
                  "localizedName": "saffron",
                  "image": "saffron.jpg"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }
              ],
              "equipment": [
                {
                  "id": 404766,
                  "name": "measuring cup",
                  "localizedName": "measuring cup",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/measuring-cup.jpg"
                },
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ],
              "length": {
                "number": 5,
                "unit": "minutes"
              }
            },
            {
              "number": 2,
              "step": "Heat oil in large nonstick skillet; add fennel and onion. Cook, stirring occasionally, until tender, about 5 minutes.",
              "ingredients": [
                {
                  "id": 11957,
                  "name": "fennel",
                  "localizedName": "fennel",
                  "image": "fennel.png"
                },
                {
                  "id": 11282,
                  "name": "onion",
                  "localizedName": "onion",
                  "image": "brown-onion.png"
                },
                {
                  "id": 4582,
                  "name": "cooking oil",
                  "localizedName": "cooking oil",
                  "image": "vegetable-oil.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ],
              "length": {
                "number": 5,
                "unit": "minutes"
              }
            },
            {
              "number": 3,
              "step": "Add beans and saffron mixture to skillet and stir to blend. Season to taste with salt and pepper. If mixture seems dry, add bean cooking liquid or vegetable broth to achieve desired consistency.",
              "ingredients": [
                {
                  "id": 1102047,
                  "name": "salt and pepper",
                  "localizedName": "salt and pepper",
                  "image": "salt-and-pepper.jpg"
                },
                {
                  "id": 6615,
                  "name": "vegetable broth",
                  "localizedName": "vegetable broth",
                  "image": "chicken-broth.png"
                },
                {
                  "id": 2037,
                  "name": "saffron",
                  "localizedName": "saffron",
                  "image": "saffron.jpg"
                },
                {
                  "id": 0,
                  "name": "beans",
                  "localizedName": "beans",
                  "image": "kidney-beans.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 4,
              "step": "Sprinkle with parsley or fennel fronds and serve immediately.",
              "ingredients": [
                {
                  "id": 11297,
                  "name": "parsley",
                  "localizedName": "parsley",
                  "image": "parsley.jpg"
                },
                {
                  "id": 11957,
                  "name": "fennel",
                  "localizedName": "fennel",
                  "image": "fennel.png"
                }
              ],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 30.0874176025391,
      "spoonacularSourceUrl": "https://spoonacular.com/cannellini-bean-side-dish-with-fennel-red-onion-and-saffron-636901"
    },
    {
      "id": 716245,
      "image": "https://img.spoonacular.com/recipes/716245-556x370.jpg",
      "imageType": "jpg",
      "title": "Avocado Egg Salad",
      "readyInMinutes": 45,
      "servings": 1,
      "sourceUrl": "https://www.afrolems.com/2016/02/08/avocado-egg-salad/",
      "vegetarian": true,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 7,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 10,
      "healthScore": 15,
      "creditsText": "Afrolems",
      "license": "CC BY 4.0",
      "sourceName": "Afrolems",
      "pricePerServing": 152.03,
      "extendedIngredients": [
        {
          "id": 1002030,
          "aisle": "Spices and Seasonings",
          "image": "pepper.jpg",
          "consistency": "SOLID",
          "name": "pepper",
          "nameClean": "pepper",
          "original": "1/4 teaspoons of Black pepper",
          "originalName": "Black pepper",
          "amount": 0.25,
          "unit": "teaspoons",
          "meta": [
            "black"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 1123,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg.png",
          "consistency": "SOLID",
          "name": "eggs",
          "nameClean": "eggs",
          "original": "2 Eggs",
          "originalName": "Eggs",
          "amount": 2,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 10014412,
          "aisle": "Frozen",
          "image": "ice-cubes.png",
          "consistency": "SOLID",
          "name": "seasoning cube",
          "nameClean": "seasoning cube",
          "original": "1/2 seasoning cube",
          "originalName": "seasoning cube",
          "amount": 0.5,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 9150,
          "aisle": "Produce",
          "image": "lemon.png",
          "consistency": "SOLID",
          "name": "lemon",
          "nameClean": "lemon",
          "original": "1/4 lemon slice",
          "originalName": "lemon slice",
          "amount": 0.25,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 0.25,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 9252,
          "aisle": "Produce",
          "image": "pears-bosc.jpg",
          "consistency": "SOLID",
          "name": "avocado pear",
          "nameClean": "avocado pear",
          "original": "1 Avocado Pear",
          "originalName": "Avocado Pear",
          "amount": 1,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 10011819,
          "aisle": "Produce",
          "image": "habanero-pepper.jpg",
          "consistency": "SOLID",
          "name": "scotch bonnet pepper",
          "nameClean": "scotch bonnet pepper",
          "original": "1 Scotch bonnet pepper",
          "originalName": "Scotch bonnet pepper",
          "amount": 1,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 18075,
          "aisle": "Bakery/Bread",
          "image": "whole-wheat-bread.jpg",
          "consistency": "SOLID",
          "name": "bread",
          "nameClean": "bread",
          "original": "2 slices of whole wheat bread",
          "originalName": "whole wheat bread",
          "amount": 2,
          "unit": "slices",
          "meta": [
            "whole wheat"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "slice",
              "unitLong": "slices"
            },
            "metric": {
              "amount": 2,
              "unitShort": "slice",
              "unitLong": "slices"
            }
          }
        }
      ],
      "summary": "The recipe Avocado Egg Salad can be made \u003Cb\u003Ein approximately 45 minutes\u003C/b\u003E. This recipe makes 1 servings with \u003Cb\u003E383 calories\u003C/b\u003E, \u003Cb\u003E19g of protein\u003C/b\u003E, and \u003Cb\u003E11g of fat\u003C/b\u003E each. For \u003Cb\u003E$1.52 per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 23%\u003C/b\u003E of your daily requirements of vitamins and minerals. If you have bread, lemon, seasoning cube, and a few other ingredients on hand, you can make it. This recipe is liked by 10 foodies and cooks. It is brought to you by Afrolems. A few people really liked this main course. It is a good option if you're following a \u003Cb\u003Edairy free and lacto ovo vegetarian\u003C/b\u003E diet. Overall, this recipe earns a \u003Cb\u003Egood spoonacular score of 66%\u003C/b\u003E. If you like this recipe, you might also like recipes such as \u003Ca href=\"https://spoonacular.com/recipes/avocado-egg-salad-1594551\"\u003EAvocado Egg Salad\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/avocado-egg-salad-995935\"\u003EAvocado Egg Salad\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/avocado-egg-salad-1208161\"\u003EAvocado Egg Salad\u003C/a\u003E.",
      "cuisines": [],
      "dishTypes": [
        "side dish",
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "dairy free",
        "lacto ovo vegetarian"
      ],
      "occasions": [],
      "instructions": "Boil your eggs and immerse in water to cool.Peel your avocado and mash in a bowl.Squirt your lemon over the avocado.Peel the eggs, chop and mix with the avocado.Mix the black pepper, seasoning and scotch bonnet pepper and set aside.Toast your bread and roll out with a rolling pin, cut the edges off and serve the avocado egg salad on the bread.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Boil your eggs and immerse in water to cool.Peel your avocado and mash in a bowl.Squirt your lemon over the avocado.Peel the eggs, chop and mix with the avocado.",
              "ingredients": [
                {
                  "id": 9037,
                  "name": "avocado",
                  "localizedName": "avocado",
                  "image": "avocado.jpg"
                },
                {
                  "id": 9150,
                  "name": "lemon",
                  "localizedName": "lemon",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/lemon.png"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                },
                {
                  "id": 1123,
                  "name": "egg",
                  "localizedName": "egg",
                  "image": "egg.png"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Mix the black pepper, seasoning and scotch bonnet pepper and set aside.Toast your bread and roll out with a rolling pin, cut the edges off and serve the avocado egg salad on the bread.",
              "ingredients": [
                {
                  "id": 10011819,
                  "name": "scotch bonnet chili",
                  "localizedName": "scotch bonnet chili",
                  "image": "scotch-bonnet-chile.jpg"
                },
                {
                  "id": 1002030,
                  "name": "black pepper",
                  "localizedName": "black pepper",
                  "image": "pepper.jpg"
                },
                {
                  "id": 0,
                  "name": "egg salad",
                  "localizedName": "egg salad",
                  "image": ""
                },
                {
                  "id": 1042027,
                  "name": "seasoning",
                  "localizedName": "seasoning",
                  "image": "seasoning.png"
                },
                {
                  "id": 9037,
                  "name": "avocado",
                  "localizedName": "avocado",
                  "image": "avocado.jpg"
                },
                {
                  "id": 18064,
                  "name": "bread",
                  "localizedName": "bread",
                  "image": "white-bread.jpg"
                },
                {
                  "id": 0,
                  "name": "sandwich bread",
                  "localizedName": "sandwich bread",
                  "image": "white-bread.jpg"
                },
                {
                  "id": 0,
                  "name": "roll",
                  "localizedName": "roll",
                  "image": "dinner-yeast-rolls.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404746,
                  "name": "rolling pin",
                  "localizedName": "rolling pin",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/rolling-pin.jpg"
                }
              ]
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 19.9681186676025,
      "spoonacularSourceUrl": "https://spoonacular.com/avocado-egg-salad-716245"
    },
    {
      "id": 715545,
      "image": "https://img.spoonacular.com/recipes/715545-556x370.jpg",
      "imageType": "jpg",
      "title": "How to Make the Best Chicken Jambalaya",
      "readyInMinutes": 55,
      "servings": 8,
      "sourceUrl": "https://www.pinkwhen.com/chicken-and-sausage-jambalaya/",
      "vegetarian": false,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": true,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 13,
      "gaps": "no",
      "preparationMinutes": 10,
      "cookingMinutes": 45,
      "aggregateLikes": 2169,
      "healthScore": 13,
      "creditsText": "pinkwhen.com",
      "license": null,
      "sourceName": "pinkwhen.com",
      "pricePerServing": 186.09,
      "extendedIngredients": [
        {
          "id": 1145,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "butter-sliced.jpg",
          "consistency": "SOLID",
          "name": "▢ butter",
          "nameClean": "▢ butter",
          "original": "▢ 2 tbsp unsalted butter",
          "originalName": "▢ unsalted butter",
          "amount": 2,
          "unit": "tbsp",
          "meta": [
            "unsalted"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 1017063,
          "aisle": "Meat",
          "image": "raw-pork-sausage.png",
          "consistency": "SOLID",
          "name": "▢ sausage",
          "nameClean": "▢ sausage",
          "original": "▢ 1 lb sliced sausage",
          "originalName": "▢ sliced sausage",
          "amount": 1,
          "unit": "lb",
          "meta": [
            "sliced"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "lb",
              "unitLong": "pound"
            },
            "metric": {
              "amount": 453.592,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1055062,
          "aisle": "Meat",
          "image": "chicken-breasts.png",
          "consistency": "SOLID",
          "name": "▢ chicken breasts",
          "nameClean": "▢ chicken breasts",
          "original": "▢ 1 lb boneless skinless chicken breasts cut into bite sized pieces",
          "originalName": "▢ boneless skinless chicken breasts cut into bite sized pieces",
          "amount": 1,
          "unit": "lb",
          "meta": [
            "boneless",
            "skinless",
            "cut into bite sized pieces"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "lb",
              "unitLong": "pound"
            },
            "metric": {
              "amount": 453.592,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 10511282,
          "aisle": "Produce",
          "image": "brown-onion.png",
          "consistency": "SOLID",
          "name": "▢ onion",
          "nameClean": "▢ onion",
          "original": "▢ 1 cup yellow onion chopped",
          "originalName": "▢ yellow onion chopped",
          "amount": 1,
          "unit": "cup",
          "meta": [
            "yellow",
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 160,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 11143,
          "aisle": "Produce",
          "image": "celery.jpg",
          "consistency": "SOLID",
          "name": "▢ celery",
          "nameClean": "▢ celery",
          "original": "▢ 1 cup celery chopped",
          "originalName": "▢ celery chopped",
          "amount": 1,
          "unit": "cup",
          "meta": [
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 101,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 10211821,
          "aisle": "Produce",
          "image": "bell-pepper-orange.png",
          "consistency": "SOLID",
          "name": "▢ bell pepper",
          "nameClean": "▢ bell pepper",
          "original": "▢ 1/2 cup bell pepper chopped",
          "originalName": "▢ bell pepper chopped",
          "amount": 0.5,
          "unit": "cup",
          "meta": [
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 74.5,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 11215,
          "aisle": "Produce",
          "image": "garlic.png",
          "consistency": "SOLID",
          "name": "▢ garlic",
          "nameClean": "▢ garlic",
          "original": "▢ 1 tbsp minced garlic",
          "originalName": "▢ minced garlic",
          "amount": 1,
          "unit": "tbsp",
          "meta": [
            "minced"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 11549,
          "aisle": "Canned and Jarred",
          "image": "tomato-sauce-or-pasta-sauce.jpg",
          "consistency": "SOLID",
          "name": "▢ tomato sauce",
          "nameClean": "▢ tomato sauce",
          "original": "▢ 1 cup tomato sauce",
          "originalName": "▢ tomato sauce",
          "amount": 1,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 245,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 11529,
          "aisle": "Produce",
          "image": "tomato.png",
          "consistency": "SOLID",
          "name": "▢ tomatoes",
          "nameClean": "▢ tomatoes",
          "original": "▢ 14.5 oz diced tomatoes",
          "originalName": "▢ diced tomatoes",
          "amount": 14.5,
          "unit": "oz",
          "meta": [
            "diced"
          ],
          "measures": {
            "us": {
              "amount": 14.5,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 411.068,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 6172,
          "aisle": "Canned and Jarred",
          "image": "chicken-broth.png",
          "consistency": "LIQUID",
          "name": "▢ chicken stock",
          "nameClean": "▢ chicken stock",
          "original": "▢ 2 1/2 cups chicken stock",
          "originalName": "▢ chicken stock",
          "amount": 2.5,
          "unit": "cups",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 600,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 20444,
          "aisle": "Pasta and Rice",
          "image": "uncooked-white-rice.png",
          "consistency": "SOLID",
          "name": "▢ rice",
          "nameClean": "▢ rice",
          "original": "▢ 1 1/2 cups rice uncooked and rinsed",
          "originalName": "▢ rice uncooked and rinsed",
          "amount": 1.5,
          "unit": "cups",
          "meta": [
            "rinsed",
            "uncooked"
          ],
          "measures": {
            "us": {
              "amount": 1.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 277.5,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 2004,
          "aisle": "Produce",
          "image": "bay-leaves.jpg",
          "consistency": "SOLID",
          "name": "▢ 2 bay",
          "nameClean": "▢ 2 bay",
          "original": "▢ 2 bay leaves whole",
          "originalName": "▢ 2 bay whole",
          "amount": 1,
          "unit": "leaves",
          "meta": [
            "whole"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "leaf",
              "unitLong": "leave"
            },
            "metric": {
              "amount": 1,
              "unitShort": "leaf",
              "unitLong": "leave"
            }
          }
        },
        {
          "id": 1002030,
          "aisle": "Spices and Seasonings",
          "image": "pepper.jpg",
          "consistency": "SOLID",
          "name": "▢ ground pepper",
          "nameClean": "▢ ground pepper",
          "original": "▢ 2 tsp ground black pepper",
          "originalName": "▢ ground black pepper",
          "amount": 2,
          "unit": "tsp",
          "meta": [
            "black"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 2,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 2047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "▢ salt",
          "nameClean": "▢ salt",
          "original": "▢ 1 tsp salt",
          "originalName": "▢ salt",
          "amount": 1,
          "unit": "tsp",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 2032,
          "aisle": "Spices and Seasonings",
          "image": "white-pepper.png",
          "consistency": "SOLID",
          "name": "▢ pepper",
          "nameClean": "▢ pepper",
          "original": "▢ 1 tsp white pepper",
          "originalName": "▢ white pepper",
          "amount": 1,
          "unit": "tsp",
          "meta": [
            "white"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 2049,
          "aisle": "Produce",
          "image": "thyme.jpg",
          "consistency": "SOLID",
          "name": "▢ thyme",
          "nameClean": "▢ thyme",
          "original": "▢ 1 tsp thyme dried",
          "originalName": "▢ thyme dried",
          "amount": 1,
          "unit": "tsp",
          "meta": [
            "dried"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 1032009,
          "aisle": "Spices and Seasonings",
          "image": "red-pepper-flakes.jpg",
          "consistency": "SOLID",
          "name": "▢ pepper flakes",
          "nameClean": "▢ pepper flakes",
          "original": "▢ 1 tsp red pepper flakes",
          "originalName": "▢ red pepper flakes",
          "amount": 1,
          "unit": "tsp",
          "meta": [
            "red"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 99226,
          "aisle": "Produce",
          "image": "fresh-sage.png",
          "consistency": "SOLID",
          "name": "▢ sage",
          "nameClean": "▢ sage",
          "original": "▢ 1/2 tsp sage",
          "originalName": "▢ sage",
          "amount": 0.5,
          "unit": "tsp",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        }
      ],
      "summary": "You can never have too many Cajun recipes, so give How to Make the Best Chicken Jambalayan a try. This main course has \u003Cb\u003E450 calories\u003C/b\u003E, \u003Cb\u003E26g of protein\u003C/b\u003E, and \u003Cb\u003E21g of fat\u003C/b\u003E per serving. This recipe serves 8. For \u003Cb\u003E$1.86 per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 20%\u003C/b\u003E of your daily requirements of vitamins and minerals. This recipe from Pink When requires ▢ butter, ▢ tomatoes, ▢ tomato sauce, and ▢ onion. It is a good option if you're following a \u003Cb\u003Egluten free\u003C/b\u003E diet. Plenty of people made this recipe, and 2169 would say it hit the spot. From preparation to the plate, this recipe takes around \u003Cb\u003E55 minutes\u003C/b\u003E. All things considered, we decided this recipe \u003Cb\u003Edeserves a spoonacular score of 76%\u003C/b\u003E. This score is good. If you like this recipe, take a look at these similar recipes: \u003Ca href=\"https://spoonacular.com/recipes/how-to-make-the-best-chicken-jambalaya-1695727\"\u003EHow to Make the Best Chicken Jambalaya\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/chicken-jambalaya-1300201\"\u003EChicken Jambalaya\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/chicken-jambalaya-ii-328195\"\u003EChicken Jambalayan II\u003C/a\u003E.",
      "cuisines": [
        "Creole",
        "Cajun"
      ],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "gluten free"
      ],
      "occasions": [],
      "instructions": "Instructions\n\nCombine the creole seasoning ingredients in a small bowl and set aside.\n\nMelt butter in a large dutch oven over medium-high heat.\n\nAdd the sausage until it starts to brown, about 3 minutes.\n\nAdd the chicken and continue to cook until brown, about 3-5 minutes. Stir frequently.\n\nTurn the stove top down to medium heat.\n\nPreheat your oven to 350 degrees.\n\nStir in the seasoning mix of cajun spices and 1/2 of the chopped onion, celery, green bell pepper, and garlic. Cook until vegetables get tender, about 3-5 minutes. Stir frequently and scrape the bottom of the pot frequently.\n\nStir in the tomato sauce and cook for about one minute.\n\nStir in the remaining onion, celery, bell pepper, garlic, and the diced tomatoes then remove from heat.\n\nStir in the rice and chicken stock, mix the ingredients well.\n\nBake uncovered in the oven at 350 degrees for one hour or until the rice is tender but still has a little crunch.\n\nRemove from the oven, add the bay leaves and stir well.\n\nAllow the dish to cool for five minutes before serving. OPTIONAL: Top with green onions before serving.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Combine the creole seasoning ingredients in a small bowl and set aside.",
              "ingredients": [
                {
                  "id": 1002031,
                  "name": "creole seasoning",
                  "localizedName": "creole seasoning",
                  "image": "chili-powder.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Melt butter in a large dutch oven over medium-high heat.",
              "ingredients": [
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404667,
                  "name": "dutch oven",
                  "localizedName": "dutch oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/dutch-oven.jpg"
                }
              ]
            },
            {
              "number": 3,
              "step": "Add the sausage until it starts to brown, about 3 minutes.",
              "ingredients": [
                {
                  "id": 1017063,
                  "name": "sausage",
                  "localizedName": "sausage",
                  "image": "raw-pork-sausage.png"
                }
              ],
              "equipment": [],
              "length": {
                "number": 3,
                "unit": "minutes"
              }
            },
            {
              "number": 4,
              "step": "Add the chicken and continue to cook until brown, about 3-5 minutes. Stir frequently.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "chicken",
                  "localizedName": "chicken",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/whole-chicken.jpg"
                }
              ],
              "equipment": [],
              "length": {
                "number": 5,
                "unit": "minutes"
              }
            },
            {
              "number": 5,
              "step": "Turn the stove top down to medium heat.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404794,
                  "name": "stove",
                  "localizedName": "stove",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            },
            {
              "number": 6,
              "step": "Preheat your oven to 350 degrees.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            },
            {
              "number": 7,
              "step": "Stir in the seasoning mix of cajun spices and 1/2 of the chopped onion, celery, green bell pepper, and garlic. Cook until vegetables get tender, about 3-5 minutes. Stir frequently and scrape the bottom of the pot frequently.",
              "ingredients": [
                {
                  "id": 11333,
                  "name": "green pepper",
                  "localizedName": "green pepper",
                  "image": "green-pepper.jpg"
                },
                {
                  "id": 1032027,
                  "name": "seasoning mix",
                  "localizedName": "seasoning mix",
                  "image": "seasoning.png"
                },
                {
                  "id": 11583,
                  "name": "vegetable",
                  "localizedName": "vegetable",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/mixed-vegetables.png"
                },
                {
                  "id": 11143,
                  "name": "celery",
                  "localizedName": "celery",
                  "image": "celery.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                },
                {
                  "id": 2035,
                  "name": "spices",
                  "localizedName": "spices",
                  "image": "spices.png"
                },
                {
                  "id": 11282,
                  "name": "onion",
                  "localizedName": "onion",
                  "image": "brown-onion.png"
                }
              ],
              "equipment": [
                {
                  "id": 404752,
                  "name": "pot",
                  "localizedName": "pot",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg"
                }
              ],
              "length": {
                "number": 5,
                "unit": "minutes"
              }
            },
            {
              "number": 8,
              "step": "Stir in the tomato sauce and cook for about one minute.",
              "ingredients": [
                {
                  "id": 11549,
                  "name": "tomato sauce",
                  "localizedName": "tomato sauce",
                  "image": "tomato-sauce-or-pasta-sauce.jpg"
                }
              ],
              "equipment": [],
              "length": {
                "number": 1,
                "unit": "minutes"
              }
            },
            {
              "number": 9,
              "step": "Stir in the remaining onion, celery, bell pepper, garlic, and the diced tomatoes then remove from heat.",
              "ingredients": [
                {
                  "id": 10211821,
                  "name": "bell pepper",
                  "localizedName": "bell pepper",
                  "image": "bell-pepper-orange.png"
                },
                {
                  "id": 11529,
                  "name": "tomato",
                  "localizedName": "tomato",
                  "image": "tomato.png"
                },
                {
                  "id": 11143,
                  "name": "celery",
                  "localizedName": "celery",
                  "image": "celery.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                },
                {
                  "id": 11282,
                  "name": "onion",
                  "localizedName": "onion",
                  "image": "brown-onion.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 10,
              "step": "Stir in the rice and chicken stock, mix the ingredients well.",
              "ingredients": [
                {
                  "id": 6172,
                  "name": "chicken stock",
                  "localizedName": "chicken stock",
                  "image": "chicken-broth.png"
                },
                {
                  "id": 20444,
                  "name": "rice",
                  "localizedName": "rice",
                  "image": "uncooked-white-rice.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 11,
              "step": "Bake uncovered in the oven at 350 degrees for one hour or until the rice is tender but still has a little crunch.",
              "ingredients": [
                {
                  "id": 20444,
                  "name": "rice",
                  "localizedName": "rice",
                  "image": "uncooked-white-rice.png"
                }
              ],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ],
              "length": {
                "number": 60,
                "unit": "minutes"
              }
            },
            {
              "number": 12,
              "step": "Remove from the oven, add the bay leaves and stir well.",
              "ingredients": [
                {
                  "id": 2004,
                  "name": "bay leaves",
                  "localizedName": "bay leaves",
                  "image": "bay-leaves.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            },
            {
              "number": 13,
              "step": "Allow the dish to cool for five minutes before serving. OPTIONAL: Top with green onions before serving.",
              "ingredients": [
                {
                  "id": 11291,
                  "name": "green onions",
                  "localizedName": "green onions",
                  "image": "spring-onions.jpg"
                }
              ],
              "equipment": [],
              "length": {
                "number": 5,
                "unit": "minutes"
              }
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 77.1676330566406,
      "spoonacularSourceUrl": "https://spoonacular.com/how-to-make-the-best-chicken-jambalaya-715545"
    },
    {
      "id": 658855,
      "image": "https://img.spoonacular.com/recipes/658855-556x370.jpg",
      "imageType": "jpg",
      "title": "Rugelach",
      "readyInMinutes": 45,
      "servings": 32,
      "sourceUrl": "https://www.foodista.com/recipe/BVR8KW3L/rugelach",
      "vegetarian": true,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 7,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 3,
      "healthScore": 0,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 31.62,
      "extendedIngredients": [
        {
          "id": 1001001,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "butter.jpg",
          "consistency": "SOLID",
          "name": "butter",
          "nameClean": "butter",
          "original": "250g salted butter",
          "originalName": "salted butter",
          "amount": 250,
          "unit": "g",
          "meta": [
            "salted"
          ],
          "measures": {
            "us": {
              "amount": 8.818,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 250,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1017,
          "aisle": "Cheese",
          "image": "cream-cheese.jpg",
          "consistency": "SOLID",
          "name": "block of cream cheese",
          "nameClean": "block of cream cheese",
          "original": "250g block of cream cheese",
          "originalName": "block of cream cheese",
          "amount": 250,
          "unit": "g",
          "meta": [],
          "measures": {
            "us": {
              "amount": 8.818,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 250,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 2047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "salt",
          "nameClean": "salt",
          "original": "pinch of salt",
          "originalName": "pinch of salt",
          "amount": 1,
          "unit": "pinch",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "pinch",
              "unitLong": "pinch"
            },
            "metric": {
              "amount": 1,
              "unitShort": "pinch",
              "unitLong": "pinch"
            }
          }
        },
        {
          "id": 20081,
          "aisle": "Baking",
          "image": "flour.png",
          "consistency": "SOLID",
          "name": "flour",
          "nameClean": "flour",
          "original": "2 1/2 cups plain flour (plus more to dust)",
          "originalName": "plain flour (plus more to dust)",
          "amount": 2.5,
          "unit": "cups",
          "meta": [
            "plain",
            "plus more to dust)"
          ],
          "measures": {
            "us": {
              "amount": 2.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 312.5,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1125,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg-yolk.jpg",
          "consistency": "SOLID",
          "name": "egg yolks",
          "nameClean": "egg yolks",
          "original": "2 large egg yolks",
          "originalName": "egg yolks",
          "amount": 2,
          "unit": "large",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "large",
              "unitLong": "larges"
            },
            "metric": {
              "amount": 2,
              "unitShort": "large",
              "unitLong": "larges"
            }
          }
        },
        {
          "id": 2050,
          "aisle": "Baking",
          "image": "vanilla-extract.jpg",
          "consistency": "LIQUID",
          "name": "vanilla extract",
          "nameClean": "vanilla extract",
          "original": "1 teaspoon vanilla extract",
          "originalName": "vanilla extract",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 19335,
          "aisle": "Baking",
          "image": "sugar-in-bowl.png",
          "consistency": "SOLID",
          "name": "caster sugar",
          "nameClean": "caster sugar",
          "original": "1/2 cup caster sugar",
          "originalName": "caster sugar",
          "amount": 0.5,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 100,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 9431,
          "aisle": "Produce",
          "image": "mixed-fresh-fruit.jpg",
          "consistency": "SOLID",
          "name": "fruit preserves",
          "nameClean": "fruit preserves",
          "original": "1 cup fruit preserves (raspberry, apricot, orange, etc)",
          "originalName": "fruit preserves (raspberry, apricot, orange, etc)",
          "amount": 1,
          "unit": "cup",
          "meta": [
            "(raspberry, apricot, orange, etc)"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 237,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 10112155,
          "aisle": "Nuts",
          "image": "walnuts.jpg",
          "consistency": "SOLID",
          "name": "walnuts",
          "nameClean": "walnuts",
          "original": "1/2 cup chopped walnuts",
          "originalName": "chopped walnuts",
          "amount": 0.5,
          "unit": "cup",
          "meta": [
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 58.5,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1001,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "butter-sliced.jpg",
          "consistency": "SOLID",
          "name": "butter",
          "nameClean": "butter",
          "original": "50g butter (melted)",
          "originalName": "butter (melted)",
          "amount": 50,
          "unit": "g",
          "meta": [
            "melted",
            "()"
          ],
          "measures": {
            "us": {
              "amount": 1.764,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 50,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 19335,
          "aisle": "Baking",
          "image": "sugar-in-bowl.png",
          "consistency": "SOLID",
          "name": "caster sugar",
          "nameClean": "caster sugar",
          "original": "1/4 cup caster sugar",
          "originalName": "caster sugar",
          "amount": 0.25,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 50,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1012010,
          "aisle": "Spices and Seasonings",
          "image": "cinnamon.jpg",
          "consistency": "SOLID",
          "name": "ground cinnamon",
          "nameClean": "ground cinnamon",
          "original": "1 teaspoon ground cinnamon",
          "originalName": "ground cinnamon",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        }
      ],
      "summary": "Rugelach is a \u003Cb\u003Elacto ovo vegetarian\u003C/b\u003E dessert. This recipe makes 32 servings with \u003Cb\u003E168 calories\u003C/b\u003E, \u003Cb\u003E2g of protein\u003C/b\u003E, and \u003Cb\u003E12g of fat\u003C/b\u003E each. For \u003Cb\u003E32 cents per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 3%\u003C/b\u003E of your daily requirements of vitamins and minerals. 3 people have made this recipe and would make it again. It is brought to you by Foodista. A mixture of caster sugar, block of cream cheese, salt, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes roughly \u003Cb\u003E45 minutes\u003C/b\u003E. Overall, this recipe earns a \u003Cb\u003Enot so awesome spoonacular score of 13%\u003C/b\u003E. Similar recipes include \u003Ca href=\"https://spoonacular.com/recipes/rugelach-154689\"\u003ERugelach\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/rugelach-154741\"\u003ERugelach\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/rugelach-672205\"\u003ERugelach\u003C/a\u003E.",
      "cuisines": [],
      "dishTypes": [
        "dessert"
      ],
      "diets": [
        "lacto ovo vegetarian"
      ],
      "occasions": [],
      "instructions": "Leave butter and cream cheese in a warm place for a couple of hours to soften. They have to be soft and cannot be used straight out of the fridge.\nPre-heat oven to 180 deg Celsius.\nPlace soft butter in a large mixing bowl. Add a block of cream cheese. Use block cream cheese, not cream cheese in a tub. Set the beater to a medium speed and beat the butter and cream cheese till its combined and light and fluffy.\nAdd 2 large egg yolks, 1 teaspoon of vanilla extract, 1/2 cup of caster sugar, a pinch of salt and 2.5 cups of plain flour. Mix all the ingredients together in the mixer on medium speed. The dough should come together.\nWhile the dough is being mixed, chop 1/2 cup of walnuts into fine pieces. Set aside.\nWhen the dough is ready to be used, scatter some flour on the table or counter top. Knead the dough and gently form into a large block. Add more flour if dough is too sticky.\nThe dough should be a nice elastic block. Cut the dough into 4 equal pieces. Set 3 pieces of dough aside. Cover with a slightly damp cloth to prevent them from drying out. Roll the 4th piece of dough into a nice ball.\nUsing a floured rolling pin, roll out that ball of dough into a flat circle. The dough should be thin, about 2 to 3mm thick. Cut the rolled dough into 8 pieces.\nPrepare some fruit preserves. I used a good jar of orange marmalade with pieces of orange rind in it. If the preserves is thick and difficult to spread, whisk it with a fork for a minute first.\nPlace one teaspoon of preserves on the long end of each triangular piece of dough. Lightly spread it towards the other end, keeping most of the preserves on the long end. Scatter some chopped walnuts on the preserves at the long end.\nTo roll the rugelach, tuck in the sides of the triangle slightly to hold the preserves and nuts in. Roll towards the 3rd corner of the triangle.\nRepeat for all the blocks of dough till the rugelachs are prepared.\nPlace all the prepared rugelachs on a sheet of baking paper on a baking tray.\nAdd 1/4 cup of caster sugar and 1 teaspoon of ground cinnamon to a small bowl. Mix well to combine.\nMelt 50g of butter. Gently brush each rugelach with melted butter.\nSprinkle lots of the cinnamon-sugar mixture on to each rugelach. You can also roll the rugelachs in the mixture.\nPlace the rugelachs in a pre-heated oven and bake at 180 deg Celsius for about 35 minutes or till they are a dark golden brown.\nLeave the rugelachs to cool before storing them.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Leave butter and cream cheese in a warm place for a couple of hours to soften. They have to be soft and cannot be used straight out of the fridge.",
              "ingredients": [
                {
                  "id": 1017,
                  "name": "cream cheese",
                  "localizedName": "cream cheese",
                  "image": "cream-cheese.jpg"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 2,
              "step": "Pre-heat oven to 180 deg Celsius.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            },
            {
              "number": 3,
              "step": "Place soft butter in a large mixing bowl.",
              "ingredients": [
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 405907,
                  "name": "mixing bowl",
                  "localizedName": "mixing bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/mixing-bowl.jpg"
                }
              ]
            },
            {
              "number": 4,
              "step": "Add a block of cream cheese. Use block cream cheese, not cream cheese in a tub. Set the beater to a medium speed and beat the butter and cream cheese till its combined and light and fluffy.",
              "ingredients": [
                {
                  "id": 1017,
                  "name": "cream cheese",
                  "localizedName": "cream cheese",
                  "image": "cream-cheese.jpg"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 5,
              "step": "Add 2 large egg yolks, 1 teaspoon of vanilla extract, 1/2 cup of caster sugar, a pinch of salt and 2.5 cups of plain flour.",
              "ingredients": [
                {
                  "id": 2050,
                  "name": "vanilla extract",
                  "localizedName": "vanilla extract",
                  "image": "vanilla-extract.jpg"
                },
                {
                  "id": 0,
                  "name": "caster sugar",
                  "localizedName": "caster sugar",
                  "image": "sugar-in-bowl.png"
                },
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "flour.png"
                },
                {
                  "id": 1125,
                  "name": "egg yolk",
                  "localizedName": "egg yolk",
                  "image": "egg-yolk.jpg"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 6,
              "step": "Mix all the ingredients together in the mixer on medium speed. The dough should come together.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "dough",
                  "localizedName": "dough",
                  "image": "pizza-dough"
                }
              ],
              "equipment": [
                {
                  "id": 404726,
                  "name": "blender",
                  "localizedName": "blender",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/blender.png"
                }
              ]
            },
            {
              "number": 7,
              "step": "While the dough is being mixed, chop 1/2 cup of walnuts into fine pieces. Set aside.",
              "ingredients": [
                {
                  "id": 12155,
                  "name": "walnuts",
                  "localizedName": "walnuts",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/walnuts.jpg"
                },
                {
                  "id": 0,
                  "name": "dough",
                  "localizedName": "dough",
                  "image": "pizza-dough"
                }
              ],
              "equipment": []
            },
            {
              "number": 8,
              "step": "When the dough is ready to be used, scatter some flour on the table or counter top. Knead the dough and gently form into a large block.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "dough",
                  "localizedName": "dough",
                  "image": "pizza-dough"
                },
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "flour.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 9,
              "step": "Add more flour if dough is too sticky.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "dough",
                  "localizedName": "dough",
                  "image": "pizza-dough"
                },
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "flour.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 10,
              "step": "The dough should be a nice elastic block.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "dough",
                  "localizedName": "dough",
                  "image": "pizza-dough"
                }
              ],
              "equipment": []
            },
            {
              "number": 11,
              "step": "Cut the dough into 4 equal pieces. Set 3 pieces of dough aside. Cover with a slightly damp cloth to prevent them from drying out.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "dough",
                  "localizedName": "dough",
                  "image": "pizza-dough"
                }
              ],
              "equipment": []
            },
            {
              "number": 12,
              "step": "Roll the 4th piece of dough into a nice ball.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "dough",
                  "localizedName": "dough",
                  "image": "pizza-dough"
                },
                {
                  "id": 0,
                  "name": "roll",
                  "localizedName": "roll",
                  "image": "dinner-yeast-rolls.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 13,
              "step": "Using a floured rolling pin, roll out that ball of dough into a flat circle. The dough should be thin, about 2 to 3mm thick.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "dough",
                  "localizedName": "dough",
                  "image": "pizza-dough"
                },
                {
                  "id": 0,
                  "name": "roll",
                  "localizedName": "roll",
                  "image": "dinner-yeast-rolls.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404746,
                  "name": "rolling pin",
                  "localizedName": "rolling pin",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/rolling-pin.jpg"
                }
              ]
            },
            {
              "number": 14,
              "step": "Cut the rolled dough into 8 pieces.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "dough",
                  "localizedName": "dough",
                  "image": "pizza-dough"
                }
              ],
              "equipment": []
            },
            {
              "number": 15,
              "step": "Prepare some fruit preserves. I used a good jar of orange marmalade with pieces of orange rind in it. If the preserves is thick and difficult to spread, whisk it with a fork for a minute first.",
              "ingredients": [
                {
                  "id": 19303,
                  "name": "orange marmalade",
                  "localizedName": "orange marmalade",
                  "image": "orange-marmalade.jpg"
                },
                {
                  "id": 9216,
                  "name": "orange zest",
                  "localizedName": "orange zest",
                  "image": "orange-zest.png"
                },
                {
                  "id": 19297,
                  "name": "preserves",
                  "localizedName": "preserves",
                  "image": "strawberry-jam.png"
                },
                {
                  "id": 0,
                  "name": "spread",
                  "localizedName": "spread",
                  "image": ""
                },
                {
                  "id": 9431,
                  "name": "fruit",
                  "localizedName": "fruit",
                  "image": "mixed-fresh-fruit.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404661,
                  "name": "whisk",
                  "localizedName": "whisk",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                }
              ]
            },
            {
              "number": 16,
              "step": "Place one teaspoon of preserves on the long end of each triangular piece of dough. Lightly spread it towards the other end, keeping most of the preserves on the long end. Scatter some chopped walnuts on the preserves at the long end.",
              "ingredients": [
                {
                  "id": 10112155,
                  "name": "walnut pieces",
                  "localizedName": "walnut pieces",
                  "image": "walnuts.jpg"
                },
                {
                  "id": 19297,
                  "name": "preserves",
                  "localizedName": "preserves",
                  "image": "strawberry-jam.png"
                },
                {
                  "id": 0,
                  "name": "spread",
                  "localizedName": "spread",
                  "image": ""
                },
                {
                  "id": 0,
                  "name": "dough",
                  "localizedName": "dough",
                  "image": "pizza-dough"
                }
              ],
              "equipment": []
            },
            {
              "number": 17,
              "step": "To roll the rugelach, tuck in the sides of the triangle slightly to hold the preserves and nuts in.",
              "ingredients": [
                {
                  "id": 19297,
                  "name": "preserves",
                  "localizedName": "preserves",
                  "image": "strawberry-jam.png"
                },
                {
                  "id": 12135,
                  "name": "nuts",
                  "localizedName": "nuts",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/nuts-mixed.jpg"
                },
                {
                  "id": 0,
                  "name": "roll",
                  "localizedName": "roll",
                  "image": "dinner-yeast-rolls.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 18,
              "step": "Roll towards the 3rd corner of the triangle.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "roll",
                  "localizedName": "roll",
                  "image": "dinner-yeast-rolls.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 19,
              "step": "Repeat for all the blocks of dough till the rugelachs are prepared.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "dough",
                  "localizedName": "dough",
                  "image": "pizza-dough"
                }
              ],
              "equipment": []
            },
            {
              "number": 20,
              "step": "Place all the prepared rugelachs on a sheet of baking paper on a baking tray.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404770,
                  "name": "baking paper",
                  "localizedName": "baking paper",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/baking-paper.jpg"
                },
                {
                  "id": 404646,
                  "name": "baking pan",
                  "localizedName": "baking pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/roasting-pan.jpg"
                }
              ]
            },
            {
              "number": 21,
              "step": "Add 1/4 cup of caster sugar and 1 teaspoon of ground cinnamon to a small bowl.",
              "ingredients": [
                {
                  "id": 1012010,
                  "name": "ground cinnamon",
                  "localizedName": "ground cinnamon",
                  "image": "cinnamon.jpg"
                },
                {
                  "id": 0,
                  "name": "caster sugar",
                  "localizedName": "caster sugar",
                  "image": "sugar-in-bowl.png"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 22,
              "step": "Mix well to combine.",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 23,
              "step": "Melt 50g of butter. Gently brush each rugelach with melted butter.",
              "ingredients": [
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 24,
              "step": "Sprinkle lots of the cinnamon-sugar mixture on to each rugelach. You can also roll the rugelachs in the mixture.",
              "ingredients": [
                {
                  "id": 2010,
                  "name": "cinnamon",
                  "localizedName": "cinnamon",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg"
                },
                {
                  "id": 19335,
                  "name": "sugar",
                  "localizedName": "sugar",
                  "image": "sugar-in-bowl.png"
                },
                {
                  "id": 0,
                  "name": "roll",
                  "localizedName": "roll",
                  "image": "dinner-yeast-rolls.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 25,
              "step": "Place the rugelachs in a pre-heated oven and bake at 180 deg Celsius for about 35 minutes or till they are a dark golden brown.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ],
              "length": {
                "number": 35,
                "unit": "minutes"
              }
            },
            {
              "number": 26,
              "step": "Leave the rugelachs to cool before storing them.",
              "ingredients": [],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 10.7985305786133,
      "spoonacularSourceUrl": "https://spoonacular.com/rugelach-658855"
    },
    {
      "id": 633265,
      "image": "https://img.spoonacular.com/recipes/633265-556x370.jpg",
      "imageType": "jpg",
      "title": "Bacon & Egg Toast Cups",
      "readyInMinutes": 45,
      "servings": 2,
      "sourceUrl": "https://www.foodista.com/recipe/P6LXBQR8/bacon-egg-toast-cups",
      "vegetarian": false,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 19,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 55,
      "healthScore": 7,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 141.03,
      "extendedIngredients": [
        {
          "id": 1145,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "butter-sliced.jpg",
          "consistency": "SOLID",
          "name": "butter",
          "nameClean": "butter",
          "original": "2 tablespoons unsalted butter, melted",
          "originalName": "unsalted butter, melted",
          "amount": 2,
          "unit": "tablespoons",
          "meta": [
            "unsalted",
            "melted"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 18069,
          "aisle": "Bakery/Bread",
          "image": "white-bread.jpg",
          "consistency": "SOLID",
          "name": "sandwich bread",
          "nameClean": "sandwich bread",
          "original": "4 slices sandwich bread, your preference",
          "originalName": "sandwich bread, your preference",
          "amount": 4,
          "unit": "slices",
          "meta": [],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "slice",
              "unitLong": "slices"
            },
            "metric": {
              "amount": 4,
              "unitShort": "slice",
              "unitLong": "slices"
            }
          }
        },
        {
          "id": 10123,
          "aisle": "Meat",
          "image": "raw-bacon.png",
          "consistency": "SOLID",
          "name": "bacon",
          "nameClean": "bacon",
          "original": "4 slices bacon",
          "originalName": "bacon",
          "amount": 4,
          "unit": "slices",
          "meta": [],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "slice",
              "unitLong": "slices"
            },
            "metric": {
              "amount": 4,
              "unitShort": "slice",
              "unitLong": "slices"
            }
          }
        },
        {
          "id": 1123,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg.png",
          "consistency": "SOLID",
          "name": "eggs",
          "nameClean": "eggs",
          "original": "4 large eggs",
          "originalName": "eggs",
          "amount": 4,
          "unit": "large",
          "meta": [],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "large",
              "unitLong": "larges"
            },
            "metric": {
              "amount": 4,
              "unitShort": "large",
              "unitLong": "larges"
            }
          }
        },
        {
          "id": 1102047,
          "aisle": "Spices and Seasonings",
          "image": "salt-and-pepper.jpg",
          "consistency": "SOLID",
          "name": "salt& pepper",
          "nameClean": "salt& pepper",
          "original": "salt& pepper",
          "originalName": "salt& pepper",
          "amount": 2,
          "unit": "servings",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 2,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        }
      ],
      "summary": "Bacon & Egg Toast Cups takes about \u003Cb\u003E45 minutes\u003C/b\u003E from beginning to end. This recipe serves 2. One portion of this dish contains about \u003Cb\u003E23g of protein\u003C/b\u003E, \u003Cb\u003E40g of fat\u003C/b\u003E, and a total of \u003Cb\u003E562 calories\u003C/b\u003E. For \u003Cb\u003E$1.41 per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 18%\u003C/b\u003E of your daily requirements of vitamins and minerals. This recipe from Foodista has 55 fans. A mixture of butter, salt& pepper, bacon, and a handful of other ingredients are all it takes to make this recipe so yummy. Taking all factors into account, this recipe \u003Cb\u003Eearns a spoonacular score of 60%\u003C/b\u003E, which is pretty good. Similar recipes are \u003Ca href=\"https://spoonacular.com/recipes/bacon-egg-and-toast-cups-83543\"\u003EBacon, Egg, And Toast Cups\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/bacon-and-egg-toast-cups-1522399\"\u003EBacon and Egg Toast Cups\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/bacon-and-egg-toast-cups-1029365\"\u003EBacon and Egg Toast Cups\u003C/a\u003E.",
      "cuisines": [],
      "dishTypes": [],
      "diets": [],
      "occasions": [],
      "instructions": "Preheat oven to 375.\nLightly butter six standard muffin cups.\nFlatten the bread slices slightly with a rolling pin, and with a four-and-a-half inch cookie cutter, cut into four rounds. Cut each round in half, then press the two halves into each muffin cup, overlapping slightly and making sure bread comes up to the edges. Use extra bread and crusts to patch any holes if necessary. Brush with remaining butter.\nIn a large skillet, cook the bacon until almost crisp, about four minutes, flipping once.\nLay one bacon slice in each bread cup and crack an egg over each. Season with salt & pepper.\nBake until egg whites are just set, about twenty-five minutes. The bacon will continue to cook in the oven.\nRun a small knife around cups to loosen toast cups.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Preheat oven to 37",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Lightly butter six standard muffin cups.",
              "ingredients": [
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404676,
                  "name": "muffin liners",
                  "localizedName": "muffin liners",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/muffin-or-cupcake-forms.png"
                }
              ]
            },
            {
              "number": 3,
              "step": "Flatten the bread slices slightly with a rolling pin, and with a four-and-a-half inch cookie cutter, cut into four rounds.",
              "ingredients": [
                {
                  "id": 10118192,
                  "name": "cookies",
                  "localizedName": "cookies",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/shortbread-cookies.jpg"
                },
                {
                  "id": 18064,
                  "name": "bread",
                  "localizedName": "bread",
                  "image": "white-bread.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 221429,
                  "name": "cookie cutter",
                  "localizedName": "cookie cutter",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/cookie-cutters.jpg"
                },
                {
                  "id": 404746,
                  "name": "rolling pin",
                  "localizedName": "rolling pin",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/rolling-pin.jpg"
                }
              ]
            },
            {
              "number": 4,
              "step": "Cut each round in half, then press the two halves into each muffin cup, overlapping slightly and making sure bread comes up to the edges. Use extra bread and crusts to patch any holes if necessary.",
              "ingredients": [
                {
                  "id": 18064,
                  "name": "bread",
                  "localizedName": "bread",
                  "image": "white-bread.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 5,
              "step": "Brush with remaining butter.",
              "ingredients": [
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 6,
              "step": "In a large skillet, cook the bacon until almost crisp, about four minutes, flipping once.",
              "ingredients": [
                {
                  "id": 10123,
                  "name": "bacon",
                  "localizedName": "bacon",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ],
              "length": {
                "number": 4,
                "unit": "minutes"
              }
            },
            {
              "number": 7,
              "step": "Lay one bacon slice in each bread cup and crack an egg over each. Season with salt & pepper.",
              "ingredients": [
                {
                  "id": 1102047,
                  "name": "salt and pepper",
                  "localizedName": "salt and pepper",
                  "image": "salt-and-pepper.jpg"
                },
                {
                  "id": 10123,
                  "name": "bacon",
                  "localizedName": "bacon",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
                },
                {
                  "id": 18064,
                  "name": "bread",
                  "localizedName": "bread",
                  "image": "white-bread.jpg"
                },
                {
                  "id": 1123,
                  "name": "egg",
                  "localizedName": "egg",
                  "image": "egg.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 8,
              "step": "Bake until egg whites are just set, about twenty-five minutes. The bacon will continue to cook in the oven.",
              "ingredients": [
                {
                  "id": 1124,
                  "name": "egg whites",
                  "localizedName": "egg whites",
                  "image": "egg-white.jpg"
                },
                {
                  "id": 10123,
                  "name": "bacon",
                  "localizedName": "bacon",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
                }
              ],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            },
            {
              "number": 9,
              "step": "Run a small knife around cups to loosen toast cups.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "sandwich bread",
                  "localizedName": "sandwich bread",
                  "image": "white-bread.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404745,
                  "name": "knife",
                  "localizedName": "knife",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/chefs-knife.jpg"
                }
              ]
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 58.8165168762207,
      "spoonacularSourceUrl": "https://spoonacular.com/bacon-egg-toast-cups-633265"
    },
    {
      "id": 656506,
      "image": "https://img.spoonacular.com/recipes/656506-556x370.jpg",
      "imageType": "jpg",
      "title": "Poached Prawns with Fettuccine and French String Beans",
      "readyInMinutes": 45,
      "servings": 4,
      "sourceUrl": "http://www.foodista.com/recipe/BV3MF4ZW/poached-prawns-with-fettuccine-and-french-string-beans",
      "vegetarian": false,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 13,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 7,
      "healthScore": 11,
      "creditsText": "foodista.com",
      "license": null,
      "sourceName": "foodista.com",
      "pricePerServing": 277.97,
      "extendedIngredients": [
        {
          "id": 10020409,
          "aisle": "Pasta and Rice",
          "image": "egg-noodles.jpg",
          "consistency": "SOLID",
          "name": "fettuccine",
          "nameClean": "fettuccine",
          "original": "Fettuccine",
          "originalName": "Fettuccine",
          "amount": 4,
          "unit": "servings",
          "meta": [],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 9152,
          "aisle": "Produce",
          "image": "lemon-juice.jpg",
          "consistency": "LIQUID",
          "name": "lemon juice",
          "nameClean": "lemon juice",
          "original": "tablespoon of lemon juice",
          "originalName": "lemon juice",
          "amount": 1,
          "unit": "tablespoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 10215149,
          "aisle": "Seafood",
          "image": "shrimp.png",
          "consistency": "SOLID",
          "name": "prawns",
          "nameClean": "prawns",
          "original": "1 pound uncooked prawns",
          "originalName": "uncooked prawns",
          "amount": 1,
          "unit": "pound",
          "meta": [
            "uncooked"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "lb",
              "unitLong": "pound"
            },
            "metric": {
              "amount": 453.592,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1102047,
          "aisle": "Spices and Seasonings",
          "image": "salt-and-pepper.jpg",
          "consistency": "SOLID",
          "name": "salt and pepper",
          "nameClean": "salt and pepper",
          "original": "Salt and pepper",
          "originalName": "Salt and pepper",
          "amount": 4,
          "unit": "servings",
          "meta": [],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 11052,
          "aisle": "Produce",
          "image": "green-beans-or-string-beans.jpg",
          "consistency": "SOLID",
          "name": "string beans",
          "nameClean": "string beans",
          "original": "1 can French string beans",
          "originalName": "French string beans",
          "amount": 1,
          "unit": "can",
          "meta": [
            "french"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "can",
              "unitLong": "can"
            },
            "metric": {
              "amount": 1,
              "unitShort": "can",
              "unitLong": "can"
            }
          }
        },
        {
          "id": 1145,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "butter-sliced.jpg",
          "consistency": "SOLID",
          "name": "butter",
          "nameClean": "butter",
          "original": "5 to 6 tablespoons unsalted butter",
          "originalName": "unsalted butter",
          "amount": 5,
          "unit": "tablespoons",
          "meta": [
            "unsalted"
          ],
          "measures": {
            "us": {
              "amount": 5,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 5,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 14412,
          "aisle": "Beverages",
          "image": "water.png",
          "consistency": "LIQUID",
          "name": "water",
          "nameClean": "water",
          "original": "1 quart Water",
          "originalName": "Water",
          "amount": 1,
          "unit": "quart",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "qt",
              "unitLong": "quart"
            },
            "metric": {
              "amount": 946.353,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        }
      ],
      "summary": "If you have around \u003Cb\u003E45 minutes\u003C/b\u003E to spend in the kitchen, Poached Prawns with Fettuccine and French String Beans might be an amazing \u003Cb\u003Epescatarian\u003C/b\u003E recipe to try. This recipe serves 4 and costs $2.78 per serving. One portion of this dish contains roughly \u003Cb\u003E25g of protein\u003C/b\u003E, \u003Cb\u003E18g of fat\u003C/b\u003E, and a total of \u003Cb\u003E442 calories\u003C/b\u003E. 7 people were impressed by this recipe. Only a few people really liked this main course. It is a \u003Cb\u003Erather inexpensive\u003C/b\u003E recipe for fans of Mediterranean food. A mixture of butter, salt and pepper, prawns, and a handful of other ingredients are all it takes to make this recipe so tasty. It is brought to you by Foodista. All things considered, we decided this recipe \u003Cb\u003Edeserves a spoonacular score of 56%\u003C/b\u003E. This score is good. If you like this recipe, you might also like recipes such as \u003Ca href=\"https://spoonacular.com/recipes/french-string-beans-green-beans-tomato-basil-salad-112611\"\u003EFrench String Beans/ Green Beans, Tomato & Basil Salad\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/french-string-beans-and-celery-root-salad-761240\"\u003EFrench String Beans and Celery Root Salad\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/french-string-bean-salad-309724\"\u003EFrench String Bean Salad\u003C/a\u003E.",
      "cuisines": [
        "Mediterranean",
        "French",
        "European"
      ],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "pescatarian"
      ],
      "occasions": [],
      "instructions": "\u003Col\u003E\u003Cli\u003ECook pasta according the packaging directions. Drain and add the string beans and 1 tablespoon butter and stir well.\u003C/li\u003E\u003Cli\u003EIn a skillet add water and bring to boil point and start adding the butter, tablespoon at the time to emulsify. Once all the butter is melted add the prawns and poach  just below simmer- until the prawns are cooked and turn a nice pink color. Season with salt and pepper.\u003C/li\u003E\u003Cli\u003ERemove the prawn leaving the juice in the skillet. Add the pasta with the French string beans to the skillet and stir to coat the fettuccine well.\u003C/li\u003E\u003Cli\u003EPlace pasta in the middle of the plate and place the prawns over it with any juices.\u003C/li\u003E\u003C/ol\u003E",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Cook pasta according the packaging directions.",
              "ingredients": [
                {
                  "id": 20420,
                  "name": "pasta",
                  "localizedName": "pasta",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/fusilli.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 2,
              "step": "Drain and add the string beans and 1 tablespoon butter and stir well.In a skillet add water and bring to boil point and start adding the butter, tablespoon at the time to emulsify. Once all the butter is melted add the prawns and poach  just below simmer- until the prawns are cooked and turn a nice pink color. Season with salt and pepper.",
              "ingredients": [
                {
                  "id": 1102047,
                  "name": "salt and pepper",
                  "localizedName": "salt and pepper",
                  "image": "salt-and-pepper.jpg"
                },
                {
                  "id": 11052,
                  "name": "green beans",
                  "localizedName": "green beans",
                  "image": "green-beans-or-string-beans.jpg"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 15270,
                  "name": "shrimp",
                  "localizedName": "shrimp",
                  "image": "shrimp.png"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 3,
              "step": "Remove the prawn leaving the juice in the skillet.",
              "ingredients": [
                {
                  "id": 1019016,
                  "name": "juice",
                  "localizedName": "juice",
                  "image": "apple-juice.jpg"
                },
                {
                  "id": 15270,
                  "name": "shrimp",
                  "localizedName": "shrimp",
                  "image": "shrimp.png"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 4,
              "step": "Add the pasta with the French string beans to the skillet and stir to coat the fettuccine well.",
              "ingredients": [
                {
                  "id": 11052,
                  "name": "green beans",
                  "localizedName": "green beans",
                  "image": "green-beans-or-string-beans.jpg"
                },
                {
                  "id": 10020409,
                  "name": "fettuccine",
                  "localizedName": "fettuccine",
                  "image": "egg-noodles.jpg"
                },
                {
                  "id": 20420,
                  "name": "pasta",
                  "localizedName": "pasta",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/fusilli.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 5,
              "step": "Place pasta in the middle of the plate and place the prawns over it with any juices.",
              "ingredients": [
                {
                  "id": 15270,
                  "name": "shrimp",
                  "localizedName": "shrimp",
                  "image": "shrimp.png"
                },
                {
                  "id": 20420,
                  "name": "pasta",
                  "localizedName": "pasta",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/fusilli.jpg"
                }
              ],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 59.943790435791,
      "spoonacularSourceUrl": "https://spoonacular.com/poached-prawns-with-fettuccine-and-french-string-beans-656506"
    },
    {
      "id": 638693,
      "image": "https://img.spoonacular.com/recipes/638693-556x370.jpg",
      "imageType": "jpg",
      "title": "Chinese Potstickers",
      "readyInMinutes": 45,
      "servings": 24,
      "sourceUrl": "https://www.foodista.com/recipe/GNBC6TDX/chinese-potstickers",
      "vegetarian": false,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 4,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 37,
      "healthScore": 1,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 26.28,
      "extendedIngredients": [
        {
          "id": 10219,
          "aisle": "Meat",
          "image": "meat-ground.jpg",
          "consistency": "SOLID",
          "name": "ground pork",
          "nameClean": "ground pork",
          "original": "200g ground pork (slightly fatty, not lean)",
          "originalName": "ground pork (slightly fatty, not lean)",
          "amount": 200,
          "unit": "g",
          "meta": [
            "lean",
            "(slightly fatty, not )"
          ],
          "measures": {
            "us": {
              "amount": 7.055,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 200,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 11590,
          "aisle": "Canned and Jarred",
          "image": "water-chestnuts.png",
          "consistency": "SOLID",
          "name": "water chestnuts",
          "nameClean": "water chestnuts",
          "original": "100g canned water chestnuts (or chopped spinach/cabbage)",
          "originalName": "canned water chestnuts (or chopped spinach/cabbage)",
          "amount": 100,
          "unit": "g",
          "meta": [
            "canned",
            "chopped",
            "(or spinach/cabbage)"
          ],
          "measures": {
            "us": {
              "amount": 3.527,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 100,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1012047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "sea salt",
          "nameClean": "sea salt",
          "original": "1 teaspoon sea salt",
          "originalName": "sea salt",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 19335,
          "aisle": "Baking",
          "image": "sugar-in-bowl.png",
          "consistency": "SOLID",
          "name": "sugar",
          "nameClean": "sugar",
          "original": "1 teaspoon fine sugar",
          "originalName": "fine sugar",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [
            "fine"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 1002030,
          "aisle": "Spices and Seasonings",
          "image": "pepper.jpg",
          "consistency": "SOLID",
          "name": "ground pepper",
          "nameClean": "ground pepper",
          "original": "1/2 teaspoon ground black pepper",
          "originalName": "ground black pepper",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [
            "black"
          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 10216124,
          "aisle": "Condiments",
          "image": "soy-sauce.jpg",
          "consistency": "LIQUID",
          "name": "soy sauce",
          "nameClean": "soy sauce",
          "original": "2 teaspoons light soy sauce",
          "originalName": "light soy sauce",
          "amount": 2,
          "unit": "teaspoons",
          "meta": [
            "light"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 2,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 4058,
          "aisle": "Ethnic Foods",
          "image": "sesame-oil.png",
          "consistency": "LIQUID",
          "name": "sesame oil",
          "nameClean": "sesame oil",
          "original": "2 teaspoons sesame oil",
          "originalName": "sesame oil",
          "amount": 2,
          "unit": "teaspoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 2,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 43479,
          "aisle": "Alcoholic Beverages",
          "image": "fish-sauce.jpg",
          "consistency": "SOLID",
          "name": "shaoxing huatiao wine",
          "nameClean": "shaoxing huatiao wine",
          "original": "1 tablespoon Shaoxing Huatiao wine",
          "originalName": "Shaoxing Huatiao wine",
          "amount": 1,
          "unit": "tablespoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 11291,
          "aisle": "Produce",
          "image": "spring-onions.jpg",
          "consistency": "SOLID",
          "name": "scallions",
          "nameClean": "scallions",
          "original": "2 to 3 tablespoons of chopped scallions (spring onions)",
          "originalName": "chopped scallions (spring onions)",
          "amount": 2,
          "unit": "tablespoons",
          "meta": [
            "chopped",
            "(spring onions)"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 10118368,
          "aisle": "Ethnic Foods",
          "image": "rice-paper.jpg",
          "consistency": "SOLID",
          "name": "dumpling wrappers",
          "nameClean": "dumpling wrappers",
          "original": "25 to 30 store bought dumpling wrappers (the round kind, not the square wanton or spring roll wrappers)",
          "originalName": "store bought dumpling wrappers (the round kind, not the square wanton or spring roll wrappers)",
          "amount": 25,
          "unit": "",
          "meta": [
            "store bought",
            "(the round kind, not the square wanton or spring roll wrappers)"
          ],
          "measures": {
            "us": {
              "amount": 25,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 25,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 20081,
          "aisle": "Baking",
          "image": "flour.png",
          "consistency": "SOLID",
          "name": "flour to dust",
          "nameClean": "flour to dust",
          "original": "Plain flour to dust",
          "originalName": "Plain flour to dust",
          "amount": 24,
          "unit": "servings",
          "meta": [
            "plain"
          ],
          "measures": {
            "us": {
              "amount": 24,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 24,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 4669,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "vegetable-oil.jpg",
          "consistency": "LIQUID",
          "name": "vegetable oil",
          "nameClean": "vegetable oil",
          "original": "4 to 6 tablespoons vegetable oil (for 2 batches of cooking)",
          "originalName": "vegetable oil (for 2 batches of cooking)",
          "amount": 4,
          "unit": "tablespoons",
          "meta": [
            "(for 2 batches of cooking)"
          ],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 4,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 14412,
          "aisle": "Beverages",
          "image": "water.png",
          "consistency": "LIQUID",
          "name": "water",
          "nameClean": "water",
          "original": "2/3 cups water (for 2 batches of cooking)",
          "originalName": "water (for 2 batches of cooking)",
          "amount": 0.6666667,
          "unit": "cups",
          "meta": [
            "(for 2 batches of cooking)"
          ],
          "measures": {
            "us": {
              "amount": 0.6666667,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 157.725,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        }
      ],
      "summary": "If you have approximately \u003Cb\u003E45 minutes\u003C/b\u003E to spend in the kitchen, Chinese Potstickers might be an excellent \u003Cb\u003Edairy free\u003C/b\u003E recipe to try. This recipe makes 24 servings with \u003Cb\u003E135 calories\u003C/b\u003E, \u003Cb\u003E4g of protein\u003C/b\u003E, and \u003Cb\u003E5g of fat\u003C/b\u003E each. For \u003Cb\u003E26 cents per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 4%\u003C/b\u003E of your daily requirements of vitamins and minerals. A couple people really liked this hor d'oeuvre. This recipe is typical of Chinese cuisine. This recipe from Foodista requires vegetable oil, flour to dust, scallions, and sugar. 37 people have tried and liked this recipe. Overall, this recipe earns a \u003Cb\u003Erather bad spoonacular score of 23%\u003C/b\u003E. Try \u003Ca href=\"https://spoonacular.com/recipes/chinese-potstickers-534151\"\u003EChinese Potstickers\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/chinese-potstickers-92059\"\u003EChinese Potstickers\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/chinese-dumplings-and-potstickers-40758\"\u003EChinese Dumplings And Potstickers\u003C/a\u003E for similar recipes.",
      "cuisines": [
        "Chinese",
        "Asian"
      ],
      "dishTypes": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ],
      "diets": [
        "dairy free"
      ],
      "occasions": [],
      "instructions": "Place 200g of ground pork in a large mixing bowl. If preferred, pork may be substituted with ground chicken.\nAdd 1 teaspoon of sea salt, 1 teaspoon of fine sugar, add 1/2 teaspoon of ground black pepper, 2 teaspoons of light soy sauce, 2 teaspoons of sesame oil and 1 tablespoon of Shaoxing Huatiao wine.\nPlace 100g of canned water chestnuts in a chopper/blender. Chop the water chestnuts to small pieces. Add the chopped water chestnuts to the pork mixture. If preferred, use spinach or cabbage in place of water chestnuts.\nAdd 2 to 3 tablespoons of finely chopped scallions or spring onions to the pork mixture. Combine all the filling ingredients well.\nThaw the dumpling wrappers if they are frozen. Keep them well covered until they are ready to be used.\nDust a dish generously with flour. This will hold the dumplings once they are made.\nDust the table generously with flour. Carefully separate the sheets of dumpling wrappers and lay them on the table. Fill each wrapper with about 1.5 teaspoons of the prepared pork filling.\nPrepare a bowl of water. Dip finger into the water and lightly wet the rim of each dumpling wrapper.\nBring the dumpling wrapper together till the opposite ends meet. Gently push the filling into the wrapper and pinch the top tip of the dumpling wrapper to seal it.\nFrom the centre of the dumpling, fold a pleat on ONE side and bring it to the other side of the dumpling. Fold towards the centre of the dumpling. Pinch to seal it.\nRepeat and create a 2nd pleat. Be mindful to pinch tight to seal the dumpling well. Repeat and create a 3rd pleat. Each side should have 3 pleats.\nRepeat the same pleating on the other end of the dumpling. Always ensure that the pleats face the centre of the dumpling.\nPlace all prepared dumplings in a well floured dish ensuring that they do not touch each other. Set aside till ready to cook. They can also be frozen at this stage.\nTo cook the potstickers, add 2 to 3 tablespoons of vegetable oil to a very hot frying pan. The potstickers should be cooked in at least 2 batches.\nWhen the oil is hot, add the dumplings ensuring that the flat surfaces face down. Pan fry till the bottoms of the dumplings are a nice golden brown.\nAdd 1/3 cup of water to the pan. Cover the pan immediately and let the steam cook the dumplings for 4 to 5 minutes.\nOnce the water has evaporated, remove the cover and let the dumplings sit in the hot pan for another minute for its base to crisp up again. These are now Chinese potstickers.\nGently transfer the potstickers to a plate. Serve immediately.\nThese Chinese potstickers are best served with a vinegar dip made with balsamic or black chinese vinegar and thinly sliced ginger. Soy sauce, chili oil or sesame oil may also be added to the dipping sauce.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Place 200g of ground pork in a large mixing bowl. If preferred, pork may be substituted with ground chicken.",
              "ingredients": [
                {
                  "id": 5332,
                  "name": "ground chicken",
                  "localizedName": "ground chicken",
                  "image": "meat-ground.jpg"
                },
                {
                  "id": 10219,
                  "name": "ground pork",
                  "localizedName": "ground pork",
                  "image": "meat-ground.jpg"
                },
                {
                  "id": 10010219,
                  "name": "pork",
                  "localizedName": "pork",
                  "image": "pork-tenderloin-raw.png"
                }
              ],
              "equipment": [
                {
                  "id": 405907,
                  "name": "mixing bowl",
                  "localizedName": "mixing bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/mixing-bowl.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Add 1 teaspoon of sea salt, 1 teaspoon of fine sugar, add 1/2 teaspoon of ground black pepper, 2 teaspoons of light soy sauce, 2 teaspoons of sesame oil and 1 tablespoon of Shaoxing Huatiao wine.",
              "ingredients": [
                {
                  "id": 1002030,
                  "name": "ground black pepper",
                  "localizedName": "ground black pepper",
                  "image": "pepper.jpg"
                },
                {
                  "id": 10216124,
                  "name": "light soy sauce",
                  "localizedName": "light soy sauce",
                  "image": "soy-sauce.jpg"
                },
                {
                  "id": 4058,
                  "name": "sesame oil",
                  "localizedName": "sesame oil",
                  "image": "sesame-oil.png"
                },
                {
                  "id": 1012047,
                  "name": "sea salt",
                  "localizedName": "sea salt",
                  "image": "salt.jpg"
                },
                {
                  "id": 19335,
                  "name": "sugar",
                  "localizedName": "sugar",
                  "image": "sugar-in-bowl.png"
                },
                {
                  "id": 14084,
                  "name": "wine",
                  "localizedName": "wine",
                  "image": "red-wine.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 3,
              "step": "Place 100g of canned water chestnuts in a chopper/blender. Chop the water chestnuts to small pieces.",
              "ingredients": [
                {
                  "id": 11590,
                  "name": "canned water chestnuts",
                  "localizedName": "canned water chestnuts",
                  "image": "water-chestnuts.png"
                },
                {
                  "id": 11590,
                  "name": "water chestnuts",
                  "localizedName": "water chestnuts",
                  "image": "water-chestnuts.png"
                }
              ],
              "equipment": [
                {
                  "id": 404726,
                  "name": "blender",
                  "localizedName": "blender",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/blender.png"
                }
              ]
            },
            {
              "number": 4,
              "step": "Add the chopped water chestnuts to the pork mixture. If preferred, use spinach or cabbage in place of water chestnuts.",
              "ingredients": [
                {
                  "id": 11590,
                  "name": "water chestnuts",
                  "localizedName": "water chestnuts",
                  "image": "water-chestnuts.png"
                },
                {
                  "id": 11109,
                  "name": "cabbage",
                  "localizedName": "cabbage",
                  "image": "cabbage.jpg"
                },
                {
                  "id": 10011457,
                  "name": "spinach",
                  "localizedName": "spinach",
                  "image": "spinach.jpg"
                },
                {
                  "id": 10010219,
                  "name": "pork",
                  "localizedName": "pork",
                  "image": "pork-tenderloin-raw.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 5,
              "step": "Add 2 to 3 tablespoons of finely chopped scallions or spring onions to the pork mixture.",
              "ingredients": [
                {
                  "id": 11291,
                  "name": "spring onions",
                  "localizedName": "spring onions",
                  "image": "spring-onions.jpg"
                },
                {
                  "id": 11291,
                  "name": "green onions",
                  "localizedName": "green onions",
                  "image": "spring-onions.jpg"
                },
                {
                  "id": 10010219,
                  "name": "pork",
                  "localizedName": "pork",
                  "image": "pork-tenderloin-raw.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 6,
              "step": "Combine all the filling ingredients well.",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 7,
              "step": "Thaw the dumpling wrappers if they are frozen. Keep them well covered until they are ready to be used.",
              "ingredients": [
                {
                  "id": 10018368,
                  "name": "dumpling wrappers",
                  "localizedName": "dumpling wrappers",
                  "image": "puff-pastry-squares.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 8,
              "step": "Dust a dish generously with flour. This will hold the dumplings once they are made.",
              "ingredients": [
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "flour.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 9,
              "step": "Dust the table generously with flour. Carefully separate the sheets of dumpling wrappers and lay them on the table. Fill each wrapper with about 1.5 teaspoons of the prepared pork filling.",
              "ingredients": [
                {
                  "id": 10018368,
                  "name": "dumpling wrappers",
                  "localizedName": "dumpling wrappers",
                  "image": "puff-pastry-squares.jpg"
                },
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "flour.png"
                },
                {
                  "id": 10010219,
                  "name": "pork",
                  "localizedName": "pork",
                  "image": "pork-tenderloin-raw.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 10,
              "step": "Prepare a bowl of water. Dip finger into the water and lightly wet the rim of each dumpling wrapper.",
              "ingredients": [
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                },
                {
                  "id": 0,
                  "name": "dip",
                  "localizedName": "dip",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 11,
              "step": "Bring the dumpling wrapper together till the opposite ends meet. Gently push the filling into the wrapper and pinch the top tip of the dumpling wrapper to seal it.",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 12,
              "step": "From the centre of the dumpling, fold a pleat on ONE side and bring it to the other side of the dumpling. Fold towards the centre of the dumpling. Pinch to seal it.",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 13,
              "step": "Repeat and create a 2nd pleat. Be mindful to pinch tight to seal the dumpling well. Repeat and create a 3rd pleat. Each side should have 3 pleats.",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 14,
              "step": "Repeat the same pleating on the other end of the dumpling. Always ensure that the pleats face the centre of the dumpling.",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 15,
              "step": "Place all prepared dumplings in a well floured dish ensuring that they do not touch each other. Set aside till ready to cook. They can also be frozen at this stage.",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 16,
              "step": "To cook the potstickers, add 2 to 3 tablespoons of vegetable oil to a very hot frying pan. The potstickers should be cooked in at least 2 batches.",
              "ingredients": [
                {
                  "id": 4669,
                  "name": "vegetable oil",
                  "localizedName": "vegetable oil",
                  "image": "vegetable-oil.jpg"
                },
                {
                  "id": 99034,
                  "name": "potstickers",
                  "localizedName": "potstickers",
                  "image": "chinese-dumplings-or-gyoza.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 17,
              "step": "When the oil is hot, add the dumplings ensuring that the flat surfaces face down. Pan fry till the bottoms of the dumplings are a nice golden brown.",
              "ingredients": [
                {
                  "id": 4582,
                  "name": "cooking oil",
                  "localizedName": "cooking oil",
                  "image": "vegetable-oil.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 18,
              "step": "Add 1/3 cup of water to the pan. Cover the pan immediately and let the steam cook the dumplings for 4 to 5 minutes.",
              "ingredients": [
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ],
              "length": {
                "number": 4,
                "unit": "minutes"
              }
            },
            {
              "number": 19,
              "step": "Once the water has evaporated, remove the cover and let the dumplings sit in the hot pan for another minute for its base to crisp up again. These are now Chinese potstickers.",
              "ingredients": [
                {
                  "id": 99034,
                  "name": "potstickers",
                  "localizedName": "potstickers",
                  "image": "chinese-dumplings-or-gyoza.jpg"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                },
                {
                  "id": 0,
                  "name": "base",
                  "localizedName": "base",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 20,
              "step": "Gently transfer the potstickers to a plate.",
              "ingredients": [
                {
                  "id": 99034,
                  "name": "potstickers",
                  "localizedName": "potstickers",
                  "image": "chinese-dumplings-or-gyoza.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 21,
              "step": "Serve immediately.",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 22,
              "step": "These Chinese potstickers are best served with a vinegar dip made with balsamic or black chinese vinegar and thinly sliced ginger. Soy sauce, chili oil or sesame oil may also be added to the dipping sauce.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "dipping sauce",
                  "localizedName": "dipping sauce",
                  "image": ""
                },
                {
                  "id": 99034,
                  "name": "potstickers",
                  "localizedName": "potstickers",
                  "image": "chinese-dumplings-or-gyoza.jpg"
                },
                {
                  "id": 4058,
                  "name": "sesame oil",
                  "localizedName": "sesame oil",
                  "image": "sesame-oil.png"
                },
                {
                  "id": 1014053,
                  "name": "chili oil",
                  "localizedName": "chili oil",
                  "image": "chili-oil.jpg"
                },
                {
                  "id": 16124,
                  "name": "soy sauce",
                  "localizedName": "soy sauce",
                  "image": "soy-sauce.jpg"
                },
                {
                  "id": 2053,
                  "name": "vinegar",
                  "localizedName": "vinegar",
                  "image": "vinegar-(white).jpg"
                },
                {
                  "id": 11216,
                  "name": "ginger",
                  "localizedName": "ginger",
                  "image": "ginger.png"
                },
                {
                  "id": 0,
                  "name": "dip",
                  "localizedName": "dip",
                  "image": ""
                }
              ],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 33.1676864624023,
      "spoonacularSourceUrl": "https://spoonacular.com/chinese-potstickers-638693"
    },
    {
      "id": 149199,
      "image": "https://img.spoonacular.com/recipes/149199-556x370.jpg",
      "imageType": "jpg",
      "title": "Easy, All-Natural Protein Bars",
      "readyInMinutes": 15,
      "servings": 6,
      "sourceUrl": "http://spoonacular.com/1374003217513",
      "vegetarian": true,
      "vegan": true,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 4,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 2,
      "healthScore": 10,
      "creditsText": "coffeebean",
      "license": "spoonacular's terms",
      "sourceName": "spoonacular",
      "pricePerServing": 98.72,
      "extendedIngredients": [
        {
          "id": 12061,
          "aisle": "Nuts",
          "image": "almonds.jpg",
          "consistency": "SOLID",
          "name": "almonds",
          "nameClean": "almonds",
          "original": "1 cup almonds",
          "originalName": "almonds",
          "amount": 1,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 143,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 9087,
          "aisle": "Dried Fruits",
          "image": "dates.jpg",
          "consistency": "SOLID",
          "name": "dates",
          "nameClean": "dates",
          "original": "2/3 cup dates",
          "originalName": "dates",
          "amount": 0.6666667,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.6666667,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 98,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 9094,
          "aisle": "Produce",
          "image": "figs-dried.jpg",
          "consistency": "SOLID",
          "name": "figs",
          "nameClean": "figs",
          "original": "2/3 cup dried figs",
          "originalName": "dried figs",
          "amount": 0.6666667,
          "unit": "cup",
          "meta": [
            "dried"
          ],
          "measures": {
            "us": {
              "amount": 0.6666667,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 99.333,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 93601,
          "aisle": "Health Foods",
          "image": "hemp-protein-powder.png",
          "consistency": "SOLID",
          "name": "hemp protein powder",
          "nameClean": "hemp protein powder",
          "original": "3 tablespoons hemp protein powder",
          "originalName": "hemp protein powder",
          "amount": 3,
          "unit": "tablespoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 3,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        }
      ],
      "summary": "Easy, All-Natural Protein Bars is a \u003Cb\u003Egluten free, dairy free, paleolithic, and lacto ovo vegetarian\u003C/b\u003E recipe with 6 servings. For \u003Cb\u003E99 cents per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 10%\u003C/b\u003E of your daily requirements of vitamins and minerals. One serving contains \u003Cb\u003E241 calories\u003C/b\u003E, \u003Cb\u003E8g of protein\u003C/b\u003E, and \u003Cb\u003E13g of fat\u003C/b\u003E. If you have almonds, dates, hemp protein powder, and a few other ingredients on hand, you can make it. It works well as a side dish. From preparation to the plate, this recipe takes roughly \u003Cb\u003E15 minutes\u003C/b\u003E. It is brought to you by spoonacular user \u003Ca href=\"/profile/coffeebean\"\u003Ecoffeebean\u003C/a\u003E. Similar recipes are \u003Ca href=\"https://spoonacular.com/recipes/natural-baby-food-cauliflower-breadsticks-792587\"\u003ENatural Baby Food: Cauliflower Breadsticks\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/powerful-protein-brownie-bars-617560\"\u003EPowerful Protein Brownie Bars\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/pumpkin-banana-protein-oat-bars-657249\"\u003EPumpkin Banana Protein Oat Bars\u003C/a\u003E.",
      "cuisines": [],
      "dishTypes": [
        "side dish"
      ],
      "diets": [
        "gluten free",
        "dairy free",
        "paleolithic",
        "lacto ovo vegetarian",
        "primal",
        "vegan"
      ],
      "occasions": [],
      "instructions": "\u003Cp\u003ESimple Process\u003C/p\u003E\u003Cul\u003E\u003Cli\u003EProcess the almonds (or other nuts) in a food processor or high-speed blender. You don’t need a fine powder, but if the almond chunks are        too large it may be difficult to keep the bars from falling apart.\u003C/li\u003E\u003Cli\u003EAdd the figs, dates, or another moist dried fruit and process until evenly mixed. You may need to scrape the sides of your blender a few times.\u003C/li\u003E\u003Cli\u003EAdd any mix-ins you desire (shredded coconut, chocolate chips, protein powder, etc.) Be careful not to make the mixture to wet or too dry. If        necessary, you can add a little water to help blend.\u003C/li\u003E\u003Cli\u003EDump the mixture onto a flat surface and form your bars. Store in the fridge or freezer. Enjoy!\u003C/li\u003E\u003C/ul\u003E That's all",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Simple Process",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 2,
              "step": "Process the almonds (or other nuts) in a food processor or high-speed blender. You don’t need a fine powder, but if the almond chunks are",
              "ingredients": [
                {
                  "id": 12061,
                  "name": "almonds",
                  "localizedName": "almonds",
                  "image": "almonds.jpg"
                },
                {
                  "id": 12135,
                  "name": "nuts",
                  "localizedName": "nuts",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/nuts-mixed.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404771,
                  "name": "food processor",
                  "localizedName": "food processor",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/food-processor.png"
                },
                {
                  "id": 404726,
                  "name": "blender",
                  "localizedName": "blender",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/blender.png"
                }
              ]
            },
            {
              "number": 3,
              "step": "too large it may be difficult to keep the bars from falling apart.",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 4,
              "step": "Add the figs, dates, or another moist dried fruit and process until evenly mixed. You may need to scrape the sides of your blender a few times.",
              "ingredients": [
                {
                  "id": 1009094,
                  "name": "dried fruit",
                  "localizedName": "dried fruit",
                  "image": "dried-fruit-mixed.jpg"
                },
                {
                  "id": 9087,
                  "name": "dates",
                  "localizedName": "dates",
                  "image": "dates.jpg"
                },
                {
                  "id": 9089,
                  "name": "figs",
                  "localizedName": "figs",
                  "image": "figs-fresh.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404726,
                  "name": "blender",
                  "localizedName": "blender",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/blender.png"
                }
              ]
            },
            {
              "number": 5,
              "step": "Add any mix-ins you desire (shredded coconut, chocolate chips, protein powder, etc.) Be careful not to make the mixture to wet or too dry. If",
              "ingredients": [
                {
                  "id": 0,
                  "name": "shredded coconut",
                  "localizedName": "shredded coconut",
                  "image": "shredded-coconut.jpg"
                },
                {
                  "id": 99278,
                  "name": "chocolate chips",
                  "localizedName": "chocolate chips",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/chocolate-chips.jpg"
                },
                {
                  "id": 99239,
                  "name": "protein powder",
                  "localizedName": "protein powder",
                  "image": "plain-protein-powder.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 6,
              "step": "necessary, you can add a little water to help blend.Dump the mixture onto a flat surface and form your bars. Store in the fridge or freezer. Enjoy! That's all",
              "ingredients": [
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }
              ],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 59.734130859375,
      "spoonacularSourceUrl": "https://spoonacular.com/easy-all-natural-protein-bars-149199"
    },
    {
      "id": 652919,
      "image": "https://img.spoonacular.com/recipes/652919-556x370.jpg",
      "imageType": "jpg",
      "title": "Nachos Grande",
      "readyInMinutes": 45,
      "servings": 4,
      "sourceUrl": "https://www.foodista.com/recipe/XLNSQ4BV/nachos-grande",
      "vegetarian": true,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 19,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 2,
      "healthScore": 21,
      "creditsText": "foodista.com",
      "license": null,
      "sourceName": "foodista.com",
      "pricePerServing": 205.18,
      "extendedIngredients": [
        {
          "id": 10011693,
          "aisle": "Canned and Jarred",
          "image": "tomatoes-canned.png",
          "consistency": "SOLID",
          "name": "canned tomatoes",
          "nameClean": "canned tomatoes",
          "original": "400 grams can tomatoes",
          "originalName": "tomatoes",
          "amount": 400,
          "unit": "grams",
          "meta": [
            "canned"
          ],
          "measures": {
            "us": {
              "amount": 14.11,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 400,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1001009,
          "aisle": "Cheese",
          "image": "shredded-cheddar.jpg",
          "consistency": "SOLID",
          "name": "cheddar cheese",
          "nameClean": "cheddar cheese",
          "original": "1 1/2 cups Grated Cheddar Cheese",
          "originalName": "Grated Cheddar Cheese",
          "amount": 1.5,
          "unit": "cups",
          "meta": [
            "grated"
          ],
          "measures": {
            "us": {
              "amount": 1.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 169.5,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 2009,
          "aisle": "Spices and Seasonings",
          "image": "chili-powder.jpg",
          "consistency": "SOLID",
          "name": "chili powder",
          "nameClean": "chili powder",
          "original": "1/2 teaspoon Chili Powder",
          "originalName": "Chili Powder",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 42289,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "vegetable-oil.jpg",
          "consistency": "LIQUID",
          "name": "corn oil",
          "nameClean": "corn oil",
          "original": "2 tablespoons Corn Oil",
          "originalName": "Corn Oil",
          "amount": 2,
          "unit": "tablespoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 10211215,
          "aisle": "Produce",
          "image": "garlic.jpg",
          "consistency": "SOLID",
          "name": "garlic cloves",
          "nameClean": "garlic cloves",
          "original": "3 Garlic Cloves, crushed",
          "originalName": "Garlic Cloves, crushed",
          "amount": 3,
          "unit": "",
          "meta": [
            "crushed"
          ],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 3,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 11333,
          "aisle": "Produce",
          "image": "green-pepper.jpg",
          "consistency": "SOLID",
          "name": "bell pepper",
          "nameClean": "bell pepper",
          "original": "1/2 Green Pepper, chopped",
          "originalName": "Green Pepper, chopped",
          "amount": 0.5,
          "unit": "",
          "meta": [
            "green",
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 31015,
          "aisle": "Produce",
          "image": "chili-peppers-green.jpg",
          "consistency": "SOLID",
          "name": "chili",
          "nameClean": "chili",
          "original": "1 Fresh Green Chili, chopped",
          "originalName": "Fresh Green Chili, chopped",
          "amount": 1,
          "unit": "",
          "meta": [
            "fresh",
            "green",
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 1012014,
          "aisle": "Spices and Seasonings",
          "image": "ground-cumin.jpg",
          "consistency": "SOLID",
          "name": "ground cumin",
          "nameClean": "ground cumin",
          "original": "1/4 teaspoon Ground Cumin",
          "originalName": "Ground Cumin",
          "amount": 0.25,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 11282,
          "aisle": "Produce",
          "image": "brown-onion.png",
          "consistency": "SOLID",
          "name": "onion",
          "nameClean": "onion",
          "original": "1 Onion, finely chopped",
          "originalName": "Onion, finely chopped",
          "amount": 1,
          "unit": "",
          "meta": [
            "finely chopped"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 2028,
          "aisle": "Spices and Seasonings",
          "image": "paprika.jpg",
          "consistency": "SOLID",
          "name": "paprika",
          "nameClean": "paprika",
          "original": "1 teaspoon paprika",
          "originalName": "paprika",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 10211821,
          "aisle": "Produce",
          "image": "bell-pepper-orange.png",
          "consistency": "SOLID",
          "name": "paprika to garnish",
          "nameClean": "paprika to garnish",
          "original": "Paprika to garnish",
          "originalName": "Paprika to garnish",
          "amount": 4,
          "unit": "servings",
          "meta": [],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 16202,
          "aisle": "Ethnic Foods",
          "image": "refried-beans.png",
          "consistency": "SOLID",
          "name": "refried beans",
          "nameClean": "refried beans",
          "original": "1 can Refried Beans (13 oz.)",
          "originalName": "can Refried Beans",
          "amount": 13,
          "unit": "oz",
          "meta": [
            "canned"
          ],
          "measures": {
            "us": {
              "amount": 13,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 368.544,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 19056,
          "aisle": "Savory Snacks",
          "image": "tortilla-chips.jpg",
          "consistency": "SOLID",
          "name": "tortilla chips",
          "nameClean": "tortilla chips",
          "original": "2 cups Tortilla Chips",
          "originalName": "Tortilla Chips",
          "amount": 2,
          "unit": "cups",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 230,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 14412,
          "aisle": "Beverages",
          "image": "water.png",
          "consistency": "LIQUID",
          "name": "water",
          "nameClean": "water",
          "original": "5 tablespoons Water",
          "originalName": "Water",
          "amount": 5,
          "unit": "tablespoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 5,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 5,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        }
      ],
      "summary": "Nachos Grande might be just the hor d'oeuvre you are searching for. This recipe makes 4 servings with \u003Cb\u003E642 calories\u003C/b\u003E, \u003Cb\u003E21g of protein\u003C/b\u003E, and \u003Cb\u003E34g of fat\u003C/b\u003E each. For \u003Cb\u003E$2.05 per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 27%\u003C/b\u003E of your daily requirements of vitamins and minerals. It is brought to you by Foodista. 2 people were glad they tried this recipe. Only a few people really liked this Mexican dish. A mixture of chili, paprika to garnish, onion, and a handful of other ingredients are all it takes to make this recipe so tasty. It is a good option if you're following a \u003Cb\u003Egluten free and lacto ovo vegetarian\u003C/b\u003E diet. From preparation to the plate, this recipe takes roughly \u003Cb\u003E45 minutes\u003C/b\u003E. Taking all factors into account, this recipe \u003Cb\u003Eearns a spoonacular score of 58%\u003C/b\u003E, which is solid. Users who liked this recipe also liked \u003Ca href=\"https://spoonacular.com/recipes/nachos-grande-1632297\"\u003ENachos Grande\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/el-grande-burritos-159104\"\u003EEl Grande Burritos\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/burrito-grande-160240\"\u003EBurrito Grande\u003C/a\u003E.",
      "cuisines": [
        "Mexican"
      ],
      "dishTypes": [
        "fingerfood",
        "antipasti",
        "lunch",
        "main course",
        "starter",
        "snack",
        "appetizer",
        "main dish",
        "antipasto",
        "hor d'oeuvre",
        "dinner"
      ],
      "diets": [
        "gluten free",
        "lacto ovo vegetarian"
      ],
      "occasions": [],
      "instructions": "\u003Col\u003E\u003Cli\u003EHeat oil in a skillet, add the onion, green pepper, and garlic, and cook gently, stirring occasionally, for 5 minutes or until soft but not browned.\u003C/li\u003E\u003Cli\u003EAdd the tomatoes and chili and cook over medium heat for 5 minutes, or until most of the liquid has evaporated.\u003C/li\u003E\u003Cli\u003EStir in the chili powder and paprika and cook for 3 minutes, then add the refried beans, breaking them up with a fork. Add the measured water and cook, stirring occasionally, for 8-10 minutes, until the mixture thickens.\u003C/li\u003E\u003Cli\u003ESpoon the beans into the middle of a baking dish, arrange the tortilla chips around the edge and sprinkle with cumin. Sprinkle the cheese over the beans and tortilla chips.\u003C/li\u003E\u003Cli\u003EBake at 400 degrees for 15-20 minutes, until the cheese has melted.\u003C/li\u003E\u003Cli\u003ESprinkle the paprika for garnish in a lattice pattern on top and serve immediately.\u003C/li\u003E\u003C/ol\u003E",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Heat oil in a skillet, add the onion, green pepper, and garlic, and cook gently, stirring occasionally, for 5 minutes or until soft but not browned.",
              "ingredients": [
                {
                  "id": 11333,
                  "name": "green pepper",
                  "localizedName": "green pepper",
                  "image": "green-pepper.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                },
                {
                  "id": 11282,
                  "name": "onion",
                  "localizedName": "onion",
                  "image": "brown-onion.png"
                },
                {
                  "id": 4582,
                  "name": "cooking oil",
                  "localizedName": "cooking oil",
                  "image": "vegetable-oil.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ],
              "length": {
                "number": 5,
                "unit": "minutes"
              }
            },
            {
              "number": 2,
              "step": "Add the tomatoes and chili and cook over medium heat for 5 minutes, or until most of the liquid has evaporated.Stir in the chili powder and paprika and cook for 3 minutes, then add the refried beans, breaking them up with a fork.",
              "ingredients": [
                {
                  "id": 16202,
                  "name": "refried beans",
                  "localizedName": "refried beans",
                  "image": "refried-beans.png"
                },
                {
                  "id": 2009,
                  "name": "chili powder",
                  "localizedName": "chili powder",
                  "image": "chili-powder.jpg"
                },
                {
                  "id": 11529,
                  "name": "tomato",
                  "localizedName": "tomato",
                  "image": "tomato.png"
                },
                {
                  "id": 2028,
                  "name": "paprika",
                  "localizedName": "paprika",
                  "image": "paprika.jpg"
                },
                {
                  "id": 11819,
                  "name": "chili pepper",
                  "localizedName": "chili pepper",
                  "image": "red-chili.jpg"
                }
              ],
              "equipment": [],
              "length": {
                "number": 8,
                "unit": "minutes"
              }
            },
            {
              "number": 3,
              "step": "Add the measured water and cook, stirring occasionally, for 8-10 minutes, until the mixture thickens.Spoon the beans into the middle of a baking dish, arrange the tortilla chips around the edge and sprinkle with cumin.",
              "ingredients": [
                {
                  "id": 19056,
                  "name": "tortilla chips",
                  "localizedName": "tortilla chips",
                  "image": "tortilla-chips.jpg"
                },
                {
                  "id": 0,
                  "name": "beans",
                  "localizedName": "beans",
                  "image": "kidney-beans.jpg"
                },
                {
                  "id": 1002014,
                  "name": "cumin",
                  "localizedName": "cumin",
                  "image": "ground-cumin.jpg"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }
              ],
              "equipment": [
                {
                  "id": 404646,
                  "name": "baking pan",
                  "localizedName": "baking pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/roasting-pan.jpg"
                }
              ],
              "length": {
                "number": 10,
                "unit": "minutes"
              }
            },
            {
              "number": 4,
              "step": "Sprinkle the cheese over the beans and tortilla chips.",
              "ingredients": [
                {
                  "id": 19056,
                  "name": "tortilla chips",
                  "localizedName": "tortilla chips",
                  "image": "tortilla-chips.jpg"
                },
                {
                  "id": 1041009,
                  "name": "cheese",
                  "localizedName": "cheese",
                  "image": "cheddar-cheese.png"
                },
                {
                  "id": 0,
                  "name": "beans",
                  "localizedName": "beans",
                  "image": "kidney-beans.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 5,
              "step": "Bake at 400 degrees for 15-20 minutes, until the cheese has melted.",
              "ingredients": [
                {
                  "id": 1041009,
                  "name": "cheese",
                  "localizedName": "cheese",
                  "image": "cheddar-cheese.png"
                }
              ],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ],
              "length": {
                "number": 20,
                "unit": "minutes"
              }
            },
            {
              "number": 6,
              "step": "Sprinkle the paprika for garnish in a lattice pattern on top and serve immediately.",
              "ingredients": [
                {
                  "id": 2028,
                  "name": "paprika",
                  "localizedName": "paprika",
                  "image": "paprika.jpg"
                }
              ],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 69.7965240478516,
      "spoonacularSourceUrl": "https://spoonacular.com/nachos-grande-652919"
    },
    {
      "id": 991625,
      "image": "https://img.spoonacular.com/recipes/991625-556x370.jpg",
      "imageType": "jpg",
      "title": "Nutella Buttercream Cupcakes with Hidden Cadbury Egg",
      "readyInMinutes": 35,
      "servings": 6,
      "sourceUrl": "https://www.pinkwhen.com/nutella-buttercream-cupcakes-with-hidden-cadbury-egg/",
      "vegetarian": true,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 7,
      "gaps": "no",
      "preparationMinutes": 10,
      "cookingMinutes": 25,
      "aggregateLikes": 14,
      "healthScore": 2,
      "creditsText": "Jen West",
      "license": null,
      "sourceName": "Pink When",
      "pricePerServing": 54.11,
      "extendedIngredients": [
        {
          "id": 1123,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg.png",
          "consistency": "SOLID",
          "name": "eggs",
          "nameClean": "eggs",
          "original": "4 eggs",
          "originalName": "eggs",
          "amount": 4,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 4,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 1123,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg.png",
          "consistency": "SOLID",
          "name": "cadbury eggs",
          "nameClean": "cadbury eggs",
          "original": "6 Cadbury eggs.",
          "originalName": "Cadbury eggs",
          "amount": 6,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 6,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 6,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 1077,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "milk.png",
          "consistency": "LIQUID",
          "name": "milk",
          "nameClean": "milk",
          "original": "1 cup of milk,",
          "originalName": "milk",
          "amount": 1,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 244,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 4582,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "vegetable-oil.jpg",
          "consistency": "LIQUID",
          "name": "oil",
          "nameClean": "oil",
          "original": "1/3 cup of oil",
          "originalName": "oil",
          "amount": 0.33333334,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.33333334,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 74.667,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 1052050,
          "aisle": "Baking",
          "image": "vanilla.jpg",
          "consistency": "SOLID",
          "name": "vanilla",
          "nameClean": "vanilla",
          "original": "1 tsp of vanilla,",
          "originalName": "vanilla",
          "amount": 1,
          "unit": "tsp",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        }
      ],
      "summary": "The recipe Nutella Buttercream Cupcakes with Hidden Cadbury Egg can be made \u003Cb\u003Ein about 35 minutes\u003C/b\u003E. Watching your figure? This gluten free, lacto ovo vegetarian, and ketogenic recipe has \u003Cb\u003E241 calories\u003C/b\u003E, \u003Cb\u003E11g of protein\u003C/b\u003E, and \u003Cb\u003E21g of fat\u003C/b\u003E per serving. This recipe serves 6. For \u003Cb\u003E54 cents per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 9%\u003C/b\u003E of your daily requirements of vitamins and minerals. 14 people have tried and liked this recipe. This recipe from Pink When requires vanilla, cadbury eggs, milk, and oil. This recipe is typical of American cuisine. Taking all factors into account, this recipe \u003Cb\u003Eearns a spoonacular score of 35%\u003C/b\u003E, which is not so super. If you like this recipe, take a look at these similar recipes: \u003Ca href=\"https://spoonacular.com/recipes/egg-nog-hazelnut-cupcakes-with-nutella-buttercream-frosting-63942\"\u003EEgg Nog-hazelnut Cupcakes With Nutella Buttercream Frosting\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/cadbury-creme-egg-cupcakes-554644\"\u003ECadbury Creme Egg Cupcakes\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/cadbury-mini-egg-cupcakes-992953\"\u003ECadbury Mini Egg Cupcakes\u003C/a\u003E.",
      "cuisines": [
        "American"
      ],
      "dishTypes": [],
      "diets": [
        "gluten free",
        "lacto ovo vegetarian",
        "ketogenic"
      ],
      "occasions": [],
      "instructions": "Preheat oven to 350 degrees.\nGrease 6 jumbo muffin tin.\nCombine cake mix milk, vanilla and oil. Mix till combined.\nAdd eggs beat till mixed well. Bake for 18- 21 min\nAfter cooking cupcakes use a spoon and cut out enough area to insert Cadbury egg.\nMaking sure the smaller part of the egg is facing up.\nFrost the cupcake hiding the Cadbury egg.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Preheat oven to 350 degrees.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Grease 6 jumbo muffin tin.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404671,
                  "name": "muffin tray",
                  "localizedName": "muffin tray",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/muffin-tray.jpg"
                }
              ]
            },
            {
              "number": 3,
              "step": "Combine cake mix milk, vanilla and oil.",
              "ingredients": [
                {
                  "id": 10018137,
                  "name": "cake mix",
                  "localizedName": "cake mix",
                  "image": ""
                },
                {
                  "id": 1052050,
                  "name": "vanilla",
                  "localizedName": "vanilla",
                  "image": "vanilla.jpg"
                },
                {
                  "id": 1077,
                  "name": "milk",
                  "localizedName": "milk",
                  "image": "milk.png"
                },
                {
                  "id": 4582,
                  "name": "cooking oil",
                  "localizedName": "cooking oil",
                  "image": "vegetable-oil.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 4,
              "step": "Mix till combined.",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 5,
              "step": "Add eggs beat till mixed well.",
              "ingredients": [
                {
                  "id": 1123,
                  "name": "egg",
                  "localizedName": "egg",
                  "image": "egg.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 6,
              "step": "Bake for 18- 21 min",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            },
            {
              "number": 7,
              "step": "After cooking cupcakes use a spoon and cut out enough area to insert Cadbury egg.",
              "ingredients": [
                {
                  "id": 18139,
                  "name": "cupcakes",
                  "localizedName": "cupcakes",
                  "image": "plain-cupcake.jpg"
                },
                {
                  "id": 1123,
                  "name": "egg",
                  "localizedName": "egg",
                  "image": "egg.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 8,
              "step": "Making sure the smaller part of the egg is facing up.",
              "ingredients": [
                {
                  "id": 1123,
                  "name": "egg",
                  "localizedName": "egg",
                  "image": "egg.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 9,
              "step": "Frost the cupcake hiding the Cadbury egg.",
              "ingredients": [
                {
                  "id": 18139,
                  "name": "cupcakes",
                  "localizedName": "cupcakes",
                  "image": "plain-cupcake.jpg"
                },
                {
                  "id": 1123,
                  "name": "egg",
                  "localizedName": "egg",
                  "image": "egg.png"
                }
              ],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 37.8927688598633,
      "spoonacularSourceUrl": "https://spoonacular.com/nutella-buttercream-cupcakes-with-hidden-cadbury-egg-991625"
    },
    {
      "id": 660366,
      "image": "https://img.spoonacular.com/recipes/660366-556x370.jpg",
      "imageType": "jpg",
      "title": "Smoked Salmon and Mascarpone Calzone",
      "readyInMinutes": 45,
      "servings": 2,
      "sourceUrl": "https://www.foodista.com/recipe/PB3V8BYG/smoked-salmon-and-mascarpone-calzone",
      "vegetarian": false,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 31,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 5,
      "healthScore": 7,
      "creditsText": "foodista.com",
      "license": null,
      "sourceName": "foodista.com",
      "pricePerServing": 400.12,
      "extendedIngredients": [
        {
          "id": 1002030,
          "aisle": "Spices and Seasonings",
          "image": "pepper.jpg",
          "consistency": "SOLID",
          "name": "pepper",
          "nameClean": "pepper",
          "original": "black pepper",
          "originalName": "black pepper",
          "amount": 2,
          "unit": "servings",
          "meta": [
            "black"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 2,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 1124,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg-white.jpg",
          "consistency": "SOLID",
          "name": "egg white",
          "nameClean": "egg white",
          "original": "1 egg white, lightly beaten",
          "originalName": "egg white, lightly beaten",
          "amount": 1,
          "unit": "",
          "meta": [
            "lightly beaten"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 1034053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "olive-oil.jpg",
          "consistency": "LIQUID",
          "name": "extra virgin olive oil",
          "nameClean": "extra virgin olive oil",
          "original": "extra virgin olive oil",
          "originalName": "extra virgin olive oil",
          "amount": 2,
          "unit": "servings",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 2,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 11156,
          "aisle": "Produce",
          "image": "fresh-chives.jpg",
          "consistency": "SOLID",
          "name": "chives",
          "nameClean": "chives",
          "original": "1 small handful chives, finely chopped",
          "originalName": "chives, finely chopped",
          "amount": 1,
          "unit": "small handful",
          "meta": [
            "finely chopped"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "small handful",
              "unitLong": "small handful"
            },
            "metric": {
              "amount": 1,
              "unitShort": "small handful",
              "unitLong": "small handful"
            }
          }
        },
        {
          "id": 1082047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "kosher salt",
          "nameClean": "kosher salt",
          "original": "kosher salt",
          "originalName": "kosher salt",
          "amount": 2,
          "unit": "servings",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 2,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 11246,
          "aisle": "Produce",
          "image": "leeks.jpg",
          "consistency": "SOLID",
          "name": "leek",
          "nameClean": "leek",
          "original": "1 leek",
          "originalName": "leek",
          "amount": 1,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 93820,
          "aisle": "Cheese",
          "image": "white-cream-fluffy.jpg",
          "consistency": "SOLID",
          "name": "mascarpone",
          "nameClean": "mascarpone",
          "original": "1/2 cup mascarpone",
          "originalName": "mascarpone",
          "amount": 0.5,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 112.5,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 93610,
          "aisle": "Refrigerated",
          "image": "pizza-dough.jpg",
          "consistency": "SOLID",
          "name": "pizza dough",
          "nameClean": "pizza dough",
          "original": "1 pizza dough",
          "originalName": "pizza dough",
          "amount": 1,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 15077,
          "aisle": "Seafood",
          "image": "smoked-salmon.png",
          "consistency": "SOLID",
          "name": "salmon",
          "nameClean": "salmon",
          "original": "4 slices smoked salmon",
          "originalName": "smoked salmon",
          "amount": 4,
          "unit": "slices",
          "meta": [
            "smoked"
          ],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "slice",
              "unitLong": "slices"
            },
            "metric": {
              "amount": 4,
              "unitShort": "slice",
              "unitLong": "slices"
            }
          }
        }
      ],
      "summary": "You can never have too many Mediterranean recipes, so give Smoked Salmon and Mascarpone Calzone a try. For \u003Cb\u003E$4.0 per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 16%\u003C/b\u003E of your daily requirements of vitamins and minerals. This recipe serves 2. One portion of this dish contains about \u003Cb\u003E29g of protein\u003C/b\u003E, \u003Cb\u003E47g of fat\u003C/b\u003E, and a total of \u003Cb\u003E940 calories\u003C/b\u003E. This recipe is liked by 5 foodies and cooks. If you have pizza dough, leek, salmon, and a few other ingredients on hand, you can make it. It works well as a rather pricey main course. It is a good option if you're following a \u003Cb\u003Epescatarian\u003C/b\u003E diet. It is brought to you by Foodista. From preparation to the plate, this recipe takes around \u003Cb\u003E45 minutes\u003C/b\u003E. Overall, this recipe earns a \u003Cb\u003Egood spoonacular score of 64%\u003C/b\u003E. If you like this recipe, you might also like recipes such as \u003Ca href=\"https://spoonacular.com/recipes/smoked-salmon-and-mozzarella-calzone-87399\"\u003ESmoked Salmon and Mozzarella Calzone\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/smoked-salmon-pizza-with-mascarpone-and-capers-29877\"\u003ESmoked-Salmon Pizza with Mascarpone and Capers\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/smoked-salmon-horseradish-mascarpone-in-wonton-cups-584727\"\u003ESmoked Salmon & Horseradish Mascarpone in Wonton Cups\u003C/a\u003E.",
      "cuisines": [
        "Mediterranean",
        "Italian",
        "European"
      ],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "pescatarian"
      ],
      "occasions": [],
      "instructions": "\u003Col\u003E\u003Cli\u003EPreheat your oven to 450F and place the top rack in the lower third of your oven.  Like a baking sheet with parchment paper (optional, for easier cleanup).\u003C/li\u003E\u003Cli\u003EWash and pat dry the leek.  Slice the leek lengthwise, then cut each half into long, very thin strips.  Cut the strips into short pieces, about  long.  Set aside.\u003C/li\u003E\u003Cli\u003EDivide the dough into two equal parts, and roll out each into a 10 circle.  Gently spread a thin layer of mascarpone on the surface of the dough, leaving at least a  crust.\u003C/li\u003E\u003Cli\u003EIn a small bowl, break up the smoked salmon using your fingers until it is fluffy.  You want the filling of the calzone to be pretty even, or it will fall apart as you eat it.\u003C/li\u003E\u003Cli\u003EDivide the salmon between the two crusts, arranging it only on one side of the crust (in a half-moon shape), again leave at least a  crust.  Sprinkle the chives and leeks over the salmon, then lightly salt and pepper.  Finally, drizzle with about 1 tsp of olive oil.\u003C/li\u003E\u003Cli\u003EFold each calzone in half, making sure that the crusts line up.  Using the tines of a fork, gently press down the edge all the way around the rounded side of the calzone to seal it.  Make sure you get a tight seal  this will help the calzone puff up during baking.\u003C/li\u003E\u003Cli\u003EBrush the tops of each calzone with egg white.  Bake at 450F for about 15 minutes, or until golden brown and delicious.\u003C/li\u003E\u003C/ol\u003E",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Preheat your oven to 450F and place the top rack in the lower third of your oven.  Like a baking sheet with parchment paper (optional, for easier cleanup).Wash and pat dry the leek.  Slice the leek lengthwise, then cut each half into long, very thin strips.",
              "ingredients": [
                {
                  "id": 11246,
                  "name": "leek",
                  "localizedName": "leek",
                  "image": "leeks.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404770,
                  "name": "baking paper",
                  "localizedName": "baking paper",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/baking-paper.jpg"
                },
                {
                  "id": 404727,
                  "name": "baking sheet",
                  "localizedName": "baking sheet",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/baking-sheet.jpg"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                  "temperature": {
                    "number": 450,
                    "unit": "Fahrenheit"
                  }
                }
              ]
            },
            {
              "number": 2,
              "step": "Cut the strips into short pieces, about  long.  Set aside.Divide the dough into two equal parts, and roll out each into a 10 circle.  Gently spread a thin layer of mascarpone on the surface of the dough, leaving at least a  crust.In a small bowl, break up the smoked salmon using your fingers until it is fluffy.  You want the filling of the calzone to be pretty even, or it will fall apart as you eat it.Divide the salmon between the two crusts, arranging it only on one side of the crust (in a half-moon shape), again leave at least a  crust.",
              "ingredients": [
                {
                  "id": 15077,
                  "name": "smoked salmon",
                  "localizedName": "smoked salmon",
                  "image": "smoked-salmon.png"
                },
                {
                  "id": 93820,
                  "name": "mascarpone",
                  "localizedName": "mascarpone",
                  "image": "white-cream-fluffy.jpg"
                },
                {
                  "id": 15076,
                  "name": "salmon",
                  "localizedName": "salmon",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/salmon.png"
                },
                {
                  "id": 0,
                  "name": "spread",
                  "localizedName": "spread",
                  "image": ""
                },
                {
                  "id": 0,
                  "name": "crust",
                  "localizedName": "crust",
                  "image": ""
                },
                {
                  "id": 0,
                  "name": "dough",
                  "localizedName": "dough",
                  "image": "pizza-dough"
                },
                {
                  "id": 0,
                  "name": "roll",
                  "localizedName": "roll",
                  "image": "dinner-yeast-rolls.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 3,
              "step": "Sprinkle the chives and leeks over the salmon, then lightly salt and pepper.  Finally, drizzle with about 1 tsp of olive oil.Fold each calzone in half, making sure that the crusts line up.  Using the tines of a fork, gently press down the edge all the way around the rounded side of the calzone to seal it.  Make sure you get a tight seal  this will help the calzone puff up during baking.",
              "ingredients": [
                {
                  "id": 1102047,
                  "name": "salt and pepper",
                  "localizedName": "salt and pepper",
                  "image": "salt-and-pepper.jpg"
                },
                {
                  "id": 4053,
                  "name": "olive oil",
                  "localizedName": "olive oil",
                  "image": "olive-oil.jpg"
                },
                {
                  "id": 11156,
                  "name": "chives",
                  "localizedName": "chives",
                  "image": "fresh-chives.jpg"
                },
                {
                  "id": 15076,
                  "name": "salmon",
                  "localizedName": "salmon",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/salmon.png"
                },
                {
                  "id": 11246,
                  "name": "leek",
                  "localizedName": "leek",
                  "image": "leeks.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 4,
              "step": "Brush the tops of each calzone with egg white.",
              "ingredients": [
                {
                  "id": 1124,
                  "name": "egg whites",
                  "localizedName": "egg whites",
                  "image": "egg-white.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 5,
              "step": "Bake at 450F for about 15 minutes, or until golden brown and delicious.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                  "temperature": {
                    "number": 450,
                    "unit": "Fahrenheit"
                  }
                }
              ],
              "length": {
                "number": 15,
                "unit": "minutes"
              }
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 16.689338684082,
      "spoonacularSourceUrl": "https://spoonacular.com/smoked-salmon-and-mascarpone-calzone-660366"
    },
    {
      "id": 632155,
      "image": "https://img.spoonacular.com/recipes/632155-556x370.jpg",
      "imageType": "jpg",
      "title": "Almond Nut Butter",
      "readyInMinutes": 45,
      "servings": 16,
      "sourceUrl": "https://www.foodista.com/recipe/LQJQ8PPH/almond-nut-butter",
      "vegetarian": true,
      "vegan": true,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": true,
      "weightWatcherSmartPoints": 3,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 20,
      "healthScore": 5,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 43.63,
      "extendedIngredients": [
        {
          "id": 12061,
          "aisle": "Nuts",
          "image": "almonds.jpg",
          "consistency": "SOLID",
          "name": "almonds",
          "nameClean": "almonds",
          "original": "2 cup raw almonds",
          "originalName": "raw almonds",
          "amount": 2,
          "unit": "cup",
          "meta": [
            "raw"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 286,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 19911,
          "aisle": "Cereal",
          "image": "maple-syrup.png",
          "consistency": "LIQUID",
          "name": "maple syrup",
          "nameClean": "maple syrup",
          "original": "1 tbsp maple syrup",
          "originalName": "maple syrup",
          "amount": 1,
          "unit": "tbsp",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 1012010,
          "aisle": "Spices and Seasonings",
          "image": "cinnamon.jpg",
          "consistency": "SOLID",
          "name": "ground cinnamon",
          "nameClean": "ground cinnamon",
          "original": "1 tsp ground cinnamon",
          "originalName": "ground cinnamon",
          "amount": 1,
          "unit": "tsp",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 2050,
          "aisle": "Baking",
          "image": "vanilla-extract.jpg",
          "consistency": "LIQUID",
          "name": "vanilla extract",
          "nameClean": "vanilla extract",
          "original": "1 1/2 tsp pure vanilla extract",
          "originalName": "pure vanilla extract",
          "amount": 1.5,
          "unit": "tsp",
          "meta": [
            "pure"
          ],
          "measures": {
            "us": {
              "amount": 1.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 1.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 19904,
          "aisle": "Sweet Snacks",
          "image": "dark-chocolate-pieces.jpg",
          "consistency": "SOLID",
          "name": "chocolate",
          "nameClean": "chocolate",
          "original": "1 oz dark chocolate",
          "originalName": "dark chocolate",
          "amount": 1,
          "unit": "oz",
          "meta": [
            "dark"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "oz",
              "unitLong": "ounce"
            },
            "metric": {
              "amount": 28.35,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        }
      ],
      "summary": "Need a \u003Cb\u003Egluten free, dairy free, paleolithic, and lacto ovo vegetarian condiment\u003C/b\u003E? Almond Nut Butter could be a tremendous recipe to try. For \u003Cb\u003E44 cents per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 6%\u003C/b\u003E of your daily requirements of vitamins and minerals. This recipe makes 16 servings with \u003Cb\u003E119 calories\u003C/b\u003E, \u003Cb\u003E4g of protein\u003C/b\u003E, and \u003Cb\u003E10g of fat\u003C/b\u003E each. This recipe from Foodista requires almonds, chocolate, ground cinnamon, and vanillan extract. 20 people have made this recipe and would make it again. From preparation to the plate, this recipe takes around \u003Cb\u003E45 minutes\u003C/b\u003E. With a spoonacular \u003Cb\u003Escore of 48%\u003C/b\u003E, this dish is good. Similar recipes include \u003Ca href=\"https://spoonacular.com/recipes/cocoa-nut-almond-butter-spread-585799\"\u003ECocoa-Nut Almond Butter Spread\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/baru-nut-butter-chocolate-baru-nut-butter-cups-gluten-free-paleo-vegan-1017637\"\u003EBaru Nut Butter & Chocolate Baru Nut Butter Cups (Gluten Free, Paleo + Vegan)\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/nut-free-chocolate-cookies-with-soy-nut-butter-596158\"\u003ENut-Free Chocolate Cookies with Soy Nut Butter\u003C/a\u003E.",
      "cuisines": [],
      "dishTypes": [
        "condiment",
        "dip",
        "spread"
      ],
      "diets": [
        "gluten free",
        "dairy free",
        "paleolithic",
        "lacto ovo vegetarian",
        "primal",
        "fodmap friendly",
        "vegan"
      ],
      "occasions": [],
      "instructions": "Preheat oven to 300 degrees and line a baking sheet with parchment paper.\nIn a large bowl, mix together the almonds and maple syrup . Spread out almond mixture onto baking sheet and bake for 15 minutes, stir and place back in oven for another 15 minutes.\nRemove from oven and allow the almonds to cool.\nIn food processor add almonds and process until you see it form into a ball.  (NOTE:  You will have to scrape down the sides a few times, like 10.)  Add you cinnamon and vanilla extract and then process until drippy.  The whole process takes about 10  15 minutes.   When your right at the end I add the chocolate and process until all melted in, about 1 more minute.\nMakes about 16 Tablespoons or a smidge over 1 cup\nCalories per Tablespoon:  92,  Fat:  7.4,  Sodium:  30,  Potassium:  3.3,  Carbs:  4.7,  Fiber:  1.7,  Sugar:  1.8,  Protein:  3.1",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Preheat oven to 300 degrees and line a baking sheet with parchment paper.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404770,
                  "name": "baking paper",
                  "localizedName": "baking paper",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/baking-paper.jpg"
                },
                {
                  "id": 404727,
                  "name": "baking sheet",
                  "localizedName": "baking sheet",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/baking-sheet.jpg"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "In a large bowl, mix together the almonds and maple syrup .",
              "ingredients": [
                {
                  "id": 19911,
                  "name": "maple syrup",
                  "localizedName": "maple syrup",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/maple-syrup.png"
                },
                {
                  "id": 12061,
                  "name": "almonds",
                  "localizedName": "almonds",
                  "image": "almonds.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 3,
              "step": "Spread out almond mixture onto baking sheet and bake for 15 minutes, stir and place back in oven for another 15 minutes.",
              "ingredients": [
                {
                  "id": 12061,
                  "name": "almonds",
                  "localizedName": "almonds",
                  "image": "almonds.jpg"
                },
                {
                  "id": 0,
                  "name": "spread",
                  "localizedName": "spread",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 404727,
                  "name": "baking sheet",
                  "localizedName": "baking sheet",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/baking-sheet.jpg"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ],
              "length": {
                "number": 30,
                "unit": "minutes"
              }
            },
            {
              "number": 4,
              "step": "Remove from oven and allow the almonds to cool.",
              "ingredients": [
                {
                  "id": 12061,
                  "name": "almonds",
                  "localizedName": "almonds",
                  "image": "almonds.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            },
            {
              "number": 5,
              "step": "In food processor add almonds and process until you see it form into a ball.  (NOTE:  You will have to scrape down the sides a few times, like 10.)",
              "ingredients": [
                {
                  "id": 12061,
                  "name": "almonds",
                  "localizedName": "almonds",
                  "image": "almonds.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404771,
                  "name": "food processor",
                  "localizedName": "food processor",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/food-processor.png"
                }
              ]
            },
            {
              "number": 6,
              "step": "Add you cinnamon and vanilla extract and then process until drippy.  The whole process takes about 10  15 minutes.   When your right at the end I add the chocolate and process until all melted in, about 1 more minute.",
              "ingredients": [
                {
                  "id": 2050,
                  "name": "vanilla extract",
                  "localizedName": "vanilla extract",
                  "image": "vanilla-extract.jpg"
                },
                {
                  "id": 19081,
                  "name": "chocolate",
                  "localizedName": "chocolate",
                  "image": "milk-chocolate.jpg"
                },
                {
                  "id": 2010,
                  "name": "cinnamon",
                  "localizedName": "cinnamon",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg"
                }
              ],
              "equipment": [],
              "length": {
                "number": 16,
                "unit": "minutes"
              }
            },
            {
              "number": 7,
              "step": "Makes about 16 Tablespoons or a smidge over 1 cup",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 8,
              "step": "Calories per Tablespoon:  92,  Fat:  7.4,  Sodium:  30,  Potassium:  3.3,  Carbs:  4.7,  Fiber:  1.7,  Sugar:  1.8,  Protein:  3.1",
              "ingredients": [
                {
                  "id": 19335,
                  "name": "sugar",
                  "localizedName": "sugar",
                  "image": "sugar-in-bowl.png"
                }
              ],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 51.3066520690918,
      "spoonacularSourceUrl": "https://spoonacular.com/almond-nut-butter-632155"
    },
    {
      "id": 635233,
      "image": "https://img.spoonacular.com/recipes/635233-556x370.jpg",
      "imageType": "jpg",
      "title": "Blackberry Pie Cobbler",
      "readyInMinutes": 45,
      "servings": 8,
      "sourceUrl": "https://www.foodista.com/recipe/WQ724SLW/blackberry-pie-cobbler",
      "vegetarian": false,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 17,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 3,
      "healthScore": 3,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 162.62,
      "extendedIngredients": [
        {
          "id": 18334,
          "aisle": "Refrigerated",
          "image": "pie-crust.jpg",
          "consistency": "SOLID",
          "name": "pie crusts",
          "nameClean": "pie crusts",
          "original": "3 refrigerated pie crusts",
          "originalName": "refrigerated pie crusts",
          "amount": 3,
          "unit": "",
          "meta": [
            "refrigerated"
          ],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 3,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 19335,
          "aisle": "Baking",
          "image": "sugar-in-bowl.png",
          "consistency": "SOLID",
          "name": "sugar",
          "nameClean": "sugar",
          "original": "1 cup Sugar",
          "originalName": "Sugar",
          "amount": 1,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 200,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 20081,
          "aisle": "Baking",
          "image": "flour.png",
          "consistency": "SOLID",
          "name": "flour",
          "nameClean": "flour",
          "original": "2 Tbs All-Purpose Flour",
          "originalName": "All-Purpose Flour",
          "amount": 2,
          "unit": "Tbs",
          "meta": [
            "all-purpose"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 2050,
          "aisle": "Baking",
          "image": "vanilla-extract.jpg",
          "consistency": "LIQUID",
          "name": "real vanilla extract",
          "nameClean": "real vanilla extract",
          "original": "2 tsp real vanilla extract",
          "originalName": "real vanilla extract",
          "amount": 2,
          "unit": "tsp",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 2,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 9042,
          "aisle": "Produce",
          "image": "blackberries.jpg",
          "consistency": "SOLID",
          "name": "blackberries - preferred - is ok too",
          "nameClean": "blackberries - preferred - is ok too",
          "original": "5 cups Blackberries – fresh preferred – frozen is ok too (about 1.5 lbs)",
          "originalName": "cups Blackberries – fresh preferred – frozen is ok too (about",
          "amount": 1.5,
          "unit": "lbs",
          "meta": [
            "fresh",
            "frozen"
          ],
          "measures": {
            "us": {
              "amount": 1.5,
              "unitShort": "lb",
              "unitLong": "pounds"
            },
            "metric": {
              "amount": 680.389,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1001,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "butter-sliced.jpg",
          "consistency": "SOLID",
          "name": "butter into pieces",
          "nameClean": "butter into pieces",
          "original": "2 Tbs cold butter chopped into small pieces",
          "originalName": "cold butter chopped into small pieces",
          "amount": 2,
          "unit": "Tbs",
          "meta": [
            "cold",
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 1123,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg.png",
          "consistency": "SOLID",
          "name": "egg",
          "nameClean": "egg",
          "original": "1 egg - beaten",
          "originalName": "egg - beaten",
          "amount": 1,
          "unit": "",
          "meta": [
            "beaten"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 19908,
          "aisle": "Baking",
          "image": "raw-brown-sugar.png",
          "consistency": "SOLID",
          "name": "sugar",
          "nameClean": "sugar",
          "original": "1 Tbs Raw Sugar",
          "originalName": "Raw Sugar",
          "amount": 1,
          "unit": "Tbs",
          "meta": [
            "raw"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        }
      ],
      "summary": "You can never have too many Southern recipes, so give Blackberry Pie Cobbler a try. This dessert has \u003Cb\u003E473 calories\u003C/b\u003E, \u003Cb\u003E6g of protein\u003C/b\u003E, and \u003Cb\u003E21g of fat\u003C/b\u003E per serving. This recipe serves 8 and costs $1.63 per serving. Head to the store and pick up pie crusts, real vanillan extract, butter into pieces, and a few other things to make it today. 3 people have made this recipe and would make it again. From preparation to the plate, this recipe takes around \u003Cb\u003E45 minutes\u003C/b\u003E. It is brought to you by Foodista. All things considered, we decided this recipe \u003Cb\u003Edeserves a spoonacular score of 34%\u003C/b\u003E. This score is not so tremendous. Similar recipes are \u003Ca href=\"https://spoonacular.com/recipes/blackberry-pie-cobbler-1624959\"\u003EBlackberry Pie Cobbler\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/blackberry-cobbler-1240803\"\u003EBlackberry Cobbler\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/blackberry-cobbler-1029389\"\u003EBlackberry Cobbler\u003C/a\u003E.",
      "cuisines": [
        "Southern"
      ],
      "dishTypes": [
        "dessert"
      ],
      "diets": [],
      "occasions": [],
      "instructions": "Preheat oven to 450. Unroll one pie crust onto a lightly floured surface and set your pie plate onto the crust. Using the pie plate as a pattern, cut around the bottom of the pie plate with a butter knife. (This will form the middle crust in your pie/cobbler). Place this circle onto a baking sheet lined with parchment paper, waxed paper or aluminum foil. Place this on the center rack of the oven and bake until the pastry is dry and lightly browned and developing small bubbles on the surface  about 10 minutes. Set this pie crust aside to cool.\nInto a pie plate, place one refrigerated pie crust and allow the extra to hang over the edges.\nUnroll the final pie crust onto a lightly floured surface and cut into 1  inch wide strips.\nIn a small bowl, combine the sugar and the flour and set aside. Stir the vanilla into a  Cup of water.\nScatter  of the blackberries into the the bottom pie crust that is in the pie plate. Sprinkle half of the sugar mix over the berries and half of the water mix over the berries. Scatter  of the butter chunks onto the berries as well.\nPlaced the prebaked pie crust on top of the berries and repeat step 5 above, scattering the remaining berries, sugar, water and butter.\nUsing the strips of cut pie crust, weave the top of the pie crust. Wetting your fingers with water, dampen the underside of each strip where it will attach to the bottom pie crust and pinch together. Going around the pie plate  crimp the bottom edge and top edge together. Using a pastry brush, brush the top of the pie with the beaten egg. Sprinkle with the Raw Sugar.\nPlace the pie on a baking sheet to catch any drips and place on the bottom rack of the oven. Bake for 10 minutes at 450 and then reduce heat to 350 for another 45 minutes or until the filling is juicy and bubbling up through the pastry strips. Place on a cooling rack or folded kitchen towel and let cool for at least 20 minutes. Serve warm or at room temperature.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Preheat oven to 45",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Unroll one pie crust onto a lightly floured surface and set your pie plate onto the crust. Using the pie plate as a pattern, cut around the bottom of the pie plate with a butter knife. (This will form the middle crust in your pie/cobbler).",
              "ingredients": [
                {
                  "id": 18334,
                  "name": "pie crust",
                  "localizedName": "pie crust",
                  "image": "pie-crust.jpg"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 0,
                  "name": "crust",
                  "localizedName": "crust",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 404725,
                  "name": "butter knife",
                  "localizedName": "butter knife",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/chefs-knife.jpg"
                }
              ]
            },
            {
              "number": 3,
              "step": "Place this circle onto a baking sheet lined with parchment paper, waxed paper or aluminum foil.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404770,
                  "name": "baking paper",
                  "localizedName": "baking paper",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/baking-paper.jpg"
                },
                {
                  "id": 404765,
                  "name": "aluminum foil",
                  "localizedName": "aluminum foil",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/aluminum-foil.png"
                },
                {
                  "id": 404727,
                  "name": "baking sheet",
                  "localizedName": "baking sheet",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/baking-sheet.jpg"
                }
              ]
            },
            {
              "number": 4,
              "step": "Place this on the center rack of the oven and bake until the pastry is dry and lightly browned and developing small bubbles on the surface  about 10 minutes. Set this pie crust aside to cool.",
              "ingredients": [
                {
                  "id": 18334,
                  "name": "pie crust",
                  "localizedName": "pie crust",
                  "image": "pie-crust.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ],
              "length": {
                "number": 10,
                "unit": "minutes"
              }
            },
            {
              "number": 5,
              "step": "Into a pie plate, place one refrigerated pie crust and allow the extra to hang over the edges.",
              "ingredients": [
                {
                  "id": 18334,
                  "name": "refrigerated pie crust",
                  "localizedName": "refrigerated pie crust",
                  "image": "pie-crust.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 6,
              "step": "Unroll the final pie crust onto a lightly floured surface and cut into 1  inch wide strips.",
              "ingredients": [
                {
                  "id": 18334,
                  "name": "pie crust",
                  "localizedName": "pie crust",
                  "image": "pie-crust.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 7,
              "step": "In a small bowl, combine the sugar and the flour and set aside. Stir the vanilla into a  Cup of water.",
              "ingredients": [
                {
                  "id": 1052050,
                  "name": "vanilla",
                  "localizedName": "vanilla",
                  "image": "vanilla.jpg"
                },
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "flour.png"
                },
                {
                  "id": 19335,
                  "name": "sugar",
                  "localizedName": "sugar",
                  "image": "sugar-in-bowl.png"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 8,
              "step": "Scatter  of the blackberries into the the bottom pie crust that is in the pie plate.",
              "ingredients": [
                {
                  "id": 9042,
                  "name": "blackberries",
                  "localizedName": "blackberries",
                  "image": "blackberries.jpg"
                },
                {
                  "id": 18334,
                  "name": "pie crust",
                  "localizedName": "pie crust",
                  "image": "pie-crust.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 9,
              "step": "Sprinkle half of the sugar mix over the berries and half of the water mix over the berries. Scatter  of the butter chunks onto the berries as well.",
              "ingredients": [
                {
                  "id": 1009054,
                  "name": "berries",
                  "localizedName": "berries",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/berries-mixed.jpg"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 19335,
                  "name": "sugar",
                  "localizedName": "sugar",
                  "image": "sugar-in-bowl.png"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 10,
              "step": "Placed the prebaked pie crust on top of the berries and repeat step 5 above, scattering the remaining berries, sugar, water and butter.",
              "ingredients": [
                {
                  "id": 18334,
                  "name": "pie crust",
                  "localizedName": "pie crust",
                  "image": "pie-crust.jpg"
                },
                {
                  "id": 1009054,
                  "name": "berries",
                  "localizedName": "berries",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/berries-mixed.jpg"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 19335,
                  "name": "sugar",
                  "localizedName": "sugar",
                  "image": "sugar-in-bowl.png"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 11,
              "step": "Using the strips of cut pie crust, weave the top of the pie crust. Wetting your fingers with water, dampen the underside of each strip where it will attach to the bottom pie crust and pinch together. Going around the pie plate  crimp the bottom edge and top edge together. Using a pastry brush, brush the top of the pie with the beaten egg.",
              "ingredients": [
                {
                  "id": 18334,
                  "name": "pie crust",
                  "localizedName": "pie crust",
                  "image": "pie-crust.jpg"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                },
                {
                  "id": 1123,
                  "name": "egg",
                  "localizedName": "egg",
                  "image": "egg.png"
                }
              ],
              "equipment": [
                {
                  "id": 404764,
                  "name": "pastry brush",
                  "localizedName": "pastry brush",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pastry-brush.jpg"
                }
              ]
            },
            {
              "number": 12,
              "step": "Sprinkle with the Raw Sugar.",
              "ingredients": [
                {
                  "id": 19908,
                  "name": "raw sugar",
                  "localizedName": "raw sugar",
                  "image": "raw-brown-sugar.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 13,
              "step": "Place the pie on a baking sheet to catch any drips and place on the bottom rack of the oven.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404727,
                  "name": "baking sheet",
                  "localizedName": "baking sheet",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/baking-sheet.jpg"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            },
            {
              "number": 14,
              "step": "Bake for 10 minutes at 450 and then reduce heat to 350 for another 45 minutes or until the filling is juicy and bubbling up through the pastry strips.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ],
              "length": {
                "number": 55,
                "unit": "minutes"
              }
            },
            {
              "number": 15,
              "step": "Place on a cooling rack or folded kitchen towel and let cool for at least 20 minutes.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 221439,
                  "name": "kitchen towels",
                  "localizedName": "kitchen towels",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/dish-towel.jpg"
                },
                {
                  "id": 405900,
                  "name": "wire rack",
                  "localizedName": "wire rack",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/wire-rack.jpg"
                }
              ],
              "length": {
                "number": 20,
                "unit": "minutes"
              }
            },
            {
              "number": 16,
              "step": "Serve warm or at room temperature.",
              "ingredients": [],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 38.3246231079102,
      "spoonacularSourceUrl": "https://spoonacular.com/blackberry-pie-cobbler-635233"
    },
    {
      "id": 639650,
      "image": "https://img.spoonacular.com/recipes/639650-556x370.jpg",
      "imageType": "jpg",
      "title": "Classy Poached Pear In Spicy Mango Nectar With Mango Ice Cream",
      "readyInMinutes": 45,
      "servings": 4,
      "sourceUrl": "https://www.foodista.com/recipe/Z2NPHJ53/classy-poached-pear-in-spicy-mango-nectar-with-mango-ice-cream",
      "vegetarian": true,
      "vegan": true,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 8,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 2,
      "healthScore": 2,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 87.94,
      "extendedIngredients": [
        {
          "id": 2010,
          "aisle": "Spices and Seasonings",
          "image": "cinnamon.jpg",
          "consistency": "SOLID",
          "name": "cinnamon",
          "nameClean": "cinnamon",
          "original": "1 pinch cinnamon",
          "originalName": "cinnamon",
          "amount": 1,
          "unit": "pinch",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "pinch",
              "unitLong": "pinch"
            },
            "metric": {
              "amount": 1,
              "unitShort": "pinch",
              "unitLong": "pinch"
            }
          }
        },
        {
          "id": 1019016,
          "aisle": "Beverages",
          "image": "apple-juice.jpg",
          "consistency": "LIQUID",
          "name": "juice",
          "nameClean": "juice",
          "original": "2 teaspoons juice",
          "originalName": "juice",
          "amount": 2,
          "unit": "teaspoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 2,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 9152,
          "aisle": "Produce",
          "image": "lemon-juice.jpg",
          "consistency": "LIQUID",
          "name": "lemon juice",
          "nameClean": "lemon juice",
          "original": "1 teaspoon Lemon Juice",
          "originalName": "Lemon Juice",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 93688,
          "aisle": "Ethnic Foods",
          "image": "mango.jpg",
          "consistency": "SOLID",
          "name": "mango pulp",
          "nameClean": "mango pulp",
          "original": "1/2 cup Mango pulp",
          "originalName": "Mango pulp",
          "amount": 0.5,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 118,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 2064,
          "aisle": "Produce",
          "image": "mint.jpg",
          "consistency": "SOLID",
          "name": "mint leaves",
          "nameClean": "mint leaves",
          "original": "2 Mint leaves",
          "originalName": "Mint leaves",
          "amount": 2,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 9216,
          "aisle": "Produce",
          "image": "orange-zest.png",
          "consistency": "SOLID",
          "name": "orange rind",
          "nameClean": "orange rind",
          "original": "1 teaspoon Orange Rind",
          "originalName": "Orange Rind",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 9252,
          "aisle": "Produce",
          "image": "pears-bosc.jpg",
          "consistency": "SOLID",
          "name": "pears",
          "nameClean": "pears",
          "original": "2 Pears",
          "originalName": "Pears",
          "amount": 2,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 2037,
          "aisle": "Gourmet",
          "image": "saffron.jpg",
          "consistency": "SOLID",
          "name": "saffron",
          "nameClean": "saffron",
          "original": "1 pinch saffron",
          "originalName": "saffron",
          "amount": 1,
          "unit": "pinch",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "pinch",
              "unitLong": "pinch"
            },
            "metric": {
              "amount": 1,
              "unitShort": "pinch",
              "unitLong": "pinch"
            }
          }
        },
        {
          "id": 90480,
          "aisle": "Alcoholic Beverages",
          "image": "simple-syrup.jpg",
          "consistency": "LIQUID",
          "name": "simple syrup",
          "nameClean": "simple syrup",
          "original": "1/2 cup simple Syrup",
          "originalName": "simple Syrup",
          "amount": 0.5,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 168.5,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        }
      ],
      "summary": "You can never have too many side dish recipes, so give Classy Poached Pear In Spicy Mango Nectar With Mango Ice Cream a try. This recipe serves 4 and costs 88 cents per serving. One serving contains \u003Cb\u003E195 calories\u003C/b\u003E, \u003Cb\u003E1g of protein\u003C/b\u003E, and \u003Cb\u003E0g of fat\u003C/b\u003E. This recipe from Foodista requires mint leaves, juice, simple syrup, and saffron. 2 people have tried and liked this recipe. From preparation to the plate, this recipe takes roughly \u003Cb\u003E45 minutes\u003C/b\u003E. It is a good option if you're following a \u003Cb\u003Egluten free, dairy free, lacto ovo vegetarian, and vegan\u003C/b\u003E diet. \u003Cb\u003ESummer\u003C/b\u003E will be even more special with this recipe. With a spoonacular \u003Cb\u003Escore of 25%\u003C/b\u003E, this dish is not so great. Similar recipes are \u003Ca href=\"https://spoonacular.com/recipes/classy-poached-pear-in-spicy-mango-nectar-with-mango-ice-cream-1576523\"\u003EClassy Poached Pear In Spicy Mango Nectar With Mango Ice Cream\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/mango-ice-cream-homemade-mango-ice-cream-600491\"\u003EMango Ice cream | homemade mango ice cream\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/mango-ice-cream-how-to-make-mango-ice-cream-487284\"\u003Emango ice cream , how to make mango ice cream\u003C/a\u003E.",
      "cuisines": [],
      "dishTypes": [
        "side dish"
      ],
      "diets": [
        "gluten free",
        "dairy free",
        "lacto ovo vegetarian",
        "vegan"
      ],
      "occasions": [
        "summer"
      ],
      "instructions": "\u003Col\u003E\u003Cli\u003EPeel the pears and slice a bit of the bottom of the pear, so to let it stand upright.\u003C/li\u003E\u003Cli\u003ELeave the stem intact to insert a mint sprig later, Gently dab some lemon juice over the pear and keep it aside.\u003C/li\u003E\u003Cli\u003EIn a medium pot make sugar syrup by adding half cup of sugar to one cup of water over medium heat. Let it thicken for a while.\u003C/li\u003E\u003Cli\u003EAdd mango pulp, fruit juice, orange rind with a dash of cinnamon to the sugar syrup.\u003C/li\u003E\u003Cli\u003EThe mango glaze is ready.\u003C/li\u003E\u003Cli\u003ESubmerge the peeled pears into the syrup and let it cook for 15 to 20 minutes on low heat, till the pears are tender and get the amber hue from the mango syrup.\u003C/li\u003E\u003Cli\u003EThe pears should be completely immersed in the syrup.\u003C/li\u003E\u003Cli\u003ELet the pears cool down.\u003C/li\u003E\u003Cli\u003ETake out the pears on a plate and garnish with either basil or mint leaf.\u003C/li\u003E\u003Cli\u003EI did it with mint from my pot. Drizzle some syrup over the top of the pear.\u003C/li\u003E\u003C/ol\u003E",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Peel the pears and slice a bit of the bottom of the pear, so to let it stand upright.Leave the stem intact to insert a mint sprig later, Gently dab some lemon juice over the pear and keep it aside.In a medium pot make sugar syrup by adding half cup of sugar to one cup of water over medium heat.",
              "ingredients": [
                {
                  "id": 9152,
                  "name": "lemon juice",
                  "localizedName": "lemon juice",
                  "image": "lemon-juice.jpg"
                },
                {
                  "id": 90480,
                  "name": "simple syrup",
                  "localizedName": "simple syrup",
                  "image": "simple-syrup.jpg"
                },
                {
                  "id": 9252,
                  "name": "pear",
                  "localizedName": "pear",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/pears-bosc.jpg"
                },
                {
                  "id": 19335,
                  "name": "sugar",
                  "localizedName": "sugar",
                  "image": "sugar-in-bowl.png"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                },
                {
                  "id": 2064,
                  "name": "mint",
                  "localizedName": "mint",
                  "image": "mint.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404752,
                  "name": "pot",
                  "localizedName": "pot",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Let it thicken for a while.",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 3,
              "step": "Add mango pulp, fruit juice, orange rind with a dash of cinnamon to the sugar syrup.The mango glaze is ready.Submerge the peeled pears into the syrup and let it cook for 15 to 20 minutes on low heat, till the pears are tender and get the amber hue from the mango syrup.The pears should be completely immersed in the syrup.",
              "ingredients": [
                {
                  "id": 1029016,
                  "name": "fruit juice",
                  "localizedName": "fruit juice",
                  "image": "apple-juice.jpg"
                },
                {
                  "id": 9216,
                  "name": "orange zest",
                  "localizedName": "orange zest",
                  "image": "orange-zest.png"
                },
                {
                  "id": 90480,
                  "name": "simple syrup",
                  "localizedName": "simple syrup",
                  "image": "simple-syrup.jpg"
                },
                {
                  "id": 93688,
                  "name": "mango pulp",
                  "localizedName": "mango pulp",
                  "image": "mango.jpg"
                },
                {
                  "id": 2010,
                  "name": "cinnamon",
                  "localizedName": "cinnamon",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg"
                },
                {
                  "id": 0,
                  "name": "glaze",
                  "localizedName": "glaze",
                  "image": ""
                },
                {
                  "id": 9176,
                  "name": "mango",
                  "localizedName": "mango",
                  "image": "mango.jpg"
                },
                {
                  "id": 9252,
                  "name": "pear",
                  "localizedName": "pear",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/pears-bosc.jpg"
                },
                {
                  "id": 0,
                  "name": "syrup",
                  "localizedName": "syrup",
                  "image": ""
                }
              ],
              "equipment": [],
              "length": {
                "number": 15,
                "unit": "minutes"
              }
            },
            {
              "number": 4,
              "step": "Let the pears cool down.Take out the pears on a plate and garnish with either basil or mint leaf.I did it with mint from my pot.",
              "ingredients": [
                {
                  "id": 2044,
                  "name": "basil",
                  "localizedName": "basil",
                  "image": "basil.jpg"
                },
                {
                  "id": 9252,
                  "name": "pear",
                  "localizedName": "pear",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/pears-bosc.jpg"
                },
                {
                  "id": 2064,
                  "name": "mint",
                  "localizedName": "mint",
                  "image": "mint.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404752,
                  "name": "pot",
                  "localizedName": "pot",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg"
                }
              ]
            },
            {
              "number": 5,
              "step": "Drizzle some syrup over the top of the pear.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "syrup",
                  "localizedName": "syrup",
                  "image": ""
                },
                {
                  "id": 9252,
                  "name": "pear",
                  "localizedName": "pear",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/pears-bosc.jpg"
                }
              ],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 33.8684158325195,
      "spoonacularSourceUrl": "https://spoonacular.com/classy-poached-pear-in-spicy-mango-nectar-with-mango-ice-cream-639650"
    },
    {
      "id": 642332,
      "image": "https://img.spoonacular.com/recipes/642332-556x370.jpg",
      "imageType": "jpg",
      "title": "Eggs Florentine",
      "readyInMinutes": 45,
      "servings": 4,
      "sourceUrl": "https://www.foodista.com/recipe/PNM2B3TH/eggs-florentine",
      "vegetarian": true,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 13,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 37,
      "healthScore": 23,
      "creditsText": "foodista.com",
      "license": null,
      "sourceName": "foodista.com",
      "pricePerServing": 212.11,
      "extendedIngredients": [
        {
          "id": 1001,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "butter-sliced.jpg",
          "consistency": "SOLID",
          "name": "butter",
          "nameClean": "butter",
          "original": "1/4 cup melted butter",
          "originalName": "melted butter",
          "amount": 0.25,
          "unit": "cup",
          "meta": [
            "melted"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 56.75,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 2031,
          "aisle": "Spices and Seasonings",
          "image": "chili-powder.jpg",
          "consistency": "SOLID",
          "name": "cayenne pepper",
          "nameClean": "cayenne pepper",
          "original": "cayenne pepper, taste",
          "originalName": "cayenne pepper, taste",
          "amount": 4,
          "unit": "servings",
          "meta": [],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 1123,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg.png",
          "consistency": "SOLID",
          "name": "eggs",
          "nameClean": "eggs",
          "original": "11 eggs",
          "originalName": "eggs",
          "amount": 11,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 11,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 11,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 18439,
          "aisle": "Bakery/Bread",
          "image": "English-muffins.jpg",
          "consistency": "SOLID",
          "name": "muffins",
          "nameClean": "muffins",
          "original": "4 English muffins, toasted",
          "originalName": "English muffins, toasted",
          "amount": 4,
          "unit": "",
          "meta": [
            "english",
            "toasted"
          ],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 4,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 1082047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "kosher salt",
          "nameClean": "kosher salt",
          "original": "Kosher salt, to taste",
          "originalName": "Kosher salt, to taste",
          "amount": 4,
          "unit": "servings",
          "meta": [
            "to taste"
          ],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 9152,
          "aisle": "Produce",
          "image": "lemon-juice.jpg",
          "consistency": "LIQUID",
          "name": "lemon juice",
          "nameClean": "lemon juice",
          "original": "2 Tablespoons lemon juice",
          "originalName": "lemon juice",
          "amount": 2,
          "unit": "Tablespoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 10011457,
          "aisle": "Produce",
          "image": "spinach.jpg",
          "consistency": "SOLID",
          "name": "spinach",
          "nameClean": "spinach",
          "original": "10 ounces spinach, sauteed",
          "originalName": "spinach, sauteed",
          "amount": 10,
          "unit": "ounces",
          "meta": [],
          "measures": {
            "us": {
              "amount": 10,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 283.495,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 14412,
          "aisle": "Beverages",
          "image": "water.png",
          "consistency": "LIQUID",
          "name": "water",
          "nameClean": "water",
          "original": "4 Tablespoons Hot water",
          "originalName": "Hot water",
          "amount": 4,
          "unit": "Tablespoons",
          "meta": [
            "hot"
          ],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 4,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        }
      ],
      "summary": "Eggs Florentine might be a good recipe to expand your main course collection. This recipe makes 4 servings with \u003Cb\u003E433 calories\u003C/b\u003E, \u003Cb\u003E22g of protein\u003C/b\u003E, and \u003Cb\u003E25g of fat\u003C/b\u003E each. For \u003Cb\u003E$2.12 per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 31%\u003C/b\u003E of your daily requirements of vitamins and minerals. Head to the store and pick up water, cayenne pepper, spinach, and a few other things to make it today. This recipe from Foodista has 37 fans. From preparation to the plate, this recipe takes approximately \u003Cb\u003E45 minutes\u003C/b\u003E. It is a good option if you're following a \u003Cb\u003Elacto ovo vegetarian\u003C/b\u003E diet. Taking all factors into account, this recipe \u003Cb\u003Eearns a spoonacular score of 83%\u003C/b\u003E, which is super. Similar recipes include \u003Ca href=\"https://spoonacular.com/recipes/eggs-florentine-78314\"\u003EEggs Florentine\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/eggs-florentine-1219131\"\u003EEggs Florentine\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/eggs-florentine-1372597\"\u003EEggs Florentine\u003C/a\u003E.",
      "cuisines": [],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "lacto ovo vegetarian"
      ],
      "occasions": [],
      "instructions": "\u003Col\u003E\u003Cli\u003ESaute spinach in a saute pan\u003C/li\u003E\u003Cli\u003EPoach 8 eggs and toast muffins. Top each muffin with spinach, then a poached egg.\u003C/li\u003E\u003Cli\u003ETo make the hollandaise sauce, melt the butter and keep it warm, but not hot. Heat the lemon juice until just warmed. Have small saucepan with boiling water and a measuring tablespoon ready.\u003C/li\u003E\u003Cli\u003EPlace the top of a double boiler over hot water. Place 3 egg yolks in the top of a double boiler and whisk until they begin to thicken. Now add 1 tablespoon of the boiling water. Continue to beat the sauce until it begins to thicken. Repeat with the remaining water, one tablespoon at a time, beating the mixture after each addition.\u003C/li\u003E\u003Cli\u003ENow add the warmed lemon juice. Remove the double boiler from the heat. Beat the sauce briskly with a wire whisk. Continue to beat the mixture as you slowly pour in the melted butter. Add the salt and cayenne and beat the sauce until it is thick. Serve immediately.\u003C/li\u003E\u003C/ol\u003E",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Saute spinach in a saute pan",
              "ingredients": [
                {
                  "id": 10011457,
                  "name": "spinach",
                  "localizedName": "spinach",
                  "image": "spinach.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 2,
              "step": "Poach 8 eggs and toast muffins. Top each muffin with spinach, then a poached egg.To make the hollandaise sauce, melt the butter and keep it warm, but not hot.",
              "ingredients": [
                {
                  "id": 93801,
                  "name": "hollandaise sauce",
                  "localizedName": "hollandaise sauce",
                  "image": "hollandaise-sauce.jpg"
                },
                {
                  "id": 1131,
                  "name": "poached egg",
                  "localizedName": "poached egg",
                  "image": "poached-egg.png"
                },
                {
                  "id": 10011457,
                  "name": "spinach",
                  "localizedName": "spinach",
                  "image": "spinach.jpg"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 0,
                  "name": "sandwich bread",
                  "localizedName": "sandwich bread",
                  "image": "white-bread.jpg"
                },
                {
                  "id": 1123,
                  "name": "egg",
                  "localizedName": "egg",
                  "image": "egg.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 3,
              "step": "Heat the lemon juice until just warmed. Have small saucepan with boiling water and a measuring tablespoon ready.",
              "ingredients": [
                {
                  "id": 9152,
                  "name": "lemon juice",
                  "localizedName": "lemon juice",
                  "image": "lemon-juice.jpg"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }
              ],
              "equipment": [
                {
                  "id": 404669,
                  "name": "sauce pan",
                  "localizedName": "sauce pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/sauce-pan.jpg"
                }
              ]
            },
            {
              "number": 4,
              "step": "Place the top of a double boiler over hot water.",
              "ingredients": [
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }
              ],
              "equipment": [
                {
                  "id": 404699,
                  "name": "double boiler",
                  "localizedName": "double boiler",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/double-boiler.jpg"
                }
              ]
            },
            {
              "number": 5,
              "step": "Place 3 egg yolks in the top of a double boiler and whisk until they begin to thicken. Now add 1 tablespoon of the boiling water. Continue to beat the sauce until it begins to thicken. Repeat with the remaining water, one tablespoon at a time, beating the mixture after each addition.Now add the warmed lemon juice.",
              "ingredients": [
                {
                  "id": 9152,
                  "name": "lemon juice",
                  "localizedName": "lemon juice",
                  "image": "lemon-juice.jpg"
                },
                {
                  "id": 1125,
                  "name": "egg yolk",
                  "localizedName": "egg yolk",
                  "image": "egg-yolk.jpg"
                },
                {
                  "id": 0,
                  "name": "sauce",
                  "localizedName": "sauce",
                  "image": ""
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }
              ],
              "equipment": [
                {
                  "id": 404699,
                  "name": "double boiler",
                  "localizedName": "double boiler",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/double-boiler.jpg"
                },
                {
                  "id": 404661,
                  "name": "whisk",
                  "localizedName": "whisk",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                }
              ]
            },
            {
              "number": 6,
              "step": "Remove the double boiler from the heat. Beat the sauce briskly with a wire whisk. Continue to beat the mixture as you slowly pour in the melted butter.",
              "ingredients": [
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 0,
                  "name": "sauce",
                  "localizedName": "sauce",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 404699,
                  "name": "double boiler",
                  "localizedName": "double boiler",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/double-boiler.jpg"
                },
                {
                  "id": 404661,
                  "name": "whisk",
                  "localizedName": "whisk",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                }
              ]
            },
            {
              "number": 7,
              "step": "Add the salt and cayenne and beat the sauce until it is thick.",
              "ingredients": [
                {
                  "id": 2031,
                  "name": "ground cayenne pepper",
                  "localizedName": "ground cayenne pepper",
                  "image": "chili-powder.jpg"
                },
                {
                  "id": 0,
                  "name": "sauce",
                  "localizedName": "sauce",
                  "image": ""
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 8,
              "step": "Serve immediately.",
              "ingredients": [],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 84.6209106445313,
      "spoonacularSourceUrl": "https://spoonacular.com/eggs-florentine-642332"
    },
    {
      "id": 650858,
      "image": "https://img.spoonacular.com/recipes/650858-556x370.jpg",
      "imageType": "jpg",
      "title": "Mangolicious Upside Down Cake",
      "readyInMinutes": 45,
      "servings": 12,
      "sourceUrl": "http://www.foodista.com/recipe/8H3JJ2WH/mangolicious-upside-cake",
      "vegetarian": true,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 12,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 67,
      "healthScore": 1,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 77.21,
      "extendedIngredients": [
        {
          "id": 18369,
          "aisle": "Baking",
          "image": "white-powder.jpg",
          "consistency": "SOLID",
          "name": "baking powder",
          "nameClean": "baking powder",
          "original": "1 teaspoon baking powder",
          "originalName": "baking powder",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 19334,
          "aisle": "Baking",
          "image": "light-brown-sugar.jpg",
          "consistency": "SOLID",
          "name": "brown sugar",
          "nameClean": "brown sugar",
          "original": "2/3 cup Brown Sugar, firmly packed",
          "originalName": "Brown Sugar, firmly packed",
          "amount": 0.6666667,
          "unit": "cup",
          "meta": [
            "packed"
          ],
          "measures": {
            "us": {
              "amount": 0.6666667,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 146.667,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1001,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "butter-sliced.jpg",
          "consistency": "SOLID",
          "name": "butter",
          "nameClean": "butter",
          "original": "1/4 cup butter (½ stick), melted",
          "originalName": "butter (½ stick), melted",
          "amount": 0.25,
          "unit": "cup",
          "meta": [
            "melted",
            "()"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 56.75,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1001,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "butter-sliced.jpg",
          "consistency": "SOLID",
          "name": "butter",
          "nameClean": "butter",
          "original": "1/2 cup butter (1 stick), softened",
          "originalName": "butter (1 stick), softened",
          "amount": 0.5,
          "unit": "cup",
          "meta": [
            "softened",
            "(1 stick)"
          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 113.5,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 2010,
          "aisle": "Spices and Seasonings",
          "image": "cinnamon.jpg",
          "consistency": "SOLID",
          "name": "￼ cinnamon",
          "nameClean": "￼ cinnamon",
          "original": "1/2 tsp￼ Cinnamon",
          "originalName": "￼ Cinnamon",
          "amount": 0.5,
          "unit": "tsp",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 1123,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg.png",
          "consistency": "SOLID",
          "name": "eggs",
          "nameClean": "eggs",
          "original": "2 eggs, large",
          "originalName": "eggs, large",
          "amount": 2,
          "unit": "large",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "large",
              "unitLong": "larges"
            },
            "metric": {
              "amount": 2,
              "unitShort": "large",
              "unitLong": "larges"
            }
          }
        },
        {
          "id": 20081,
          "aisle": "Baking",
          "image": "flour.png",
          "consistency": "SOLID",
          "name": "flour",
          "nameClean": "flour",
          "original": "1 1/3 cups all-purpose flour",
          "originalName": "all-purpose flour",
          "amount": 1.3333334,
          "unit": "cups",
          "meta": [
            "all-purpose"
          ],
          "measures": {
            "us": {
              "amount": 1.3333334,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 166.667,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 10719335,
          "aisle": "Baking",
          "image": "sugar-in-bowl.png",
          "consistency": "SOLID",
          "name": "granulated sugar",
          "nameClean": "granulated sugar",
          "original": "2/3 cup Granulated Sugar",
          "originalName": "Granulated Sugar",
          "amount": 0.6666667,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.6666667,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 133.333,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 9176,
          "aisle": "Produce",
          "image": "mango.jpg",
          "consistency": "SOLID",
          "name": "mangos",
          "nameClean": "mangos",
          "original": "4 mangos, peeled, pitted and sliced; divided",
          "originalName": "mangos, peeled, pitted and sliced; divided",
          "amount": 4,
          "unit": "",
          "meta": [
            "divided",
            "pitted",
            "peeled",
            "sliced"
          ],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 4,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 2047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "salt",
          "nameClean": "salt",
          "original": "1/2 teaspoon salt",
          "originalName": "salt",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 1052050,
          "aisle": "Baking",
          "image": "vanilla.jpg",
          "consistency": "SOLID",
          "name": "vanilla",
          "nameClean": "vanilla",
          "original": "1 teaspoon vanilla",
          "originalName": "vanilla",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        }
      ],
      "summary": "Need a \u003Cb\u003Elacto ovo vegetarian dessert\u003C/b\u003E? Mangolicious Upside Down Cake could be a spectacular recipe to try. This recipe makes 12 servings with \u003Cb\u003E296 calories\u003C/b\u003E, \u003Cb\u003E3g of protein\u003C/b\u003E, and \u003Cb\u003E13g of fat\u003C/b\u003E each. For \u003Cb\u003E77 cents per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 7%\u003C/b\u003E of your daily requirements of vitamins and minerals. 67 people found this recipe to be yummy and satisfying. From preparation to the plate, this recipe takes approximately \u003Cb\u003E45 minutes\u003C/b\u003E. It is brought to you by Foodista. Head to the store and pick up butter, salt, butter, and a few other things to make it today. With a spoonacular \u003Cb\u003Escore of 29%\u003C/b\u003E, this dish is not so super. Similar recipes include \u003Ca href=\"https://spoonacular.com/recipes/mangolicious-shake-471950\"\u003EMangolicious Shake\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/eggless-apple-upside-down-cake-apple-upside-down-cake-488474\"\u003Eeggless apple upside down cake | apple upside down cake\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/blueberry-skillet-cake-a-berry-licious-upside-down-cake-496632\"\u003EBlueberry Skillet Cake (a Berry-licious Upside-Down Cake)\u003C/a\u003E.",
      "cuisines": [],
      "dishTypes": [
        "dessert"
      ],
      "diets": [
        "lacto ovo vegetarian"
      ],
      "occasions": [],
      "instructions": "\u003Col\u003E\u003Cli\u003EPreheat oven to 350F.\u003C/li\u003E\u003Cli\u003EButter 9x2-inch round cake pan.\u003C/li\u003E\u003Cli\u003EPat slices of mango dry with paper towels.\u003C/li\u003E\u003Cli\u003EIn small bowl, stir together butter and brown sugar and spread evenly in pan. Arrange mango pieces from two mangos on the sugar mixture.\u003C/li\u003E\u003Cli\u003EReserve the rest for mango puree and set aside.\u003C/li\u003E\u003Cli\u003EIn food processor, puree remaining mangos to make  cup.\u003C/li\u003E\u003Cli\u003EInto small bowl sift together the flour, baking powder, salt and cinnamon.\u003C/li\u003E\u003Cli\u003EIn another bowl with electric mixer, cream butter and sugar until mixture is light and fluffy.\u003C/li\u003E\u003Cli\u003EAdd eggs, one at a time, beating well after each addition.\u003C/li\u003E\u003Cli\u003EBeat in vanilla.\u003C/li\u003E\u003Cli\u003EAdd flour mixture alternately in batches with pureed mangos.\u003C/li\u003E\u003Cli\u003EBeginning and ending with flour mixture and beating well after each addition. Pour batter into pan, spreading evenly.\u003C/li\u003E\u003Cli\u003EBake cake in middle of oven for 45 to 55 minutes, or until it tests done.\u003C/li\u003E\u003Cli\u003ELet cake cool in the pan on a rack for 15 minutes.\u003C/li\u003E\u003Cli\u003ERun a thin knife around the edge and invert onto a platter.\u003C/li\u003E\u003C/ol\u003E",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Preheat oven to 350F.Butter 9x2-inch round cake pan.Pat slices of mango dry with paper towels.In small bowl, stir together butter and brown sugar and spread evenly in pan. Arrange mango pieces from two mangos on the sugar mixture.Reserve the rest for mango puree and set aside.In food processor, puree remaining mangos to make  cup.Into small bowl sift together the flour, baking powder, salt and cinnamon.In another bowl with electric mixer, cream butter and sugar until mixture is light and fluffy.",
              "ingredients": [
                {
                  "id": 18369,
                  "name": "baking powder",
                  "localizedName": "baking powder",
                  "image": "white-powder.jpg"
                },
                {
                  "id": 19334,
                  "name": "brown sugar",
                  "localizedName": "brown sugar",
                  "image": "dark-brown-sugar.png"
                },
                {
                  "id": 1009176,
                  "name": "mango puree",
                  "localizedName": "mango puree",
                  "image": "mango-puree.png"
                },
                {
                  "id": 2010,
                  "name": "cinnamon",
                  "localizedName": "cinnamon",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 9176,
                  "name": "mango",
                  "localizedName": "mango",
                  "image": "mango.jpg"
                },
                {
                  "id": 0,
                  "name": "spread",
                  "localizedName": "spread",
                  "image": ""
                },
                {
                  "id": 1053,
                  "name": "cream",
                  "localizedName": "cream",
                  "image": "fluid-cream.jpg"
                },
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "flour.png"
                },
                {
                  "id": 19335,
                  "name": "sugar",
                  "localizedName": "sugar",
                  "image": "sugar-in-bowl.png"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404628,
                  "name": "hand mixer",
                  "localizedName": "hand mixer",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/hand-mixer.png"
                },
                {
                  "id": 404771,
                  "name": "food processor",
                  "localizedName": "food processor",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/food-processor.png"
                },
                {
                  "id": 405895,
                  "name": "paper towels",
                  "localizedName": "paper towels",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/paper-towels.jpg"
                },
                {
                  "id": 404747,
                  "name": "cake form",
                  "localizedName": "cake form",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/cake-pan.png"
                },
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                  "temperature": {
                    "number": 350,
                    "unit": "Fahrenheit"
                  }
                }
              ]
            },
            {
              "number": 2,
              "step": "Add eggs, one at a time, beating well after each addition.Beat in vanilla.",
              "ingredients": [
                {
                  "id": 1052050,
                  "name": "vanilla",
                  "localizedName": "vanilla",
                  "image": "vanilla.jpg"
                },
                {
                  "id": 1123,
                  "name": "egg",
                  "localizedName": "egg",
                  "image": "egg.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 3,
              "step": "Add flour mixture alternately in batches with pureed mangos.Beginning and ending with flour mixture and beating well after each addition.",
              "ingredients": [
                {
                  "id": 9176,
                  "name": "mango",
                  "localizedName": "mango",
                  "image": "mango.jpg"
                },
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "flour.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 4,
              "step": "Pour batter into pan, spreading evenly.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 5,
              "step": "Bake cake in middle of oven for 45 to 55 minutes, or until it tests done.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ],
              "length": {
                "number": 45,
                "unit": "minutes"
              }
            },
            {
              "number": 6,
              "step": "Let cake cool in the pan on a rack for 15 minutes.Run a thin knife around the edge and invert onto a platter.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404745,
                  "name": "knife",
                  "localizedName": "knife",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/chefs-knife.jpg"
                },
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ],
              "length": {
                "number": 15,
                "unit": "minutes"
              }
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 33.105167388916,
      "spoonacularSourceUrl": "https://spoonacular.com/mangolicious-upside-down-cake-650858"
    },
    {
      "id": 642678,
      "image": "https://img.spoonacular.com/recipes/642678-556x370.jpg",
      "imageType": "jpg",
      "title": "Ferrero Raffaello Coconut Candy Balls",
      "readyInMinutes": 45,
      "servings": 24,
      "sourceUrl": "https://www.foodista.com/recipe/NPS36DFZ/ferrero-raffaello-coconut-candy-balls",
      "vegetarian": true,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 7,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 3,
      "healthScore": 0,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 23.94,
      "extendedIngredients": [
        {
          "id": 10018617,
          "aisle": "Sweet Snacks",
          "image": "graham-crackers.jpg",
          "consistency": "SOLID",
          "name": "graham cracker crumbs",
          "nameClean": "graham cracker crumbs",
          "original": "1 1/2 cups Graham Cracker Crumbs",
          "originalName": "Graham Cracker Crumbs",
          "amount": 1.5,
          "unit": "cups",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 126,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 10012108,
          "aisle": "Baking",
          "image": "shredded-coconut.jpg",
          "consistency": "SOLID",
          "name": "coconut flakes",
          "nameClean": "coconut flakes",
          "original": "2/3 cup unsweetened finely shredded coconut flakes",
          "originalName": "unsweetened finely shredded coconut flakes",
          "amount": 0.6666667,
          "unit": "cup",
          "meta": [
            "shredded",
            "unsweetened",
            "finely"
          ],
          "measures": {
            "us": {
              "amount": 0.6666667,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 62,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 12120,
          "aisle": "Baking",
          "image": "hazelnuts.jpg",
          "consistency": "SOLID",
          "name": "hazelnuts",
          "nameClean": "hazelnuts",
          "original": "3/4 cup chopped hazelnuts or almonds (I prefer the hazelnuts)",
          "originalName": "chopped hazelnuts or almonds (I prefer the hazelnuts)",
          "amount": 0.75,
          "unit": "cup",
          "meta": [
            "chopped",
            "(I prefer the hazelnuts)"
          ],
          "measures": {
            "us": {
              "amount": 0.75,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 90,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 19336,
          "aisle": "Baking",
          "image": "powdered-sugar.jpg",
          "consistency": "SOLID",
          "name": "powdered sugar",
          "nameClean": "powdered sugar",
          "original": "1 cup powdered sugar",
          "originalName": "powdered sugar",
          "amount": 1,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 120,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1077,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "milk.png",
          "consistency": "LIQUID",
          "name": "milk",
          "nameClean": "milk",
          "original": "1/4 cup of milk",
          "originalName": "milk",
          "amount": 0.25,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 61,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 1001,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "butter-sliced.jpg",
          "consistency": "SOLID",
          "name": "butter",
          "nameClean": "butter",
          "original": "2 tablespoons of butter, melted",
          "originalName": "butter, melted",
          "amount": 2,
          "unit": "tablespoons",
          "meta": [
            "melted"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 12108,
          "aisle": "Baking",
          "image": "shredded-coconut.jpg",
          "consistency": "SOLID",
          "name": "coconut flakes",
          "nameClean": "coconut flakes",
          "original": "finely shredded coconut flakes to cover the cookie ball",
          "originalName": "finely shredded coconut flakes to cover the cookie ball",
          "amount": 24,
          "unit": "servings",
          "meta": [
            "shredded",
            "to cover the cookie ball",
            "finely"
          ],
          "measures": {
            "us": {
              "amount": 24,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 24,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        }
      ],
      "summary": "Ferrero Raffaello Coconut Candy Balls is a \u003Cb\u003Elacto ovo vegetarian\u003C/b\u003E hor d'oeuvre. This recipe serves 24 and costs 24 cents per serving. One serving contains \u003Cb\u003E158 calories\u003C/b\u003E, \u003Cb\u003E2g of protein\u003C/b\u003E, and \u003Cb\u003E12g of fat\u003C/b\u003E. 3 people have made this recipe and would make it again. From preparation to the plate, this recipe takes approximately \u003Cb\u003E45 minutes\u003C/b\u003E. This recipe from Foodista requires milk, coconut flakes, butter, and powdered sugar. Taking all factors into account, this recipe \u003Cb\u003Eearns a spoonacular score of 12%\u003C/b\u003E, which is rather bad. Similar recipes are \u003Ca href=\"https://spoonacular.com/recipes/ferrero-raffaello-candy-511554\"\u003EFerrero Raffaello Candy\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/ferrero-raffaello-cake-511333\"\u003EFerrero Raffaello Cake\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/ferrero-rocher-bliss-balls-with-thermomix-instructions-961208\"\u003EFerrero Rocher Bliss Balls with Thermomix Instructions\u003C/a\u003E.",
      "cuisines": [],
      "dishTypes": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ],
      "diets": [
        "lacto ovo vegetarian"
      ],
      "occasions": [],
      "instructions": "In a large mixing bowl thoroughly combine the graham cracker crumbs, coconut flakes, hazelnuts and powdered sugar.\nStir the milk and melted butter into the dry mixture, and mix until everything is well combined.\nCover and chill for one hour.\nShape small bits of the dough into balls and roll them in the coconut flakes.\nPut the cookie balls in the refrigerator for at least 2 hours before serving.\nYou can also store these for a few days in the refrigerator in tightly covered containers.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "In a large mixing bowl thoroughly combine the graham cracker crumbs, coconut flakes, hazelnuts and powdered sugar.",
              "ingredients": [
                {
                  "id": 10018617,
                  "name": "graham cracker crumbs",
                  "localizedName": "graham cracker crumbs",
                  "image": "graham-crackers.jpg"
                },
                {
                  "id": 12108,
                  "name": "coconut flakes",
                  "localizedName": "coconut flakes",
                  "image": "coconut-flakes.png"
                },
                {
                  "id": 19336,
                  "name": "powdered sugar",
                  "localizedName": "powdered sugar",
                  "image": "powdered-sugar.jpg"
                },
                {
                  "id": 12120,
                  "name": "hazelnuts",
                  "localizedName": "hazelnuts",
                  "image": "hazelnuts.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 405907,
                  "name": "mixing bowl",
                  "localizedName": "mixing bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/mixing-bowl.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Stir the milk and melted butter into the dry mixture, and mix until everything is well combined.",
              "ingredients": [
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 1077,
                  "name": "milk",
                  "localizedName": "milk",
                  "image": "milk.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 3,
              "step": "Cover and chill for one hour.",
              "ingredients": [],
              "equipment": [],
              "length": {
                "number": 60,
                "unit": "minutes"
              }
            },
            {
              "number": 4,
              "step": "Shape small bits of the dough into balls and roll them in the coconut flakes.",
              "ingredients": [
                {
                  "id": 12108,
                  "name": "coconut flakes",
                  "localizedName": "coconut flakes",
                  "image": "coconut-flakes.png"
                },
                {
                  "id": 0,
                  "name": "dough",
                  "localizedName": "dough",
                  "image": "pizza-dough"
                },
                {
                  "id": 0,
                  "name": "roll",
                  "localizedName": "roll",
                  "image": "dinner-yeast-rolls.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 5,
              "step": "Put the cookie balls in the refrigerator for at least 2 hours before serving.",
              "ingredients": [
                {
                  "id": 10118192,
                  "name": "cookies",
                  "localizedName": "cookies",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/shortbread-cookies.jpg"
                }
              ],
              "equipment": [],
              "length": {
                "number": 120,
                "unit": "minutes"
              }
            },
            {
              "number": 6,
              "step": "You can also store these for a few days in the refrigerator in tightly covered containers.",
              "ingredients": [],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 11.6475515365601,
      "spoonacularSourceUrl": "https://spoonacular.com/ferrero-raffaello-coconut-candy-balls-642678"
    },
    {
      "id": 644813,
      "image": "https://img.spoonacular.com/recipes/644813-556x370.jpg",
      "imageType": "jpg",
      "title": "Gluten Free Coconut Chicken Salad",
      "readyInMinutes": 45,
      "servings": 5,
      "sourceUrl": "https://www.foodista.com/recipe/Y27WDZ62/gluten-free-coconut-chicken-salad",
      "vegetarian": false,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 31,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 3,
      "healthScore": 21,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 362.9,
      "extendedIngredients": [
        {
          "id": 1015062,
          "aisle": "Meat",
          "image": "chicken-tenders-or-fingers.png",
          "consistency": "SOLID",
          "name": "chicken tenderloins",
          "nameClean": "chicken tenderloins",
          "original": "1 1/2 pounds Boneless, Skinless Chicken Tenderloins",
          "originalName": "Boneless, Skinless Chicken Tenderloins",
          "amount": 1.5,
          "unit": "pounds",
          "meta": [
            "boneless",
            "skinless"
          ],
          "measures": {
            "us": {
              "amount": 1.5,
              "unitShort": "lb",
              "unitLong": "pounds"
            },
            "metric": {
              "amount": 680.389,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1123,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg.png",
          "consistency": "SOLID",
          "name": "egg",
          "nameClean": "egg",
          "original": "1 whole Egg",
          "originalName": "whole Egg",
          "amount": 1,
          "unit": "",
          "meta": [
            "whole"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 2047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "salt",
          "nameClean": "salt",
          "original": "1/2 teaspoon Salt",
          "originalName": "Salt",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 14412,
          "aisle": "Beverages",
          "image": "water.png",
          "consistency": "LIQUID",
          "name": "water",
          "nameClean": "water",
          "original": "1 teaspoon Water",
          "originalName": "Water",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 12109,
          "aisle": "Baking",
          "image": "coconut-flakes.png",
          "consistency": "SOLID",
          "name": "coconut flakes",
          "nameClean": "coconut flakes",
          "original": "2 cups Sweetened Coconut Flakes",
          "originalName": "Sweetened Coconut Flakes",
          "amount": 2,
          "unit": "cups",
          "meta": [
            "sweetened"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 170,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 10011282,
          "aisle": "Produce",
          "image": "red-onion.png",
          "consistency": "SOLID",
          "name": "onion",
          "nameClean": "onion",
          "original": "1 whole Red Onion, Chopped",
          "originalName": "whole Red Onion, Chopped",
          "amount": 1,
          "unit": "",
          "meta": [
            "whole",
            "red",
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 12087,
          "aisle": "Nuts",
          "image": "cashews.jpg",
          "consistency": "SOLID",
          "name": "cashews",
          "nameClean": "cashews",
          "original": "1 cup Cashews",
          "originalName": "Cashews",
          "amount": 1,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 129,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 11252,
          "aisle": "Produce",
          "image": "iceberg-lettuce.jpg",
          "consistency": "SOLID",
          "name": "weight lettuce",
          "nameClean": "weight lettuce",
          "original": "5 ounces weight Lettuce Chopped",
          "originalName": "weight Lettuce Chopped",
          "amount": 5,
          "unit": "ounces",
          "meta": [
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 5,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 141.748,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 10711529,
          "aisle": "Produce",
          "image": "tomato.png",
          "consistency": "SOLID",
          "name": "tomatoes",
          "nameClean": "tomatoes",
          "original": "2 whole Tomatoes, Chopped",
          "originalName": "whole Tomatoes, Chopped",
          "amount": 2,
          "unit": "",
          "meta": [
            "whole",
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 1034053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "olive-oil.jpg",
          "consistency": "LIQUID",
          "name": "extra virgin olive oil",
          "nameClean": "extra virgin olive oil",
          "original": "2 tablespoons Extra Virgin Olive Oil",
          "originalName": "Extra Virgin Olive Oil",
          "amount": 2,
          "unit": "tablespoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 98975,
          "aisle": "Condiments",
          "image": "mayonnaise.png",
          "consistency": "LIQUID",
          "name": "veganaise",
          "nameClean": "veganaise",
          "original": "3/4 cup Veganaise (vegan Mayo)",
          "originalName": "Veganaise (vegan Mayo)",
          "amount": 0.75,
          "unit": "cup",
          "meta": [
            "(vegan Mayo)"
          ],
          "measures": {
            "us": {
              "amount": 0.75,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 168,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 19912,
          "aisle": "Ethnic Foods",
          "image": "agave.png",
          "consistency": "LIQUID",
          "name": "agave nectar",
          "nameClean": "agave nectar",
          "original": "3/4 cup Agave Nectar (or Honey)",
          "originalName": "Agave Nectar (or Honey)",
          "amount": 0.75,
          "unit": "cup",
          "meta": [
            "(or Honey)"
          ],
          "measures": {
            "us": {
              "amount": 0.75,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 165,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 1042046,
          "aisle": "Condiments",
          "image": "regular-mustard.jpg",
          "consistency": "LIQUID",
          "name": "mustard",
          "nameClean": "mustard",
          "original": "2 tablespoons Prepared Yellow Mustard",
          "originalName": "Prepared Yellow Mustard",
          "amount": 2,
          "unit": "tablespoons",
          "meta": [
            "yellow",
            "prepared"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 2033,
          "aisle": "Baking",
          "image": "poppyseed.png",
          "consistency": "SOLID",
          "name": "poppy seeds",
          "nameClean": "poppy seeds",
          "original": "1 tablespoon Poppy Seeds",
          "originalName": "Poppy Seeds",
          "amount": 1,
          "unit": "tablespoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 6971,
          "aisle": "Condiments",
          "image": "dark-sauce.jpg",
          "consistency": "LIQUID",
          "name": "worcestershire sauce",
          "nameClean": "worcestershire sauce",
          "original": "1 dash Worcestershire Sauce (optional)",
          "originalName": "Worcestershire Sauce (optional)",
          "amount": 1,
          "unit": "dash",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "dash",
              "unitLong": "dash"
            },
            "metric": {
              "amount": 1,
              "unitShort": "dash",
              "unitLong": "dash"
            }
          }
        }
      ],
      "summary": "If you want to add more \u003Cb\u003Egluten free and dairy free\u003C/b\u003E recipes to your recipe box, Gluten Free Coconut Chicken Salad might be a recipe you should try. This recipe makes 5 servings with \u003Cb\u003E868 calories\u003C/b\u003E, \u003Cb\u003E37g of protein\u003C/b\u003E, and \u003Cb\u003E54g of fat\u003C/b\u003E each. For \u003Cb\u003E$3.63 per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 30%\u003C/b\u003E of your daily requirements of vitamins and minerals. Head to the store and pick up water, cashews, veganaise, and a few other things to make it today. It works best as a main course, and is done in approximately \u003Cb\u003E45 minutes\u003C/b\u003E. 3 people were glad they tried this recipe. It is brought to you by Foodista. All things considered, we decided this recipe \u003Cb\u003Edeserves a spoonacular score of 61%\u003C/b\u003E. This score is pretty good. Similar recipes are \u003Ca href=\"https://spoonacular.com/recipes/gluten-free-dairy-free-sugar-free-chinese-chicken-salad-644826\"\u003EGluten Free Dairy Free Sugar Free Chinese Chicken Salad\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/gluten-free-dairy-free-sugar-free-chinese-chicken-salad-1364955\"\u003EGluten Free Dairy Free Sugar Free Chinese Chicken Salad\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/sugar-free-crustless-coconut-custard-pie-dairy-free-gluten-free-low-carb-556891\"\u003ESugar Free Crustless Coconut Custard Pie {Dairy Free, Gluten Free & Low Carb}\u003C/a\u003E.",
      "cuisines": [],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "gluten free",
        "dairy free"
      ],
      "occasions": [],
      "instructions": "Preheat the oven to 350 degrees.\nDefrost the chicken tenderloins if necessary.\nIn a shallow dish, beat the egg and add in the water and salt.\nIn another shallow bowl, pour in the sweetened coconut.\nDip the chicken in the egg, then in the coconut. Press to coat and set aside.\nIn a large, ovenproof skillet, heat the oil over medium-high heat.\nAdd the chicken and cook, turning once, until golden, about 3 minutes. (Do not overcrowd your panI had to make my chicken in 2 batches)\nTransfer the skillet to the oven and bake until cooked through, about 12 minutes.\nServe the chicken on top of a salad with tomatoes, cashews, onion, and whatever else your heart desires.\nFor the dressingjust whisk all the ingredients in a medium-sized dish. Then, drizzle the sweet honey mustard dressing on top and gobble up!",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Preheat the oven to 350 degrees.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Defrost the chicken tenderloins if necessary.",
              "ingredients": [
                {
                  "id": 1015062,
                  "name": "chicken tenderloins",
                  "localizedName": "chicken tenderloins",
                  "image": "chicken-tenders-or-fingers.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 3,
              "step": "In a shallow dish, beat the egg and add in the water and salt.",
              "ingredients": [
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                },
                {
                  "id": 1123,
                  "name": "egg",
                  "localizedName": "egg",
                  "image": "egg.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 4,
              "step": "In another shallow bowl, pour in the sweetened coconut.",
              "ingredients": [
                {
                  "id": 12109,
                  "name": "sweetened coconut",
                  "localizedName": "sweetened coconut",
                  "image": "shredded-coconut.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 5,
              "step": "Dip the chicken in the egg, then in the coconut. Press to coat and set aside.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "chicken",
                  "localizedName": "chicken",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/whole-chicken.jpg"
                },
                {
                  "id": 12104,
                  "name": "coconut",
                  "localizedName": "coconut",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/coconut.jpg"
                },
                {
                  "id": 0,
                  "name": "dip",
                  "localizedName": "dip",
                  "image": ""
                },
                {
                  "id": 1123,
                  "name": "egg",
                  "localizedName": "egg",
                  "image": "egg.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 6,
              "step": "In a large, ovenproof skillet, heat the oil over medium-high heat.",
              "ingredients": [
                {
                  "id": 4582,
                  "name": "cooking oil",
                  "localizedName": "cooking oil",
                  "image": "vegetable-oil.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 7,
              "step": "Add the chicken and cook, turning once, until golden, about 3 minutes. (Do not overcrowd your panI had to make my chicken in 2 batches)",
              "ingredients": [
                {
                  "id": 0,
                  "name": "chicken",
                  "localizedName": "chicken",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/whole-chicken.jpg"
                }
              ],
              "equipment": [],
              "length": {
                "number": 3,
                "unit": "minutes"
              }
            },
            {
              "number": 8,
              "step": "Transfer the skillet to the oven and bake until cooked through, about 12 minutes.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                },
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ],
              "length": {
                "number": 12,
                "unit": "minutes"
              }
            },
            {
              "number": 9,
              "step": "Serve the chicken on top of a salad with tomatoes, cashews, onion, and whatever else your heart desires.",
              "ingredients": [
                {
                  "id": 11529,
                  "name": "tomato",
                  "localizedName": "tomato",
                  "image": "tomato.png"
                },
                {
                  "id": 12087,
                  "name": "cashews",
                  "localizedName": "cashews",
                  "image": "cashews.jpg"
                },
                {
                  "id": 0,
                  "name": "chicken",
                  "localizedName": "chicken",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/whole-chicken.jpg"
                },
                {
                  "id": 11282,
                  "name": "onion",
                  "localizedName": "onion",
                  "image": "brown-onion.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 10,
              "step": "For the dressingjust whisk all the ingredients in a medium-sized dish. Then, drizzle the sweet honey mustard dressing on top and gobble up!",
              "ingredients": [
                {
                  "id": 99227,
                  "name": "honey mustard",
                  "localizedName": "honey mustard",
                  "image": "regular-mustard.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404661,
                  "name": "whisk",
                  "localizedName": "whisk",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                }
              ]
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 70.4621658325195,
      "spoonacularSourceUrl": "https://spoonacular.com/gluten-free-coconut-chicken-salad-644813"
    }
  ]
    const data1 = [{
      "id": 641730,
      "image": "https://img.spoonacular.com/recipes/641730-556x370.jpg",
      "imageType": "jpg",
      "title": "Dulce De Leche Cheesecake",
      "readyInMinutes": 45,
      "servings": 10,
      "sourceUrl": "https://www.foodista.com/recipe/5LN8R7Z4/dulce-de-leche-cheesecake",
      "vegetarian": true,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 19,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 32,
      "healthScore": 2,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 126.95,
      "extendedIngredients": [
        {
          "id": 12061,
          "aisle": "Nuts",
          "image": "almonds.jpg",
          "consistency": "SOLID",
          "name": "almond cookies",
          "nameClean": "almond cookies",
          "original": "150 grams Almond cookies, crumbed",
          "originalName": "Almond cookies, crumbed",
          "amount": 150,
          "unit": "grams",
          "meta": [],
          "measures": {
            "us": {
              "amount": 5.291,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 150,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 20027,
          "aisle": "Baking",
          "image": "white-powder.jpg",
          "consistency": "SOLID",
          "name": "cornstarch",
          "nameClean": "cornstarch",
          "original": "1 tablespoon Cornstarch",
          "originalName": "Cornstarch",
          "amount": 1,
          "unit": "tablespoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 1017,
          "aisle": "Cheese",
          "image": "cream-cheese.jpg",
          "consistency": "SOLID",
          "name": "philiadelphia balance cream cheese",
          "nameClean": "philiadelphia balance cream cheese",
          "original": "450 grams Philiadelphia 13% balance cream cheese",
          "originalName": "Philiadelphia 13% balance cream cheese",
          "amount": 450,
          "unit": "grams",
          "meta": [
            "13%"
          ],
          "measures": {
            "us": {
              "amount": 15.873,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 450,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 98861,
          "aisle": "Baking",
          "image": "dulce-de-leche.png",
          "consistency": "SOLID",
          "name": "dulce de leche",
          "nameClean": "dulce de leche",
          "original": "240 ml Dulce de leche",
          "originalName": "Dulce de leche",
          "amount": 240,
          "unit": "ml",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.014,
              "unitShort": "cups",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 240,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 1123,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg.png",
          "consistency": "SOLID",
          "name": "eggs",
          "nameClean": "eggs",
          "original": "2 Eggs",
          "originalName": "Eggs",
          "amount": 2,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 9152,
          "aisle": "Produce",
          "image": "lemon-juice.jpg",
          "consistency": "LIQUID",
          "name": "juice of lemon",
          "nameClean": "juice of lemon",
          "original": "Juice and zest of 1 lemon",
          "originalName": "Juice and zest of lemon",
          "amount": 1,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 2047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "salt",
          "nameClean": "salt",
          "original": "Pinch of salt",
          "originalName": "Pinch of salt",
          "amount": 1,
          "unit": "pinch",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "pinch",
              "unitLong": "pinch"
            },
            "metric": {
              "amount": 1,
              "unitShort": "pinch",
              "unitLong": "pinch"
            }
          }
        },
        {
          "id": 19335,
          "aisle": "Baking",
          "image": "sugar-in-bowl.png",
          "consistency": "SOLID",
          "name": "sugar",
          "nameClean": "sugar",
          "original": "1/2 cup organic sugar",
          "originalName": "organic sugar",
          "amount": 0.5,
          "unit": "cup",
          "meta": [
            "organic"
          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 100,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1145,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "butter-sliced.jpg",
          "consistency": "SOLID",
          "name": "butter",
          "nameClean": "butter",
          "original": "1 1/2 sticks cold butter cut into small pieces (if you use unsalted butter add a little 2 cups organic flour1/2 cup organic sugar1 teaspoon vanilla",
          "originalName": "cold butter cut into small pieces (if you use unsalted butter add a little 2 cups organic flour1/2 cup organic sugar1 teaspoon vanilla",
          "amount": 1.5,
          "unit": "sticks",
          "meta": [
            "unsalted",
            "organic",
            "cold",
            "cut into small pieces (if you use  butter add a little 2 cups  flour1/2 cup  sugar1 teaspoon vanilla"
          ],
          "measures": {
            "us": {
              "amount": 1.5,
              "unitShort": "sticks",
              "unitLong": "sticks"
            },
            "metric": {
              "amount": 1.5,
              "unitShort": "sticks",
              "unitLong": "sticks"
            }
          }
        },
        {
          "id": 1116,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "plain-yogurt.jpg",
          "consistency": "SOLID",
          "name": "yogurt",
          "nameClean": "yogurt",
          "original": "150 grams 3. 5% yogurt",
          "originalName": "3. 5% yogurt",
          "amount": 150,
          "unit": "grams",
          "meta": [
            "5%"
          ],
          "measures": {
            "us": {
              "amount": 5.291,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 150,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        }
      ],
      "summary": "If you have about \u003Cb\u003E45 minutes\u003C/b\u003E to spend in the kitchen, Dulce De Leche Cheesecake might be a super \u003Cb\u003Egluten free and lacto ovo vegetarian\u003C/b\u003E recipe to try. One serving contains \u003Cb\u003E430 calories\u003C/b\u003E, \u003Cb\u003E8g of protein\u003C/b\u003E, and \u003Cb\u003E38g of fat\u003C/b\u003E. This recipe serves 10. For \u003Cb\u003E$1.27 per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 9%\u003C/b\u003E of your daily requirements of vitamins and minerals. A few people made this recipe, and 32 would say it hit the spot. If you have almond cookies, eggs, philiadelphia balance cream cheese, and a few other ingredients on hand, you can make it. It works well as a dessert. It is brought to you by Foodista. Taking all factors into account, this recipe \u003Cb\u003Eearns a spoonacular score of 31%\u003C/b\u003E, which is not so great. Similar recipes are \u003Ca href=\"https://spoonacular.com/recipes/russian-dulce-de-leche-waffle-cake-and-instant-pot-dulce-de-leche-1062236\"\u003ERussian Dulce De Leche Waffle Cake and Instant Pot Dulce De Leche\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/dulce-de-leche-cheesecake-61816\"\u003EDulce De Leche Cheesecake\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/dulce-de-leche-cheesecake-62261\"\u003EDulce de Leche Cheesecake\u003C/a\u003E.",
      "cuisines": [],
      "dishTypes": [
        "dessert"
      ],
      "diets": [
        "gluten free",
        "lacto ovo vegetarian"
      ],
      "occasions": [],
      "instructions": "\u003Col\u003E\u003Cli\u003EToss the cookie crumbs into the melted butter in a mixing bowl. Reserve 1 tablespoon of the mixture for the topping. Press the rest of the mixture onto the bottom and up 3cm high of a greased 24cm spring form pan. Chill until its ready for use.\u003C/li\u003E\u003Cli\u003EUsing electric mixer beat balance cream cheese and sugar in a large mixing bowl until smooth. Add yogurt and eggs, beating until just blended. Stir in cornstarch, dulce de leche, lemon juice and zest until blended.\u003C/li\u003E\u003Cli\u003EPour the mixture into the crust and sprinkle the top with reserved cookie crumbs. Steamed bake the cheesecake at 165C/330F for 65 minutes until almost set. Turn oven off. Leave the cake with the oven door ajar for 1 hour. Cool completely and chill at least 4 hours or overnight until firm.\u003C/li\u003E\u003C/ol\u003E",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Toss the cookie crumbs into the melted butter in a mixing bowl. Reserve 1 tablespoon of the mixture for the topping. Press the rest of the mixture onto the bottom and up 3cm high of a greased 24cm spring form pan. Chill until its ready for use.Using electric mixer beat balance cream cheese and sugar in a large mixing bowl until smooth.",
              "ingredients": [
                {
                  "id": 10018192,
                  "name": "cookie crumbs",
                  "localizedName": "cookie crumbs",
                  "image": ""
                },
                {
                  "id": 1017,
                  "name": "cream cheese",
                  "localizedName": "cream cheese",
                  "image": "cream-cheese.jpg"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 19335,
                  "name": "sugar",
                  "localizedName": "sugar",
                  "image": "sugar-in-bowl.png"
                }
              ],
              "equipment": [
                {
                  "id": 404628,
                  "name": "hand mixer",
                  "localizedName": "hand mixer",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/hand-mixer.png"
                },
                {
                  "id": 405907,
                  "name": "mixing bowl",
                  "localizedName": "mixing bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/mixing-bowl.jpg"
                },
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 2,
              "step": "Add yogurt and eggs, beating until just blended. Stir in cornstarch, dulce de leche, lemon juice and zest until blended.",
              "ingredients": [
                {
                  "id": 98861,
                  "name": "dulce de leche",
                  "localizedName": "dulce de leche",
                  "image": "dulce-de-leche.png"
                },
                {
                  "id": 9152,
                  "name": "lemon juice",
                  "localizedName": "lemon juice",
                  "image": "lemon-juice.jpg"
                },
                {
                  "id": 20027,
                  "name": "corn starch",
                  "localizedName": "corn starch",
                  "image": "white-powder.jpg"
                },
                {
                  "id": 1116,
                  "name": "yogurt",
                  "localizedName": "yogurt",
                  "image": "plain-yogurt.jpg"
                },
                {
                  "id": 1123,
                  "name": "egg",
                  "localizedName": "egg",
                  "image": "egg.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 3,
              "step": "Pour the mixture into the crust and sprinkle the top with reserved cookie crumbs. Steamed bake the cheesecake at 165C/330F for 65 minutes until almost set. Turn oven off. Leave the cake with the oven door ajar for 1 hour. Cool completely and chill at least 4 hours or overnight until firm.",
              "ingredients": [
                {
                  "id": 10018192,
                  "name": "cookie crumbs",
                  "localizedName": "cookie crumbs",
                  "image": ""
                },
                {
                  "id": 0,
                  "name": "crust",
                  "localizedName": "crust",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                  "temperature": {
                    "number": 165,
                    "unit": "Celsius"
                  }
                }
              ],
              "length": {
                "number": 365,
                "unit": "minutes"
              }
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 38.7740325927734,
      "spoonacularSourceUrl": "https://spoonacular.com/dulce-de-leche-cheesecake-641730"
    }]
  const navigate = useNavigate();
  return (
    <div className="carousel">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{clickable: true}}
        breakpoints={{
          320: { slidesPerView: 1 }, // Mobile
          640: { slidesPerView: 2 }, // Tablet
          1024: { slidesPerView: 4 }, // Desktop
        }}
        style={{paddingLeft: 50, paddingRight: 50}}
      >
        {
          data.map(recipe => (
            <SwiperSlide key={recipe.id}>
              <Card
                key={recipe.id}
                time={recipe.readyInMinutes}
                diet={recipe.diets}
                dishType={recipe.dishTypes}
                title={recipe.title}
                image={recipe.image}
                fallbackImage="/burger1.jpg"
                onClickHandler={() => {
                    navigate(`/recipe/${recipe.id}?from=${encodeURIComponent(location.pathname + location.search)}`)
                }}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}