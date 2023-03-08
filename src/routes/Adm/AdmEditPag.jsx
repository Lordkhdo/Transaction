import { useState } from "react";
import Header from "../../components/Header";
import { addDoc, collection } from "firebase/firestore/lite";
import { auth, provider, ColecaoDeDadosLiteral, db } from "../../Instance";

import * as C from "./style";

const AdmEditPag = () => {
  // const [de,setDe] =useState()
  // const [para,setPara] =useState()
  // const [descricao,setDescricao] =useState()
  // const [status,setStatus] =useState()
  // const [name,setName] = useState()
  // const [valor,setValor] = useState()


  const [objUser, setObjUser] = useState({
    de: "Gabriel",
    para: "",
    descricao: "",
    status: "Solicitada",
    name: "movimentaçao interna",
    valor: 0,
  });
  const mudar = (id, el)=>{
    setObjUser((prev)=>{
      return {...prev , [id] :el}
  
    })
  }
  const CreateUser = async () =>{
    await addDoc(collection(db, "usuarios"),objUser);
    console.log("foi");
  }
  return (
    <div>
      <Header adm={"adm"} />
      <C.MainAdm>
        <C.ModalMaterials>
          <C.FlexHeader>
            <C.Header>adicionar transaçoes</C.Header>
          </C.FlexHeader>
          <C.Main>
            <C.InnerMain>
              <div>
                <input value={objUser.de} placeholder={"de"} />

                <input
                  value={objUser.para}
                  onChange={(e) => mudar("para", e.target.value)}
                  type={"text"}
                  placeholder={"para"}
                />
              </div>
              <div>
                <input
                  value={objUser.descricao}
                  type={"text"}
                  placeholder={"descriçao"}
                  onChange={(e) => mudar("descricao", e.target.value)}
                />
                <input
                  value={objUser.valor}
                  type={"number"}
                  placeholder={"valor"}
                  onChange={(e) => mudar("valor", e.target.value)}
                />
              </div>
              <div>
                <select
                  name="name"
                  id="name"
                  onChange={(e) => mudar("status", e.target.value)}
                  style={{ width: "170px" }}
                >
                  <option value="Processando">Processando</option>
                  <option value="Solicitada">Solicitada</option>
                  <option value="Concluída">Concluída</option>
                </select>

                <select
                  name="name"
                  id="name"
                  onChange={(e) => mudar("name", e.target.value)}
                  style={{ width: "170px" }}
                >
                  <option value="deposito">deposito</option>
                  <option value="movimentaçao interna">
                    movimentaçao interna
                  </option>
                  <option value="resgate">resgate</option>
                </select>
              </div>
              <C.DivButton>
                <button onClick={CreateUser}>click</button>
              </C.DivButton>
            </C.InnerMain>
          </C.Main>
        </C.ModalMaterials>
      </C.MainAdm>
    </div>
  );
};

export default AdmEditPag;
