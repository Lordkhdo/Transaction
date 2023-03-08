import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 250px;
  
`;
export const CenterBigCard = styled.div`
  background-color: white;
  max-width: 90%;
  width: 1120px;
  border-radius: 5px;
  box-shadow: 4px 3px 10px 0px #00000067;
  overflow: auto;

    @media (max-width: 430px) {
      max-width: 100%;
      width: 100%;
      &::-webkit-scrollbar-track{
        display: none;
      }
      &::-webkit-scrollbar{
        width: 0;
      }
    }

`;
export const HeaderList = styled.div`
  font-weight: 600;
  align-items: center;
  display: flex;
  color: #0000007b;
  padding-top: 10px;
  padding-left: 10px;
  justify-content: space-between;
`;

export const Span = styled.span`
  margin-left: 6px;
`;
export const Father = styled.div`
  display: flex;
  align-items: center;
`;
export const OtherFather = styled.div`
  margin-right: 10px;
`;

//tabela

export const Table = styled.table`
  width: 100%;
  background-color: rgb(73,205,205);
  margin-top: 10px;


  
`;

export const Thead = styled.thead`
  
`;
export const Tr = styled.tr`
  
`;
export const Th = styled.th`
  color: white;
`;
export const ThLast = styled.th`
  color: white;
  @media (max-width: 430px){
    display: none;
  }
`;
export const SpanInTh = styled.span`
  color: rgb(0, 163, 163);
  user-select: none;
`;

export const Tbody = styled.tbody`
  background-color: white;
  overflow: hidden;

`;
export const ThB = styled.th`
  color: black;
  transition: all .1s;
  padding: 0;
  margin: 0;
`;
export const letras = styled.span`
    @media (max-width: 430px){
    font-size: 12px;
    display: inline-block;
  }
`;