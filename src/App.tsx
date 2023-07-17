import React from 'react';
import './App.css';
import styled from "styled-components";
import CardImageSrc from './assets/images/Rectangle.svg'
import {Card} from "./components/Card.styled";
import {CardBody} from "./components/CardBody.styled";
import {CardTitle} from "./components/CardTitle.styled";
import {CardButton, CardButtonBox} from "./components/CardButton.styled";
import { CardText } from './components/CardText.styled';
import { CardImage } from './components/CardImage.styled';

function App() {
    return (
        <div>
            <Box>
                <Card>
                    <CardImage src = {CardImageSrc}/>
                    <CardBody>
                        <CardTitle>Headline</CardTitle>
                        <CardText>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</CardText>
                        <CardButtonBox>
                            <CardButton >See more</CardButton>
                            <CardButton  >Save</CardButton>
                        </CardButtonBox>
                    </CardBody>
                </Card>
            </Box>
        </div>
    );
}

export default App;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

