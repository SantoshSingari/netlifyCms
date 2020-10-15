import React, { Component } from "react";
import Layout from "./layout";
import styled from "@emotion/styled";
import Title from "./common/title";
import Button from "./common/button";
import Header from "./header";
import { Link } from "gatsby";

const valuepath = require("../images/value.svg") as string;
const tickpath = require("../images/tick.svg") as string;
const Jay = require("../images/team/Jay.png") as string;
const Prasad = require("../images/team/prasad.jpg") as string;
const Raju = require("../images/team/RajuSidda.jpeg") as string;
const Chetan = require("../images/team/ChetanBandari.jpg") as string;
const Vijay = require("../images/team/VijayPratap.jpg") as string;
const Vandana = require("../images/team/VandanaKumari.jpg") as string;
const Shiva = require("../images/team/ShivaSai.jpg") as string;
const Sushma = require("../images/team/Sushma.jpg") as string;
const Ravalika = require("../images/team/RavalikaKesari.jpeg") as string;
const Preethi = require("../images/team/Preethi.jpg") as string;
const Vivek = require("../images/team/Vivek.jpg") as string;
const Chary = require("../images/team/Chary.jpg") as string;
const Bhargav = require("../images/team/Bhargav.jpeg") as string;
const Sathwika = require("../images/team/Sathwika.jpg") as string;

const BgShade = styled.div`
  background: #000000;
  border: 1px solid #000000;
  box-sizing: border-box;
  padding: 100px 20px;
  
`;

const HeadTitle = styled(Title)`
  color: #ffffff;
  text-align: center;
  padding-top: 100px;
  @media (max-width:860px){
    margin-top:40px
  }
`;
const MenuItem = styled(Link)`
display:none;
@media (max-width:860px){
  margin-top:30px;
  display:block;
  text-decoration:none;
  padding-left: 17.02px;
}
`;

const HomeButton = styled(Button)`
display:none;
@media (max-width:860px){
  display:block;
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height:1.5;
  
  background: #0078D7;
  border-radius: 100px;
  margin: 100px 0 50px;
}
`;

const WhyContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin-top:80px;
  padding-bottom: 70px;
`;

const WhyTitle = styled(Title)`
  color: #000000;
  padding: 50px 0;
  
  @media (max-width: 600px){
    font-size: 30px;
  }
`;

const Desc = styled.p`
  max-width: 817px;
  margin-top:100px;

  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  color: #000000;
  
  @media (max-width: 817px){
    padding: 0 10px;
    font-size: 18px;
    margin:25px;
    line-height: 1.5;
  }
`;

const Break = styled.br``;

const ValuesContainer = styled.div`
  display: flex;
  flex-direction:column;
  background: #E5E5E5;
  margin-top:80px;
  padding: 0 20px 70px
`;

const ValueTitle = styled(Title)`
  color: #000000;
  text-align: center;
  margin:50px;
  padding: 50px 0;
  
  @media (max-width: 600px){
    font-size: 30px;
    margin:30px;
  }
`;

const ValueImg = styled.img`
  width:60px;
  height: 60px;
  margin:30px;
 @media (max-width:860px){
   margin:20px;
 }
`;

const ValueContentContainer = styled.div`
  display: flex;
  margin:10%;
  margin-top:30px;
  @media (max-width: 760px){
    flex-direction: column;
    margin-top:20px;
  }
`;

const ValueContentBlock = styled.div`
  flex: 1;
  margin:10px;
  
  @media (max-width: 760px){
    margin: 0 0 40px;
  }
`;

const ValueContentTitle = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  line-height: 1.5;
  color: #363636;
  margin-top:30px;
  @media (max-width:860px){
    margin-top:10px;
  }
`;

const ValueDesc = styled.p`
  margin-top: 15px;

  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  color: #000000;
  margin-top:40px;
  
  @media (max-width: 760px){
    font-size: 18px;
    margin-top:10px;
  }
`;

const TechContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;
const TechTitle = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 54px;
  line-height: 1.5;
  margin-top:60px;
  color: #000000;
  text-align: center;
  padding: 50px 0;
  
  @media (max-width: 600px){
    font-size: 30px;
    margin:30px;
  }
