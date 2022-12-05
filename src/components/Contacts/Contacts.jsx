import { PropTypes } from 'prop-types';
import { ContactCard } from '../ContactCard/ContactCard';
import {List, ListItem} from './Contacts.styled'
export const Contacts = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => {
        return (
          <ListItem key={id}>
            <ContactCard
              name={name}
              number={number}
              id={id}
              onDelete={() => onDelete(id)}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
