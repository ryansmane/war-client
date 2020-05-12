import React from 'react';

function InitPage(props) {
   return (
      <>
         <h1>Click your deck to ready up!</h1>
         <img
            src='/home/ryansmane/warroom/war-client/build/images/cardbackwar.png'
            alt='click here to ready up'
            onClick={() => props.initMyself()}
         ></img>
      </>
   );
}

export default InitPage;
