import React from 'react';
import {Card} from '../card/card_component';
import './card_list_style.css';

export const CardList = (props) => (
	<div className='card-list'>
		{
           props.users.map( user => (<Card key={user.id} users={user}/>))
        }
	</div>
);