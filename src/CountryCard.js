import React from 'react';

const CountryCard = ({name})=>{
	return(
		<div className='tc bg-light-yellow dib br3 pa2 ma2 grow bw2 shadow-5'>
			<div>{name}</div>
			
		</div>)
}
export default CountryCard;