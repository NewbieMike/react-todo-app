import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { faqContents } from '../../data/dataStore';

const {faq, imageFaq, question, answer, title} = faqContents;

const FAQ = () => (
  <Container>
    <Hero titleText={faq} imageSource={imageFaq}/>
    <h2>{title}</h2><br/>
    <h4>{question}</h4>
    <p>{answer}</p>
    <h4>{question}</h4>
    <p>{answer}</p>    
    <h4>{question}</h4>
    <p>{answer}</p>
  </Container>
);

export default FAQ;