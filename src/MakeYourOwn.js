import React from 'react'

// Imported Components
import Sidebar from "./Sidebar";
import Watch from './components/Watch';
import SaveButton from './components/SaveButton';
import styled from 'styled-components';

export default function MakeYourOwn() {
  return (
    <div>
      <Watch />
      <Sidebar />
      <SaveButton />
    </div>
  )
}