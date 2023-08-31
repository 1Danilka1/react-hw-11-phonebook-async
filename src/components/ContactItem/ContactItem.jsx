import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import css from './ContactItem.module.css' 

const ContactsItem = ({ id, name, number }) => {
	const dispatch = useDispatch();

	const handleDeleteClick = () => {
		dispatch(deleteContact(id)); // Просто передайте идентификатор
	};

	return (
		<li className={css.item}>
			<div>
				<span>
                    {name} :  
					{number}
				</span>
				<button onClick={handleDeleteClick} className={css.btn}>
					Delete
				</button>
			</div>
		</li>
	);
};

export default ContactsItem;