import masajeImage from "@/assets/masajes/masaje.jpg";
import masajesImage from "@/assets/masajes/masajes.jpeg";
import facialesImage from "@/assets/faciales/faciales.jpeg";
import microImage from "@/assets/micropigmentacion/micropigmentacion.jpeg";
import manicuraImage from "@/assets/manicura.jpg";
import pedicuraImage from "@/assets/pedicura.jpg";
import pestanasImage from "@/assets/pestañas/pestañas.jpeg";
import tatuajeImage from "@/assets/tatuaje.jpeg";
import cejasImage from "@/assets/cejas/cejas.jpeg";
import laserImage from "@/assets/laser/laser.jpeg";

// Masaje treatment images
import masajeAlbaricoqueImage from "@/assets/masajes/masaje-relajante-albaricoque.jpeg";
import masajeAlmendrasImage from "@/assets/masajes/masaje-relajante-almendras.jpeg";
import masajeUvaImage from "@/assets/masajes/masaje-relajante-uva.jpeg";
import masajePiesImage from "@/assets/masajes/masaje-parcial-pies.jpeg";
import masajeCraneoImage from "@/assets/masajes/masaje-parcial-craneo-cervical.jpeg";
import masajeEspaldaImage from "@/assets/masajes/masaje-parcial-espalda.jpeg";
import masajePiernasImage from "@/assets/masajes/masaje-piernas-cansadas+vendas.jpeg";
import masajePiedrasImage from "@/assets/masajes/masaje-piedras-calientes.jpeg";
import masajeSolinoImage from "@/assets/masajes/soliño.jpeg";
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
import pestanasClasicaImage from "@/assets/pestañas/tecnica-clasica.jpeg";
import pestanasRimelImage from "@/assets/pestañas/efecto-rimel-mojado.jpeg";
import pestanasVolumenImage from "@/assets/pestañas/pestañas-volumen.jpeg";
import pestanasRetiradaImage from "@/assets/pestañas/retirada-extensiones.jpeg";

// Cejas treatment images
import cejasTinteImage from "@/assets/cejas/depilacion+tinte.jpeg";
import cejasDepilacionImage from "@/assets/cejas/diseño+depilacion.jpeg";

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
        image: microCejasImage
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
    category: "Tatuaje",
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
  }
];

