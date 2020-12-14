
import styled from '@emotion/styled';
import Layout from '../components/layout/Layout';

const Inicio = styled.h1`
  color: black;
`;

export default function NewProduct() {
  return (
    <div>
      
      <Layout>
        <Inicio> New product </Inicio>
      </Layout>

    </div>
  )
}