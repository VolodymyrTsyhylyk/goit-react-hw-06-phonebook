import ContactsItem from '../ContactsItem/ContactsItem';
import { List } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/contacts-actions';

export default function Contacts() {
  const contacts = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const deleteContact = id => {
    dispatch(actions.deleteContact(id));
  };

  return (
    <List>
      {filteredContacts().map(contact => (
        <ContactsItem
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </List>
  );
}