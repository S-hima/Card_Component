import Card from './components/Card';
import './App.css';
import contacts from './data/contacts';


function SingleContact(contact) {
  return(
    <Card 
    name={contact.name }
    img={contact.imgURL}
    tel={contact.phone}
    email={contact.email}
    />




  );
}



function App() {

  return (
    <div>
     {contacts.map(SingleContact)} 
     


      
      
    </div>
  );
}

export default App;
