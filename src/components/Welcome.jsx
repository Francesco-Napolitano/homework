import { Alert } from 'react-bootstrap'

const Welcome = () => {
   return (
      <Alert variant="success">
      <Alert.Heading>Benvenuto nella tua libreria personale</Alert.Heading>
      <p>
        La tua libreria personale  un luogo virtuale dove puoi organizzare e
        gestire i tuoi libri preferiti. Puoi creare una lista dei desideri, 
        aggiungere libri che hai già letto e valutarli, e anche scoprire nuovi
        titoli grazie alle raccomandazioni degli altri utenti.
      </p>
      <hr />
     
    </Alert>
   )
}

export default Welcome