`;

const TickContainer = styled.div`
  display:flex;
  flex-flow:row wrap;
  left:10%;
  padding: 0 150px;
  margin-top:30px;
  @media (max-width:860px){
    margin-top:0px;
    padding:0 30px;
  }
`;

const TechBox = styled.div`
  max-width:250px;
  height:56px;
  display:flex;
  flex-direction:row;
  margin-right:105px;
  margin-bottom:40px;
  @media(max-width:860px){
    margin:10px;
  }
`;

const TechTick = styled.img`
  width: 40px;
  height: 40px;
  display:flex;
`;

const TechDesc = styled.div`
  max-width: 226px;
  height: 56px;
  display:flex;
  margin-left:15px;

  font-family: Nunito;
  font-style: normal;
  font-weight: 800; 
  font-size: 23px;
  line-height: 1.5;
  color: #363636;
  
  @media (max-width: 600px){
    font-size: 18px;
  }
`;

const TeamContainer = styled.div`
  width:100%;
  background: #e5e5e5;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;


const TeamTitle = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 54px;
  line-height: 1.5;
  
  color: #000000;
  // text-align: center;
  padding: 50px 0;
  
  @media (max-width: 600px){
    font-size: 30px;

  }
`;
const MemberContainer = styled.div`
  width:90%;
  max-width:1280px;
  display:flex;
  flex-flow:row wrap;
  padding-left:80px;
  gap:50px;
  margin:110px;
  @media (max-width:860px){
    margin:10px;
    padding:0px 45px;
  }
`;
const TeamBox = styled.div`
  width:250px;
  height:330px;
  @media (max-width:860px){
  width:358px;
  }
  
`;

const TeamMember = styled.img`
  width:100%; 
  max-width:250px;
  height:250px;
  background: #ffffff;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  user-select:none;
  @media (max-width:860px){
    width:358px;
    -webkit-filter: grayscale(100%);
     filter: grayscale(100%);
  }
`;

const MemberName = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 21px;
  line-height: 1.5;
  color: #363636;
  white-space:nowrap
`;


const TechName = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.5;
  color: #000000;
