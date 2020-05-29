import React, { Component } from 'react';
import styled from 'styled-components';
import motorola from '../img/motorola.png';


const Content = styled.div`
    width: 40%;
    height: 150px;
    left: 40%;
    top: 20%;
    margin-top: -200px;
    margin-left: -75px;
    position: absolute;
    z-index: -1;
`;

class Watch extends Component {
    render() {
        return (
            <>
                <Content>
                    <div className="watch">
                        <img src={motorola} alt="smartwatch" class="imagem_fundo" />
                        <div id="background" class="center_circule" >
                            <div class="child elementos dropdiv"id="node1_1" >
                                <svg height="70" width="200">
                                    <text x="0" y="15" ></text>
                                </svg>
                                <span id="hour_1"></span>
                                <span id="minute_1"></span>
                            </div>
                        </div>
                    </div>
                </Content>
            </>
        )
    }
}

export default Watch