import './App.css';
import { useState } from 'react';
import ContactsList from './ContactsList/ContactsList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { searchByName } from '../redux/contactsSlice';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getError, getIsLoading } from "../redux/selectors";
import { fetchContacts } from "../redux/operations";

export default function App() {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(searchByName(filter));
  // }, [dispatch, filter]);


        return (
          <div className='container'>
            <div className='main_container'>
              <h1>Phonebook</h1>
              <ContactForm />
              <h2>Contacts</h2>
              <Filter onChange={e => setFilter(e.currentTarget.value)}/>
              {isLoading && !error && <b>Request in progress...</b>}
              <ContactsList/>
            </div>
          </div>
        )
      }



    //   return (
    //     <div className='container'>
    //       <div className='main_container'>
    //         <h1>Phonebook</h1>
    //         <ContactForm />
    //         <h2>Contacts</h2>
    //         <Filter onFilterChange={setFilter} />
    //         <ContactsList filterVal={filter}/>
    //       </div>
    //     </div>
    //   )
    // }