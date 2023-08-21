import { nanoid } from 'nanoid';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={nanoid()}>
          {contact.name}: {contact.number}
        </li>
      ))}
    </ul>
  );
};