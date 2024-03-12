import { TouchableOpacity } from 'react-native';
import Logo from '../../components/Logo';
import Button from '../../components/Button';

import { 
    Container,
    Content,
    Wrapper,
    Text,
    Span
} from './styles';
import Input from '../../components/Input';
import Label from '../../components/Label';

export default function Login() {
  return (
    <Container>
        <Content>
          <Logo />
          <Wrapper>
            <Label text='Email' />
            <Input 
              width={350}
              height={50}
              placeholder={'Ex: usuario@gmail.com'}
            />
            <Label text='Password' />
            <Input 
              width={350}
              height={50}
              placeholder={'*********'}
            />
            <Button 
              width={350}
              height={50}
              title={'Entrar'}
            />
          </Wrapper>
          <Text>Não tem uma conta? <TouchableOpacity><Span>Crie uma agora!</Span></TouchableOpacity></Text>
        </Content>
    </Container>
  );
}