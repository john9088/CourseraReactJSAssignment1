import React from 'react'
import {Card, CardImg, CardImgOverlay, CardTitle, CardText} from 'reactstrap'

const SingleDish = ({dishDetails, dishToUpdate, ...rest}) =>{
        return(
            <div {...rest} className="col-12 col-xs-12 col-sm-6 col-md-5 m-1">
                <Card>
                    <CardImg width='100%' src={dishDetails.image} alt={dishDetails.name}/>   
                    <CardImgOverlay>
                        <CardTitle>{dishDetails.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        )
    //}
}


export default SingleDish