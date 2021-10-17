import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useMenuitems from '../../../Hook/useMenuitems';
import DetailsCarousel from '../DetailsCarousel/DetailsCarousel';
import useAuth from '../../../Hook/useAuth.js'
const MenuDetails = () => {

    const [items] = useMenuitems()
    const {itemId} = useParams()
    const {count, setCount,cart,setCart} = useAuth()
    // console.log(items);
    const itemDetail = items.find(item => item.id === parseFloat(itemId))
    // console.log(itemDetail);
    // const extraItem = items.filter(item => item.time === itemDetail[0].time)
    // console.log(extraItem);
    const add = () => {
        setCount(count + 1);
        console.log(count);
    }
    const remove = () => {
        setCount(count - 1);
        console.log(count);
        if (count<=0) {
            setCount(0)
        }
    }
    const history = useHistory()

    const handleCart = (item) => {
        const newCart = [...cart,item]
        itemDetail.quantity = count   
        
        if (itemDetail.quantity) {        
        setCart(newCart)       
        setCount(0)  
        history.push('/placeorder')
        }
        
    }
    return (       
       <Container>
           <Row className = 'd-flex align-items-center py-5'>
               <Col lg='6'>
               <h2>{itemDetail?.name}</h2>
               <p>{itemDetail?.details}</p>
               <h2>${itemDetail?.price}</h2>

               <i onClick={remove} className="fas fa-minus text-danger me-1"></i>

               <input style={{width : '40px', fontSize:'20px'}} className= 'mb-3 py-1 rounded border-0 text-center' type="number" min='0' name="" readOnly value= {count} id="" />

                <i onClick={add} className="fas fa-plus text-danger"></i>

               <br />

               <button onClick= {() => handleCart(itemDetail)}  className="btn btn-danger">Add Cart</button>
               
               </Col>
               <Col lg='6'>
               <img src={itemDetail?.img} className= 'img-fluid' alt="" />
               </Col>               
           </Row>
           
           {/* <Row>
                {
                    extraItem.map(item => <DetailsCarousel item = {item}></DetailsCarousel>)
                }
           </Row> */}
       </Container>
    );
};

export default MenuDetails;