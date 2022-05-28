import axios from 'axios';
// import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const Fetchnews = () => {
	const [news, setNews] = useState([]);

	const fetchnews = () => {
		// console.log('Clicked');
		axios
			.get(
				'https://newsapi.org/v2/top-headlines?country=us&apiKey=5e869cd2e4e1449ab92e274985f97358'
			)
			.then((response) => {
				console.log(response);
				setNews(response.data.articles);
			});
	};
	return (
		<div>
			<div className='container'>
				<div className='rows mt-3'>
					<div className='col-4'>
						<button className='btn btn-primary' onClick={fetchnews}>
							Fetchnews
						</button>
					</div>
				</div>
			</div>

			<div className='container'>
				<div className='row'>
					{news.map((value) => {
						return (
							<Card style={{ width: '18rem' }}>
								<Card.Img
									variant='top'
									src={value.urlToImage}
								/>
								<Card.Body>
									<Card.Title>{value.title}</Card.Title>
									<Card.Text>{value.description}</Card.Text>
									<Button variant='primary'>
										Go somewhere
									</Button>
								</Card.Body>
							</Card>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Fetchnews;
