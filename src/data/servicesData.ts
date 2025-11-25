
import masajesImage from "@/assets/masajes/masajes.jpeg";
import facialesImage from "@/assets/faciales/faciales.jpeg";
import microImage from "@/assets/micropigmentacion/micropigmentacion.jpeg";
import manicuraImage from "@/assets/manicura.jpg";
import pedicuraImage from "@/assets/pedicura.jpg";
import pestanasImage from "@/assets/pestanhas/pestanhas.jpeg";
import tatuajeImage from "@/assets/tatuaje.jpeg";
import cejasImage from "@/assets/cejas/cejas.jpeg";
import laserImage from "@/assets/laser/laser.jpeg";
import nutricionImage from "@/assets/nutricion/nutricion.jpeg";
// Tratamientos corporales images
import tratamientosCorporalesImage from "@/assets/tratamientosCorporales/tratamientos-corporales.jpeg";
import radiofrecuenciaCorporalImage from "@/assets/tratamientosCorporales/radiofrecuencia-corporal.png";
import cavitacionImage from "@/assets/tratamientosCorporales/cavitacion.png";
import diagnosticoCorporalImage from "@/assets/tratamientosCorporales/diagnostico-corporal.png";
import piernasCansadasImage from "@/assets/tratamientosCorporales/piernas-cansadas.png";
// Medicina Estética category image
import medicinaEsteticaImage from "@/assets/medicinaEstetica/medicina-estetica.jpeg";

// Masaje treatment images
import masajeAlbaricoqueImage from "@/assets/masajes/masaje-relajante-albaricoque.jpeg";
import masajeAlmendrasImage from "@/assets/masajes/masaje-relajante-almendras.jpeg";
import masajeUvaImage from "@/assets/masajes/masaje-relajante-uva.jpeg";
import masajePiesImage from "@/assets/masajes/masaje-parcial-pies.jpeg";
import masajeCraneoImage from "@/assets/masajes/masaje-parcial-craneo-cervical.jpeg";
import masajeEspaldaImage from "@/assets/masajes/masaje-parcial-espalda.jpeg";
import masajePiernasImage from "@/assets/masajes/masaje-piernas-cansadas+vendas.jpeg";
import masajePiedrasImage from "@/assets/masajes/masaje-piedras-calientes.jpeg";
import masajeSolinoImage from "@/assets/masajes/solinho.jpeg";
import masajeCanelaImage from "@/assets/masajes/exfoliacion+masaje-canela.jpeg";
import masajeMaracuyaImage from "@/assets/masajes/exfoliacion+masaje-maracuya.jpeg";
import masajeChocolateImage from "@/assets/masajes/envoltura+masaje-chocolate.jpeg";
import masajeAlgasImage from "@/assets/masajes/envoltura+masaje-algas.jpeg";
import masajeCelulasImage from "@/assets/masajes/envoltura+masaje-celulas-madre.jpeg";
import masajeJengibreImage from "@/assets/masajes/envoltura+masaje-jengibre.jpeg";
import masajeCompletoImage from "@/assets/masajes/exfoliacion+envoltura+masaje.jpeg";

// Facial treatment images
import limpiezaBasicaImage from "@/assets/faciales/limpieza-basica.jpeg";
import limpiezaProfundaImage from "@/assets/faciales/limpieza-profunda.jpeg";

// Micropigmentación treatment images
import microCejasImage from "@/assets/micropigmentacion/micropigmentacion-cejas.jpeg";
import microLabiosImage from "@/assets/micropigmentacion/micropigmentacion-labios.jpeg";
import microOjosImage from "@/assets/micropigmentacion/micropigmentacion-ojos.jpeg";

// Pestañas treatment images
import pestanasClasicaImage from "@/assets/pestanhas/tecnica-clasica.jpeg";
import pestanasRimelImage from "@/assets/pestanhas/efecto-rimel-mojado.jpeg";
import pestanasVolumenImage from "@/assets/pestanhas/pestanhas-volumen.jpeg";
import pestanasRetiradaImage from "@/assets/pestanhas/retirada-extensiones.jpeg";

