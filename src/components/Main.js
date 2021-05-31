import React from 'react'

import Menu from './MenuComponent';
import Home from './HomeComponenet'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Contact from './Contact'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import DishDetail from './DishdetailComponent'
import {connect} from 'react-redux'


const mapStateToProps = (state) => {
    return{
        dishes:state.dishes,
        leaders: state.leaders,
        promotion: state.promotion,
        comments:state.comments
    }
}


const Main = ({dishes, promotion, leaders, comments}) =>{    
    const HomePage = () => {
        console.log(promotion)
        return(
            <Home 
                dish={dishes.filter((dish) => dish.featured)[0]}
                promotion={promotion.filter((promo) => promo.featured)[0]}
                leader={leaders.filter((leader) => leader.featured)[0]}
            />
        );
      }

    const DishWithId = ({match}) => {
        return(
            <DishDetail dish={dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                        dishComment={comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
        );
    };

    return(
        <div className="App">   
            <Header />
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route exact path='/menu' component={() => <Menu dishes={dishes} comments={comments}/> }/>
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/contactus' component={Contact}/>
                    <Redirect to='/home'/>
                </Switch>
            <Footer/>
        </div>
    )
}

export default withRouter(connect(mapStateToProps)(Main))