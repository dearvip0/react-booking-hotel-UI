import React from 'react';
import './searchItem.css';
const SearchItem = () => {
	return (
		<div className='searchItem'>
			<img
				src='https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1'
				alt=''
				className='siImg'
			/>
			<div className='siDesc'>
				<div className='siTitle'>Tower Street Apartments</div>
				<div className='siDistance'>500m from center</div>
				<div className='siTaxiOp0'>Free airport taxi</div>
				<span className='siSubtitle'>
					Studio Apartments with Air conditioning
				</span>
				<div className='siFeatures'>
					Entire studio • 1 bathroom • 21m² 1 full bed
				</div>
				<span className='siCancelOp'>Free cancellation </span>
				<span className='siCancelOpSubtitle'>
					You can cancel later, so lock in this great price today!
				</span>
			</div>
			<div className='siDetails'>
				<div className='siRating'>
					<span>Excellent</span>
					<button>8.9</button>
				</div>
				<div className='siDetailTexts'>
					<span className='siPrice'>$112</span>
					<span className='siTaxOp'>Includes taxes and fees</span>
					<button className='siCheckButton'>See availability</button>
				</div>
			</div>
		</div>
	);
};

export default SearchItem;
