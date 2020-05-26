import React, { Component } from 'react';
import styled from 'styled-components';
import motorola from './img/motorola.png';

const Content = styled.div`
    width: 40%;
    height: 150px;
    left: 40%;
    top: 20%;
    margin-top: -200px;
    margin-left: -75px;
    position: absolute;
    z-index: -1;
    background-image: url(./img/backgroundwatch.jpg);
`;

export class Watch extends Component {
    render() {
        return (
            <>
                <Content>
                    <div className="watch">
                        <img src={motorola} alt="smartwatch" class="imagem_fundo" />
                        <div id="background" class="center_circule" >
                            
                        </div>
                    </div>
                </Content>
            </>
        )
    }
}