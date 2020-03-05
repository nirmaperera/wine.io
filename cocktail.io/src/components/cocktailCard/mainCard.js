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

    componentDidMount() {
        // axios({
        //     method: 'get',
        //     url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
        // })
        //     .then(response => {
        //         this.setState({
        //             name: response.data.drinks[0].strDrink,
        //             category: response.data.drinks[0].strCategory,
        //             category: response.data.drinks[0].strCategory,
        //             instructions: response.data.drinks[0].strInstructions,
        //             alcoholic: response.data.drinks[0].strAlcoholic,
        //             glass: response.data.drinks[0].strGlass,
        //             thumbnail: response.data.drinks[0].strDrinkThumb,
        //             ingredients: response.data.drinks[0].strIngredient1 + "," + response.data.drinks[0].strIngredient2 + "," + response.data.drinks[0].strIngredient3 + "," + response.data.drinks[0].strIngredient4 + "," + response.data.drinks[0].strIngredient5 + "," + response.data.drinks[0].strIngredient6 + "," + response.data.drinks[0].strIngredient7 + "," + response.data.drinks[0].strIngredient8 + "," + response.data.drinks[0].strIngredient9 + "," + response.data.drinks[0].strIngredient10 + "," + response.data.drinks[0].strIngredient11 + "," + response.data.drinks[0].strIngredient12 + "," + response.data.drinks[0].strIngredient13 + "," + response.data.drinks[0].strIngredient14 + "," + response.data.drinks[0].strIngredient15,
        //             measurements: response.data.drinks[0].strMeasure1 + "," + response.data.drinks[0].strMeasure2 + "," + response.data.drinks[0].strMeasure3 + "," + response.data.drinks[0].strMeasure4 + "," + response.data.drinks[0].strMeasure5 + "," + response.data.drinks[0].strMeasure6 + "," + response.data.drinks[0].strMeasure7 + "," + response.data.drinks[0].strMeasure8 + "," + response.data.drinks[0].strMeasure9 + "," + response.data.drinks[0].strMeasure10 + "," + response.data.drinks[0].strMeasure11 + "," + response.data.drinks[0].strMeasure12 + "," + response.data.drinks[0].strMeasure13 + "," + response.data.drinks[0].strMeasure14 + "," + response.data.drinks[0].strMeasure15,
        //         }, () => {
        //             console.log('The recipes are: ', this.state)
        //         })
        //     })
        //     .catch(error => { console.log(error) })

    }
    render() {
        return (

            <div className="card-container">

                <div className="card-highlight">
                    <h2 className="header-title"> Have you tried {this.state.name} ?</h2>


                </div>


            </div>
        )
    }
}

export default Card;