import React, { useState } from 'react';

const Hero = () => {
  const [email, setEmail] = useState("");

  // Defina o tipo do parâmetro 'e'
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica adicional para o envio do formulário
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu email"
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Hero; 