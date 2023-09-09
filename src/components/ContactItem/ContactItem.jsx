import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import css from './ContactItem.module.css' 

const ContactsItem = ({ contactName, contactNumber, contactId }) => {
	const dispatch = useDispatch();

	const handleDelete = () => dispatch(deleteContact(contactId));

	return (
		<li className={css.item}>
			<div>
				<span>
                    {contactName} : {contactNumber}
				</span>
				<button onClick={handleDelete} className={css.btn}>
					Delete
				</button>
			</div>
		</li>
	);
};

export default ContactsItem;