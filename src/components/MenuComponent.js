import React, {useState} from 'react'
import SingleDish from './ViewSingleDish'
import DishDetail from './DishdetailComponent'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


const Menu = ({dishes,comments}) => {

    let [menu, setMenu] = useState(null);
    let [selectedDish, setSelectedDish] = useState(null);
    let [dishComment, setDishComment] = useState([]);
    
    let menuTemp = null

    const upDateDish = (dishToUpdate) => {
        let dishID = dishToUpdate.id
        let tempDishComments = comments.filter(comment => comment.dishId === dishID)
        setDishComment(tempDishComments)
        setSelectedDish(dishToUpdate)
    }

    const renderDish = () => {
        
        menuTemp = dishes.map(dish => 
            <SingleDish
                key={dish.id} 
                // onClick = {() => upDateDish(dish)}
                dishDetails={dish} 
                dishToUpdate={false}
            />)
        setMenu(menuTemp)
    }
    
    if(menu == null)
        renderDish()

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {menu}
                <DishDetail 
                    dish={selectedDish===null?null:selectedDish}
                    dishComment={dishComment}
                />
            </div>
        </div>
    )

}

export default Menu