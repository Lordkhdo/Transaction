import styled from "styled-components"; 

export const Container = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;

`;
export const Div = styled.div`
  width: 75%;
  margin-bottom: 30px;
  
`;
export const RigthDiv = styled.div`
  
`;
export const Input = styled.input`
  border: none;
  padding: 5px 10px;
  border-radius: 3px;

`;

export const Button = styled.button`
  
`;

//select style

export const Option = styled.option`
  
`;
export const Select = styled.select`
  align-items: center;
  padding: 0px 14px;
  width: 129px;
  height: 18px;
  background: #f2f2f2;
  border-radius: 2px;
  border: none ;
`;

export const SSpan = styled.span`
  user-select: none;
  outline: none;
`;
export const Span = styled.span`
  
`;
export const GooglePng = styled.img`
  width: 150px;
  cursor: pointer;
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
export const GooglePngMobal = styled.img`
display: none;
  
`;
export const FaderBlock = styled.div`
  @media (max-width:400px) {
    >#sedt{
      display: none;
    }
    >#sedto{
      width: 70px;
      display: block;
    }
  }
`;