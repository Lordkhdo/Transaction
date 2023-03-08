import styled from "styled-components";

export const MainAdm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ModalMaterials = styled.div`
  background-color: white;
  width: 600px;
  height: 300px;
  border: 1px solid #0000004e;
  border-radius: 5px;
`;
export const Header = styled.h2`
margin-top: 20px;
`;
export const FlexHeader = styled.div`
  display: flex;
  justify-content: center;
`;
export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const InnerMain = styled.div`
  margin-top: 50px;

  > div {
    width: 450px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
`;
export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  > button {
    background-color: #f2f2f2;
    border: none;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;

    &:hover {
      background-color: #e9e8e8;
    }
  }
`;