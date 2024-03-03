import React from 'react';
import { useEffect, useState } from 'react';

function Profession(){

	const [profession, setProfession] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:3001/professions/all');

				if(!response.ok){
					throw new Error('Petición fallida');
				}

				const data = await response.json();

				setProfession(data.data);
				console.log('DATA:', data);
			}catch {
				console.log('Error fetching data:', error);
			}
		}

		fetchData();
	}, []);
	console.log(profession);
	const proffesions = [];
	for(let i =0 ; i<profession.length; i++){
		proffesions.push(<button key={i} type="button" className="list-group-item list-group-item-action text-center"> {profession[i].name} </button>)
	}

    return(

        <>
        <section className="content profesiones">
				<h2 className="mt-3">Profesiones</h2>
				<div className="list-group shadow-sm p-3 mb-5 rounded">
					<h4 className="list-group-item list-group-item-action active text-center"
						aria-current="true">
						Listado de Profesiones
					</h4>
					
					<div>
						{proffesions}
					</div>

				</div>
			</section>
        </>
    )
}
export default Profession;