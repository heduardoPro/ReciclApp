import { CardProps } from "./card";

import {
  Container,
  CardContainer,
  Wrapper,
  Title,
  Value,
  Icon,
} from "./styles";

export default function Card({ ...item }: CardProps) {
  return (
    <Container>
      <CardContainer>
        <Wrapper>
          <Title>{item.title}</Title>
          <Value>{item.value}</Value>
        </Wrapper>
        <Icon source={require("../../../assets/coin.png")} />
      </CardContainer>
    </Container>
  );
}
