import React from 'react';

const Blog = () => {
    return (

<div class="flex  ">
  <div class="flex-1 h-16 bg-violet-300">
  <h1 className="text-3xl  font-bold flex-initial w-100">How Does React Work?</h1><font></font>
<p className="py-6 text-2xl  flex-initial w-100">React is a JavaScript library. React allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM.How does ReactJS work behind the scenes? Image result for how does react work React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process.</p><font></font>
  </div>
  <div class="flex-1 h-16 bg-fuchsia-400">
  <h1 className="text-3xl font-bold flex-initial w-100">What's the difference between state and props in React?</h1><font></font>
<p className="py-6 text-2xl flex-initial  w-100">Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p><font></font>
  </div>
  <div class="flex-1 h-16 bg-emerald-400">
  <h1 className="text-3xl font-bold flex-initial w-100">How Does React Work?</h1><font></font>
<p className="py-6 text-2xl flex-initial w-100">React is a JavaScript library. React allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM.How does ReactJS work behind the scenes? Image result for how does react work React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process.</p><font></font>
  </div>
</div>

    );
};

export default Blog;