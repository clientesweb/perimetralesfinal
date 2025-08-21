"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQs() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <span>Preguntas Frecuentes</span>
          </div>
          <h2 className="font-anton text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">RESPUESTAS A SUS DUDAS</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Encuentre respuestas a las preguntas más comunes sobre nuestros productos y servicios.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 font-medium text-left">
                ¿Qué tipos de cercos ofrecen?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-gray-700">
                Ofrecemos una amplia variedad de cercos, incluyendo cercos olímpicos, romboidales, y más. También
                proporcionamos opciones como cinta cubre cerco, concertinas, y mallas electrosoldadas para adaptarnos a
                sus necesidades específicas de seguridad y privacidad.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 font-medium text-left">
                ¿Realizan instalaciones en toda la provincia de Córdoba?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-gray-700">
                Sí, nuestro equipo de profesionales realiza instalaciones en toda la provincia de Córdoba. Contamos con
                una casa central en Córdoba capital y una sucursal en Alta Gracia para brindar un servicio más eficiente
                en toda la región.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 font-medium text-left">
                ¿Ofrecen servicios de mantenimiento para cercos existentes?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-gray-700">
                Sí, además de la instalación de nuevos cercos, ofrecemos servicios de mantenimiento y reparación para
                cercos existentes. Nuestro equipo puede evaluar el estado de su cerco y recomendar las mejores opciones
                para mantenerlo en óptimas condiciones.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 font-medium text-left">
                ¿Cuál es el tiempo estimado de instalación?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-gray-700">
                El tiempo de instalación varía según el tipo y tamaño del cerco, así como las condiciones del terreno.
                Para proyectos residenciales estándar, generalmente completamos la instalación en 1-3 días. Para
                proyectos más grandes o complejos, proporcionamos un cronograma detallado durante la consulta inicial.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 font-medium text-left">
                ¿Ofrecen garantía en sus productos e instalaciones?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-gray-700">
                Sí, todos nuestros productos e instalaciones cuentan con garantía. La duración específica varía según el
                tipo de producto, pero nos comprometemos a ofrecer soluciones duraderas y de alta calidad. Además,
                proporcionamos servicio post-venta para asegurar su completa satisfacción.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
