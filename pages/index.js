// pages/index.js
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-violet-light p-5">
      <Image src="/images/mi-foto.jpg" alt="Mi Foto" width={200} height={200} className="rounded-full border-4 border-violet-dark" />
      <h1 className="text-4xl font-semibold text-violet-dark mt-5">¡Hola! Soy [Tu Nombre]</h1>
      <h2 className="text-2xl text-gray-dark mt-2">Desarrollador Web Frontend</h2>
      <p className="text-center mt-4 max-w-lg text-gray-dark">
        Bienvenido a mi portfolio. Aquí podrás conocer más sobre mí, mis proyectos y cómo puedo ayudarte.
      </p>
      <a href="/about">
        <button className="mt-6 px-8 py-2 bg-violet-DEFAULT text-white rounded-md hover:bg-violet-dark transition duration-300">
          Conoce más sobre mí
        </button>
      </a>
    </div>
  );
}
