import * as C from "./style";

const Modal = ({ isModal, modalValue, fecharModal, InputDel, UserValue }) => {
  if (isModal) {
    const HandeClose = (e) => {
      if (e.target.id == "modal") {
        fecharModal();
      }
    };

    return (
      <C.DivBack id="modal" onClick={HandeClose}>
        <C.DivModal>
          <C.FatherHeader>
            <C.HeaderModal>
              <h2>{modalValue.name}</h2>
            </C.HeaderModal>
            <C.FecharModal onClick={() => fecharModal()}>
              <C.Span>X</C.Span>
            </C.FecharModal>
          </C.FatherHeader>
          <C.BodyModal>
            <C.DivBarProcess>
              <C.BarProcess>
                <C.Process
                  style={{
                    width: `${
                      modalValue.status == "Processando"
                        ? "50%"
                        : modalValue.status == "Solicitada"
                        ? "5%"
                        : "100%"
                    }`,
                  }}
                ></C.Process>
              </C.BarProcess>
            </C.DivBarProcess>
            <C.DivTextBar>
              <C.Span>Solicitada</C.Span>
              <C.Span>Processando</C.Span>
              <C.Span>Concluída</C.Span>
            </C.DivTextBar>
            <C.AreaDeTransferencia>
              <C.De>
                <C.BodySpan>Transferido de</C.BodySpan>
                <hr />
                <C.Depara>
                  <C.Span>{modalValue.de}</C.Span>
                  <C.Span>{modalValue.valor}</C.Span>
                </C.Depara>
              </C.De>
              <C.Para>
                <C.BodySpan>para</C.BodySpan>
                <hr />
                <C.Depara>
                  <C.Span>{modalValue.para}</C.Span>
                  <C.Span>{modalValue.valor}</C.Span>
                </C.Depara>
                {UserValue?.emailVerified != null ? (
                  <C.DelInput>
                    <button onClick={() => InputDel(modalValue.id)}>
                      Deletar input
                    </button>
                  </C.DelInput>
                ) : (
                  <C.CenterDelInput>
                    <p>registre-se, para poder deletar input</p>
                  </C.CenterDelInput>
                )}
              </C.Para>
            </C.AreaDeTransferencia>
          </C.BodyModal>
        </C.DivModal>
      </C.DivBack>
    );
  }
  return null;
};

export default Modal;
