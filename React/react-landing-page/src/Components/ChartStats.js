import React from 'react';

import styled from 'styled-components';


function ChartStats({name, amount}) {
    return (
        <ChartStatsStyled >
            <p><b>{name}</b></p>
            <h4>{amount}</h4>
        </ChartStatsStyled >
    )
}

const ChartStatsStyled = styled.div`
    background-color: white;
    border-radius: 50px;
    border: 1px solid var(--border-colour);
    height: 10rem;
    padding: 2rem;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
    h4{
        font-size: 3rem;
        color: var(--purple-primary);
    }
    p{
        color: black;
    }
`;

export default ChartStats
