
import "../../../src/styles/stylePerfil/perfil.css";
const ModalFotoPerfil = ({isOpen, onClose, onSave, imagePreview})=>{
    if (!isOpen) {
        return null;
    }
    return(
        <>
        <div className="ContenedorModalFotoPerfil">
      <div className="contendedorCentroModal">
        <h2 className="TextoPrevizualizar">Previsualizar Imagen</h2>
        <img className="iamgenModalPrevizualizar" src={imagePreview} alt="Previsualización" />
        <div className="DireccionDeBotones">
        <button onClick={onSave} className="BotonPrevizualizar">Guardar</button>
        <button onClick={onClose} className="BotonPrevizualizar">Cancelar</button>
        </div>
        
      </div>
    </div>
        </>
    )
}
export default ModalFotoPerfil;
