import { useEffect, useState } from "react";
import AboveTheMain from "./components/AboveTheMain";
import Header from "./components/Header";
import Main from "./components/Main";
import { Global } from "./styles/Global";
import { auth, provider, ColecaoDeDadosLiteral, db } from "./Instance";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Modal from "./components/Modal";
import { deleteDoc, getDocs, doc } from "firebase/firestore/lite";


function App() {
  const [count, setCount] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [modalValue, setModalValue] = useState([]);
  const [busca, setBusca] = useState("");
  const [status, setStatus] = useState("");
  const [UserValue, setUserValue] = useState(null);
  // TODO:dasdasd
  // *comentario
  // comentario
  // ?pergunta
  // !alerta

  // firebase colections

  const CadastroGoogle = () => {
    signInWithPopup(auth, provider).then((data) => {
      const user = data.user;
      localStorage.setItem("users", JSON.stringify(data.user));
      setUserValue(JSON.parse(localStorage.getItem("users")))
    });
  };

  const getUsers = async () => {
    const data = await getDocs(ColecaoDeDadosLiteral);
    setCount(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  // firebase colections --/>

  const filtro = count.filter((user) =>
    user.name?.includes(busca.toLowerCase())
  );
  const BuscaFiltrado = filtro.filter((user) =>
    user.status?.includes(status == "status" ? "" : status)
  );

  useEffect(() => {
    getUsers();
    setUserValue(JSON.parse(localStorage.getItem("users")));
  }, []);
  const ExibirModal = (item) => {
    const TmpArr = { ...item };
    setModalValue(TmpArr);
    setIsModal(true);
  };
  const fecharModal = () => {
    setIsModal(false);
  };

  const InputDel = async (id) =>{
    const UserDoc = doc(db, "usuarios", id);
    await deleteDoc(UserDoc)
     getUsers();
     setIsModal(false)
  }
  return (
    <div className="App ">
      <Header UserValue={UserValue} adm={"Home"} />
      <AboveTheMain
        setBusca={setBusca}
        setStatus={setStatus}
        CadastroGoogle={CadastroGoogle}
        UserValue={UserValue}
        setUserValue={setUserValue}
      />
      <Main
        ExibirModal={ExibirModal}
        BuscaFiltrado={BuscaFiltrado}
        setModalValue={setModalValue}
        UserValue={UserValue}
      />
      <Global />
      <Modal
        isModal={isModal}
        fecharModal={fecharModal}
        modalValue={modalValue}
        InputDel={InputDel}
        UserValue={UserValue}
      />
    </div>
  );
}

export default App;
