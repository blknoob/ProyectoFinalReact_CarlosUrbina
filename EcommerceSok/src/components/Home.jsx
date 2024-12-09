import React from 'react';
import Carousel from './Carousel';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-700 text-white text-center py-6">
        <h1 className="text-4xl font-bold">Bienvenido a Sok Cores</h1>
        <p className="text-lg mt-2">La diversión no se busca, se pedalea. ¡Tú decides el camino!</p>
      </header>

      <section className="my-10">
        <Carousel />
      </section>

      <section className="p-6 text-center bg-gray-700 text-white">
        <h2 className="text-2xl font-bold mb-4">Explora nuestras categorías!</h2>
        <p className="text-lg">Encuentra bicicletas, accesorios y vestimenta para todos los gustos y necesidades.</p>
      </section>
    </div>
  );
};

export default Home;
