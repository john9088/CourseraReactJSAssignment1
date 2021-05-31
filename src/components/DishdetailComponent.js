import React from 'react'
import {Card, CardImg, CardImgOverlay, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


const DishDetail = ({dish, dishComment}) => {
    if(dish === null)
        return(<div></div>)
    else{
        const getComments = () => {
            if(dishComment !== null){
                let commentsTemp = dishComment.map(comment => {
                    let date = new Date(comment.date)
                    let splitDate = date.toDateString().split(" ")
                    let dateView = splitDate[1]+" "+splitDate[2]+", "+splitDate[0]
                    return(
                        <div key={comment.id} className="row m-1">
                                <p>
                                {comment.comment}
                                <br/>
                                -- {comment.author}, {dateView}    
                                </p>
                        </div>
                    )} 
                );
                return commentsTemp;
            }
            else
                return <div></div> 
        }

        return(
            <div className='container'>
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-xs-12 col-sm-6 col-md-5 m-1">
                        <Card>
                            <CardImg width='100%' src={dish.image} alt={dish.name}/>
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                        <Card>
                            <CardText>{dish.description}</CardText>
                        </Card>
                    </div>
                    <div className="col-12 col-xs-12 col-sm-6 col-md-5 mt-1">
                        <h4>Comments</h4>
                        {getComments()}
                    </div>
                </div>
            </div>
        )
    }
        
}

export default DishDetail