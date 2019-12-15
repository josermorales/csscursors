import React from 'react';

const Cursor = props => (
 <article title={`${props.value}: ${props.caption}`}>
   <code>
     {props.value}
   </code>
   <summary>
     {props.caption}
   </summary>
   <style jsx>{`
     article, summary, code {
       cursor: ${props.value};
     }
     summary {
       color: #627D98;
       padding: .5rem 1rem;
     }
     article {
       display: grid;
       grid-template-rows: 1fr 5fr;
       box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
       border-radius: .5rem;
       background-color: #fff;
       transition: .25s;
     }
     article:hover {
      background-color: #f0f4f8;
     }
     code {
       color: #102A43
       font-size: 1rem;
       font-weight: 700;
       font-style: normal;
       letter-spacing: 0.025rem;
       background-color: #D9E2EC;
       border-radius: .5rem .5rem 0 0;
       padding: 0 1rem;
      
     }
   `}</style>
 </article>
);

export default Cursor;