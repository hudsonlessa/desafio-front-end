import React from 'react';
import { Container } from './styles';

interface ChartProps {
  editorias: Editoria[];
}

interface Editoria {
  nome: string;
  quantidade: number;
}

const Chart: React.FC<ChartProps> = ({ editorias }) => {
  return (
    <Container>
      {editorias.map(editoria => (
        <li className={editoria.nome}>
          <div style={{ height: `calc(${editoria.quantidade}px * 4)` }}>
            {editoria.nome.charAt(0).toUpperCase() + editoria.nome.slice(1)}
          </div>
          <span>{editoria.quantidade}</span>
        </li>
      ))}
    </Container>
  );
};

export default Chart;