// Cejas treatment images
import cejasTinteImage from "@/assets/cejas/depilacion+tinte.jpeg";
import cejasDepilacionImage from "@/assets/cejas/disenho+depilacion.jpeg";

// Medicina Estética treatment images
import labiosImage from "@/assets/medicinaEstetica/labios.jpeg";
import mentonImage from "@/assets/medicinaEstetica/menton.jpeg";
import rinomodelacionImage from "@/assets/medicinaEstetica/rinomodelacion.jpeg";
import ojerasImage from "@/assets/medicinaEstetica/ojeras.jpeg";
import armonizacionFacialImage from "@/assets/medicinaEstetica/armonizacion-facial.jpeg";
import neuromoduladoresImage from "@/assets/medicinaEstetica/neuromoduladores.jpeg";
import hiperhidrosisImage from "@/assets/medicinaEstetica/hiperhidrosis.jpeg";
import bruxismoImage from "@/assets/medicinaEstetica/bruxismo.jpeg";
import harmonyCaImage from "@/assets/medicinaEstetica/harmonyCa.jpeg";
import radiesseImage from "@/assets/medicinaEstetica/radiesse.jpeg";
import sculptraImage from "@/assets/medicinaEstetica/sculptra.jpeg";
import vitaminasFacialesImage from "@/assets/medicinaEstetica/vitaminas-faciales.jpeg";
import vitaminasPeriocularesImage from "@/assets/medicinaEstetica/vitaminas-perioculares.jpeg";
import hidratacionProfundaImage from "@/assets/medicinaEstetica/hidratacion-profunda.jpeg";
import profhiloImage from "@/assets/medicinaEstetica/profhilo.jpeg";
import endoliftImage from "@/assets/medicinaEstetica/endolift.jpeg";

export interface Treatment {
  name: string;
  description: string;
  price: string;
  duration: string;
  image?: string;
}

