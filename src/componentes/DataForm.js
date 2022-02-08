import { useContexto } from "./Contexto";

const DataForm = ({onClose}) => {

    const { compra } = useContexto();

    return (
      <div className="modal fade" id="modalDatos" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalDatosLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalDatosLabel">Su compra fue exitosa</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              {compra ? 
                <div>Orden De Compra {compra}</div> 
                : 
                <div className="spinner-border text-secondary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default DataForm;