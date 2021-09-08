import React from 'react';
import CountryCard from './CountryCard';

const CountryCardList = ({obiekty})=>{
	return (
			<div id="boxGroup" className='fl w-25 pa2 vh-100'>
					{
						obiekty.features.map((item,i)=>{
							return (
									<CountryCard
										key={i}
										name={item.properties.NAME}
									/>	
							)
						})
					}

			</div>
		)
	}

export default CountryCardList;