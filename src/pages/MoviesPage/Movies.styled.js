import styled from "styled-components";

export const MoviesTitle = styled.h1`
  margin-left: 50px;
`;

export const MoviesSearchForme = styled.form`
  margin-left: 50px;
`;

export const MoviesSearchInput = styled.input`
  width: 400px;
  height: 30px;
  border-radius: 5px;
  margin-right: 5px;
  padding-left: 10px;
  font-size: 18px;
`;

export const MoviesSearchBtn = styled.button`
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
