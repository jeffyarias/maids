<<<<<<< HEAD
import React from 'react';
import classes from './footer.module.css';


const footer = ()=> {
const date = new Date();
const year = date.getFullYear();

return(
<div>
    
<p className={classes.footerparag}>Boston Maids &copy; {year}</p>


</div>


);




};
=======
import React from 'react';
import classes from './footer.module.css';


const footer = ()=> {
const date = new Date();
const year = date.getFullYear();

return(
<div>
    
<p className={classes.footerparag}>Boston Maids &copy; {year}</p>


</div>


);




};
>>>>>>> e6ca041f8984e019191b23abc25f401e7a164900
export default footer;