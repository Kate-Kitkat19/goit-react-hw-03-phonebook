import { PropTypes } from 'prop-types';
import { StyledFilter, StyledLabel } from './Filter.styled';

export const Filter = ({ onFilterChange, filterValue }) => {
  return (
    <StyledLabel>
      Find contact by name
      <StyledFilter
        type="text"
        name="filter"
        onChange={onFilterChange}
        value={filterValue}
      ></StyledFilter>
    </StyledLabel>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};
