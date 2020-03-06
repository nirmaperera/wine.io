import React, { Component } from 'react';
import '../cocktailCard/mainCard.css';
import axios from 'axios';


class Card extends Component {
    state = {
        name: "",
        category: "",
        instructions: "",
        alcoholic: "",
        glass: "",
        thumbnail: "",
        ingredients: [],
        measurements: []


    };

    getRecipe = () => {
        axios({
            method: 'get',
            url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
        })
            .then(response => {
                this.setState({
                    name: response.data.drinks[0].strDrink,
                    category: response.data.drinks[0].strCategory,
                    instructions: response.data.drinks[0].strInstructions,
                    alcoholic: response.data.drinks[0].strAlcoholic,
                    glass: response.data.drinks[0].strGlass,
                    thumbnail: response.data.drinks[0].strDrinkThumb,
                    ingredients: response.data.drinks[0].strIngredient1 + "," + response.data.drinks[0].strIngredient2 + "," + response.data.drinks[0].strIngredient3 + "," + response.data.drinks[0].strIngredient4 + "," + response.data.drinks[0].strIngredient5 + "," + response.data.drinks[0].strIngredient6 + "," + response.data.drinks[0].strIngredient7 + "," + response.data.drinks[0].strIngredient8 + "," + response.data.drinks[0].strIngredient9 + "," + response.data.drinks[0].strIngredient10 + "," + response.data.drinks[0].strIngredient11 + "," + response.data.drinks[0].strIngredient12 + "," + response.data.drinks[0].strIngredient13 + "," + response.data.drinks[0].strIngredient14 + "," + response.data.drinks[0].strIngredient15,
                    measurements: response.data.drinks[0].strMeasure1 + "," + response.data.drinks[0].strMeasure2 + "," + response.data.drinks[0].strMeasure3 + "," + response.data.drinks[0].strMeasure4 + "," + response.data.drinks[0].strMeasure5 + "," + response.data.drinks[0].strMeasure6 + "," + response.data.drinks[0].strMeasure7 + "," + response.data.drinks[0].strMeasure8 + "," + response.data.drinks[0].strMeasure9 + "," + response.data.drinks[0].strMeasure10 + "," + response.data.drinks[0].strMeasure11 + "," + response.data.drinks[0].strMeasure12 + "," + response.data.drinks[0].strMeasure13 + "," + response.data.drinks[0].strMeasure14 + "," + response.data.drinks[0].strMeasure15,
                }, () => {
                    console.log('The recipes are: ', this.state.ingredients)
                    this.removeNull();
                })
            })
            .catch(error => { console.log(error) })

    }
    componentDidMount() {

        this.getRecipe();


    }

    removeNull = () => {
        let newIngredient = this.state.ingredients;
        newIngredient.replace(/'null'/g, '');
        console.log("the new ingredients are", newIngredient);
    }
    render() {
        return (

            <div className="card-container">

                <div className="card-highlight">
                    <h2 className="header-title"> Have you tried a <span className="name">{this.state.name} </span>?</h2>
                    <img className="recipeImage" src={this.state.thumbnail} />

                    <div className="recipeCategory">
                        <h4 className="category-name">category: {this.state.category}</h4>
                    </div>

                    <div className="recipeInstructions">
                        <div>
                            <h4 className="category-name">Drink is: {this.state.alcoholic}</h4>
                        </div>
                    </div>

                    <div className="recipeIngredients">
                        <div>
                            <h4 className="category-name">Ingredients: {this.state.ingredients}</h4>
                        </div>
                    </div>

                    <div className="recipeInstructions">
                        <div>
                            <h4 className="category-name">Instructions: {this.state.instructions}</h4>
                        </div>
                    </div>


                </div>


            </div>
        )
    }
}

export default Card;