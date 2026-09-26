/*
 * Catálogo ILUSTRATIVO de la demo.
 * Los precios son referenciales en soles (S/, IGV incluido) según rangos habituales del mercado
 * peruano y deben ser reemplazados por los precios reales que confirme Sigue el Ritmo.
 * Las marcas se dejan "por confirmar" hasta recibir el catálogo oficial de la tienda (brief, punto 15).
 *
 * uses:  principiante · estudiante · banda · iglesia · vivo · estudio · eventos
 * level: inicial · intermedio · pro
 */
window.CATEGORIES = [
  { id: "guitarras", icon: "guitar", es: "Guitarras y bajos", en: "Guitars & basses" },
  { id: "andinos", icon: "charango", es: "Peruanos y andinos", en: "Peruvian & Andean" },
  { id: "teclados", icon: "keyboard", es: "Teclados y pianos", en: "Keyboards & pianos" },
  { id: "percusion", icon: "drumkit", es: "Percusión", en: "Percussion" },
  { id: "banda", icon: "marching", es: "Banda escolar", en: "School band" },
  { id: "audio", icon: "speaker", es: "Audio y sonido", en: "Audio & sound" },
  { id: "dj", icon: "headphones", es: "DJ y estudio", en: "DJ & studio" },
  { id: "accesorios", icon: "pick", es: "Accesorios", en: "Accessories" }
];

