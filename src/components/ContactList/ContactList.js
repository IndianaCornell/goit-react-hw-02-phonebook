import { nanoid } from 'nanoid';
import { ItemsList, StyledItem } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <ItemsList>
      {contacts.map(contact => (
        <StyledItem key={nanoid()}>
          {contact.name}: {contact.number}
        </StyledItem>
      ))}
    </ItemsList>
  );
};
