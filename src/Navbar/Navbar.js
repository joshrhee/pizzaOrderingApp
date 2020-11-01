import React from 'react';
import styled from 'styled-components';
import {pizzaRed} from "../Styles/colors"; //Get the main brand color
import {Title} from "../Styles/title"; //Get the Title's styled-component

//This component controls Navbar which is SliceLine🍕

//style component need ``
//Style component cannot use react functionality
// style component cannot understand just pizzaRed, so I need to use ${} to use for css for the pizzaRed
//padding: 10px; make a 10 pixels away from the margin with object
//Navbar's position is fixed, so it will be shown continuously when I scrolled
export const NavbarStyled = styled.div`
    background-color: ${pizzaRed};
    padding: 10px;
    position: fixed;
    width: 100%
    z-index: 999;

`

//Adding a new style charactristics at the Title component with styled()
//text-shadow: 1px(x direction) 1px(y direction) 1px(blur) black(color for shadow)
const Logo = styled(Title)`
    font-size: 20px;
    color: white;
    text-shadow: 1px 1px 4px yellow;
`

//This function is used for App.js's Navbar Component.
//This used the above NavbarStyled styled component with using react functionality
export function Navbar() {

    //A functional component which will return a div or our nav bar styled component, which is NavbarStyled
    //To making this functionality allows us to have some react functionality in here in addition to style component
    //If we just export the style component NavbarStyled,  we could not add or use any react functionality like hooks
    return <NavbarStyled>
        <Logo>
            SliceLine 🍕 <span role = "img" aria-label = "pizza slice"></span>
        </Logo>
    </NavbarStyled>;
}