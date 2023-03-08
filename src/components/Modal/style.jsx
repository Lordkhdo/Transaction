import styled from "styled-components";

export const DivBack = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.705);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
export const DivModal = styled.div`
  width: 400px;
  height: 400px;
  background-color: #fff;
  border-radius: 10px;
`;
export const FatherHeader = styled.div`
  display: flex;
`;
export const HeaderModal = styled.div`
  width: 90%;
  text-align: center;
  margin-top: 10px;
  margin-left: 40px;
`;
export const FecharModal = styled.div`
  width: 10%;
  display: flex;
  align-items: initial;
  justify-content: center;
  transition: all 0.6s;
  padding: 10px;
  z-index: 10;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
export const BodyModal = styled.div`
  width: 100%;
`;
export const DivBarProcess = styled.div`
  width: 100%;
  margin-top: 30px;
  height: 60px;
  display: flex;
  align-items: center;
`;
export const BarProcess = styled.div`
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.644);
  height: 20px;
  min-width: 20px;
  width: 100%;
  margin-left: 50px;
  margin-right: 50px;
`;
export const Process = styled.div`
  // lembrar de adicionar variavel
  background-color: rgb(0, 163, 163);
  height: 20px;
  border-radius: 5px;
`;
export const DivTextBar = styled.div`
  display: flex;
  justify-content: space-around;
`;  
export const Span = styled.span`
  font-weight: 600;
`;
export const AreaDeTransferencia = styled.div`
  height:80%;
  width: 90%;
  padding: 20px;
`;
export const BodySpan = styled.span`
  font-weight: 600;
  font-size: x-large;
  margin-bottom: 20px;
`;

export const De = styled.div`
  margin-bottom: 20px;
`;
export const Depara = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Para = styled.div`
  margin-bottom: 20px;
`;

export const DelInput = styled.div`
  display: flex;
  justify-content: center;

  >button{
    background-color: #f2f2f2;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) .5s ;

      &:hover{
        background-color: #e9e8e8;
      }
  }
`;
export const CenterDelInput = styled.div`
display: flex;
justify-content: center;
  
`;