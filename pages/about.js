// pages/about.js
export default function About() {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6">
        <h1 className="text-4xl font-semibold">Sobre mí</h1>
        <p className="text-center mt-4 max-w-2xl text-lg">
          Soy un desarrollador web apasionado por la tecnología y el diseño. Me especializo en
          crear aplicaciones web modernas con **React**, **Next.js** y **Tailwind CSS**. Tengo experiencia trabajando
          tanto en el frontend como en el backend, y me encanta aprender nuevas tecnologías.
        </p>
        <div className="mt-6">
          <h2 className="text-3xl">Habilidades</h2>
          <ul className="list-disc mt-3 pl-6">
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
    );
  }
  