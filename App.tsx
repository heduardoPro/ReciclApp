import { StatusBar } from 'expo-status-bar';
import Home from './src/screens/Home';
import SelectUser from './src/screens/SelectUser';
import Login  from './src/screens/Login';

import styled from 'styled-components/native';

export default function App() {
  return (
    <Container>
        <StatusBar style='dark'/>
        <Home />
    </Container>
  );
}

const Container = styled.SafeAreaView`
    flex: 1;
    backgroundColor: #ffffff;
    width: 100%;
    height: 100%;
`;

