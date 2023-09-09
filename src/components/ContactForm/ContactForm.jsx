import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault(); 
    const form = event.target;
    dispatch(addContact({name:form.elements.name.value, number:form.elements.number.value} ));
    console.log(addContact());  
    form.reset();
  };
  
  return (
    <form onSubmit={handleSubmit} className={css.main_container}>
      <label className={css.title}>
        Name
      </label>
      <input
        className={css.input}
        type="text"
        name="name"
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter your name"
      />
      <label className={css.label_text}>
        Number
      </label>
      <input
        className={css.input}
        type="tel"
        name="number"
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter your number"
      />
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
}