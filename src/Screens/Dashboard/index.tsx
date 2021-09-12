import React from 'react';

import { HighlightCard } from '../../Components/HighlightCard';
import { TransactionCard } from '../../Components/TransactionCard';

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Logout,
    HighlightCards,
    Transactions,
    Title
} from './styles';

export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo 
                            source={{ uri: 'https://avatars.githubusercontent.com/u/36776702?v=4' }}
                        />

                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Guilherme</UserName>
                        </User>
                    </UserInfo>

                    <Logout name='power'/>
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard 
                    cardType={'in'}
                    title={'Entradas'}
                    amount={'R$ 17.400,00'}
                    lastTransaction={'Última entrada dia 13 de abril'}
                />
                <HighlightCard 
                    cardType={'out'}
                    title={'Saídas'}
                    amount={'R$ 1.259,00'}
                    lastTransaction={'Última saída dia 03 de abril'}
                />
                <HighlightCard
                    cardType={'total'}
                    title={'Total'}
                    amount={'R$ 16.141,00'}
                    lastTransaction={'01 a 16 de abril'}
                />
            </HighlightCards>
        
            <Transactions>
                <Title>Transações</Title>

                <TransactionCard />
            </Transactions>
        </Container>
    )
}
