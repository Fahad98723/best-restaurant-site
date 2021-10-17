import { Container, Row } from 'react-bootstrap';
import useMenuitems from '../../../../Hook/useMenuitems';

import Breakfastitem from '../Breakfastitem/Breakfastitem';

const Breakfast = () => {
    const [items] = useMenuitems()
    const breakfast = items.filter(item => item.time === 'breakfast')
    return (
        <Container>
            <Row>
            {
                breakfast.map(item => <Breakfastitem key = {item.id} item = {item}></Breakfastitem>)
            }
            </Row>
        </Container>
    );
};

export default Breakfast;