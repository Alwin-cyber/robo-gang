import React from 'react';
import '../search-box/search-box.css';

//destrcuturing the props from the object
export const SearchBox = ({placeholder,handleChange}) => (
	<input className="search-box" type="search" placeholder={placeholder} onChange={handleChange}/>
);
/*functional components have no access to life-cycle methods,constructor,state*/
/*functional components accepts the props and return some HTML*/