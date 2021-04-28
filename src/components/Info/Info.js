import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { listData, infoContents } from '../../data/dataStore';

const {info, image} = listData;
const {title, text} = infoContents;
const Info = () => (
  <Container>
    <Hero titleText={info} imageSource={image}/>
    <h2>{title}</h2>
    <p>{text}</p>
  </Container>
);

export default Info;