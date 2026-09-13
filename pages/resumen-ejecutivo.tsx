import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Seo from "@/components/Seo";

interface SeccionProps {
  titulo: string;
  children: React.ReactNode;
}

function Seccion({ titulo, children }: SeccionProps) {
  return (
    <div className="mt-6 print:mt-4 break-inside-avoid">
      <h2 className="font-heading text-sm tracking-wide uppercase text-accent">
        {titulo}
      </h2>
      <div className="font-body text-ink text-[15px] print:text-sm leading-relaxed mt-1">
        {children}
      </div>
    </div>
  );
}

export default function ResumenEjecutivo() {
  return (
    <>
      <Seo
        title="Resumen ejecutivo — MIMO"
        description="Resumen ejecutivo de MIMO: el problema, la solución, el respaldo científico y el estado actual del proyecto."
        path="/resumen-ejecutivo"
      />
      <Head>
        <style>{`@page { margin: 1.2cm; }`}</style>
      </Head>

      <div className="print:hidden bg-base border-b border-primary-light sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="font-heading text-sm text-primary no-underline"
          >
            ← Volver al sitio
          </Link>
          <button
            type="button"
            onClick={() => window.print()}
            className="font-heading font-semibold rounded-full bg-primary text-white px-5 py-2 text-sm hover:bg-primary-dark transition-colors"
          >
            Descargar PDF
          </button>
        </div>
      </div>

      <main className="bg-base print:bg-white min-h-screen py-10 print:py-0">
        <div className="max-w-3xl mx-auto px-6 print:px-0 bg-white print:shadow-none shadow-sm rounded-2xl print:rounded-none p-10 print:p-0">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo.png"
              alt="Logo MIMO"
              width={56}
              height={56}
            />
            <div>
              <h1 className="font-heading text-3xl print:text-2xl text-ink">
                MIMO
              </h1>
              <p className="font-body text-ink-muted text-sm">
                Peluche interactivo para el desarrollo socioemocional infantil
              </p>
            </div>
          </div>

          <Seccion titulo="El problema">
            <p>
              En la infancia temprana (4 a 8 años), la dificultad para
              identificar y comunicar emociones deriva en frustración y vacíos
              en el desarrollo socioemocional. Las alternativas actuales son
              juguetes pasivos sin acompañamiento, o aplicaciones que generan
              sobreestimulación por pantallas — y los tutores no cuentan con
              métricas objetivas para dar seguimiento. Faltan herramientas
              tangibles, pedagógicas y tecnológicamente responsables para la
              gestión emocional infantil.
            </p>
          </Seccion>

          <Seccion titulo="La solución">
            <p>
              MIMO es un peluche interactivo con rostro expresivo, vibración y
              tarjetas físicas, sincronizado con una aplicación móvil. Un motor
              adaptativo ajusta la dificultad de las actividades al ritmo de
              cada niño de 4 a 8 años, sin depender de tiempo fijo ni de
              lectura.
            </p>
          </Seccion>

          <Seccion titulo="Respaldo">
            <p>
              La progresión de actividades está fundamentada en literatura de
              desarrollo emocional infantil (Harter &amp; Buddin; Affect
              Knowledge Test de Denham) y fue diseñada en colaboración con una
              especialista en desarrollo infantil.
            </p>
          </Seccion>

          <Seccion titulo="Estado actual">
            <p>
              Prototipo funcional en sus tres capas (firmware, backend,
              aplicación móvil), con motor adaptativo implementado y validado
              mediante pruebas automatizadas. Actualmente en fase de integración
              final, previa a las primeras sesiones piloto con una especialista
              en desarrollo infantil.
            </p>
          </Seccion>

          <Seccion titulo="Equipo">
            <p>Víctor García — CEO</p>
            <p>Diego Villa — CTO</p>
          </Seccion>

          <Seccion titulo="Contacto">
            <p>descubremimo@gmail.com</p>
            <p>www.descubremimo.com</p>
          </Seccion>
        </div>
      </main>
    </>
  );
}
