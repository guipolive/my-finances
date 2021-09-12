import React from 'react';

import { 
    Container,
    Header,
    Title,
    Icon,
    Content,
    Amount,
    LastTransaction
} from './styles';

interface Props {
    cardType: 'in' | 'out' | 'total';
    title: string;
    amount: string;
    lastTransaction: string;
}

const icon = {
    in: 'arrow-up-circle',
    out: 'arrow-down-circle',
    total: 'dollar-sign'
}

export function HighlightCard({ 
    cardType,
    amount,
    lastTransaction,
    title
} : Props) {
    return (
        <Container cardType={cardType} >
            <Header>
                <Title cardType={cardType}>{title}</Title>
                <Icon name={icon[cardType]} cardType={cardType}/>
            </Header>

            <Content>
                <Amount cardType={cardType}>{amount}</Amount>
                <LastTransaction cardType={cardType}>{lastTransaction}</LastTransaction>
            </Content>
        </Container>
    )
}