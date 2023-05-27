export const ShowError = () => {
    return (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center h-100">
            <h1 className="text-center text-danger">Ooops, ocurrió un error</h1>
            <button className="btn btn-danger " onClick={() => window.location.reload()}>Volver a cargar</button>
        </div>
    )
}