export interface BusinessInfo {
  name: string;
  tagline: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
    full: string;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    whatsapp: string;
    email: string;
  };
  social: {
    instagram: string;
  };
  booking: {
    booksy: string;
    booksySimple: string;
  };
  hours: {
    weekdays: string;
    display: string;
  };
  maps: {
    embedUrl: string;
    directionsUrl: string;
  };
}

export const businessInfo: BusinessInfo = {
  name: "ZENITH CLINIC",
  tagline: "Clínica de Medicina Estética en Ourense",
  address: {
    street: "Av. da Habana 26",
    city: "Ourense",
    postalCode: "32003",
    country: "España",
    full: "Av. da Habana 26, 32003 Ourense, España"
  },
  contact: {
    phone: "34628521662",
    phoneFormatted: "+34 628 52 16 62",
    whatsapp: "https://wa.me/34628521662",
    email: "info@zntlinic.com"
  },
  social: {
    instagram: "https://www.instagram.com/znt.clinic/"
  },
  booking: {
    booksy: "https://booksy.com/es-es/rwg/153333_zenith-clinic_medicina-estetica_65288_ourense?hl=es-DE&gei=tQHpaP6hB66oxc8P4srX0Qo&rwg_token=ACgRB3e5lvnMzzILBD_P9qgArcYnzOFL65huPYfWsJVgsq5hSxu_StI2RxM6me9s3CH23uA8drCaHINN9CZ0wZz01s1RZi3Q8Q%3D%3D",
    booksySimple: "https://booksy.com/es-es/153333_zenith-clinic_medicina-estetica_65288_ourense"
  },
  hours: {
    weekdays: "Lunes a Viernes 10:00 - 20:00",
    display: "Lunes a viernes 10:00 - 20:00"
  },
  maps: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d737.2486946199689!2d-7.865895830361884!3d42.34263468945067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2fff9e6f8b3aef%3A0x32822d79706056be!2sZenith%20Clinic!5e0!3m2!1ses!2sde!4v1760350524648!5m2!1ses!2sde",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Zenith+Clinic,Av.+da+Habana+26,32003+Ourense,España"
  }
};

