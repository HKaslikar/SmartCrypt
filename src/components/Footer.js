import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  return (
    <MDBFooter bgColor="dark" className="text-center text-lg-start text-muted"style={{height:"400px", width:"1520px",position:"absolute" }}>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        

        <div>
          <a
            href="https://www.facebook.com/harsha.kaslikarpawar/"
            target="_blank"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="twitter" />
          </a>
          <a
            href="https://www.instagram.com/harsha_kaslikar/"
            target="_blank"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/harsha-kaslikar-686544218/"
            target="_blank"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="linkedin" />
          </a>
          <a
            href="https://github.com/HKaslikar"
            target="_blank"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Smart Crypt
              </h6>
              <img
                src={require("./logo/logoproject.png")}
                alt="Smart Crypt"
                style={{
                  width: "120px",
                  height: "120px",
                  position: "absolute",
                }}
                onClick={() => navigate(`/`)}
                
              />
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              
              <p>
                <a   href="https://mail.google.com/mail/u/0/#inbox?compose=new" className="text-reset" target="_blank">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                LNCT&S, BHOPAL,INDIA
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-1" />
                <a
                  href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                  className="text-reset"
                >
                  harshakaslikar01@gmail.com
                </a>
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91- 000-000-0000
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright : 
        <a className="text-reset fw-bold" href="#">
           Harsha Kaslikar & Team
        </a>
      </div>
    </MDBFooter>
  );
}
