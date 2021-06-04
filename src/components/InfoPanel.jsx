import React from 'react';
import RowDropdown from './RowDropdown';

const InfoPanel = (props) => {
	/* This is the top level of the 'info panel'	Component architecture. It takes nested JSON	data
  and displays it as a list of rows which	can be toggled open to examine further. 
  This	specific component lists the title of the broad type of info being examined ie. 'skills' or 'about'
  then sets up the 'row dropdowns' which display a sub category and a button to unfold that nested data.

  */
	return (
		<section class="info-panel">
			{ props.title ? <h1>{props.title}</h1> : null }
			{
					Object.keys(props.info)
					.map((area) =>  
						<RowDropdown title={area} contents={props.info[area]}/>
					)
				}
		</section>
	);
}
export default InfoPanel;