export interface ServiceCategory {
  category: string;
  image: string;
  treatments: Treatment[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    category: "Masajes",
    image: masajesImage,
    treatments: [
      {
        name: "Masaje Relajante Albaricoque",
        description: "Masaje relajante con aceites esenciales de albaricoque para una experiencia sensorial única.",
        price: "70€",
        duration: "60 min",
        image: masajeAlbaricoqueImage
      },
      {
        name: "Masaje Relajante Almendra",
        description: "Tratamiento relajante con aceite de almendras dulces que nutre e hidrata la piel.",
        price: "70€",
        duration: "60 min",
        image: masajeAlmendrasImage
      },
      {
        name: "Masaje Relajante Uva",
        description: "Masaje antioxidante con extractos de uva que revitaliza y rejuvenece la piel.",
        price: "70€",
        duration: "60 min",
        image: masajeUvaImage
      },
      {
        name: "Masaje Parcial Pies",
        description: "Tratamiento específico para relajar y descansar los pies después de un día intenso.",
        price: "45€",
        duration: "30 min",
        image: masajePiesImage
      },
      {
        name: "Masaje Parcial Cráneo-Cervical",
        description: "Masaje especializado para aliviar tensiones en cuello, hombros y cuero cabelludo.",
        price: "45€",
        duration: "30 min",
        image: masajeCraneoImage
      },
      {
        name: "Masaje Parcial Espalda",
        description: "Masaje enfocado en la zona de la espalda para aliviar tensiones musculares y contracturas.",
        price: "45€",
        duration: "30 min",
        image: masajeEspaldaImage
      },
      {
        name: "Masaje Piernas Cansadas + Vendar",
        description: "Tratamiento específico para piernas cansadas con técnicas de drenaje y vendaje relajante.",
        price: "50€",
        duration: "45 min",
        image: masajePiernasImage
      },
      {
        name: "Piedras Calientes",
        description: "Masaje terapéutico con piedras volcánicas calientes que relajan profundamente los músculos.",
        price: "100€",
        duration: "90 min",
        image: masajePiedrasImage
      },
      {
        name: "Soliño",
        description: "Tratamiento especial relajante que combina técnicas tradicionales para el bienestar total.",
        price: "80€",
        duration: "75 min",
        image: masajeSolinoImage
      },
      {
        name: "Exfoliación + Masaje Canela y Piripiri",
        description: "Exfoliación corporal seguida de masaje con aceites de canela y piripiri, efecto tonificante y revitalizante.",
        price: "80€",
        duration: "90 min",
        image: masajeCanelaImage
      },
      {
        name: "Exfoliación + Masaje Maracuyá",
        description: "Exfoliación suave y masaje con aceite de maracuyá para una piel radiante y nutrida.",
        price: "80€",
        duration: "90 min",
        image: masajeMaracuyaImage
      },
      {
        name: "Envoltura + Masaje Chocolate",
        description: "Envoltura de chocolate rica en antioxidantes seguida de masaje relajante y nutritivo.",
        price: "90€",
        duration: "90 min",
        image: masajeChocolateImage
      },
      {
        name: "Envoltura + Masaje Algas",
        description: "Tratamiento marino con envoltura de algas que remineraliza la piel y masaje relajante.",
        price: "90€",
        duration: "90 min",
        image: masajeAlgasImage
      },
      {
        name: "Envoltura + Masaje Células Madre",
        description: "Tratamiento premium con envoltura de células madre vegetales y masaje regenerador.",
        price: "90€",
        duration: "90 min",
        image: masajeCelulasImage
      },
      {
        name: "Envoltura + Masaje Jengibre",
        description: "Envoltura con jengibre de efecto calor seguida de masaje que activa la circulación.",
        price: "90€",
        duration: "90 min",
        image: masajeJengibreImage
      },
      {
        name: "Exfoliación + Envoltura + Masaje",
        description: "Tratamiento completo que combina exfoliación, envoltura corporal y masaje relajante para una experiencia de spa completa.",
        price: "110€",
        duration: "120 min",
        image: masajeCompletoImage
      }
    ]
  },
  {
    category: "Faciales",
    image: facialesImage,
    treatments: [
      {
        name: "Limpieza Básica",
        description: "Tratamiento completo de limpieza que elimina impurezas y deja la piel radiante.",
        price: "30€",
        duration: "30 min",
        image: limpiezaBasicaImage
      },
      {
        name: "Limpieza Profunda",
        description: "Tratamiento avanzado que limpia, exfolia e hidrata la piel en profundidad.",
        price: "60€",
        duration: "60 min",
        image: limpiezaProfundaImage
      }
    ]
  },
  {
    category: "Láser",
    image: laserImage,
    treatments: [
      {
        name: "Consulta Láser",
        description: "Consulta gratuita para evaluar tu tipo de piel y planificar el tratamiento de depilación láser más adecuado.",
        price: "Gratis",
        duration: "10 min"
      },
      {
        name: "Ingle Normal",
        description: "Depilación láser de la zona del bikini en línea normal para una piel suave y sin vello.",
        price: "45€",
        duration: "15 min"
      },
      {
        name: "Ingle Completa + Peri",
        description: "Depilación láser completa de la zona del bikini incluyendo área perianal para máxima comodidad.",
        price: "55€",
        duration: "15 min"
      },
      {
        name: "Axilas",
        description: "Depilación láser de las axilas para eliminar el vello de forma permanente y mantener la zona suave.",
        price: "30€",
        duration: "15 min"
      },
      {
        name: "Medias Piernas",
        description: "Depilación láser de medias piernas (inferior o superior) para piernas lisas y sin vello.",
        price: "65€",
        duration: "20 min"
      },
      {
        name: "Pierna Entera",
        description: "Depilación láser completa de ambas piernas para una piel suave de los muslos hasta los tobillos.",
        price: "98€",
        duration: "30 min"
      },
      {
        name: "Brazos Completos",
        description: "Depilación láser de brazos completos para eliminar el vello de antebrazos y brazos superiores.",
        price: "70€",
        duration: "25 min"
      },
      {
        name: "Dorsal",
        description: "Depilación láser de la zona dorsal para una espalda suave y libre de vello.",
        price: "50€",
        duration: "25 min"
      },
      {
        name: "Lumbar",
        description: "Depilación láser de la zona lumbar para eliminar el vello de la parte baja de la espalda.",
        price: "50€",
        duration: "25 min"
      },
      {
        name: "Abdomen",
        description: "Depilación láser del abdomen para una piel lisa y suave en la zona del vientre.",
        price: "50€",
        duration: "25 min"
      },
      {
        name: "Pecho",
        description: "Depilación láser del pecho para eliminar el vello y mantener la zona suave.",
        price: "50€",
        duration: "25 min"
      },
      {
        name: "Hombros",
        description: "Depilación láser de los hombros para una piel suave y libre de vello.",
        price: "50€",
        duration: "25 min"
      },
      {
        name: "Glúteos",
        description: "Depilación láser de los glúteos para una piel suave y sin vello en esta zona.",
        price: "50€",
        duration: "25 min"
      },
      {
        name: "Medios Brazos",
        description: "Depilación láser de medios brazos (hasta el codo) para antebrazos suaves.",
        price: "50€",
        duration: "25 min"
      },
      {
        name: "Facial Completo",
        description: "Depilación láser facial completa para eliminar el vello no deseado del rostro.",
        price: "50€",
        duration: "20 min"
      },
      {
        name: "Labio",
        description: "Depilación láser del labio superior para eliminar el vello no deseado.",
        price: "20€",
        duration: "15 min"
      },
      {
        name: "Mentón",
        description: "Depilación láser del mentón para eliminar el vello no deseado de esta zona.",
        price: "20€",
        duration: "15 min"
      },
      {
        name: "Manos",
        description: "Depilación láser de las manos para eliminar el vello dorsal y mantener las manos suaves.",
        price: "20€",
        duration: "15 min"
      },
      {
        name: "Pies",
        description: "Depilación láser de los pies para eliminar el vello del dorso y mantener los pies suaves.",
        price: "20€",
        duration: "15 min"
      },
      {
        name: "Perianal",
        description: "Depilación láser de la zona perianal para máxima higiene y comodidad.",
        price: "20€",
        duration: "15 min"
      },
      {
        name: "Areolas",
        description: "Depilación láser de las areolas para eliminar el vello no deseado de esta zona sensible.",
        price: "20€",
        duration: "15 min"
      },
      {
        name: "Labio + Mentón",
        description: "Depilación láser combinada de labio superior y mentón para una zona facial completamente suave.",
        price: "35€",
        duration: "15 min"
      },
      {
        name: "Mentón Prolongado",
        description: "Depilación láser extendida del mentón para cubrir un área más amplia.",
        price: "40€",
        duration: "15 min"
      },
      {
        name: "Piernas Enteras + Ingles + Axilas",
        description: "Tratamiento completo de depilación láser que incluye piernas enteras, ingles y axilas.",
        price: "140€",
        duration: "45 min"
      },
      {
        name: "Piernas Enteras + Ingle Normal",
        description: "Depilación láser de piernas enteras combinada con ingle en línea normal.",
        price: "130€",
        duration: "45 min"
      },
      {
        name: "Piernas Enteras + Axilas",
        description: "Depilación láser de piernas enteras combinada con axilas para máxima comodidad.",
        price: "110€",
        duration: "35 min"
      },
      {
        name: "Ingle Normal + Axilas",
        description: "Depilación láser combinada de ingle normal y axilas para una zona íntima y axilas suaves.",
        price: "58€",
        duration: "20 min"
      },
      {
        name: "Ingle Completa + Axilas",
        description: "Depilación láser de ingle completa combinada con axilas para máxima higiene.",
        price: "68€",
        duration: "25 min"
      },
      {
        name: "Medias Piernas + Ingles + Axilas",
        description: "Depilación láser de medias piernas combinada con ingles y axilas.",
        price: "115€",
        duration: "35 min"
      },
      {
        name: "Medias Piernas + Ingles",
        description: "Depilación láser de medias piernas combinada con ingles para mayor comodidad.",
        price: "95€",
        duration: "30 min"
      },
      {
        name: "Medias Piernas + Axilas",
        description: "Depilación láser de medias piernas combinada con axilas para un tratamiento completo.",
        price: "75€",
        duration: "30 min"
      },
      {
        name: "Espalda + Hombros",
        description: "Depilación láser combinada de espalda y hombros para una zona superior completamente suave.",
        price: "80€",
        duration: "30 min"
      },
      {
        name: "Brazos + Hombros + Axilas",
        description: "Depilación láser completa de brazos, hombros y axilas para una zona superior sin vello.",
        price: "100€",
        duration: "30 min"
      },
      {
        name: "Tórax + Espalda + Brazos + Axilas",
        description: "Tratamiento completo de depilación láser de toda la zona superior del cuerpo.",
        price: "190€",
        duration: "45 min"
      },
      {
        name: "Brazos + Hombros",
        description: "Depilación láser de brazos completos combinada con hombros para mayor cobertura.",
        price: "85€",
        duration: "35 min"
      }
    ]
  },
  {
    category: "Micropigmentación",
    image: microImage,
    treatments: [
      {
        name: "Eyeliner (línea entre pestañas)",
        description: "Micropigmentación de línea de ojos entre las pestañas para un delineado permanente y natural.",
        price: "350€",
        duration: "120 min",
        image: microOjosImage
      },
      {
        name: "Micropigmentación Labios/Cejas (1ª Sesión)",
        description: "Primera sesión de micropigmentación para labios o cejas con diseño personalizado y color natural.",
        price: "350€",
        duration: "120 min",
        image: microLabiosImage
      },
      {
        name: "Repaso Micropigmentación (Al Mes)",
        description: "Repaso gratuito de micropigmentación realizado al mes para mantener el color y la forma perfectos.",
        price: "Gratis",
        duration: "60 min",
        image: microCejasImage
      },
      {
        name: "Repaso Anual Micropigmentación",
        description: "Repaso gratuito anual de micropigmentación con descuentos según tiempo transcurrido desde la última sesión.",
        price: "Gratis",
        duration: "90 min",
        image: microCejasImage
      }
    ]
  },
  {
    category: "Pestañas",
    image: pestanasImage,
    treatments: [
      {
        name: "Pestañas Técnica Clásica (1ª Puesta)",
        description: "Primera aplicación de extensiones de pestañas con técnica clásica para conseguir mayor longitud y volumen.",
        price: "70€",
        duration: "150 min",
        image: pestanasClasicaImage
      },
      {
        name: "Pestañas Efecto Rímel/Mojado (1ª Puesta)",
        description: "Primera aplicación de extensiones con efecto rímel o mojado para una mirada intensa y definida.",
        price: "75€",
        duration: "150 min",
        image: pestanasRimelImage
      },
      {
        name: "Repaso Pestañas Efecto Rímel/Mojado (3 Semanas)",
        description: "Repaso de extensiones con efecto rímel/mojado cada 3 semanas para mantener el resultado perfecto.",
        price: "55€",
        duration: "90 min",
        image: pestanasRimelImage
      },
      {
        name: "Pestañas Volumen 2D/3D/Fibra Tecnológica",
        description: "Aplicación de extensiones con técnica de volumen 2D/3D o fibra tecnológica para máxima densidad.",
        price: "80€",
        duration: "150 min",
        image: pestanasVolumenImage
      },
      {
        name: "Repaso Pestañas Volumen 2D/3D/Fibra Tecnológica",
        description: "Repaso de extensiones con volumen 2D/3D cada 3 semanas para mantener la densidad y forma.",
        price: "60€",
        duration: "90 min",
        image: pestanasVolumenImage
      },
      {
        name: "Retirada de Extensiones",
        description: "Retirada profesional de extensiones de pestañas de forma segura y sin dañar las pestañas naturales.",
        price: "15€",
        duration: "30 min",
        image: pestanasRetiradaImage
      }
    ]
  },
  // Temporarily hidden services
  // {
  //   category: "Manicura",
  //   image: manicuraImage,
  //   treatments: [
  //     {
  //       name: "Esmaltado Semipermanente",
  //       description: "Esmaltado semipermanente de larga duración que mantiene el brillo y color perfecto hasta 3 semanas.",
  //       price: "30€",
  //       duration: "90 min"
  //     },
  //     {
  //       name: "Arreglo Uña Rota",
  //       description: "Reparación profesional de uñas rotas o dañadas para restaurar su forma y resistencia.",
  //       price: "6€",
  //       duration: "15 min"
  //     },
  //     {
  //       name: "Decoración Elaborada",
  //       description: "Decoración artística elaborada por uña para diseños únicos y personalizados.",
  //       price: "1€/uña",
  //       duration: "5 min"
  //     },
  //     {
  //       name: "Esmaltado Semipermanente Francesa",
  //       description: "Esmaltado semipermanente con diseño francés clásico y elegante de larga duración.",
  //       price: "35€",
  //       duration: "105 min"
  //     },
  //     {
  //       name: "Retirar Semipermanente",
  //       description: "Retirada profesional del esmalte semipermanente sin dañar la uña natural.",
  //       price: "10€",
  //       duration: "20 min"
  //     },
  //     {
  //       name: "Retirar Acrygel",
  //       description: "Retirada profesional del acrílico y gel sin dañar la uña natural.",
  //       price: "12€",
  //       duration: "30 min"
  //     },
  //     {
  //       name: "Retirar + Limar Semipermanente",
  //       description: "Retirada y limado profesional del esmalte semipermanente para preparar las uñas.",
  //       price: "14€",
  //       duration: "30 min"
  //     },
  //     {
  //       name: "Retirar + Limar Acr+gel",
  //       description: "Retirada y limado profesional del acrílico y gel para preparar las uñas para un nuevo tratamiento.",
  //       price: "16€",
  //       duration: "35 min"
  //     }
  //   ]
  // },
  // {
  //   category: "Pedicura",
  //   image: pedicuraImage,
  //   treatments: [
  //     {
  //       name: "Pedicura Básica",
  //       description: "Cuidado básico de pies y uñas con limpieza, limado y esmaltado tradicional.",
  //       price: "25€",
  //       duration: "40 min"
  //     },
  //     {
  //       name: "Pedicura Talones Secos",
  //       description: "Tratamiento especializado para talones secos con limpieza con torno, exfoliación e hidratación profunda.",
  //       price: "30€",
  //       duration: "50 min"
  //     },
  //     {
  //       name: "Pedicura Completa",
  //       description: "Tratamiento completo de pedicura con limpieza con torno, exfoliación, hidratación y esmaltado semipermanente.",
  //       price: "40€",
  //       duration: "120 min"
  //     }
  //   ]
  // },
  {
    category: "Tatuajes",
    image: tatuajeImage,
    treatments: [
      {
        name: "Consulta previa tatuaje",
        description: "Consulta gratuita previa para diseñar y planificar tu tatuaje personalizado con nuestros profesionales.",
        price: "Gratis",
        duration: "10 min"
      }
    ]
  },
  {
    category: "Cejas",
    image: cejasImage,
    treatments: [
      {
        name: "Diseño de cejas + tinte",
        description: "Diseño profesional de cejas con tinte para definir y oscurecer el color natural de las cejas.",
        price: "20€",
        duration: "30 min",
        image: cejasTinteImage
      },
      {
        name: "Diseño de cejas + depilación",
        description: "Diseño y depilación profesional de cejas para conseguir la forma perfecta y definir el arco.",
        price: "10€",
        duration: "15 min",
        image: cejasDepilacionImage
      }
    ]
  },
  {
    category: "Tratamientos corporales",
    image: tratamientosCorporalesImage,
    treatments: [
      {
        name: "Radiofrecuencia corporal",
        description: "Tratamiento no invasivo que reafirma y tonifica la silueta. Estimula colágeno, mejora circulación y reduce flacidez. Resultados visibles desde las primeras sesiones.",
        price: "65€",
        duration: "60 min",
        image: radiofrecuenciaCorporalImage
      },
      {
        name: "Bono 12 sesiones de radiofrecuencia corporal",
        description: "Bono para resultados visibles y duraderos. Reafirma, tonifica y mejora la textura de la piel. Efecto lifting corporal sin cirugía.",
        price: "500€",
        duration: "60 min",
        image: radiofrecuenciaCorporalImage
      },
      {
        name: "Cavitación",
        description: "Ultrasonidos de baja frecuencia para eliminar grasa localizada. Favorece eliminación de líquidos y toxinas. Ideal para abdomen, muslos, glúteos o brazos.",
        price: "55€",
        duration: "45 min",
        image: cavitacionImage
      },
      {
        name: "Bono 12 sesiones de cavitación",
        description: "Bono ideal para reducir grasa localizada progresivamente. Ultrasonidos que rompen células grasas. 12 sesiones para resultados visibles y duraderos.",
        price: "400€",
        duration: "45 min",
        image: cavitacionImage
      },
      {
        name: "Diagnóstico corporal",
        description: "Evaluación personalizada de tu cuerpo y objetivos estéticos. Analizamos grasa, retención de líquidos y firmeza. Diseñamos un plan de tratamiento adaptado a ti.",
        price: "Gratis",
        duration: "30 min",
        image: diagnosticoCorporalImage
      },
      {
        name: "Tratamiento Piernas Cansadas + Vendas",
        description: "Maniobras suaves y drenantes que activan la circulación. Relaja la tensión muscular. Combinado con vendas frías.",
        price: "50€",
        duration: "45 min",
        image: piernasCansadasImage
      }
    ]
  },
  // {
  //   category: "Medicina Estética",
  //   image: medicinaEsteticaImage,
  //   treatments: [
  //     {
  //       name: "Labios (1 vial)",
  //       description: "Tratamiento con ácido hialurónico destinado a aumentar el volumen, definir el contorno y mejorar la hidratación de los labios, logrando un aspecto natural y armonioso.",
  //       price: "410€",
  //       duration: "—",
  //       image: labiosImage
  //     },
  //     {
  //       name: "Mentón (1 vial)",
  //       description: "Infiltración de ácido hialurónico para proyectar y definir el mentón, equilibrando el perfil facial y mejorando la proporción del tercio inferior del rostro.",
  //       price: "430€",
  //       duration: "—",
  //       image: mentonImage
  //     },
  //     {
  //       name: "Rinomodelación (1 vial)",
  //       description: "Alternativa no quirúrgica a la rinoplastia. Mediante el uso de ácido hialurónico se corrigen pequeñas imperfecciones nasales, elevando la punta o suavizando el dorso sin cirugía.",
  //       price: "460€",
  //       duration: "—",
  //       image: rinomodelacionImage
  //     },
  //     {
  //       name: "Mandibular (2 viales)",
  //       description: "Definición del ángulo mandibular y línea de la mandíbula mediante ácido hialurónico, aportando estructura, firmeza y un contorno facial más marcado y armónico.",
  //       price: "760€",
  //       duration: "—"
  //     },
  //     {
  //       name: "Ojeras (2 viales)",
  //       description: "Tratamiento con ácido hialurónico de baja densidad para rellenar y suavizar el hundimiento de la zona infraorbitaria, mejorando el aspecto cansado y aportando luminosidad.",
  //       price: "760€",
  //       duration: "—",
  //       image: ojerasImage
  //     },
  //     {
  //       name: "Armonización facial (3–6 viales)",
  //       description: "Procedimiento integral que combina infiltraciones en distintas áreas (pómulos, mentón, mandíbula, labios, etc.) para equilibrar las proporciones del rostro y realzar la belleza natural de manera global.",
  //       price: "990€–1740€",
  //       duration: "—",
  //       image: armonizacionFacialImage
  //     },
  //     {
  //       name: "Neuromoduladores tercio superior (64U)",
  //       description: "Aplicación de toxina botulínica para relajar los músculos del tercio superior del rostro (frente, entrecejo y patas de gallo), suavizando arrugas dinámicas y logrando una expresión más descansada.",
  //       price: "390€",
  //       duration: "—",
  //       image: neuromoduladoresImage
  //     },
  //     {
  //       name: "Hiperhidrosis (100U)",
  //       description: "Tratamiento con toxina botulínica que reduce la sudoración excesiva en axilas, manos o pies, bloqueando temporalmente la actividad de las glándulas sudoríparas.",
  //       price: "690€",
  //       duration: "—",
  //       image: hiperhidrosisImage
  //     },
  //     {
  //       name: "Bruxismo (aprox. 60U)",
  //       description: "Infiltración de toxina botulínica en los músculos maseteros para disminuir la tensión mandibular, aliviar el rechinamiento dental y estilizar el tercio inferior del rostro.",
  //       price: "450€",
  //       duration: "—",
  //       image: bruxismoImage
  //     },
  //     {
  //       name: "HarmonyCa (2 viales + cánula)",
  //       description: "Bioremodelador facial que combina ácido hialurónico y hidroxiapatita cálcica, estimulando la producción de colágeno y mejorando la firmeza y calidad de la piel.",
  //       price: "690€",
  //       duration: "—",
  //       image: harmonyCaImage
  //     },
  //     {
  //       name: "Radiesse (1 vial)",
  //       description: "Relleno a base de hidroxiapatita cálcica que aporta soporte estructural y estimula el colágeno, ideal para redefinir contornos y mejorar la flacidez facial.",
  //       price: "690€",
  //       duration: "—",
  //       image: radiesseImage
  //     },
  //     {
  //       name: "Sculptra (1 vial)",
  //       description: "Tratamiento bioestimulador con ácido poliláctico que reactiva la producción natural de colágeno, mejorando la firmeza y densidad cutánea de forma progresiva.",
  //       price: "710€",
  //       duration: "—",
  //       image: sculptraImage
  //     },
  //     {
  //       name: "Vitaminas faciales",
  //       description: "Mesoterapia con un cóctel de vitaminas, minerales y ácido hialurónico que revitaliza la piel, mejora la hidratación y aporta luminosidad inmediata.",
  //       price: "270€",
  //       duration: "—",
  //       image: vitaminasFacialesImage
  //     },
  //     {
  //       name: "Vitaminas perioculares",
  //       description: "Mesoterapia específica para la zona del contorno de ojos, que mejora la microcirculación, atenúa ojeras y aporta frescura a la mirada.",
  //       price: "160€",
  //       duration: "—",
  //       image: vitaminasPeriocularesImage
  //     },
  //     {
  //       name: "Hidratación profunda (Skinboosters)",
  //       description: "Infiltraciones de ácido hialurónico de baja reticulación que hidratan en profundidad, mejoran la elasticidad y el aspecto general de la piel sin modificar su volumen.",
  //       price: "290€",
  //       duration: "—",
  //       image: hidratacionProfundaImage
  //     },
  //     {
  //       name: "Profhilo Clásico",
  //       description: "Tratamiento de bio-remodelación dérmica con ácido hialurónico ultrapuro que hidrata, reafirma y mejora la elasticidad de la piel, sin efecto de relleno.",
  //       price: "250€",
  //       duration: "—",
  //       image: profhiloImage
  //     },
  //     {
  //       name: "Profhilo Structura",
  //       description: "Versión avanzada de Profhilo que aporta firmeza y efecto tensor en zonas con pérdida de estructura facial, estimulando colágeno y elastina.",
  //       price: "480€",
  //       duration: "—",
  //       image: profhiloImage
  //     },
  //     {
  //       name: "Endolift",
  //       description: "Procedimiento mínimamente invasivo con láser que reafirma, tensa y remodela los tejidos faciales y corporales desde el interior, estimulando colágeno y eliminando grasa localizada sin cirugía.",
  //       price: "1450€",
  //       duration: "—",
  //       image: endoliftImage
  //     }
  //   ]
  // },
  {
    category: "Nutrición",
    image: nutricionImage,
    treatments: [
      {
        name: "Consulta",
        description: "Consulta nutricional para evaluar el estado general de salud y nutricional y establecer un plan de alimentación adecuado.",
        price: "Consultar",
        duration: "-",
        image: nutricionImage
      }
    ]
  }
];

