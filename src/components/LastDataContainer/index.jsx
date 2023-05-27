export const LastDataContainer = ({title, description, image}) => {
    return (
        <div className="col-lg-6 mb-4">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h5 className="m-0 font-weight-bold text-gray-800">{title}</h5>
				</div>
				<div className="card-body">
					<div className="text-center">
						<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "40rem"}} src={image} alt="Imagen" />
					</div>
					<p>{description}</p>
				</div>
			</div>
		</div>
    )
}