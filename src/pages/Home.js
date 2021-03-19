/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Redirect, useHistory } from "react-router";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import SearchBar from "../Components/UI/SearchBar"
import Template from "./Template"


function Home (){
  return(
    <Template>
      <SearchBar placeholder="Search"/>
    </Template>
    );
}

export default Home;