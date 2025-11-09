"use client";

import React from "react";
import Image from "next/image";
import { Users, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/hero-background.jpg"
            alt="Paisaje rural uruguayo"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* overlay verde */}
          <div className="absolute inset-0 bg-emerald-800/70" />
        </div>

        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-20 p-6 hidden md:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/garrapp-logo.jpg"
                alt="GarrApp"
                width={48}
                height={48}
                className="rounded-lg shadow-md"
                priority
              />
              <span className="text-2xl font-bold text-white">GarrApp</span>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white lg:text-7xl">
            Control Sanitario
            <span className="block text-emerald-500">Ganadero Digital</span>
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-white/90 lg:text-2xl">
            La primera plataforma integral para coordinar baños sanitarios,
            certificaciones veterinarias y control de garrapata en Uruguay
          </p>

          {/* Stats */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24hs</div>
              <div className="text-white/80">Respuesta promedio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-white/80">Digital y trazable</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">19</div>
              <div className="text-white/80">Departamentos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-black lg:text-5xl">
              ¿Cómo funciona GarrApp?
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-green-800">
              Conectamos productores ganaderos con servicios veterinarios y de baños de aspersión especializados en tres simples pasos
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card className="relative rounded-xl border border-slate-200 bg-white shadow-md
             transition-all duration-300 ease-out transform-gpu
             hover:-translate-y-1.5 hover:shadow-2xl hover:border-emerald-600
             hover:ring-1 hover:ring-emerald-300/40
             focus-within:-translate-y-1.5 focus-within:shadow-2xl focus-within:ring-2 focus-within:ring-emerald-400/50">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-800 to-emerald-600">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-slate-900">1. Solicita el servicio</h3>
                <p className="text-slate-600">
                  Define tu necesidad: baño sanitario, certificación veterinaria o servicio integral.
                  Especifica cantidad de animales y urgencia.
                </p>
              </CardContent>
            </Card>

            <Card className="relative rounded-xl border border-slate-200 bg-white shadow-md
             transition-all duration-300 ease-out transform-gpu
             hover:-translate-y-1.5 hover:shadow-2xl hover:border-emerald-600
             hover:ring-1 hover:ring-emerald-300/40
             focus-within:-translate-y-1.5 focus-within:shadow-2xl focus-within:ring-2 focus-within:ring-emerald-400/50">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-emerald-400">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-slate-900">2. Recibe cotizaciones</h3>
                <p className="text-slate-600">
                  Los contratistas certificados en tu zona envían ofertas en menos de 24 horas.
                  Compara precios, tiempos y experiencia.
                </p>
              </CardContent>
            </Card>

            <Card className="relative rounded-xl border border-slate-200 bg-white shadow-md
             transition-all duration-300 ease-out transform-gpu
             hover:-translate-y-1.5 hover:shadow-2xl hover:border-emerald-600
             hover:ring-1 hover:ring-emerald-300/40
             focus-within:-translate-y-1.5 focus-within:shadow-2xl focus-within:ring-2 focus-within:ring-emerald-400/50">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-400">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-slate-900">3. Certifica y traslada</h3>
                <p className="text-slate-600">
                  Recibe la certificación veterinaria digital inmediatamente.
                  Tus animales quedan aptos para traslado y comercialización.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-slate-900 lg:text-5xl">
                Beneficios para
                <span className="block text-green-800">Productores</span>
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-700">
                    <span className="text-sm text-white">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Licitación Express</h4>
                    <p className="text-slate-600">Múltiples cotizaciones en 24 horas</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-700">
                    <span className="text-sm text-white">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Pago Seguro</h4>
                    <p className="text-slate-600">Sistema de garantía hasta completar el servicio</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-700">
                    <span className="text-sm text-white">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Certificación Digital</h4>
                    <p className="text-slate-600">Documentos listos para MGAP</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-4xl font-bold text-slate-900 lg:text-5xl">
                Beneficios para
                <span className="block text-blue-600">Contratistas</span>
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <span className="text-sm text-white">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Nuevos Clientes</h4>
                    <p className="text-slate-600">Acceso a productores en toda tu zona de cobertura</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <span className="text-sm text-white">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Pago Garantizado</h4>
                    <p className="text-slate-600">Cobro asegurado al completar el trabajo</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <span className="text-sm text-white">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Gestión Simplificada</h4>
                    <p className="text-slate-600">Agenda, facturación y certificados en un lugar</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-4xl font-bold text-slate-900 lg:text-5xl">
                Beneficios para
                <span className="block text-yellow-600">MGAP</span>
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500">
                    <span className="text-sm text-white">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Reportes</h4>
                    <p className="text-slate-600">Acceso a dashboards sobre: baños y certificaciones</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500">
                    <span className="text-sm text-white">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Monitoreo</h4>
                    <p className="text-slate-600">Mapa en tiempo real de baños realizados y en proceso</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500">
                    <span className="text-sm text-white">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Comunicación</h4>
                    <p className="text-slate-600">Contacto directo con productores y contratistas para notificar posibles cambios</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20">
        {/* fondo con gradiente + glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-900" />
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 text-center text-white">
          {/* píldora */}
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium ring-1 ring-white/20">
            Convocatoria 2025 abierta
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight lg:text-5xl">
            ¿Listo para revolucionar tu operación ganadera?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-emerald-100">
            Únete a la red de productores y contratistas más grande de Uruguay.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/59898983818"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-white/40 px-7 py-3 text-lg font-semibold text-white/90 backdrop-blur-sm hover:bg-white/10"
            >
              Contactar por WhatsApp
            </a>
          </div>

          <p className="mt-4 text-xs text-emerald-200">
            Respuesta promedio en 24hs · Sin compromiso
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <Image
              src="/garrapp-logo.jpg"
              alt="GarrApp"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="text-xl font-bold text-slate-900">GarrApp</span>
          </div>
          <p className="mb-4 text-slate-600">
            Control sanitario ganadero digital para Uruguay
          </p>
          <p className="text-sm text-slate-500">
            © 2025 GarrApp. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
