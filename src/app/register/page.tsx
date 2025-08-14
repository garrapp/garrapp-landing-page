'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegistroPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    departamento: '',
    telefono: '',
    codigoPais: '',
    email: '',
    password: '',
    confirmPassword: '',
    fechaNacimiento: '',
    edad: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', form);
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-4 bg-center bg-cover bg-fixed "
      style={{
        backgroundImage:
          "url('https://el-pais-uruguay-production-web.s3.amazonaws.com/brightspot/0a/f8/aed7ce7f49deb7ef56e52502cfc2/foto-hereford.jpg')",
      }}
    >
      {/* Overlay oscuro sobre la imagen */}
      <div className="absolute inset-0 bg-black/30" aria-hidden />

      {/* Contenido (formulario) */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-4xl bg-white p-8 rounded-lg shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
          Regístrate
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Nombre */}
          <div>
            <label htmlFor="nombre" className="block text-gray-800 mb-1 font-medium">
              Nombre <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Apellido */}
          <div>
            <label htmlFor="apellido" className="block text-gray-800 mb-1 font-medium">
              Apellido <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={form.apellido}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Departamento */}
          <div>
            <label htmlFor="departamento" className="block text-gray-800 mb-1 font-medium">
              Departamento <span className="text-red-500">*</span>
            </label>
            <select
              id="departamento"
              name="departamento"
              value={form.departamento}
              onChange={handleChange}
              required
              className="block w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 pr-10 text-gray-800 focus:ring-2 focus:ring-green-500"
            >
              <option value="">Seleccionar</option>
              <option value="Artigas">Artigas</option>
              <option value="Canelones">Canelones</option>
              <option value="Cerro Largo">Cerro Largo</option>
              <option value="Colonia">Colonia</option>
              <option value="Durazno">Durazno</option>
              <option value="Flores">Flores</option>
              <option value="Florida">Florida</option>
              <option value="Lavalleja">Lavalleja</option>
              <option value="Maldonado">Maldonado</option>
              <option value="Montevideo">Montevideo</option>
              <option value="Paysandú">Paysandú</option>
              <option value="Río Negro">Río Negro</option>
              <option value="Rivera">Rivera</option>
              <option value="Rocha">Rocha</option>
              <option value="Salto">Salto</option>
              <option value="San José">San José</option>
              <option value="Soriano">Soriano</option>
              <option value="Tacuarembó">Tacuarembó</option>
              <option value="Treinta y Tres">Treinta y Tres</option>
            </select>
          </div>

          {/* Fecha de nacimiento */}
          <div>
            <label htmlFor="fechaNacimiento" className="block text-gray-800 mb-1 font-medium">
              Fecha de nacimiento <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="fechaNacimiento"
              name="fechaNacimiento"
              value={form.fechaNacimiento}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Edad */}
          <div>
            <label htmlFor="edad" className="block text-gray-800 mb-1 font-medium">
              Edad
            </label>
            <input
              type="number"
              id="edad"
              name="edad"
              value={form.edad}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-800 mb-1 font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Contraseña */}
          <div>
            <label htmlFor="password" className="block text-gray-800 mb-1 font-medium">
              Contraseña <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Confirmar contraseña */}
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-800 mb-1 font-medium">
              Confirmar contraseña <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Teléfono */}
          <div className="sm:col-span-2">
            <label className="block text-gray-800 mb-1 font-medium">
              Teléfono <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative w-full sm:w-1/3">
                <select
                  id="codigoPais"
                  name="codigoPais"
                  required
                  value={form.codigoPais}
                  onChange={handleChange}
                  className="block w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 pr-10 text-gray-800 focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Seleccionar</option>
                  <option value="+54">🇦🇷 Argentina (+54)</option>
                  <option value="+591">🇧🇴 Bolivia (+591)</option>
                  <option value="+55">🇧🇷 Brasil (+55)</option>
                  <option value="+56">🇨🇱 Chile (+56)</option>
                  <option value="+57">🇨🇴 Colombia (+57)</option>
                  <option value="+506">🇨🇷 Costa Rica (+506)</option>
                  <option value="+53">🇨🇺 Cuba (+53)</option>
                  <option value="+593">🇪🇨 Ecuador (+593)</option>
                  <option value="+503">🇸🇻 El Salvador (+503)</option>
                  <option value="+502">🇬🇹 Guatemala (+502)</option>
                  <option value="+504">🇭🇳 Honduras (+504)</option>
                  <option value="+52">🇲🇽 México (+52)</option>
                  <option value="+505">🇳🇮 Nicaragua (+505)</option>
                  <option value="+507">🇵🇦 Panamá (+507)</option>
                  <option value="+595">🇵🇾 Paraguay (+595)</option>
                  <option value="+51">🇵🇪 Perú (+51)</option>
                  <option value="+598">🇺🇾 Uruguay (+598)</option>
                  <option value="+58">🇻🇪 Venezuela (+58)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 14l-6-6h12l-6 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                required
                placeholder="Número"
                className="w-full sm:w-2/3 rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div>

        {/* Botón registrar + link */}
        <div className="mt-6 flex flex-col items-center">
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
          >
            Registrarse
          </button>

          <button
            type="button"
            onClick={() => router.push('/')}
            className="mt-4 text-green-200 sm:text-green-700 hover:underline text-sm"
          >
            Volver al inicio
          </button>
        </div>
      </form>
    </div>
  );
}
