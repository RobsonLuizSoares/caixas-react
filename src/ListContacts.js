import React, { Component } from 'react'

import { Link } from 'react-router-dom'



class ListContacts extends Component {

    state = {
        query: ''
    }
    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    }
    render(){
         const { query } = this.state
         const { contacts, onDeleteContact } = this.props

        const showingContacts = query === ''
            ? contacts
            : contacts.filter((c) => (
                c.name.toLowerCase().includes(query.toLowerCase())
            ))

        return(
            
            <div className='list-contacts'> 
                <div className='list-contacts-top'>
                    <input 
                    className='search-contacts'
                    type='text'
                    placeholder='Search Contacts'
                    value={query}
                    onChange={(event) => this.updateQuery(event.target.value)  }
                    />
                    <Link
                    to = '/create'
                   
                    className='add-contact'
                    >Add Contact</Link>
                </div>
                <ol className='contact-list'>
                {showingContacts.map((contact) => (
                    <li key={contact.id} className='contact-list-item'>
                    <div
                    className='contact-avatar'
                    style={{
                        backgroundImage: `url(${contact.avatarURL})`
                    }}
                    ></div>
                    <div className='contact-details'>
                        <p>{contact.name} </p>
                        <p>{contact.handle}</p>
                    </div>
                    <button 
                    onClick={() => onDeleteContact(contact)}
                    className='contact-remove'>
                        Remove
                    </button>
                    </li>
                ))}
                
                </ol>
            </div>
        )
    }
}


export default ListContacts