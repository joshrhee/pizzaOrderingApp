import styled from "styled-components";
import { Title } from "../Styles/title";

//This component styles and makes some animation for the pizza images
//All of this components export to the Menu.js

//grid-template-columns: 1fr 1fr means split the width of the content here between these 2 colums
//grid-template-columns: 1fr 1fr 1fr will get 3 colums
export const FoodGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`
//Food's label styling
export const FoodLable = styled.div`
    position: absolute;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 5px;
`

//${({img}) => `url(${img});`}  meaning take img that I render it in this property
//box-shadow: x-offset, y-offset, Blur, Spread, color
// and pass it inside of a URL property
//This will allows us to create dynamic images that we can style up we want
//transition-properties makes animation for those things. 
//In this case, when I hover, box shadow and margin-top and filter will come out like animation
//Because of the margin-top, margin-bottom, the images are coming a little bit up or down
//filter inside of the hover also effect similar with opacity
//opacity: 0.7; makes the image shinning
export const Food = styled(Title)`
    height: 100px;
    padding: 10px;
    font-size: 20px;
    background-image: ${({img}) => `url(${img});`}
    background-position: center;
    background-size: cover;
    filter: contrast(75%);
    border-radius: 7px;
    margin-top: 5px;
    transition-property: box-shadow margin-top filter;
    transition-duration: .1s;
    box-shadow: 0px 0px 2px 0px #b6afaf;
    &:hover {
        cursor: pointer;
        filter: contrast(100%);
        margin-top: 0px;
        margin-bottom: 5px;
        box-shadow: 0px 5px 10px 0px #b6afaf;
    }
`