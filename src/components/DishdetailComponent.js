import React, {useState} from 'react'
import {Card, CardImg, CardImgOverlay, CardTitle, CardText} from 'reactstrap'


const Dish = ({dishDetails, dishToUpdate}) =>{

    
    const [comments, setComments] = useState(null);
    const [selectedDish,setSelectedDish] = useState(null);

    const onDishSelect = (dish) =>{
        setSelectedDish(dish);
        console.log(dish)
        let dishToModify = renderDish(dish.id);
    }

    const addDesc = (dish) =>{
        
    }
    
    const renderDish = (dishToUpdate) =>{

        if(dishDetails.id === dishToUpdate){
            let commentsTemp = dishDetails.comments.map(comment => {
                let date = new Date(comment.date)
                let splitDate = date.toDateString().split(" ")
                let dateView = splitDate[1]+" "+splitDate[2]+", "+splitDate[0]
                return(
                    <div key={comment.id} className="row">
                            {comment.comment}
                            <br/>
                            -- {comment.author}, {dateView}
                            <br/>
                    </div>)     
                
                } 
            );
                
            setComments(commentsTemp)
    
            return(
            <div key={dishDetails.id} className="col-12 col-md-5 m-1">
                <Card onClick = {() => onDishSelect(dishDetails)}>
                    <CardImg width='100%' object src={dishDetails.image} alt={dishDetails.name}/>   
                    <CardImgOverlay>
                        <CardTitle heading>{dishDetails.name}</CardTitle>
                    </CardImgOverlay>
                    <CardText>{dishDetails.description}</CardText>
                </Card>
            </div>)
        }
        else{
            return(
                <div key={dishDetails.id} className="col-12 col-md-5 m-1">
                    <Card onClick = {() => onDishSelect(dishDetails)}>
                        <CardImg width='100%' object src={dishDetails.image} alt={dishDetails.name}/>   
                        <CardImgOverlay>
                            <CardTitle heading>{dishDetails.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        }
    
    }

    if(dishToUpdate == null)
        return(
            <div key={dishDetails.id} className="col-12 col-md-5 m-1">
                <Card onClick = {() => onDishSelect(dishDetails)}>
                    <CardImg width='100%' object src={dishDetails.image} alt={dishDetails.name}/>   
                    <CardImgOverlay>
                        <CardTitle heading>{dishDetails.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        )
}

export default Dish