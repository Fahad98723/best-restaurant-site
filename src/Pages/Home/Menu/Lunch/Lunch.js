import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useMenuitems from '../../../../Hook/useMenuitems';


import Lunchitem from '../Lunchitem/Lunchitem';

const Lunch = () => {
    const [items] = useMenuitems()
    const lunch = items.filter(item => item.time === 'lunch')
    return (
        <Container>
           <Row>
                {
                    lunch.map(item => <Lunchitem item = {item}></Lunchitem>)
                }
           </Row>
        </Container>
    );
};

export default Lunch;