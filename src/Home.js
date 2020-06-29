import React from 'react'
import styled from 'styled-components';
import bg from './img/background1.jpg';
import Container from '@material-ui/core/Container';

// const bgHome = {
//   width: "100%",
//   height: "100%",
//   backgroundImage: `url(${bg})`
// }

export default function Home() {
  return (
    <div>
      <img src={bg} className="home-img"/>
    </div>
  )
}
