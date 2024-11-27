// pages/contact.js
export default function Contact() {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-4xl font-semibold text-center">Contáctame</h1>
      <form className="mt-6 max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Tu nombre"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          placeholder="Tu correo"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <textarea
          placeholder="Tu mensaje"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}
