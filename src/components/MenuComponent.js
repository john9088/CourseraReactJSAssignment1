import React, {useState} from 'react'
import Dish from './DishdetailComponent'
import Comments from './DishComments'

const Menu = ({dishes}) =>{

    let [menu, setMenu] = useState(null);
    let [selectedDish, setSelectedDish] = useState(null);
    
    let menuTemp = null

    const upDateDish = (dishToUpdate) => {
        setSelectedDish(dishToUpdate)
        menuTemp = dishes.map(dish => {
            if(dish.id === dishToUpdate.id){
                return <Dish
                            key={dish.id} 
                            onClick = {() => upDateDish(dish)}
                            dishDetails={dish} 
                            dishToUpdate={true}
                        />
            }
                
            else{
                return <Dish
                            key={dish.id} 
                            onClick = {() => upDateDish(dish)}
                            dishDetails={dish} 
                            dishToUpdate={false}
                        />
            }
        })
        setMenu(menuTemp)
    }
    const renderDish = () => {
        
        menuTemp = dishes.map(dish => 
            <Dish
                key={dish.id} 
                onClick = {() => upDateDish(dish)}
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
                {menu}
                <div className="col mt-5">
                    <h4>Comments</h4>
                    <Comments dishDetails={selectedDish} />
                </div>
                
            </div>
        </div>
    )

}

export default Menu