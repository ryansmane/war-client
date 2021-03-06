import React, { useState } from 'react';
const _ = require('lodash');

function ActionSelect(props) {
   return (
      <>
         {!props.lost && (
            <div className='action-select'>
               {!props.warState && !props.acted && (
                  <img
                     className='card animation-card'
                     src='../images/cardbackwar.png'
                     alt='alt'
                     onClick={() => props.shoot()}
                  ></img>
               )}
               {!props.warState && props.acted && (
                  <img
                     className='card'
                     src='../images/cardbackwar.png'
                     alt='alt'
                  ></img>
               )}
               {props.warState &&
                  props.warringPlayers &&
                  props.warringPlayers[props.id] &&
                  !props.acted && (
                     <img
                        className='card'
                        src='../images/cardbackwar.png'
                        alt='alt'
                        onClick={() => props.resolveWar()}
                     ></img>
                  )}
               {props.warState &&
                  props.warringPlayers &&
                  props.warringPlayers[props.id] &&
                  props.acted && (
                     <img
                        className='card'
                        src='../images/cardbackwar.png'
                        alt='alt'
                     ></img>
                  )}
               {props.warState &&
                  props.warringPlayers &&
                  !props.warringPlayers[props.id] && (
                     <img
                        className='card'
                        src='../images/cardbackwar.png'
                        alt='alt'
                     ></img>
                  )}
               <div></div>
            </div>
         )}
         {props.lost && (
            <img
               className='card'
               src='../images/lost_cardbackwar.png'
               alt='alt'
            ></img>
         )}
      </>
   );
}

export default ActionSelect;
