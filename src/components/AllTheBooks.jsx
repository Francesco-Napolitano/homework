import { Component } from 'react';
import libri from '../data/fantasy.json';
import { Card, Button } from 'react-bootstrap';

class AllTheBooks extends Component {
   render() {
      return (
         <section style={{ display: 'flex', flexWrap: 'wrap' }}>

            {libri.map((fantasy) => (
               <Card  key={fantasy.asin} style={{ width: '18rem', margin: '10px' }}>
                  <Card.Img style={{ height: '28em',  objectFit: 'cover' }} variant="top" src={fantasy.img} />
                  <Card.Body>
                     <Card.Title>{fantasy.title}</Card.Title>
                     <Card.Text>{fantasy.category}</Card.Text>
                     <Button variant="primary">Acquista a: {fantasy.price}€</Button>
                  </Card.Body>
               </Card>
            ))}
         </section>
      );
   }
}

export default AllTheBooks;
