import React, {Component} from 'react';
import {connect} from 'react-redux';
import ContactList from './ContactList/ContactList.container';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import {contactsOperations, contactsSelectors} from '../Redux/Contacts/';

class App extends Component {

  componentDidMount() {
    this.props.fetchContacts();
  }
render (){
  return (
<div>
  <ContactForm />
  <Filter />
  {this.props.isLoadingContacts && <h1>Загружаем...</h1>}
  <ContactList />
</div>
)
}
};

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
