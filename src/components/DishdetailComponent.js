import React from 'react'
import {Card, CardImg, CardImgOverlay, CardTitle, CardText} from 'reactstrap'

const Dish = ({dishDetails, dishToUpdate, ...rest}) =>{
    if(dishToUpdate === true){
        return(
        <div {...rest} className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width='100%' src={dishDetails.image} alt={dishDetails.name}/>   
                <CardImgOverlay>
                    <CardTitle>{dishDetails.name}</CardTitle>
                </CardImgOverlay>
                <CardText>{dishDetails.description}</CardText>
            </Card>
        </div>)
    }
    else{
        return(
            <div {...rest} className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width='100%' src={dishDetails.image} alt={dishDetails.name}/>   
                    <CardImgOverlay>
                        <CardTitle>{dishDetails.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        )
    }

}


export default Dish