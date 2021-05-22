import React from 'react'

const Comments = ({dishDetails}) => {
    if(dishDetails !== null){
        let commentsTemp = dishDetails.comments.map(comment => {
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
                        
                        
                </div>)     
            
            } 
        );
        return commentsTemp;
    }
    else
        return null    
}

export default Comments