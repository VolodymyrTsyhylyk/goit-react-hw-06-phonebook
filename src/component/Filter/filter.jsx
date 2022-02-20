import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Container } from './Filter.styled';
import { changeFitler } from '../../redux/contacts-actions';

export default function Filter() {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <Container>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={({ target }) => dispatch(changeFitler(target.value))}
      />
    </Container>
  );
}