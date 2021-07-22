import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';

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
  HighlightCards
} from './styles';

export function Dashboard() {
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
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
    </Container>
  );
}