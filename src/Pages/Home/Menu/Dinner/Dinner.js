import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useMenuitems from '../../../../Hook/useMenuitems';


import DinnerItem from '../DinnerItem/DinnerItem';

const Dinner = () => {
    const [items] = useMenuitems()
    const dinner = items.filter(item => item.time === 'dinner')
    return (
            <Container>
                <Row>
                {
                    dinner.map(item => <DinnerItem item = {item}></DinnerItem>)
                }
                </Row>
            </Container>
    );
};

export default Dinner;