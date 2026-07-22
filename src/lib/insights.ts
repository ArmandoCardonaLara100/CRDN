export type InsightBlock =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string; emphasis?: boolean }
  | { type: "list"; items: string[] }
  | { type: "gallery"; images: string[] }
  | { type: "callout"; heading: string; paragraphs: string[] };

export interface InsightImage {
  src: string;
  alt: string;
}

export interface InsightArticle {
  slug: string;
  staticHref: string;
  category: string;
  date: string;
  title: string;
  deck: string;
  excerpt: string;
  featuredImage: string;
  images: InsightImage[];
  blocks: InsightBlock[];
}

export const insightArticles: InsightArticle[] = [
  {
    slug: "por-que-algunas-tiendas-venden-mas",
    staticHref: "insight-por-que-algunas-tiendas-venden-mas.html",
    category: "Diseño comercial",
    date: "Julio 2026",
    title: "¿Por qué algunas tiendas venden más que otras? El papel del diseño comercial",
    deck:
      "La diferencia entre una tienda que vende y una que solo exhibe productos rara vez está en el tamaño del local. Muchas veces está en cómo fue diseñado el espacio.",
    excerpt:
      "Cómo el recorrido, el layout, la iluminación y la exhibición convierten el espacio en una herramienta estratégica para vender mejor.",
    featuredImage: "/images/insights/tiendas-venden-mas-02.jpg",
    images: [
      {
        src: "/images/insights/tiendas-venden-mas-02.jpg",
        alt: "Fachada de una tienda deportiva diseñada como punto focal comercial",
      },
      {
        src: "/images/insights/tiendas-venden-mas-01.jpg",
        alt: "Interior de tienda deportiva con iluminación lineal y exhibición central",
      },
      {
        src: "/images/insights/tiendas-venden-mas-03.jpg",
        alt: "Vista superior del recorrido y las exhibiciones de una tienda deportiva",
      },
    ],
    blocks: [
      { type: "heading", level: 3, text: "Introducción" },
      {
        type: "paragraph",
        text: "Dos tiendas pueden vender exactamente los mismos productos, tener precios similares e incluso ubicarse en la misma plaza comercial. Sin embargo, una de ellas logra atraer más clientes, mantenerlos por más tiempo y convertir más visitas en ventas.",
      },
      { type: "paragraph", text: "¿Por qué ocurre esto?" },
      {
        type: "paragraph",
        text: "Aunque factores como el producto, el servicio o la estrategia comercial influyen directamente en el desempeño de un negocio, el espacio físico también desempeña un papel fundamental.",
      },
      {
        type: "paragraph",
        text: "La manera en que una tienda guía al cliente, organiza sus productos, utiliza la iluminación y construye la experiencia de compra puede modificar la forma en que las personas perciben la marca e interactúan con ella.",
      },
      {
        type: "paragraph",
        text: "Eso es precisamente lo que busca el diseño comercial: convertir el espacio en una herramienta estratégica para el negocio.",
        emphasis: true,
      },
      { type: "heading", level: 2, text: "¿Qué es el diseño comercial?" },
      {
        type: "paragraph",
        text: "El diseño comercial consiste en planificar y desarrollar espacios que respondan tanto a las necesidades operativas del negocio como al comportamiento del consumidor.",
        emphasis: true,
      },
      { type: "paragraph", text: "No se trata únicamente de crear un lugar atractivo." },
      {
        type: "paragraph",
        text: "Su objetivo es que cada decisión de diseño contribuya a mejorar la experiencia del cliente, fortalecer la identidad de la marca y facilitar el proceso de compra.",
      },
      {
        type: "paragraph",
        text: "En el retail contemporáneo, el espacio físico ha dejado de ser un simple contenedor de productos para convertirse en un punto de contacto estratégico entre las marcas y las personas.",
      },
      { type: "heading", level: 2, text: "El diseño influye más de lo que imaginamos" },
      { type: "paragraph", text: "Las personas toman miles de decisiones de forma automática cada día." },
      { type: "paragraph", text: "Cuando entran a una tienda ocurre exactamente lo mismo." },
      { type: "paragraph", text: "En pocos segundos evalúan aspectos como:" },
      {
        type: "list",
        items: [
          "Si el espacio transmite confianza.",
          "Si encuentran fácilmente lo que buscan.",
          "Si la marca parece profesional.",
          "Si vale la pena permanecer.",
          "Si desean regresar.",
        ],
      },
      {
        type: "paragraph",
        text: "Diversas investigaciones sobre psicología ambiental y comportamiento del consumidor han demostrado que el entorno físico influye en la percepción, el tiempo de permanencia y la experiencia de compra.",
      },
      {
        type: "paragraph",
        text: "Por ello, las decisiones de diseño nunca deberían tomarse únicamente por criterios estéticos.",
      },
      { type: "heading", level: 2, text: "1. El recorrido: diseñar el camino del cliente" },
      { type: "paragraph", text: "Pocas personas recorren una tienda completamente al azar." },
      {
        type: "paragraph",
        text: "La distribución del espacio, la ubicación del mobiliario y la posición de los productos influyen en el recorrido que realizan los clientes.",
      },
      { type: "paragraph", text: "Un recorrido bien diseñado permite:" },
      {
        type: "list",
        items: [
          "descubrir más productos;",
          "reducir zonas desaprovechadas;",
          "facilitar la orientación;",
          "aumentar las oportunidades de compra.",
        ],
      },
      {
        type: "paragraph",
        text: "En cambio, un recorrido confuso genera frustración y hace que muchas personas abandonen el espacio antes de explorarlo por completo.",
      },
      {
        type: "paragraph",
        text: "Diseñar un recorrido no consiste en obligar al cliente a caminar más, sino en ayudarlo a descubrir mejor.",
      },
      { type: "heading", level: 2, text: "2. El layout: la estructura que sostiene toda la experiencia" },
      { type: "paragraph", text: "El layout define la organización del espacio comercial.", emphasis: true },
      { type: "paragraph", text: "Es la forma en que se distribuyen:" },
      {
        type: "list",
        items: ["productos;", "mobiliario;", "áreas de atención;", "circulación;", "cajas;", "puntos de exhibición."],
      },
      { type: "paragraph", text: "Un buen layout debe equilibrar tres objetivos:" },
      {
        type: "list",
        items: [
          "facilitar la operación del negocio;",
          "mejorar la experiencia del cliente;",
          "favorecer la exhibición estratégica del producto.",
        ],
      },
      {
        type: "paragraph",
        text: "Cuando estos elementos trabajan de forma integrada, el espacio resulta más intuitivo y eficiente.",
      },
      { type: "heading", level: 2, text: "3. La iluminación también comunica" },
      { type: "paragraph", text: "La iluminación no solo permite ver los productos." },
      {
        type: "paragraph",
        text: "También construye atmósferas, dirige la atención y modifica la percepción del espacio.",
      },
      { type: "paragraph", text: "Una iluminación estratégica puede:" },
      {
        type: "list",
        items: [
          "destacar productos prioritarios;",
          "crear profundidad;",
          "generar ambientes más cálidos;",
          "reforzar el posicionamiento de la marca.",
        ],
      },
      {
        type: "paragraph",
        text: "Las marcas de lujo, por ejemplo, utilizan la iluminación para aumentar el valor percibido de sus productos, mientras que los supermercados suelen emplearla para transmitir frescura y facilitar la comparación entre artículos.",
      },
      { type: "paragraph", text: "Cada tipo de negocio requiere una estrategia distinta." },
      { type: "heading", level: 2, text: "4. Los puntos focales dirigen la atención" },
      {
        type: "paragraph",
        text: "Cuando una persona entra a una tienda, su mirada no recorre todos los productos al mismo tiempo.",
      },
      { type: "paragraph", text: "El cerebro busca referencias visuales." },
      { type: "paragraph", text: "Por ello, los puntos focales son fundamentales.", emphasis: true },
      { type: "paragraph", text: "Un punto focal puede ser:" },
      {
        type: "list",
        items: [
          "una exhibición principal;",
          "un lanzamiento;",
          "una mesa de novedades;",
          "un elemento arquitectónico;",
          "una instalación visual.",
        ],
      },
      {
        type: "paragraph",
        text: "Su función es captar la atención y comunicar rápidamente qué quiere destacar la marca.",
      },
      { type: "paragraph", text: "Sin puntos focales claros, todos los productos compiten entre sí." },
      { type: "paragraph", text: "Y cuando todo intenta llamar la atención, nada realmente destaca." },
      {
        type: "heading",
        level: 2,
        text: "5. La permanencia: un indicador que muchas empresas pasan por alto",
      },
      {
        type: "paragraph",
        text: "Uno de los objetivos del diseño comercial consiste en crear espacios donde las personas quieran permanecer.",
      },
      { type: "paragraph", text: "Esto no significa hacer que el cliente pierda tiempo." },
      {
        type: "paragraph",
        text: "Significa ofrecer una experiencia agradable que favorezca la exploración y reduzca la sensación de prisa.",
      },
      { type: "paragraph", text: "Factores como:" },
      {
        type: "list",
        items: ["comodidad;", "iluminación;", "amplitud;", "música;", "organización;", "circulación;"],
      },
      {
        type: "paragraph",
        text: "influyen en el tiempo que una persona permanece dentro del establecimiento.",
      },
      {
        type: "paragraph",
        text: "Y, en muchos formatos de retail, una mayor permanencia suele traducirse en más oportunidades de interacción con los productos.",
      },
      { type: "heading", level: 2, text: "6. La percepción de marca comienza en el espacio" },
      {
        type: "paragraph",
        text: "Antes de evaluar un producto, el cliente ya ha formado una opinión sobre la marca.",
      },
      {
        type: "paragraph",
        text: "La limpieza, los materiales, la organización, la iluminación y el mantenimiento del espacio transmiten mensajes constantes.",
      },
      { type: "paragraph", text: "Una tienda ordenada comunica profesionalismo." },
      { type: "paragraph", text: "Una tienda saturada puede transmitir desorganización." },
      { type: "paragraph", text: "Un espacio coherente fortalece la confianza." },
      { type: "paragraph", text: "Por eso, el diseño comercial también es branding." },
      { type: "paragraph", text: "Cada detalle contribuye a construir la percepción de la marca." },
      { type: "heading", level: 2, text: "7. Conversión: cuando el diseño facilita la compra" },
      { type: "paragraph", text: "Ningún diseño puede garantizar un incremento en las ventas." },
      {
        type: "paragraph",
        text: "Las decisiones de compra dependen de múltiples factores, como el producto, el precio, el servicio y la estrategia comercial.",
      },
      {
        type: "paragraph",
        text: "Sin embargo, un diseño comercial bien ejecutado puede reducir barreras durante el proceso de compra.",
      },
      {
        type: "paragraph",
        text: "Cuando el cliente encuentra fácilmente lo que busca, comprende la exhibición y disfruta del recorrido, la experiencia se vuelve más fluida.",
      },
      { type: "paragraph", text: "El diseño no vende por sí solo." },
      {
        type: "paragraph",
        text: "Pero puede crear las condiciones necesarias para que la compra ocurra con mayor facilidad.",
      },
      { type: "heading", level: 2, text: "Errores comunes que limitan el desempeño de una tienda" },
      {
        type: "paragraph",
        text: "Muchas empresas invierten en remodelaciones sin analizar cómo funciona realmente su espacio.",
      },
      { type: "paragraph", text: "Algunos de los errores más frecuentes son:" },
      {
        type: "list",
        items: [
          "Saturar la exhibición con demasiados productos.",
          "Diseñar únicamente con criterios estéticos.",
          "Descuidar la circulación.",
          "No establecer jerarquías visuales.",
          "Utilizar una iluminación uniforme para todo el espacio.",
          "Ignorar el comportamiento del consumidor.",
          "No actualizar el diseño conforme evolucionan las necesidades del negocio.",
        ],
      },
      { type: "heading", level: 2, text: "El diseño comercial es una inversión, no un gasto" },
      {
        type: "paragraph",
        text: "Las mejores tiendas no son necesariamente las más grandes ni las más costosas.",
      },
      { type: "paragraph", text: "Son aquellas donde cada elemento cumple una función." },
      {
        type: "paragraph",
        text: "Cada metro cuadrado representa una oportunidad para comunicar, orientar, exhibir y fortalecer la relación entre la marca y sus clientes.",
      },
      {
        type: "paragraph",
        text: "Cuando el diseño responde a una estrategia comercial, el espacio deja de ser un escenario y se convierte en una herramienta para generar valor.",
      },
      { type: "heading", level: 2, text: "Conclusión" },
      {
        type: "paragraph",
        text: "Las tiendas que destacan no lo hacen únicamente por los productos que ofrecen.",
      },
      {
        type: "paragraph",
        text: "Lo consiguen porque cada decisión de diseño está pensada para facilitar la compra, mejorar la experiencia del cliente y fortalecer la identidad de la marca.",
      },
      {
        type: "paragraph",
        text: "El recorrido, el layout, la iluminación, los puntos focales y la exhibición de producto no son elementos aislados. Juntos construyen un espacio que comunica, conecta y acompaña al cliente durante todo su proceso de compra.",
      },
      {
        type: "paragraph",
        text: "El diseño comercial no es decoración. Es una estrategia de negocio.",
        emphasis: true,
      },
      {
        type: "callout",
        heading: "¿Quieres que tu espacio trabaje a favor de tu negocio?",
        paragraphs: [
          "En CRDN diseñamos espacios comerciales donde la arquitectura, el retail y el visual merchandising trabajan de forma integrada para fortalecer la experiencia del cliente y aumentar el potencial comercial de cada proyecto.",
          "Porque cada decisión de diseño debe generar valor para tu negocio.",
        ],
      },
      {
        type: "gallery",
        images: [
          "/images/insights/tiendas-venden-mas-02.jpg",
          "/images/insights/tiendas-venden-mas-01.jpg",
          "/images/insights/tiendas-venden-mas-03.jpg",
        ],
      },
    ],
  },
  {
    slug: "visual-merchandising-decision-de-compra",
    staticHref: "insight-visual-merchandising.html",
    category: "Visual Merchandising",
    date: "Julio 2026",
    title: "¿Qué es el Visual Merchandising y cómo influye en la decisión de compra?",
    deck:
      "Cuando una persona entra a una tienda, comienza a tomar decisiones mucho antes de tocar un producto.",
    excerpt:
      "Cómo la presentación visual, el recorrido y la jerarquía de producto orientan al cliente y facilitan la decisión de compra.",
    featuredImage: "/images/insights/visual-merchandising-02.jpg",
    images: [
      {
        src: "/images/insights/visual-merchandising-02.jpg",
        alt: "Exhibición central de cosméticos organizada por jerarquía visual",
      },
      {
        src: "/images/insights/visual-merchandising-01.jpg",
        alt: "Vista general de una tienda de cosméticos con exhibiciones y recorridos claros",
      },
    ],
    blocks: [
      {
        type: "paragraph",
        text: "En cuestión de segundos, su cerebro interpreta la iluminación, el orden, los colores, la distribución del espacio y la forma en que los productos están exhibidos. Estos estímulos influyen en cómo percibe la marca, qué recorrido realiza dentro de la tienda y, en muchos casos, en su decisión de compra.",
      },
      { type: "paragraph", text: "Eso es precisamente lo que estudia el Visual Merchandising.", emphasis: true },
      {
        type: "paragraph",
        text: "Lejos de ser únicamente una cuestión estética, el visual merchandising es una disciplina estratégica que combina diseño, comportamiento del consumidor y comunicación visual para crear espacios que faciliten la compra y fortalezcan la identidad de una marca.",
      },
      { type: "heading", level: 2, text: "¿Qué es el Visual Merchandising?" },
      {
        type: "paragraph",
        text: "El Visual Merchandising es la disciplina que planifica y organiza la presentación visual de los productos dentro de un espacio comercial para mejorar la experiencia del cliente y favorecer el desempeño comercial.",
        emphasis: true,
      },
      {
        type: "paragraph",
        text: "Su propósito no es decorar una tienda, su objetivo es comunicar, orientar, destacar productos y facilitar la decisión de compra.",
      },
      {
        type: "paragraph",
        text: "De acuerdo con el Retail Design Institute, el diseño del entorno comercial influye directamente en la manera en que las personas interactúan con una marca y experimentan el proceso de compra.",
      },
      {
        type: "paragraph",
        text: "En otras palabras, el visual merchandising convierte el espacio físico en un canal de comunicación.",
      },
      { type: "heading", level: 2, text: "Mucho más que acomodar productos" },
      {
        type: "paragraph",
        text: "Uno de los errores más comunes es pensar que el visual merchandising consiste únicamente en organizar estantes o hacer que una tienda se vea atractiva.",
      },
      { type: "paragraph", text: "En realidad, detrás de cada exhibición existe una estrategia." },
      { type: "paragraph", text: "Cada decisión responde a preguntas como:" },
      {
        type: "list",
        items: [
          "¿Qué producto queremos destacar?",
          "¿Qué recorrido queremos que siga el cliente?",
          "¿Dónde debe detenerse?",
          "¿Qué productos pueden generar compras complementarias?",
          "¿Qué queremos que recuerde de la marca al salir?",
        ],
      },
      {
        type: "paragraph",
        text: "El objetivo es reducir la fricción durante la compra y facilitar que el cliente descubra productos de manera natural.",
      },
      { type: "heading", level: 2, text: "¿Cómo influye en la decisión de compra?" },
      { type: "paragraph", text: "Las decisiones de compra rara vez son completamente racionales." },
      {
        type: "paragraph",
        text: "Diversas investigaciones en psicología del consumidor y comportamiento de compra muestran que el entorno físico influye en aspectos como la atención, la percepción de calidad, el tiempo de permanencia y la intención de compra.",
      },
      {
        type: "paragraph",
        text: "Autores como Why We Buy han documentado cómo pequeños cambios en el diseño de una tienda pueden modificar la forma en que los consumidores recorren un espacio e interactúan con los productos.",
      },
      {
        type: "paragraph",
        text: "Aunque ningún diseño garantiza por sí solo un incremento en las ventas, sí puede crear condiciones que favorezcan una mejor experiencia y un proceso de compra más intuitivo.",
      },
      { type: "heading", level: 2, text: "Los pilares del Visual Merchandising" },
      { type: "heading", level: 3, text: "1. Jerarquía visual" },
      { type: "paragraph", text: "No todos los productos tienen la misma importancia." },
      {
        type: "paragraph",
        text: "Una exhibición efectiva establece prioridades y dirige la atención hacia los productos estratégicos.",
      },
      { type: "heading", level: 3, text: "2. Exhibición de producto" },
      { type: "paragraph", text: "La forma en que un producto se presenta influye en su valor percibido." },
      {
        type: "paragraph",
        text: "Una exhibición clara, ordenada y bien iluminada facilita la exploración y mejora la experiencia de compra.",
      },
      { type: "heading", level: 3, text: "3. Recorrido del cliente" },
      {
        type: "paragraph",
        text: "El diseño del espacio define cómo se mueve una persona dentro de la tienda.",
      },
      {
        type: "paragraph",
        text: "Una circulación intuitiva favorece el descubrimiento de productos y mejora la experiencia general.",
      },
      { type: "heading", level: 3, text: "4. Identidad de marca" },
      { type: "paragraph", text: "Cada elemento del espacio comunica." },
      {
        type: "paragraph",
        text: "Materiales, iluminación, colores y mobiliario deben transmitir una identidad coherente con la marca.",
      },
      { type: "heading", level: 3, text: "5. Experiencia" },
      { type: "paragraph", text: "Hoy las personas no buscan únicamente comprar." },
      {
        type: "paragraph",
        text: "Buscan espacios que inspiren, sorprendan y generen una conexión emocional con la marca.",
      },
      {
        type: "paragraph",
        text: "Por ello, el visual merchandising ha evolucionado de la simple exhibición de productos hacia el diseño de experiencias.",
      },
      { type: "heading", level: 2, text: "Errores frecuentes en Visual Merchandising" },
      {
        type: "paragraph",
        text: "Muchas empresas invierten en remodelar sus espacios, pero pasan por alto aspectos fundamentales que afectan la experiencia del cliente.",
      },
      { type: "paragraph", text: "Algunos de los errores más comunes son:" },
      {
        type: "list",
        items: [
          "Saturar la exhibición con demasiados productos.",
          "No establecer un punto focal claro.",
          "Descuidar la iluminación.",
          "Cambiar constantemente la organización sin una estrategia.",
          "No actualizar las exhibiciones según temporadas o campañas.",
          "Priorizar la estética sobre la funcionalidad.",
          "Diseñar pensando en el negocio y no en el comportamiento del cliente.",
        ],
      },
      { type: "heading", level: 2, text: "¿Cuándo debería una empresa invertir en Visual Merchandising?" },
      {
        type: "paragraph",
        text: "El visual merchandising no es exclusivo de grandes cadenas de retail.",
      },
      { type: "paragraph", text: "Puede aportar valor cuando:" },
      {
        type: "list",
        items: [
          "Se inaugura una nueva tienda.",
          "Se realiza una remodelación.",
          "Disminuyen las ventas sin una causa evidente.",
          "Se lanza una nueva colección o línea de productos.",
          "La marca busca mejorar la experiencia del cliente.",
          "Se quiere reforzar el posicionamiento frente a la competencia.",
        ],
      },
      { type: "heading", level: 2, text: "El futuro del Visual Merchandising" },
      { type: "paragraph", text: "Las tiendas físicas han dejado de ser únicamente puntos de venta." },
      {
        type: "paragraph",
        text: "Hoy son espacios donde las marcas construyen relaciones, generan confianza y ofrecen experiencias que el comercio electrónico difícilmente puede replicar.",
      },
      {
        type: "paragraph",
        text: "Por ello, el visual merchandising seguirá evolucionando hacia propuestas más dinámicas, personalizadas y centradas en el comportamiento del consumidor, integrando herramientas digitales, análisis de datos y experiencias inmersivas.",
      },
      { type: "heading", level: 2, text: "Conclusión" },
      { type: "paragraph", text: "El visual merchandising no consiste en hacer que una tienda se vea bonita." },
      {
        type: "paragraph",
        text: "Consiste en diseñar un entorno que comunique, oriente y facilite la decisión de compra.",
      },
      {
        type: "paragraph",
        text: "Cuando la exhibición de producto, el diseño del espacio y la experiencia del cliente trabajan de forma integrada, el punto de venta deja de ser un simple lugar de transacción y se convierte en una herramienta estratégica para fortalecer la marca y potenciar su desempeño comercial.",
      },
      {
        type: "paragraph",
        text: "En un mercado cada vez más competitivo, el diseño ya no es únicamente una cuestión estética; es una ventaja competitiva.",
      },
      {
        type: "callout",
        heading: "¿Quieres transformar tu espacio comercial?",
        paragraphs: [
          "En CRDN desarrollamos estrategias de arquitectura comercial, diseño de retail y visual merchandising que ayudan a las marcas a mejorar la experiencia del cliente, optimizar la exhibición de sus productos y convertir cada metro cuadrado en una oportunidad de negocio.",
        ],
      },
      {
        type: "gallery",
        images: [
          "/images/insights/visual-merchandising-02.jpg",
          "/images/insights/visual-merchandising-01.jpg",
        ],
      },
    ],
  },
  {
    slug: "arquitectura-comercial-aumentar-ventas",
    staticHref: "insight-arquitectura-comercial.html",
    category: "Arquitectura comercial",
    date: "Julio 2026",
    title: "¿Qué es la arquitectura comercial y por qué puede aumentar las ventas de un negocio?",
    deck:
      "La forma en que un cliente percibe una marca comienza mucho antes de interactuar con un vendedor o probar un producto.",
    excerpt:
      "Por qué el espacio físico es un activo estratégico capaz de mejorar la experiencia, la operación y el desempeño comercial.",
    featuredImage: "/images/insights/arquitectura-comercial-01.jpg",
    images: [
      {
        src: "/images/insights/arquitectura-comercial-01.jpg",
        alt: "Boutique de moda con recorrido abierto, materiales neutros e iluminación arquitectónica",
      },
      {
        src: "/images/insights/arquitectura-comercial-02.jpg",
        alt: "Boutique en operación con clientes, exhibición central y atención personalizada",
      },
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Desde el momento en que observa la fachada, cruza la entrada y recorre el espacio, su cerebro procesa estímulos que influyen en su percepción, permanencia y decisión de compra. En este contexto, la arquitectura comercial deja de ser una cuestión estética para convertirse en una herramienta estratégica de negocio.",
      },
      {
        type: "paragraph",
        text: "Hoy, las empresas más exitosas entienden que el espacio físico es uno de sus principales activos. Una tienda, restaurante, clínica o showroom bien diseñado no solo refleja la identidad de la marca; también optimiza la operación, mejora la experiencia del cliente y favorece el desempeño comercial.",
      },
      { type: "heading", level: 3, text: "¿Qué es la arquitectura comercial?" },
      {
        type: "paragraph",
        text: "La arquitectura comercial es la disciplina encargada de diseñar espacios destinados a actividades comerciales, considerando tanto aspectos funcionales como estratégicos.",
        emphasis: true,
      },
      {
        type: "paragraph",
        text: "Su objetivo no es únicamente crear espacios atractivos, sino desarrollar entornos que respondan a las necesidades del negocio, del cliente y de la operación diaria.",
      },
      {
        type: "paragraph",
        text: "A diferencia de otros tipos de arquitectura, la arquitectura comercial integra elementos como:",
      },
      {
        type: "list",
        items: [
          "Identidad de marca.",
          "Comportamiento del consumidor.",
          "Experiencia de compra.",
          "Flujo y circulación.",
          "Exhibición estratégica de productos.",
          "Operación del negocio.",
          "Rentabilidad del espacio.",
        ],
      },
      {
        type: "paragraph",
        text: "En otras palabras, cada decisión de diseño responde a un objetivo comercial.",
      },
      { type: "heading", level: 2, text: "La arquitectura comercial como herramienta de negocio" },
      {
        type: "paragraph",
        text: "Durante años, muchas empresas consideraron el diseño de sus espacios como un gasto asociado a la imagen.",
      },
      { type: "paragraph", text: "Hoy esa visión ha cambiado." },
      {
        type: "paragraph",
        text: "La evolución del retail, el crecimiento del comercio electrónico y las nuevas expectativas de los consumidores han convertido a las tiendas físicas en espacios de experiencia, interacción y construcción de marca.",
      },
      {
        type: "paragraph",
        text: "Organizaciones como el Retail Design Institute y la National Retail Federation coinciden en que el diseño de los espacios comerciales influye directamente en la percepción del consumidor, la permanencia en tienda y la experiencia de compra.",
      },
      {
        type: "paragraph",
        text: "Por ello, la arquitectura comercial ya no busca únicamente albergar productos; busca crear entornos que faciliten la conexión entre las personas y las marcas.",
      },
      {
        type: "gallery",
        images: [
          "/images/insights/arquitectura-comercial-01.jpg",
          "/images/insights/arquitectura-comercial-02.jpg",
        ],
      },
    ],
  },
];

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return insightArticles.find((article) => article.slug === slug);
}
