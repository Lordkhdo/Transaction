import { AiOutlineSearch } from "react-icons/ai";
import * as C from "./style";
import GooglePn from "../../img/GooglePn.png"
import GooglePnG from "../../img/GooglePnG.png"
import GooglePnMobal from "../../img/GooglePnMobal.png"

 

const AboveTheMain = ({
  setBusca,
  setStatus,
  CadastroGoogle,
  UserValue,
  setUserValue,
}) => {
  const DeslogarDoGoogle = () => {
    localStorage.users = null;
    localStorage.email = null;
    setUserValue(null)
  };
  return (
    <C.Container>
      <C.Div>
        <C.Input
          type="text"
          placeholder="Pesquise pelo titulo"
          onChange={(e) => setBusca(e.target.value)}
        />

        <C.Select onChange={(e) => setStatus(e.target.value)}>
          <C.Option>status</C.Option>
          <C.Option value="Solicitada">Solicitada</C.Option>
          <C.Option value="Processando">Processando</C.Option>
          <C.Option value="Concluída">Concluída</C.Option>
        </C.Select>
      </C.Div>
      <C.RigthDiv>
        {UserValue == null ? (<>
          <C.FaderBlock>
          <C.GooglePng id="sedt" src={GooglePnG} onClick={CadastroGoogle} />
          <C.GooglePngMobal id="sedto" src={GooglePnMobal} onClick={CadastroGoogle} />
          </C.FaderBlock>
          {/* <button >Logar</button> */}
        </>
        ) : (<C.DelInput>
          
          <button onClick={DeslogarDoGoogle}>deslogar</button>
          </C.DelInput>
        )}
      </C.RigthDiv>
    </C.Container>
  );
};

export default AboveTheMain;
