import { PropTypes } from 'prop-types';
import { Card, Button, Text, Wrapper } from './ContactCard.styled';
export const ContactCard = ({ name, number, onDelete }) => {
  return (
    <Card>
      <Wrapper>
        <Text>{name}</Text>
        <Text>{number}</Text>
      </Wrapper>
      <Button type="button" onClick={onDelete}>
        Delete contact
      </Button>
    </Card>
  );
};

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
