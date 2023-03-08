import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as C from "./styles";

const Header = ({ UserValue, adm }) => {
  const [transparentModal, seTransparentModal] = useState(false);
  const ModalUser = () => {
    seTransparentModal(true);
  };
  const HandeOutsideClick = (e) => {
    if (e.target.id == "modal") {
      seTransparentModal(false);
    }
  };

  const AdmMode = (e) => {
    if (UserValue.email != "gabrielesteves51234@gmail.com") {
      alert("se quiser se tornar adm mande um email para : gabrielesteves51234@gmail.com");
      return;
    }
    return navigate("/admeditpag");
  };
  const navigate = useNavigate()

  // console.log(UserValue?.photoURL)

  return (
    <C.Container id="modal" onClick={(e) => HandeOutsideClick(e)}>
      <C.Div>
        <C.Title>
          <C.SPPan>{adm}</C.SPPan> /transaçao
        </C.Title>
        <C.User>
          {UserValue && (
            <C.Img
              onClick={() => ModalUser((val) => !val)}
              src={UserValue.photoURL}
            />
          )}
        </C.User>
      </C.Div>

      {UserValue && transparentModal && (
        <C.BackDivModal id="modal" onClick={HandeOutsideClick}>
          <C.ModalUser>
            <C.DivModalCredenciais>
              <C.ImgModal src={UserValue.photoURL} />
              <C.NameAndEmailModal>
                <C.NameUser>
                  <abbr
                    style={{ textDecoration: "none" }}
                    title={UserValue.displayName}
                  >
                    {UserValue.displayName}
                  </abbr>
                </C.NameUser>
                <C.EmailUser>
                  <abbr
                    style={{ textDecoration: "none" }}
                    title={UserValue.email}
                  >
                    {UserValue.email}
                  </abbr>
                </C.EmailUser>
              </C.NameAndEmailModal>
            </C.DivModalCredenciais>
              <C.AdminMode>
                <C.DelInput>
                <button onClick={() => AdmMode(UserValue.email)}>
                  modo adm
                </button>
                </C.DelInput>
              </C.AdminMode>
          </C.ModalUser>
        </C.BackDivModal>
      )}
    </C.Container>
  );
};

export default Header;
