import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const handlePending = state => {
    state.isLoading = true;
  };
  
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };

  const contactsInitialState = {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: "",
  };

  const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,

        [addContact.pending]: handlePending,
        [addContact.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [addContact.rejected]: handleRejected,

        [deleteContact.pending]: handlePending,
        [deleteContact.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                contact => contact.id === action.payload.id
            );
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        },
        [deleteContact.rejected]: handleRejected,
    },
}});

export const contactsReducer = contactsSlice.reducer;
export const { searchByName } = contactsSlice.actions;



// const contactsSlice = createSlice({
//     name: "contacts",
//     initialState: {
//         items: [],
//         isLoading: false,
//         error: null,
//         filter: ""
//     },
//     extraReducers: {
//         [fetchContacts.pending]: handlePending,
//         [fetchContacts.fulfilled]: (state, action) => {
//             state.isLoading = false;
//             state.error = null;
//             state.items = action.payload;
//         },
//         [fetchContacts.rejected]: handleRejected,

//         [addContact.pending]: handlePending,
//         [addContact.fulfilled]: (state, action) => {
//             state.isLoading = false;
//             state.error = null;
//             state.items.push(action.payload);
//         },
//         [addContact.rejected]: handleRejected,

//         [deleteContact.pending]: handlePending,
//         [deleteContact.fulfilled]: (state, action) => {
//             state.isLoading = false;
//             state.error = null;
//             const index = state.items.findIndex(
//                 contact => contact.id === action.payload.id
//             );
//             if (index !== -1) {
//                 state.items.splice(index, 1);
//             }
//         },
//         [deleteContact.rejected]: handleRejected,
//     },
// });

// export const contactsReducer = contactsSlice.reducer;


// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const contactsInitialState = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const contactsSlice = createSlice({
//     name: 'contacts',
//     initialState: contactsInitialState,
//     reducers: {
//         addContact: {
//             reducer(state, action) {
//                 state.push(action.payload);
//             },
//             prepare(name, number) {
//                 return {
//                     payload: {
//                         name,
//                         number,
//                         id: nanoid(),
//                     },
//                 };
//             },
//         },
//         deleteContact(state, action) {
//             const index = state.findIndex(contact => contact.id === action.payload);
//             if (index !== -1) {
//                 state.splice(index, 1);
//             }
//         },
//     },
// });

// export const {addContact, deleteContact} = contactsSlice.actions;

// export const contactsReducer = contactsSlice.reducer;