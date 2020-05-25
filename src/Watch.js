import React, { Component } from 'react';
import styled from 'styled-components';

const Content = styled.div`
    width:150px; 
    height:150px; 
    left:50%; 
    top:50%; 
    margin-top: -200px; 
    margin-left:-75px; 
    position: absolute; 
    z-index:10; 
`;
export class Watch extends Component {
    render() {
        return (
            <>
                <Content>
                    <img
                        src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                    />
                </Content>
            </>
        )
    }
}