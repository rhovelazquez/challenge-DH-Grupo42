import React from 'react';
import { useEffect, useState } from 'react';
import banner from '../assets/img/banner.jpg'
import gloria from '../assets/img/foto1.jpg'
import daniel from '../assets/img/foto2.jpg'
import lee from '../assets/img/foto3.jpg'
import rocio from '../assets/img/foto4.jpg'
import victor from '../assets/img/foto5.jpg'
import luis from '../assets/img/foto6.jpg'


function Card(){

	const [candidate, setCandidate] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:3001/candidate/all');

				if(!response.ok){
					throw new Error('Petición fallida');
				}

				const data = await response.json();
				console.log(data);

				setCandidate(data.data);
				/* console.log(candidate); */
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		}
		console.log(candidate);
		fetchData();
	}, []);

    return(
        <>
		<main className="content-wrap">

			{/* <!--Sección aspirantes--> */}
			<section className="content aspirantes">
				<h2>Aspirantes</h2>
				<article className="person-boxes">

						<div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
							<div className="box-avatar">
								<img src={gloria} alt="Gloria"/>
							</div>
							<div className="box-bio">
								<h2 className="bio-name">{candidate[0].name}</h2>
								<p className="bio-position">Administrador</p>
							</div>
							<div className="box-actions">
								<button>
									<i className="bi bi-star"></i>
								</button>
								<button>
									<i className="bi bi-chat"></i>
								</button>
								<button>
									<i className="bi bi-envelope"></i>
								</button>
							</div>
						</div>
				</article>
			</section>
			
		</main>
        
        </>
    )
}
export default Card;