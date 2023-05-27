import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export const LastDataContainer = ({type, data}) => {
	const [ infoToDisplay, setInfoToDisplay ] = useState({
		title: "Título",
		imageUrl: "default.jpg",
		description: "Una descripcion"
	});
	const {title, imageUrl, description, name} = infoToDisplay;

	useEffect(() => {
		if(!data) return;

		if (type === "product") {
			setInfoToDisplay({
				title: "Último usuario agregado: ",
				name: data.name,
				imageUrl: data.images[0].image,
				description: data.description
			})
		}

		if(type === "user") {
			setInfoToDisplay({
				title: "Último producto agregado: ",
				name: data.name,
				imageUrl: data.avater,
				description: data.email
			})
		}
	}, [data]);

    return (
        <div className="col-lg-6 mb-4">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h5 className="m-0 font-weight-bold text-gray-800">{title}</h5>
				</div>
				<div className="card-body">
					<div >
						<h6>{name}</h6>
					</div>
					<div className="text-center">
						<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "40rem"}} src={imageUrl} alt="Imagen" />
					</div>
					<p>{description}</p>
				</div>
			</div>
		</div>
    )
}

LastDataContainer.propTypes = { 
	type: PropTypes.string.isRequired,
	data: PropTypes.object.isRequired,
}