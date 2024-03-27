import { Link } from "react-router-dom";

import styled from "styled-components";

export const BtnGoBack = styled.button`
  display: block;
  margin: 10px 10px 10px 50px;
  width: 100px;
  height: 35px;
  border-radius: 5px;
  margin-right: 5px;
  padding-left: 10px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: bisque;
  }
  &:active {
    background-color: #007bff;
  }
`;

export const MovieImg = styled.img`
  margin-left: 50px;
  display: inline-block;
`;

export const MovieInfo = styled.div`
  margin-left: 20px;
  width: 800px;
`;

export const MovieBlockInfo = styled.div`
  display: flex;
`;

export const AdditionalInfo = styled.div`
  margin-top: 20px;
  padding: 20px 0px 20px 50px;
  font-size: 18px;
  border-bottom: 3px ridge rgba(0, 0, 0, 0.4);
  border-top: 3px ridge rgba(0, 0, 0, 0.4);
`;

export const AdditionalInfoLink = styled(Link)`
  display: block;
  text-decoration: none;
  padding: 5px;
  font-size: 20px;
`;

export const CastListStyle = styled.div`
  /* padding: 40px; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;
export const CastItemStyle = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ReviewsStyle = styled.div`
  background-color: #f0f0f0;

  padding: 20px;
`;
