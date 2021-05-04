import React from 'react'
import 'bulma/css/bulma.css';


 // ITERATION 1
function ContactDetails( {contact, btnDelete} ) {
    
    const {name, pictureUrl, popularity} = contact
    return (
        <tr>
            <td><img src={pictureUrl} style={{"width" : "50px"}}/></td>
            <td><h3>{name}</h3></td>
            <td><p>{popularity.toFixed(2)}</p></td>
            <button className="button is-danger btn-delete" onClick={() => { btnDelete(contact.id)  }}>Delete</button>
        </tr>
    )
}

export default ContactDetails