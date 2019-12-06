import styled from "styled-components";
import theHagueBackground from "../../../assets/img/the-hague.png";

export const Content = styled.div`
  background: url(${theHagueBackground});
  min-height: 350px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  color: var(--aprofunde-se-grey);
  
  .content-wrapper {
    background: #00000052;
    width: 47%;
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 1rem;
    padding: 2.5rem 2rem 2rem 3rem;
    text-align: justify;
    
    p {
     width: 92%;
    }
  }
`;
