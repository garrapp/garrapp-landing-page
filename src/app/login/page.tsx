import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Imagen lado izquierdo */}
      <div className="w-1/2 hidden md:block">

        <Image
          src="https://el-pais-uruguay-production-web.s3.amazonaws.com/brightspot/0a/f8/aed7ce7f49deb7ef56e52502cfc2/foto-hereford.jpg"
          alt="Agro"
          width={1920}
          height={1080}
          quality={100}
          unoptimized
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Formulario */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 py-16 bg-white min-h-screen">
        <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">Bienvenido a Agropé</h1>

        <form className="w-full max-w-md space-y-5">
          <div>
            <label className="block text-gray-700 mb-1">Usuario</label>
            <input
              type="text"
              placeholder="example@agrope.com"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Iniciar sesión
          </button>

          <p className="text-sm text-gray-600 text-center">
            ¿No tienes una cuenta?{' '}
            <a href="/register" className="text-green-600 hover:underline">
              Regístrate gratis
            </a>
          </p>
          <p className="text-sm text-gray-600 text-center">
            o continuar con
          </p>
        </form>

        <div className="flex flex-col gap-3 w-full max-w-md">
          <button className="flex items-center justify-center border py-2 rounded-lg hover:bg-gray-100 transition">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5 mr-2" />
            Ingresar con Google
          </button>
          <button className="flex items-center justify-center border py-2 rounded-lg hover:bg-gray-100 transition">
            <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="h-5 w-5 mr-2" />
            Ingresar con Facebook
          </button>
        </div>
      </div>
    </div>
  );
}
