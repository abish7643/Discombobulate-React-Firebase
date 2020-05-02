import React from 'react';

const QuestionRender = ({ questions }) => {
    
    if (questions === undefined){
        return <span className="highlighted__text">...</span>;
      }
      return (
        <React.Fragment>
              <div key={questions.imageURL} className='imagecontainer'>
              <img src={questions.imageURL}
              className='imagecontainer__img neumorphic__shadow' 
              alt=' '/>
              <p className='imagecontainer__caption'>{questions.question}</p>
          </div>
      </React.Fragment>
      );
    };

export default QuestionRender