window.PRODUCTS = [
  /* ---------- Guitarras y bajos ---------- */
  {
    id: "gc-39-estudio", cat: "guitarras", icon: "guitar", price: 290, popular: true,
    uses: ["principiante", "estudiante"], level: "inicial",
    es: { name: "Guitarra clásica 39\" de estudio", desc: "Cuerdas de nylon, tapa laminada y mástil cómodo para manos que recién empiezan. Ideal para clases de colegio y academia.", inc: ["Funda acolchada", "Juego de cuerdas extra", "Afinador de clip"] },
    en: { name: "39\" classical study guitar", desc: "Nylon strings, laminated top and a comfortable neck for beginner hands. Great for school and academy lessons.", inc: ["Padded gig bag", "Spare string set", "Clip-on tuner"] }
  },
  {
    id: "ga-abeto", cat: "guitarras", icon: "guitar", price: 520,
    uses: ["principiante", "vivo", "iglesia"], level: "intermedio",
    es: { name: "Guitarra acústica tapa de abeto", desc: "Cuerdas de metal, cuerpo dreadnought y sonido brillante para rasgueo criollo, baladas y acompañamiento en iglesia.", inc: ["Funda", "Púas surtidas"] },
    en: { name: "Spruce-top acoustic guitar", desc: "Steel strings, dreadnought body and a bright tone for strumming, ballads and church accompaniment.", inc: ["Gig bag", "Assorted picks"] }
  },
  {
    id: "gea-cutaway", cat: "guitarras", icon: "guitar", price: 890, popular: true,
    uses: ["vivo", "iglesia", "eventos"], level: "intermedio",
    es: { name: "Guitarra electroacústica cutaway", desc: "Ecualizador de 4 bandas con afinador integrado. Se conecta a parlante o consola para tocar en vivo.", inc: ["Funda", "Cable 3 m", "Correa"] },
    en: { name: "Cutaway electro-acoustic guitar", desc: "4-band EQ with built-in tuner. Plug into a speaker or mixer to play live.", inc: ["Gig bag", "3 m cable", "Strap"] }
  },
  {
    id: "ge-pack", cat: "guitarras", icon: "electric", price: 1150,
    uses: ["principiante", "vivo"], level: "inicial",
    es: { name: "Pack guitarra eléctrica + amplificador 10 W", desc: "Guitarra tipo stratocaster de 3 micrófonos y amplificador de práctica. Todo lo necesario para empezar en eléctrica.", inc: ["Amplificador 10 W", "Cable", "Correa", "Funda", "Púas"] },
    en: { name: "Electric guitar pack + 10 W amp", desc: "Strat-style guitar with 3 pickups and a practice amp. Everything you need to start on electric.", inc: ["10 W amplifier", "Cable", "Strap", "Gig bag", "Picks"] }
  },
  {
    id: "bajo-4", cat: "guitarras", icon: "electric", price: 1290,
    uses: ["vivo", "iglesia"], level: "intermedio",
    es: { name: "Bajo eléctrico 4 cuerdas", desc: "Cuerpo sólido, micrófonos P/J y escala larga. Base firme para cumbia, rock y alabanza.", inc: ["Funda", "Cable 3 m"] },
    en: { name: "4-string electric bass", desc: "Solid body, P/J pickups and long scale. A solid low end for cumbia, rock and worship.", inc: ["Gig bag", "3 m cable"] }
  },

  /* ---------- Peruanos y andinos ---------- */
  {
    id: "cajon-afinable", cat: "andinos", icon: "cajon", price: 380, popular: true,
    uses: ["vivo", "principiante", "estudiante"], level: "intermedio",
    es: { name: "Cajón peruano afinable", desc: "Hecho en Perú, tapa de triplay con tornillos de ajuste para controlar el golpe seco. Sonido criollo auténtico.", inc: ["Funda acolchada"] },
    en: { name: "Tunable Peruvian cajón", desc: "Made in Peru, plywood front with adjustment screws to shape the slap. Authentic Afro-Peruvian sound.", inc: ["Padded bag"] }
  },
  {
    id: "cajon-estudio", cat: "andinos", icon: "cajon", price: 220,
    uses: ["principiante", "estudiante"], level: "inicial",
    es: { name: "Cajón peruano de estudio", desc: "Liviano y resistente, pensado para clases de música en colegios y talleres.", inc: [] },
    en: { name: "Study Peruvian cajón", desc: "Light and sturdy, designed for school music classes and workshops.", inc: [] }
  },
  {
    id: "charango", cat: "andinos", icon: "charango", price: 450, popular: true,
    uses: ["estudiante", "vivo"], level: "intermedio",
    es: { name: "Charango de naranjillo", desc: "10 cuerdas en 5 órdenes, caja de madera tallada a mano. Para folklore, huaynos y conjuntos andinos.", inc: ["Estuche", "Juego de cuerdas extra"] },
    en: { name: "Naranjillo wood charango", desc: "10 strings in 5 courses, hand-carved wooden body. For folk music, huaynos and Andean ensembles.", inc: ["Case", "Spare string set"] }
  },
  {
    id: "quena", cat: "andinos", icon: "flute", price: 45,
    uses: ["principiante", "estudiante"], level: "inicial",
    es: { name: "Quena de caña afinada en Sol", desc: "Afinada para clases de colegio y conjuntos. Incluye método básico impreso.", inc: ["Funda de tela", "Método básico"] },
    en: { name: "Cane quena tuned in G", desc: "Tuned for school lessons and ensembles. Includes a printed beginner method.", inc: ["Cloth pouch", "Beginner method"] }
  },
  {
    id: "zampona", cat: "andinos", icon: "panpipe", price: 60,
    uses: ["principiante", "estudiante"], level: "inicial",
    es: { name: "Zampoña doble (malta)", desc: "Dos hileras (ira y arca) de caña seleccionada. La más pedida en listas escolares.", inc: ["Funda"] },
    en: { name: "Double zampoña (malta)", desc: "Two rows (ira and arca) of selected cane. The most requested on school supply lists.", inc: ["Pouch"] }
  },
  {
    id: "bombo-andino", cat: "andinos", icon: "drum", price: 520,
    uses: ["vivo", "estudiante"], level: "intermedio",
    es: { name: "Bombo andino (legüero)", desc: "Aro de madera y parche de cuero natural. Pulso profundo para sayas, caporales y folklore.", inc: ["Maza", "Correa"] },
    en: { name: "Andean bass drum (legüero)", desc: "Wooden shell and natural leather head. Deep pulse for sayas, caporales and folk.", inc: ["Mallet", "Strap"] }
  },

  /* ---------- Teclados ---------- */
  {
    id: "teclado-61", cat: "teclados", icon: "keyboard", price: 690, popular: true,
    uses: ["principiante", "estudiante", "iglesia"], level: "inicial",
    es: { name: "Teclado 61 teclas sensitivas", desc: "Cientos de sonidos y ritmos (incluye cumbia y latinos), modo aprendizaje y salida de audífonos.", inc: ["Adaptador de corriente", "Atril"] },
    en: { name: "61-key touch-sensitive keyboard", desc: "Hundreds of sounds and rhythms (including cumbia and Latin), learning mode and headphone output.", inc: ["Power adapter", "Music rest"] }
  },
  {
    id: "piano-88", cat: "teclados", icon: "piano", price: 2490,
    uses: ["estudiante", "iglesia", "estudio"], level: "intermedio",
    es: { name: "Piano digital 88 teclas contrapesadas", desc: "Acción martillo graduada, pedal sustain y conexión USB-MIDI. Recomendado para conservatorio.", inc: ["Pedal sustain", "Adaptador", "Atril"] },
    en: { name: "88-key weighted digital piano", desc: "Graded hammer action, sustain pedal and USB-MIDI. Recommended for conservatory students.", inc: ["Sustain pedal", "Adapter", "Music rest"] }
  },
  {
    id: "soporte-teclado", cat: "teclados", icon: "stand", price: 110,
    uses: ["principiante", "iglesia", "vivo"], level: "inicial",
    es: { name: "Soporte en X para teclado", desc: "Doble tijera, altura regulable y seguro de bloqueo.", inc: [] },
    en: { name: "X-style keyboard stand", desc: "Double-braced, height adjustable with locking pin.", inc: [] }
  },

  /* ---------- Percusión ---------- */
  {
    id: "bateria-5", cat: "percusion", icon: "drumkit", price: 2390,
    uses: ["vivo", "iglesia", "principiante"], level: "inicial",
    es: { name: "Batería acústica 5 cuerpos", desc: "Bombo 22\", tarola, 3 toms, platillos y hardware completo. Lista para tocar.", inc: ["Hi-hat y crash/ride", "Banco", "Baquetas"] },
    en: { name: "5-piece acoustic drum kit", desc: "22\" bass drum, snare, 3 toms, cymbals and full hardware. Ready to play.", inc: ["Hi-hat and crash/ride", "Throne", "Sticks"] }
  },
  {
    id: "bateria-e", cat: "percusion", icon: "drumkit", price: 2190,
    uses: ["principiante", "estudio", "iglesia"], level: "intermedio",
    es: { name: "Batería electrónica compacta", desc: "Pads de malla silenciosos, metrónomo y salida de audífonos. Perfecta para departamento.", inc: ["Módulo de sonidos", "Baquetas", "Adaptador"] },
    en: { name: "Compact electronic drum kit", desc: "Quiet mesh pads, metronome and headphone out. Perfect for apartments.", inc: ["Sound module", "Sticks", "Adapter"] }
  },
  {
    id: "congas", cat: "percusion", icon: "conga", price: 1450,
    uses: ["vivo", "eventos"], level: "intermedio",
    es: { name: "Par de congas 11\" y 12\"", desc: "Cuerpo de madera, parches de cuero y soporte doble. Infaltables en la orquesta de salsa y cumbia.", inc: ["Soporte doble", "Llave de afinación"] },
    en: { name: "11\" & 12\" conga pair", desc: "Wooden shells, leather heads and double stand. A must for salsa and cumbia bands.", inc: ["Double stand", "Tuning key"] }
  },
  {
    id: "bongos", cat: "percusion", icon: "conga", price: 260,
    uses: ["principiante", "vivo"], level: "inicial",
    es: { name: "Bongós de madera 7\" y 8\"", desc: "Afinables, livianos y con buen ataque. Ideales para empezar en percusión latina.", inc: ["Llave de afinación"] },
    en: { name: "7\" & 8\" wooden bongos", desc: "Tunable, lightweight with a crisp attack. Ideal to start in Latin percussion.", inc: ["Tuning key"] }
  },
  {
    id: "timbales", cat: "percusion", icon: "drum", price: 1390,
    uses: ["vivo", "eventos"], level: "pro",
    es: { name: "Timbales 13\" y 14\" con cencerro", desc: "Cascos de acero, soporte y cencerro. Para orquestas de cumbia y salsa.", inc: ["Soporte", "Cencerro", "Palos"] },
    en: { name: "13\" & 14\" timbales with cowbell", desc: "Steel shells, stand and cowbell. For cumbia and salsa orchestras.", inc: ["Stand", "Cowbell", "Sticks"] }
  },

  /* ---------- Banda escolar ---------- */
  {
    id: "bombo-desfile", cat: "banda", icon: "drum", price: 420, popular: true,
    uses: ["banda"], level: "inicial",
    es: { name: "Bombo de desfile 22\"", desc: "Liviano, con arnés y parches resistentes para Fiestas Patrias y actuaciones escolares.", inc: ["Arnés", "Par de mazos"] },
    en: { name: "22\" marching bass drum", desc: "Lightweight, with harness and durable heads for parades and school events.", inc: ["Harness", "Pair of mallets"] }
  },
  {
    id: "tarola", cat: "banda", icon: "snare", price: 230,
    uses: ["banda", "estudiante"], level: "inicial",
    es: { name: "Tarola escolar 14\"", desc: "Bordonero ajustable y correa. Precio especial por volumen para colegios.", inc: ["Correa", "Baquetas"] },
    en: { name: "14\" school snare drum", desc: "Adjustable snares and strap. Volume pricing available for schools.", inc: ["Strap", "Sticks"] }
  },
  {
    id: "lira", cat: "banda", icon: "lyre", price: 390,
    uses: ["banda", "estudiante"], level: "inicial",
    es: { name: "Lira de desfile 25 notas", desc: "Láminas de aluminio afinadas, marco de lira con penacho. Clásica de banda escolar.", inc: ["Mazo", "Funda", "Arnés"] },
    en: { name: "25-note marching bell lyre", desc: "Tuned aluminium bars, lyre frame with plume. A school band classic.", inc: ["Mallet", "Cover", "Harness"] }
  },
  {
    id: "corneta", cat: "banda", icon: "bugle", price: 180,
    uses: ["banda"], level: "inicial",
    es: { name: "Corneta de banda", desc: "Metal lacado, boquilla incluida. Sonido brillante para desfiles.", inc: ["Boquilla", "Cordón"] },
    en: { name: "Marching bugle", desc: "Lacquered brass, mouthpiece included. Bright sound for parades.", inc: ["Mouthpiece", "Cord"] }
  },

  /* ---------- Audio y sonido ---------- */
  {
    id: "parlante-15", cat: "audio", icon: "speaker", price: 1390, popular: true,
    uses: ["iglesia", "eventos", "vivo"], level: "intermedio",
    es: { name: "Parlante activo 15\" (potencia pico 1000 W)", desc: "Bluetooth, mezclador de 3 canales y entrada de micrófono. Para iglesias, eventos y tocadas.", inc: ["Cable de poder"] },
    en: { name: "15\" powered speaker (1000 W peak)", desc: "Bluetooth, 3-channel mixer and mic input. For churches, events and gigs.", inc: ["Power cable"] }
  },
  {
    id: "amp-20", cat: "audio", icon: "amp", price: 490,
    uses: ["principiante", "vivo"], level: "inicial",
    es: { name: "Amplificador de guitarra 20 W", desc: "Canal limpio y distorsión, ecualizador de 3 bandas y entrada auxiliar.", inc: [] },
    en: { name: "20 W guitar amplifier", desc: "Clean and overdrive channels, 3-band EQ and aux input.", inc: [] }
  },
  {
    id: "consola-8", cat: "audio", icon: "mixer", price: 850,
    uses: ["iglesia", "eventos", "estudio"], level: "intermedio",
    es: { name: "Consola 8 canales con USB y efectos", desc: "4 preamplificadores de micrófono, efectos digitales y grabación por USB.", inc: ["Fuente de poder"] },
    en: { name: "8-channel mixer with USB & FX", desc: "4 mic preamps, digital effects and USB recording.", inc: ["Power supply"] }
  },
  {
    id: "mic-dinamico", cat: "audio", icon: "mic", price: 120,
    uses: ["iglesia", "vivo", "principiante"], level: "inicial",
    es: { name: "Micrófono dinámico vocal", desc: "Patrón cardioide que reduce el acople. Resistente para uso diario.", inc: ["Cable XLR 5 m", "Pinza"] },
    en: { name: "Dynamic vocal microphone", desc: "Cardioid pattern that reduces feedback. Built for daily use.", inc: ["5 m XLR cable", "Clip"] }
  },
  {
    id: "mic-inalambrico", cat: "audio", icon: "mic", price: 590,
    uses: ["iglesia", "eventos"], level: "intermedio",
    es: { name: "Kit 2 micrófonos inalámbricos UHF", desc: "Receptor doble con alcance de hasta 50 m. Para predicación, animación y eventos.", inc: ["Receptor", "2 micrófonos de mano"] },
    en: { name: "2× UHF wireless microphone kit", desc: "Dual receiver with up to 50 m range. For preaching, hosting and events.", inc: ["Receiver", "2 handheld mics"] }
  },

  /* ---------- DJ y estudio ---------- */
  {
    id: "controladora-dj", cat: "dj", icon: "dj", price: 1190,
    uses: ["eventos", "estudio"], level: "inicial",
    es: { name: "Controladora DJ 2 canales", desc: "Jog wheels sensibles, pads de performance y tarjeta de sonido integrada.", inc: ["Cable USB", "Software de DJ"] },
    en: { name: "2-channel DJ controller", desc: "Touch-sensitive jog wheels, performance pads and built-in sound card.", inc: ["USB cable", "DJ software"] }
  },
  {
    id: "interfaz-2x2", cat: "dj", icon: "interface", price: 690, popular: true,
    uses: ["estudio"], level: "inicial",
    es: { name: "Interfaz de audio USB 2×2", desc: "Dos entradas combo con phantom 48 V. Graba voz y guitarra en casa con calidad profesional.", inc: ["Cable USB", "Software de grabación"] },
    en: { name: "2×2 USB audio interface", desc: "Two combo inputs with 48 V phantom. Record vocals and guitar at home in pro quality.", inc: ["USB cable", "Recording software"] }
  },
  {
    id: "audifonos-estudio", cat: "dj", icon: "headphones", price: 290,
    uses: ["estudio", "eventos"], level: "inicial",
    es: { name: "Audífonos de estudio cerrados", desc: "Respuesta plana para mezclar y buen aislamiento para grabar.", inc: ["Adaptador 6,3 mm"] },
    en: { name: "Closed-back studio headphones", desc: "Flat response for mixing and good isolation for recording.", inc: ["6.3 mm adapter"] }
  },
  {
    id: "monitores-5", cat: "dj", icon: "monitor", price: 1290,
    uses: ["estudio"], level: "intermedio",
    es: { name: "Par de monitores de estudio 5\"", desc: "Biamplificados, con ajuste de agudos y graves según tu habitación.", inc: ["Cables de poder"] },
    en: { name: "Pair of 5\" studio monitors", desc: "Bi-amped, with high/low trim to match your room.", inc: ["Power cables"] }
  },
  {
    id: "mic-condensador", cat: "dj", icon: "mic", price: 390,
    uses: ["estudio"], level: "inicial",
    es: { name: "Micrófono condensador de estudio", desc: "Diafragma grande para voz, podcast y creación de contenido.", inc: ["Araña antivibración", "Filtro antipop"] },
    en: { name: "Studio condenser microphone", desc: "Large diaphragm for vocals, podcasts and content creation.", inc: ["Shock mount", "Pop filter"] }
  },

  /* ---------- Accesorios ---------- */
  {
    id: "cuerdas-nylon", cat: "accesorios", icon: "strings", price: 35,
    uses: ["principiante", "estudiante", "vivo"], level: "inicial",
    es: { name: "Juego de cuerdas de nylon", desc: "Tensión normal para guitarra clásica.", inc: [] },
    en: { name: "Nylon string set", desc: "Normal tension for classical guitar.", inc: [] }
  },
  {
    id: "afinador", cat: "accesorios", icon: "tuner", price: 45, popular: true,
    uses: ["principiante", "estudiante", "vivo"], level: "inicial",
    es: { name: "Afinador cromático de clip", desc: "Pantalla a color, sirve para guitarra, bajo, charango y ukelele.", inc: [] },
    en: { name: "Clip-on chromatic tuner", desc: "Color display, works for guitar, bass, charango and ukulele.", inc: [] }
  },
  {
    id: "cable-6", cat: "accesorios", icon: "cable", price: 35,
    uses: ["vivo", "iglesia", "eventos"], level: "inicial",
    es: { name: "Cable de instrumento 6 m", desc: "Plug 6,3 mm con malla trenzada anti ruido.", inc: [] },
    en: { name: "6 m instrument cable", desc: "6.3 mm plugs with braided, low-noise shielding.", inc: [] }
  },
  {
    id: "baquetas-5a", cat: "accesorios", icon: "sticks", price: 30,
    uses: ["principiante", "vivo", "banda"], level: "inicial",
    es: { name: "Baquetas 5A de nogal (par)", desc: "Balance clásico para batería y tarola.", inc: [] },
    en: { name: "Hickory 5A drumsticks (pair)", desc: "Classic balance for drum kit and snare.", inc: [] }
  },
  {
    id: "estuche-guitarra", cat: "accesorios", icon: "case", price: 120,
    uses: ["estudiante", "vivo"], level: "inicial",
    es: { name: "Estuche acolchado para guitarra", desc: "Espuma de 10 mm, bolsillos y tiras tipo mochila.", inc: [] },
    en: { name: "Padded guitar gig bag", desc: "10 mm foam, pockets and backpack straps.", inc: [] }
  }
];
