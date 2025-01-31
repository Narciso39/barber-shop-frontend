import React from "react";
import "./App.css";
import { getBarber } from "./hooks/useAPIGetBarber";

const App: React.FC = () => {
  const { barbers, error, isLoading } = getBarber();

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Ocorreu um erro: {error.message}</p>;
  }

  // Ensure that `barbers` is always an array (empty if nothing fetched)
  return (
    <div>
      <h1>Lista de Barbeiros</h1>
      {barbers && barbers.length === 0 ? (
        <p>Não há barbeiros disponíveis.</p>
      ) : (
        <ul>
          {barbers?.map((barber) => (
            <li key={barber.id}>
              <h2>{barber.name}</h2>
              <p>Idade: {barber.age}</p>
              <p>CPF: {barber.cpf}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
