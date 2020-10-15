import React, { Component } from "react";
import { PageProps } from "gatsby";
import { Link } from "gatsby";
import Title from "./common/title";
import Layout from "./layout";
import Button from "./common/button";

import styled from "@emotion/styled";

const LogoPath = require("../images/logo_tech.svg") as string;

const BgContainer = styled.div`
  overflow:hidden;
`;

const BgShade = styled.div`
  background: #000000;
  border: 1px solid #000000;
  box-sizing: border-box;
  padding: 20px 0px;

  @media (max-width:860px){
     
    padding:30px 0px;
  }
  
`;

const TopNav = styled.header`
  margin-bottom:40px;
  margin-left:60px;

  @media (max-width:860px){
    margin-left:30px;
  }
`;

const LogoLink = styled(Link)`
  margin-right:auto;
  @media (width:860pxpx){
    position:absolute;
    display:flex;
  }
  `;

const LogoTech = styled.img`
  position: absolute;
  width: 250.31px;
  height: 44px;
 
  @media (width:614px){
    position:relative;
    width:80%;
    height: 44px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    
`;

const Container = styled.div`
  overflow:hidden;
  display:flex;
  flex-directon:row;
  background-color: #e5e5e5;
  @media (max-width:860px){
    display:flex;
    flex-direction:column;
  }
  
`;
const Impress = styled.div`
    width:40%;
    height:800px;
    position: sticky;

  @media (max-width:860px){
    width:360px;
    height:600px;
    display:flex;
    padding:0px;
  }
`;

const ImpContainer = styled.div`
    position:sticky;
    max-width:500px;
    display:flex;
    flex-direction:column;
    margin-top:50px;
    margin-left:60px;
    
  
  @media (max-width:860px){
    width:360px;
    display:flex;
    flex-direction:column;
    margin:25px;
  }
`;

const ImpTitle = styled(Title)`
  display;flex;
  font-size:34px;

  @media (max-width:860px){
    font-size:24;
    display:felx;
  }
`;

const Desc = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight:normal;
  font-size: 20px;
  line-height:1.5;

  @media (max-width:860px){
    font-size:18px;
  }
  `;

const Address = styled.div`
  margin-top:30px;
  font-family: Nunito;
  font-style: normal;
  font-weight:normal;
  font-size: 20px;
  line-height:1.5;

  @media (max-width:860px){
    font-size:18x;
  }
`;
const Break = styled.br``;

const ContentThree = styled(Button)`
  background: #0078D7;
  border-radius: 100px;
  margin-top:30px;
  font-size:16px;
  padding-left:27px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  
  @media (max-width:480px){
    margin: 30px 0 0;
  }
`;

const MailId = styled.a`
  width:300px;
  height:50px;
  margin-top:30px;
  font-family: Nunito;
  font-style: normal;
  font-weight:normal;
  font-size: 24px;
  line-height:1.5;
  color:black;
  
  @media (max-width:860px){
    font-size:18px;
  }
`;

const Look = styled.div`
  width:200px;
  margin-top:30px;
  font-family: Nunito;
  font-style: normal;
  font-weight:normal;
  font-size: 24px;
  line-height:1.5;
  
  @media (max-width:860px){
    font-size:18px;
  }
`;

const DescContainer = styled.div`
  width:60%;
  padding:50px 0px;
  padding-left:50px;
  background-color: #ffffff;
  display:flex;
  flex-direction:column;

  @media (max-width:860px){
    width:360px;
  
  }
`;

// const Vat = styled(Title)`
//   margin-top:5px;
//   font-size:30px;
//   @media (max-width:860px){
//     font-size:24px;
//     margin-top:20px;
//   }
// `;

// const VatNo = styled.div`
//   margin-top:5px;
//   font-family: Nunito;
//   font-style: normal;
//   font-weight:normal;
//   font-size: 18px;
//   line-height:1.5;

//   @media (max-width:860px){
//     font-size:18px;
//   }
// `;

class Privacy extends Component {
    constructor(props: PageProps) {
      super(props);
  
    }
  
    render() {
      return (
        <Layout>
          <BgContainer>
            <BgShade>
            <TopNav>
              <LogoLink to={"/"}>
                <LogoTech src={LogoPath} alt="tech.at.core" />
              </LogoLink>
            </TopNav>
            </BgShade>
          </BgContainer>
            <Container>
            <Impress>
              <ImpContainer>
                <ImpTitle> Data Protection Declaration </ImpTitle>
                <Desc> We look forward to hearing from you.</Desc>
                <Address> tech.at.core
                            <Break></Break>
                            Seesener Str.43
                            <Break></Break>
                            10711 Berlin
                            <Break></Break>
                            Germany</Address>
                
                <ContentThree width="180px" height="35px" bgColor="#0078D7">
                WORK WITH US
                </ContentThree>
                <MailId href={"mailto:hello@techatcore.com"}> hello@techatcore.com </MailId>
                <Look>Looking&nbsp;for&nbsp;careers?</Look>
              </ImpContainer>
            </Impress>
            <DescContainer>
                
            </DescContainer>
            </Container>
      </Layout>

    );
  }
}


export default Privacy;