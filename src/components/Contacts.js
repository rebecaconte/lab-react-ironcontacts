import React, { Component } from 'react'
import contacts from '../contacts.json'
import ContactDetails from './ContactDetails'
import 'bulma/css/bulma.css';


// ITERATION 1
class Contacts extends Component {

    state = { contacts }
    maxContacts = 5

    // ITERATION 2
    handleAddRandom = () => {
        let randomContact = Math.floor(Math.random() * contacts.length)
        let elem = contacts[randomContact]

        this.setState({
            contacts: [elem, ... this.state.contacts]
        })

        this.maxContacts = this.maxContacts + 1;
    }

    // ITERATION 3
    handleSortName = () => {

        const { contacts } = this.state
        let clonedContacts = JSON.parse(JSON.stringify(contacts))

        clonedContacts.sort((a, b) => {
            if (a.name > b.name) {
                return 1
            }
            else if (a.name < b.name) {
                return -1
            }
            else {
                return 0
            }
        })

        this.setState({
            contacts: clonedContacts
        })
    }

    // ITERATION 3
    handleSortPop = () => {

        const { contacts } = this.state
        let clonedContacts2 = JSON.parse(JSON.stringify(contacts))

        clonedContacts2.sort((a, b) => {
            if (a.popularity < b.popularity) {
                return 1
            }
            else if (a.popularity > b.popularity) {
                return -1
            }
            else {
                return 0
            }
        })

        this.setState({
            contacts: clonedContacts2
        })
    }

    // ITERATION 4
    handleDelete = (someId) => {
        const { contacts } = this.state
        let filteredContacts = contacts.filter((singleContact) => {
            return singleContact.id !== someId
        })

        this.setState({
            contacts: filteredContacts
        })
    }

    render() {
        let { contacts } = this.state
        contacts = contacts.slice(0, this.maxContacts)

        return (
            <div>
                <h1 className="iron-contact-header">IronContacts</h1>
                <button className="button is-primary is-rounded btn-contact" onClick={this.handleAddRandom}>Add Random</button>
                <button className="button is-info is-rounded btn-contact" onClick={this.handleSortName}>Sort by name</button>
                <button className="button is-link is-rounded btn-contact" onClick={this.handleSortPop}>Sort by popularity</button>

                <div className="columns">
                    <div className="column"></div>
                    <table className="column">
                        <tr className="table-contacts">
                            <th className="table-contacts">Picture</th>
                            <th className="table-contacts">Name</th>
                            <th className="table-contacts">Popularity</th>
                        </tr>
                        {contacts.map((singleContact, index) => {
                            return <ContactDetails
                                key={index}
                                contact={singleContact}
                                btnDelete={this.handleDelete}
                            />
                        })
                        }
                    </table>
                    <div className="column"></div>
                </div>


            </div>
        )
    }
}



export default Contacts