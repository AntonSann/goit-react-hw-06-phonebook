import {createSelector} from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;
const getAllContacts = state => state.contacts.items;

const getVisibleContacts = createSelector([getFilter, getAllContacts], 
    (filter, contacts)=>{const normalizedFilter = filter.toLowerCase();
  
        return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter),
        );},
        )

export default {getLoading, getFilter, getAllContacts, getVisibleContacts};