`;


export default class career extends Component {
  render() {
    return (
      <Layout>
        <BgShade>
          <Header index={0}></Header>
          <MenuItem to={"/"}>
            <HomeButton width="273px" height="60px" bgColor="#BBBBBB">HOME</HomeButton>
          </MenuItem>
          <HeadTitle>Careers</HeadTitle>
        </BgShade>
        <WhyContainer>
          < WhyTitle id="title">Why tech.at.core ?</WhyTitle>
          <Desc>
            We are passionate Software specialist across various disciplines. We
            value quality of work and challenge continuous learning throughout
            the our journey.
            <Break></Break>
            <Break></Break>
            At tech.at.core, we believe human-first approach and you will get
            all the freedom and flexibility to work in your style and technology
            experiments.
            <Break></Break>
            <Break></Break>
            We help with the right mentorship program to have a right career
            path, we provide continuousone-to-one feedback sessions with your
            team and mentor.
            <Break></Break>
            <Break></Break>
            We believe, at tech.at.core you never get bored with the work and
            challenges will have.
          </Desc>
        </WhyContainer>
        <ValuesContainer>
          <ValueTitle>Our values</ValueTitle>
          <ValueContentContainer>
            <ValueContentBlock>
              <ValueImg src={valuepath}></ValueImg>
              <ValueContentTitle>Being Human</ValueContentTitle>
              <ValueDesc>
                We are human-first approach company and everything comes next.
              </ValueDesc>
            </ValueContentBlock>
            <ValueContentBlock>
              <ValueImg src={valuepath}></ValueImg>
              <ValueContentTitle>Unblock people</ValueContentTitle>
              <ValueDesc>
                Helping the team or people around is always comes as a top priority
              </ValueDesc>
            </ValueContentBlock>
            <ValueContentBlock>
              <ValueImg src={valuepath}></ValueImg>
              <ValueContentTitle>Lead by example mindset</ValueContentTitle>
              <ValueDesc>
                Inspire everyone and set the trend and show how to.
              </ValueDesc>
            </ValueContentBlock>
          </ValueContentContainer>
        </ValuesContainer>
        <TechContainer>
          <TechTitle>Life at tech.at.core</TechTitle>

          <TickContainer>
            <TechBox>
              <TechTick src={tickpath}></TechTick>
              <TechDesc>
                Being Human
          </TechDesc>
            </TechBox>

            <TechBox>
              <TechTick src={tickpath}></TechTick>
              <TechDesc>
                Unblock&nbsp;people
          </TechDesc>
            </TechBox>

            <TechBox>
              <TechTick src={tickpath}></TechTick>
              <TechDesc>
                Lead&nbsp;by&nbsp;example&nbsp;mindset
          </TechDesc>
            </TechBox>

            <TechBox>
              <TechTick src={tickpath}></TechTick>
              <TechDesc>
                Flexible&nbsp;working&nbsp;hours
          </TechDesc>
            </TechBox>

            <TechBox>
              <TechTick src={tickpath}></TechTick>
              <TechDesc>
                Flexible&nbsp;working&nbsp;machine
          </TechDesc>
            </TechBox>
          </TickContainer>
        </TechContainer>

        <TeamContainer>
          <TeamTitle>Our team</TeamTitle>

          <MemberContainer>

            <TeamBox>
              <TeamMember src={Jay}></TeamMember>
              <MemberName>Jayasagar Jagirapu</MemberName>
              <TechName>Founder</TechName>
            </TeamBox>

            <TeamBox>
              <TeamMember src={Prasad}></TeamMember>
              <MemberName>Prasad Jagirapu</MemberName>
              <TechName>Managing&nbsp;Director</TechName>
            </TeamBox>

            <TeamBox>
              <TeamMember src={Ravalika}></TeamMember>
              <MemberName>Ravalika Kesari</MemberName>
              <TechName> Software Engineer</TechName>
            </TeamBox>

            <TeamBox>
              <TeamMember src={Vijay}></TeamMember>
              <MemberName>Vijay Pratap</MemberName>
              <TechName>Software Engineer</TechName>
            </TeamBox>

            <TeamBox>
              <TeamMember src={Chetan}></TeamMember>
              <MemberName>Chetan&nbsp;Kumar&nbsp;Bandari</MemberName>
              <TechName>DevOps Engineer</TechName>
            </TeamBox>

            <TeamBox>
              <TeamMember src={Shiva}></TeamMember>
              <MemberName>Shiva&nbsp;Sai&nbsp;Dikonda</MemberName>
              <TechName> Software Engineer</TechName>
            </TeamBox>

            <TeamBox>
              <TeamMember src={Sushma}></TeamMember>
              <MemberName> Sushma Boddu</MemberName>
              <TechName> Software Engineer</TechName>
            </TeamBox>

            <TeamBox>
              <TeamMember src={Chary}></TeamMember>
              <MemberName> Veera&nbsp;Chary&nbsp;Neerenamula</MemberName>
              <TechName> Software Architect</TechName>
            </TeamBox>

            <TeamBox>
              <TeamMember src={Raju}></TeamMember>
              <MemberName>Raju Sidda</MemberName>
              <TechName>Senior Software Engineer</TechName>
            </TeamBox>

            <TeamBox>
              <TeamMember src={Vivek} ></TeamMember>
              <MemberName>Vivek&nbsp;Tej&nbsp;Aggu</MemberName>
              <TechName> Software Engineer</TechName>
            </TeamBox>

            <TeamBox>
              <TeamMember src={Preethi}></TeamMember>
              <MemberName>Preethi Bandari</MemberName>
              <TechName>Software Intern</TechName>
            </TeamBox>
            
            <TeamBox>
              <TeamMember src={Vandana}></TeamMember>
              <MemberName>Vandana Kumari</MemberName>
              <TechName>QA Engineer</TechName>
            </TeamBox>
            

            <TeamBox>
              <TeamMember src={Bhargav} ></TeamMember>
              <MemberName> Bhargav&nbsp;Methuku</MemberName>
              <TechName> Senior&nbsp;Software&nbsp;Engineer</TechName>
            </TeamBox>

            <TeamBox>
              <TeamMember src={Sathwika}></TeamMember>
              <MemberName>Sathwika&nbsp;Potholla</MemberName>
              <TechName>QA Engineer</TechName>
            </TeamBox>

          </MemberContainer>
        </TeamContainer>

        


      </Layout>
    );
  }
}
