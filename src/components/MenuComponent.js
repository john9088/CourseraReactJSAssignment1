import React, {useState} from 'react'
//import {Card, CardImg, CardImgOverlay, CardTitle, CardText} from 'reactstrap'
import Dish from './DishdetailComponent'

const Menu = ({dishes}) =>{

    const [menu, setMenu] = useState(null);
    
    let menuTemp = null

    
    const renderDish = (dishID) => {
        const test = () => {
            console.log("Hello")
        }
        menuTemp = dishes.map(dish => 
            <Dish 
                onClick = {() => test()}
                dishDetails={dish} 
                dishToUpdate={dishID}
            />)
        setMenu(menuTemp)
    }
    
    if(menu == null)
        renderDish(null)
    
    return(
        <div className="container">
            <div className="row">
                {menu}
                {/* <div class="col mt-5">
                    <CardTitle className="row" heading>Comments</CardTitle>
                    {comments}
                </div> */}
                
            </div>
        </div>
    )

}

export default Menu