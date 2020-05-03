import React from 'react';
import { Link } from 'react-router-dom';
class NotFoundPage extends React.Component{
    render(){
        return (
        <div className='container__fullpage'>    
        <h6 className='container__fullpage__404'>404</h6>
        <button className='button__form__submit link__decoration unhighlighted__text'> 
          <Link to="/" className='link__decoration highlighted__text'>Go to Home </Link>
        </button>
      </div>
    );
    }
}export default NotFoundPage;