import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import { 
  Container, 
  Header,
  UserInfo,
  Photo,
  UserWrapper,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: "Salário do mês",
      amount: "R$ 4.750,00",
      category: {
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date: "13/04/2020",
    },
    {      
      id: '2',
      type: 'negative',
      title: "Hamburgueria Pizzy",
      amount: "R$ 59,00",
      category: {
        name: 'Alimentação',
        icon: 'coffee'
      },
      date: "13/04/2020",
    },
    {
      id: '3',
      type: 'negative',
      title: "Aluguel do apartamento",
      amount: "R$ 600,00",
      category: {
        name: 'Alimentação',
        icon: 'shopping-bag'
      },
      date: "13/04/2020",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/32178469?v=4' }} />

            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>João Vitor</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas" 
          amount="R$ 4.750,00" 
          lastTransation="Última entrada dia 13 de abril" 
        />
        <HighlightCard
          type="down" 
          title="Saídas" 
          amount="R$ 659,00" 
          lastTransation="Última entrada dia 03 de abril" 
        />
        <HighlightCard
          type="total" 
          title="Total" 
          amount="R$ 4.091,00" 
          lastTransation="01 à 16 de abril" 
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList 
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>


    </Container>
  );
}