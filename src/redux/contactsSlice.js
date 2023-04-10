import { createSlice } from "@reduxjs/toolkit"
import { fetchContacts, addContact, deleteContact } from "./operations";

const initialContactsState = {
    contacts: [],
    isLoading: false,
    error: null
}

const handlePending = state => {
    state.isLoading = true;
  };
  
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.error;
  };
    
  
  const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialContactsState,
        extraReducers: {
            [fetchContacts.pending]: handlePending,
            [fetchContacts.rejected]: handleRejected,
            [fetchContacts.fulfilled](state, action) {
                state.isLoading = false;
                state.error = null;
                state.contacts = action.payload;
            },
            [addContact.pending]: handlePending,
            [addContact.rejected]: handleRejected,
            [addContact.fulfilled](state, action){
                state.isLoading = false;
                state.error = null;
                state.contacts.push(action.payload);
            },
            [deleteContact.pending]: handlePending,
            [deleteContact.rejected]:handleRejected,
            [deleteContact.fulfilled](state, action) {
              state.isLoading = false;
              state.error = null;
              const idx = state.contacts.findIndex(contact => contact.id === action.payload.id)
              state.contacts.splice(idx,1)
            }
        }

    //     addContacts: {
    //     reducer(state, {payload:{name, number}}) {
    //         state.push({
    //             id:nanoid(),
    //             name,
    //             number,
    //         })
    //     },
    // },

    // deleteContact:{
    //     reducer(state, action){
    //     const index = state.findIndex(contact => contact.id === action.payload);
    //     state.splice(index, 1);
    //     }
    // }
    
  })


//   export const {addContacts, deleteContact} = contactsSlice.actions;
  export const contactsReducer = contactsSlice.reducer



 