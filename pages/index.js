
import styled from '@emotion/styled';
import Layout from '../components/layout/Layout';

const Inicio = styled.h1`
  color: blue;
`;

export default function Home() {
  return (
    <div>
      
      <Layout>
        <Inicio> Inicio </Inicio>
      </Layout>

    </div>
  )
}
