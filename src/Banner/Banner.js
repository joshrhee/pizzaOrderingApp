import styled from 'styled-components';

//background-size: cover trys to put whole picture into the spot
//contrast is giving some shadow to the picture
export const Banner = styled.div`
    height: 200px;
    background-image: url("img/banner.jpeg");
    background-position: center;
    background-size: cover;
    filter: contrast(75%);
`