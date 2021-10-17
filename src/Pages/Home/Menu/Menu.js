import { Container, Tab ,Tabs} from 'react-bootstrap';
import Breakfast from './Breakfast/Breakfast';

import Dinner from './Dinner/Dinner';
import Lunch from './Lunch/Lunch';
import './Menu.css'
const Menu = () => {
    return (
        <Container className = 'mx-auto py-5'>
            <Tabs
            id="controlled-tab-example"        
            className="mb-3"
            >
            <Tab pullRight eventKey="dinner" title="Dinner">
            <Dinner></Dinner>
            </Tab>
            <Tab eventKey="lunch" title="Lunch">
            <Lunch></Lunch>
            </Tab>
            <Tab eventKey="breakfast" title="Breakfast">
            <Breakfast></Breakfast>
            </Tab>      
            </Tabs>
            <div className='text-center mt-3'>
                <button className="btn btn-danger ">Checkout Your Food</button>
            </div>
            
        </Container>
    );
};

export default Menu;