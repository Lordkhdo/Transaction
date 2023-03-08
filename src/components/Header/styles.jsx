import styled from "styled-components";

export const Container = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  height: 150px;
  width: 90%;
  padding-left: 40px;
      @media (max-width: 430px){
        width: 80%;
  }
`;
export const Div = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.h1`
  font-weight: bold;

    @media (max-width: 768px) {
      display: none;
    }
  /* padding-top: 30px; */
`;

export const SPPan = styled.span`
  color: #00ca00;
`;
export const User = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;

`;
export const Img = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  cursor: pointer;
`;
export const ModalUser = styled.div`
  position: absolute;
  top: 80px;
  right: 80px;
  width: 250px;
  height: 150px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  @media (max-width:800px) {
        left: auto;
        right: auto;
      }
`;
export const BackDivModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

`;
export const DivModalCredenciais = styled.div`
  height: 80px;
  width: 250px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const ImgModal = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;
export const NameAndEmailModal = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NameUser = styled.p`
  padding-top: 20px;
  font-weight: 800;
  font-size: large;
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

export const EmailUser = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  width: 150px;
  font-size: small;
  font-weight: 200;
`;
export const AdminMode = styled.div`
  padding-top: 20px;
  width: 250px;
  display: flex;
  justify-content: center;

  >a{
      text-decoration: none;
      color: red;
    }
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
    font-weight: 700;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) .5s ;

      &:hover{
        background-color: #e9e8e8;
      }
  }
`;