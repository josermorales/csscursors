import React from 'react';
import cursors from '../constants/cursors';
import Cursor from '../components/cursor';

const Articles = () => (
 <main>
  {cursors.map(c => <Cursor key={c.value} {...c} />)}
  <style jsx>{`
    main {
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
     grid-gap: 1rem;
     grid-auto-flow: dense;
    }
  `}</style>
 </main>
);

export default Articles;