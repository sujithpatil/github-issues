import styled from "styled-components";

export const container = styled.div`
  padding: 0 240px;
`;

export const header = styled.div`
  font-size: xx-large;
  font-weight: bold;
  margin-bottom: 32px;
  color: #0A235C;
`;

export const form_container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const issuer_title = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
  color: #008080;
  font-size: 24px;
  text-transform: capitalize;
`;

export const issue_container = styled.div`
  margin-bottom: 65px;
`;

export const author_name = styled.span`
  font-weight: bold;
`;

export const author = styled.div`
  font-size: xx-large;
  margin-bottom: 8px;
  color: #60739F;
  font-size: 16px;
`;

export const comment_container = styled.div`
  position: relative;
`;

export const comment_button = styled.button`
background: white;
border: none;
color: #23B5B5;
left: 50%;
position: absolute;
bottom: 5px;
transform: translateX(-50%);
padding: 10px;
box-shadow: 0 0 5px #60739f;
border-radius: 5px;
cursor: pointer;
`;

export const comment_heading = styled.div`
color: #008080;
font-size: 24px;
font-weight: bold;
`;

export const comment_body = styled.div`
padding: 10px 20px;
background: #f2f2f2;
margin-top: 20px;
`;

export const comment = styled.div`
  max-width: 100%;
  word-break: break-all;
`;

export const issue_body = styled.div`
max-width: 100%;
word-break: break-all;
`;