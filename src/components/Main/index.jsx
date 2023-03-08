import { BsCardList } from "react-icons/Bs";
import * as C from "./styles";


const Main = ({ ExibirModal, BuscaFiltrado, setModalValue }) => {
  return (
    <C.Container>
      <C.CenterBigCard>
        <C.HeaderList>
          <C.Father>
            <BsCardList /> <C.Span>LISTA DE TRANSAÇOES</C.Span>
          </C.Father>

          <C.OtherFather>
            <C.Span>
              <BsCardList />
            </C.Span>
          </C.OtherFather>
        </C.HeaderList>

        <C.Table>
          <C.Thead >
            <C.Tr>
              <C.Th><C.letras>Titulo</C.letras></C.Th>
              <C.Th><C.letras>Status</C.letras></C.Th>
              <C.Th><C.letras>Descriçao</C.letras></C.Th>
              <C.Th><C.letras>Valor</C.letras></C.Th>
              <C.ThLast>--</C.ThLast>
            </C.Tr>
          </C.Thead>

          <C.Tbody>
            {BuscaFiltrado.map((item) => (
              <C.Tr key={item.id}>
                <C.ThB
                  style={{ cursor: "pointer" }}
                  key={item.id}
                  onClick={() => {
                    setModalValue(item);
                    ExibirModal(item);
                  }}
                >
                 <C.letras> {item.name}</C.letras>
                </C.ThB>
                <C.ThB><C.letras>{item.descricao}</C.letras></C.ThB>
                <C.ThB><C.letras>{item.status}</C.letras></C.ThB>
                <C.ThB><C.letras>{item.valor}</C.letras></C.ThB>
              </C.Tr>
            ))}
          </C.Tbody>
        </C.Table>
      </C.CenterBigCard>
    </C.Container>
  );
};

export default Main;

    function Otherffather({}) {
      return (<C.OtherFather>
            <C.Span>
              <BsCardList />
            </C.Span>
          </C.OtherFather>);
    }
  