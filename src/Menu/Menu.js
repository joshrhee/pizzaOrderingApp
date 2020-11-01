import React from 'react';
import styled from 'styled-components';
import { foods } from "../Data/FoodData";
import { Food, FoodGrid, FoodLable } from "./FoodGrid";

//This component controls Menu component which includes FoodGrid.js
const MenuStyled = styled.div`
    height: 1000px;
    margin: 0px 400px 50px 20px;
`
//{food.map()} will loop the FoodData.js's array's objects


//Use Object.entries(foods) on the object prototype to loop over the keys and values of the object.
//Each objects have a key which is section and value which is the array
//entries() create an array of key and value pairs
//Then we object de-structured the sectionName and foods
//Then render sectionName in the header

//Then render the name inner loop

export function Menu() {
    return (
        <MenuStyled>
            {Object.entries(foods).map(([sectionName, foods])=> (
                <>
                    <h1>{sectionName}</h1>
                    <FoodGrid>
                        {foods.map(food => (
                            <Food img = {food.img}>
                                <FoodLable>
                                    {food.name}
                                </FoodLable>
                            </Food>
                        ))}
                    </FoodGrid>
                </>
            ))}
        </MenuStyled>
    ); 
    
}