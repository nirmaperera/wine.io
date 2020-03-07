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
        ingredients: "",
        ingredient: [],
        measurement: [],
        measurements: ""


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
                    ingredients: response.data.drinks[0].strIngredient1 + " ," + response.data.drinks[0].strIngredient2 + " ," + response.data.drinks[0].strIngredient3 + " ," + response.data.drinks[0].strIngredient4 + " ," + response.data.drinks[0].strIngredient5 + " ," + response.data.drinks[0].strIngredient6 + " ," + response.data.drinks[0].strIngredient7 + " ," + response.data.drinks[0].strIngredient8 + " ," + response.data.drinks[0].strIngredient9 + " ," + response.data.drinks[0].strIngredient10 + " ," + response.data.drinks[0].strIngredient11 + " ," + response.data.drinks[0].strIngredient12 + " ," + response.data.drinks[0].strIngredient13 + " ," + response.data.drinks[0].strIngredient14 + " ," + response.data.drinks[0].strIngredient15,
                    measurements: response.data.drinks[0].strMeasure1 + "," + response.data.drinks[0].strMeasure2 + "," + response.data.drinks[0].strMeasure3 + "," + response.data.drinks[0].strMeasure4 + "," + response.data.drinks[0].strMeasure5 + "," + response.data.drinks[0].strMeasure6 + "," + response.data.drinks[0].strMeasure7 + "," + response.data.drinks[0].strMeasure8 + "," + response.data.drinks[0].strMeasure9 + "," + response.data.drinks[0].strMeasure10 + "," + response.data.drinks[0].strMeasure11 + "," + response.data.drinks[0].strMeasure12 + "," + response.data.drinks[0].strMeasure13 + "," + response.data.drinks[0].strMeasure14 + "," + response.data.drinks[0].strMeasure15,
                }, () => {
                    console.log('The recipes are: ', this.state)
                    this.removeNull();
                })
            })
            .catch(error => { console.log(error) })

    }
    componentDidMount() {

        this.getRecipe();


    }

    removeNull = () => {

        let originalStringI = this.state.ingredients;
        let newStringI = originalStringI.replace(/,null|null/g, '');

        var array = newStringI.split(',');


        let originalStringM = this.state.measurements;
        let newStringM = originalStringM.replace(/,null|null/g, '');
        var arrayM = newStringM.split(',');


        this.setState({
            ingredient: array,
            measurement: arrayM
        }, () => {

            console.log(this.state.ingredient);
            console.log(this.state.measurement);
        })


    }
    render() {
        return (

            <div className="card-container">

                <div className="card-highlight">
                    <div className="card-col">
                        <img className="recipeImage" src={this.state.thumbnail} />
                    </div>


                    <div className="card-col">
                        <h2 className="header-title"> Have you tried a <span className="name">{this.state.name} ?</span></h2>
                        <hr />



                        <div className="recipeCategory">
                            <h4 className="category-name"> Category: <span>{this.state.category}</span> </h4>
                        </div>

                        <div className="recipeInstructions">
                            <div>
                                <h4 className="category-name">Type: <span>{this.state.alcoholic}</span></h4>
                            </div>
                        </div>

                        <div className="recipeGlass">
                            <div>
                                <h4 className="category-name">Type of Glass: <span>{this.state.glass}</span></h4>
                            </div>
                        </div>

                        <div className="recipeIngredients">

                            <div className="col-ingred">
                                {this.state.ingredient.map((aIngredient, index) => {

                                    return (
                                        <p key={index}>{aIngredient} - </p>
                                    )

                                })}
                            </div>
                            <div className="col-ingred">
                                {this.state.measurement.map((aMeasurement, index) => {
                                    return (
                                        <p key={index}>{aMeasurement}</p>
                                    )
                                })}
                            </div>

                        </div>

                        <div className="recipeInstructions">
                            <div>
                                <h4 className="category-name">Instructions: <span>{this.state.instructions}</span></h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div >

        )
    }
}

export default Card;