/* * BASE DE DATOS DE PRODUCTOS
 * Para agregar un producto, simplemente copia un bloque {} y cambia los datos.
 * Las imágenes usan placeholders, reemplaza las URLs con tus fotos reales.
 */
const products = [
    {
        id: 1,
        name: "Auriculares JBL Wave Flex - Blanco",
        price: 379000,
        originalPrice: 415500,
        category: "auriculares",
        image: "./assets/products/wave-flex-1.webp",
        images: [
            "./assets/products/wave-flex-1.webp",
            "./assets/products/wave-flex-2.webp",
        ],
        label: "SIN STOCK",
        sold: 120,
        description:
            "El auricular inalámbrico JBL Wave Flex Bluetooth está diseñado para brindar una experiencia de audio inalámbrica y conveniente. Ofrece una combinación de calidad de sonido, comodidad y funcionalidad. Utiliza la tecnología Bluetooth para establecer una conexión inalámbrica con tus dispositivos compatibles, como teléfonos inteligentes, tabletas o computadoras. Esto te permite disfrutar de tu música, podcasts o llamadas telefónicas sin la necesidad de cables molestos. Cuenta con un diseño ergonómico y ligero que se adapta cómodamente a tus oídos. Está equipado con almohadillas suaves y flexibles, lo que permite un uso prolongado sin causar molestias.",
        specs: [
            "Diseño: Ligero y ergonómico",
            "Certificación IPX: IP54",
            "Batería: Hasta 32 horas (8h + 24h estuche)",
            "Conectividad: Bluetooth 5.0",
            "Micrófono: Integrado con VoiceAware",
        ],
    },
    {
        id: 2,
        name: "Auriculares JBL Tune Flex - Blanco",
        price: 455000,
        originalPrice: 499500,
        category: "auriculares",
        image: "./assets/products/tune-flex-1.webp",
        images: [
            "./assets/products/tune-flex-1.webp",
            "./assets/products/tune-flex-2.webp",
            "./assets/products/tune-flex-3.webp",
        ],
        label: "Oferta",
        sold: 85,
        description:
            "Los audífonos JBL Tune Flex True Wireless ofrecen una calidad de sonido superior con JBL Pure Bass, gracias a sus controladores de 12mm que brindan graves profundos y potentes. Cuentan con tecnología de Cancelación Activa de Ruido que elimina los ruidos no deseados y la opción de ajustar el sonido ambiente con Ambient Aware, lo que garantiza seguridad mientras te desplazas. Además, incluyen la función TalkThru, que permite mantener conversaciones rápidas sin necesidad de quitarte los audífonos. Con 4 micrófonos, ofrecen llamadas claras y nítidas, siendo perfectos para uso manos libres. Su comodidad inalámbrica asegura una experiencia fluida y sin enredos, disponible en color blanco.",
        specs: [
            "Cancelación activa de ruido con Smart Ambient",
            "4 micrófonos para llamadas perfectas",
            "Bluetooth versión 5.2",
            "Batería: Hasta 32 horas (8h + 24h estuche)",
            "Control: Táctil Multifunción",
            "Resistencia al agua: IPX4",
        ],
    },
    {
        id: 3,
        name: "Auricular G-Tide L11 TWS001A",
        price: 95500,
        category: "auriculares",
        image: "./assets/products/gtide-l11-1.webp",
        images: [
            "./assets/products/gtide-l11-1.webp",
            "./assets/products/gtide-l11-2.webp",
            "./assets/products/gtide-l11-3.webp",
        ],
        label: null,
        sold: 45,
        description:
            "Descubre la libertad y la calidad de sonido superior con los Auriculares Inalámbricos G-Tide L11 Bluetooth. Estos auriculares son la opción perfecta para aquellos que buscan una experiencia de audio sin cables y sin complicaciones. Equipados con Bluetooth 5.3, los G-Tide L11 garantizan una conexión estable y rápida, permitiéndote disfrutar de hasta 5 horas de tus canciones favoritas. Además, su micrófono incorporado y la tecnología de cancelación de ruido aseguran llamadas claras y sin interrupciones. El diseño elegante del estuche de carga, con una batería de 250 mAh, no solo protege tus auriculares, sino que también añade un toque de estilo. El estuche se recarga fácilmente a través de USB-C, y su carga completa se logra en solo una hora. Los controles táctiles intuitivos te permiten gestionar tu música y llamadas con un simple toque, brindando comodidad en cada uso. Ideales para desplazamientos diarios, entrenamientos o simplemente relajarse en casa, los Auriculares G-Tide L11 son tu compañero perfecto para disfrutar de una experiencia auditiva sin igual, liberándote de los cables para siempre.",
        specs: [
            "Diseño: Moderno y ergonómico",
            "Batería: Hasta 5 horas de uso continuo",
            "Conectividad: Bluetooth 5.3",
            "Micrófono: Integrado con cancelación de ruido",
            "Controles: Táctiles",
            "Compatibilidad: Android 6.0+ / iOS 9.0+",
        ],
    },
    {
        id: 4,
        name: "SmartWatch Haylou RS4 Plus LS11 - Negro",
        price: 313500,
        originalPrice: 369000,
        category: "smartwatch",
        image: "./assets/products/haylou-rs4-plus-1.webp",
        images: [
            "./assets/products/haylou-rs4-plus-1.webp",
            "./assets/products/haylou-rs4-plus-2.webp",
        ],
        label: "Últimas unidades",
        sold: 200,
        description:
            "El Haylou RS4 Plus LS11 es un smartwatch moderno con pantalla táctil AMOLED de 1.78, ideal para acompañarte en cada actividad. Monitorea hasta 105 deportes, frecuencia cardíaca, SpO2, sueño y más. Recibe notificaciones inteligentes, controla la música y cuenta con resistencia al agua IP68. Su batería dura hasta 10 días y es compatible con iOS, Android y la app Haylou Fun. Perfecto para un estilo de vida activo y conectado.",
        specs: [
            'Pantalla: AMOLED táctil de 1.78"',
            "Resolución: 368 x 448 píxeles",
            "Correa: Magnética de silicona",
            "Batería: 10 días uso típico",
            "Sensores: SpO2, Frecuencia Cardíaca, Movimiento",
            "Resistencia: IP68",
            "Conectividad: Bluetooth v5.1",
            "Compatibilidad: iOS, Android y la app Haylou Fun",
        ],
    },
    {
        id: 5,
        name: "Smartwatch QCY Urban GS WA24S9A - Gris",
        price: 467000,
        category: "smartwatch",
        image: "./assets/products/qcy-urban-gs-1.webp",
        label: "Últimas unidades",
        sold: 15,
        description:
            "El Reloj Smartwatch QCY Urban GS WA24S9A con pantalla AMOLED de 1.95, diseñado para monitorear salud y actividad física, con más de 120 modos deportivos, seguimiento de sueño, frecuencia cardíaca, SpO2 y estrés. Resistente al agua hasta 5 ATM y con GPS preciso.",
        specs: [
            "Pantalla: AMOLED de 1.95",
            "Resolución: 410 x 502p",
            "Sensores: Frecuencia cardíaca, SpO₂, presión arterial, acelerómetro y respiración",
            "Autonomía: Hasta 14 días aprox.",
            "Conectividad: Bluetooth",
            "Resistencia: 5 ATM",
            "GPS: Sí",
        ],
    },
    {
        id: 6,
        name: "Smartwatch Xiaomi Redmi Watch 5 Lite - Negro",
        price: 435500,
        category: "smartwatch",
        image: "./assets/products/redmi-5-lite-1.webp",
        images: [
            "./assets/products/redmi-5-lite-1.webp",
            "./assets/products/redmi-5-lite-2.webp",
        ],
        label: null,
        sold: 150,
        description:
            "El Smartwatch Xiaomi Redmi Watch 5 Lite M2352W1 es la combinación perfecta de estilo y funcionalidad. Con su pantalla AMOLED de 1.96 y una resolución de 410 x 502 píxeles, ofrece una experiencia visual superior, detallada y vibrante. Gracias a su tecnología Always-on, puedes consultar la hora y notificaciones sin necesidad de tocar el reloj. Este smartwatch destaca por su impresionante duración de batería, que puede llegar hasta 18 días, siendo ideal para aquellos que buscan un dispositivo fiable durante largas jornadas. Equipado con GPS y sistemas de navegación como GLONASS, Beidou, QZSS, y Galileo, garantiza precisión en el seguimiento de tus rutas deportivas. Su resistencia al agua de 5 ATM (hasta 50 metros) te permite llevarlo en actividades acuáticas sin preocupaciones. Además, incorpora sensores avanzados como el monitor de frecuencia cardíaca, el medidor de SpO2 y el monitor de sueño, proporcionando información completa sobre tu salud. Perfecto para deportistas, soporta más de 150 modos deportivos, y su larga duración de batería asegura que puedas aprovechar todas sus funcionalidades durante días. Compatible con Android e iOS, y con soporte para Alexa, el Xiaomi Redmi Watch 5 Lite es el mejor aliado para tu día a día.",
        specs: [
            "Pantalla: AMOLED 1.96",
            "Resolución: 410 x 502p",
            "Batería: Hasta 18 días",
            "GPS: Sí",
            "Resistencia: 5 ATM",
            "Sensores: Frecuencia cardíaca, SpO2, sueño",
        ],
    },
    {
        id: 7,
        name: "Smartwatch QCY Active GX WA24S12A - Negro",
        price: 289500,
        category: "smartwatch",
        image: "./assets/products/qcy-active-gx-1.webp",
        label: "Últimas unidades",
        sold: 150,
        description:
            "El reloj Smartwatch QCY Active GX WA24S12A es la opción perfecta para aquellos que buscan un dispositivo de alta tecnología para mejorar su estilo de vida. Con una pantalla AMOLED de 1.43 pulgadas, este smartwatch ofrece una experiencia visual impresionante con su vidrio 2.5D que garantiza durabilidad y elegancia. Equipado con un certificado de resistencia al agua IP68, es ideal para quienes disfrutan de actividades al aire libre sin preocuparse por el agua o el polvo. Su batería de 300 mAh proporciona hasta 7 días de uso continuo, asegurando que no te quedes sin energía en momentos críticos. El QCY Active GX WA24S12A es un compañero versátil, compatible con la aplicación QCY APP, que te permite recibir notificaciones inteligentes de llamadas, mensajes y correos electrónicos. Monitorea hasta 120 modalidades deportivas, mide la frecuencia cardíaca y el nivel de saturación de oxígeno en sangre (SpO2), y realiza un seguimiento de la calidad del sueño y la salud femenina. Además, cuenta con un podómetro, cronómetro, temporizador y función de alarma, lo que lo convierte en el dispositivo ideal para quienes desean mantener un estilo de vida activo y saludable.",
        specs: [
            "Pantalla: AMOLED 1.43",
            "Monitor de: Frecuencia cardiaca (HR), SpO2, Sueño",
            "Batería: Hasta 7 días",
            "Conectividad: Bluetooth",
            "Resistencia: IP68",
        ],
    },
    {
        id: 8,
        name: "Smartwatch Haylou Solar Pro LS18 22mm - Negro",
        price: 295000,
        category: "smartwatch",
        image: "./assets/products/haylou-solar-pro-1.webp",
        images: [
            "./assets/products/haylou-solar-pro-1.webp",
            "./assets/products/haylou-solar-pro-2.webp",
        ],
        label: "Últimas unidades",
        sold: 150,
        description:
            "El Smartwatch Haylou Solar Pro LS18 ofrece una experiencia visual vibrante con su pantalla AMOLED de 1,43 y resolución de 466*466p. Desde la muñeca, puedes realizar llamadas, realizar un seguimiento de la actividad física con 105 modos de entrenamiento y monitorear tu salud con sensores de frecuencia cardíaca, movimiento, SpO2, presión y sueño. Con funciones versátiles como IP68, esferas de reloj y asistente de voz, este reloj se sincroniza fácilmente con la plataforma Haylou Watch y presenta más de 100 modos de entrenamiento. Además, la perilla giratoria facilita la navegación y personalización de menús. *La función de asistente de voz requiere vincular un teléfono inteligente con capacidades de asistente de voz a través de Bluetooth.",
        specs: [
            "Pantalla: AMOLED de 1.43",
            "Monitor de: Salud y entrenamiento",
            "Conectividad: Bluetooth",
            "Resistencia al agua: IPX7",
            "Aplicación de sincronización: Haylou Watch",
        ],
    },
    {
        id: 9,
        name: "Caja de Sonido Gamer Redragon Stentor GS500 - Negro",
        price: 215000,
        category: "parlante",
        image: "./assets/products/redragon-stentor-1.webp",
        images: [
            "./assets/products/redragon-stentor-1.webp",
            "./assets/products/redragon-stentor-2.webp",
        ],
        label: null,
        sold: 150,
        description:
            "La caja de sonido gamer Redragon Stentor GS500 en color negro es un sistema de altavoces 2.0 compacto y elegante, ideal para ahorrar espacio en el escritorio. Ofrece sonido estéreo de alta calidad con retroiluminación LED roja, una potencia máxima de 5W x 2 (10W total), y una perilla de volumen frontal, siendo compatible con PC, laptops y consolas mediante conexión USB 5V y Jack 3.5mm.",
        specs: [
            "Sonido Estéreo 2.0",
            "Diseño Compacto y Gamer",
            "Control de Volumen",
            "Iluminación LED Roja",
            "Conexión: USB y Jack 3.5mm",
        ],
    },
    {
        id: 10,
        name: "Headset Gamer Moxom MX-EP35 GM 3.5mm RGB - Negro",
        price: 92000,
        category: "headset",
        image: "./assets/products/moxom-mxep35-1.webp",
        label: null,
        sold: 150,
        description:
            "El auricular Moxon MX-EP35 es una opción versátil y moderna, ideal para jugadores y usuarios que buscan comodidad y calidad de sonido. Equipado con controladores de 50 mm, ofrece audio envolvente con graves potentes y detalles claros. Dispone de una interfaz USB y Jack de 3,5 mm, lo que garantiza la compatibilidad con una amplia gama de dispositivos. La iluminación RGB añade un toque elegante al diseño. Con un ajuste ergonómico para la cabeza y un micrófono flexible, brinda comodidad.",
        specs: [
            "Conectividad: Mini Jack y USB (para luces).",
            "Iluminación: Retroiluminación RGB integrada.",
            "Micrófono: Integrado con sensibilidad de -38dB ± 3dB.",
            "Cable: 2.2 metros de longitud.",
            "Compatibilidad: PC y dispositivos con entrada 3.5mm.",
            "Comodidad: Arco acolchado ajustable y almohadillas suaves.",
        ],
    },
    {
        id: 11,
        name: "Headset Gamer Satellite AE-369B con Cable - Negro Azul",
        price: 92000,
        category: "headset",
        image: "./assets/products/headset-satellite-AE-1.webp",
        label: null,
        sold: 150,
        description:
            "El Auricular Satellite AE-369B es un headset gamer alámbrico en color negro y azul, diseñado para inmersión total. Cuenta con controladores de 40mm, micrófono integrado, efecto de vibración y un cable de 2 metros con conector USB-A. Es ajustable, cómodo y compatible con PC, consolas PS4 y Xbox.",
        specs: [
            "Audio: Altavoces de 40 mm con alta calidad de sonido y efecto de vibración.",
            "Conectividad: USB-A (para iluminación y audio).",
            "Micrófono: Integrado y ajustable con claridad de sonido.",
            "Diseño: Ergonómico con diadema ajustable y almohadillas que cubren la oreja.",
            "Cable: 2 metros de longitud.",
            "Compatibilidad: PC, TABLET, PS4, XBOX.",
        ],
    },
    {
        id: 12,
        name: "Ratón Satellite A-45G 1000 DPI Inalámbrico - Negro",
        price: 76500,
        category: "accesorios",
        image: "./assets/products/mouse-satellite-1.webp",
        label: null,
        sold: 150,
        description:
            "El mouse inalámbrico Satellite A-45G tiene un sensor de alta precisión, ofrece un diseño compacto y práctico, se puede llevar a cualquier lugar fácilmente. Posee un diseño ergonómico que se adapta perfectamente a la mano, proporcionando la comodidad necesaria para horas de estudio, juegos, trabajo, etc. Además, cuenta con conector Nano receptor USB que permite una fácil comunicación para usar de forma fácil y rápida.",
        specs: [
            "Diseño: Ergonómico y compacto, ideal para llevar a cualquier lugar.",
            "Conectividad: Inalámbrica 2.4 GHz con Nano Receptor USB (Plug & Play).",
            "Resolución: 1000 DPI (sensor óptico de alta precisión).",
            "Botones: 3 botones estándar (incluye rueda de desplazamiento).",
            "Alcance: Hasta 10 metros.",
            "Alimentación: Funciona con 2 pilas AAA.",
        ],
    },
];

// Estado del carrito y filtros
let cart = [];
let currentCategory = "all";
let searchQuery = "";
let sortOrder = null; // null, 'asc', 'desc'
let currentModalProductId = null;

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
    renderCategoryFilters();
    renderProducts();
    renderCarousel();
    setupEventListeners();
});

// Función para formatear moneda (Guaraníes)
const formatCurrency = (amount) => {
    return new Intl.NumberFormat("es-PY", {
        style: "currency",
        currency: "PYG",
        minimumFractionDigits: 0,
    })
        .format(amount)
        .replace("PYG", "Gs.");
};

// Generar Filtros Dinámicos
function renderCategoryFilters() {
    const container = document.getElementById("categoryFilters");
    const categories = ["all", ...new Set(products.map((p) => p.category))];

    container.innerHTML = "";

    categories.forEach((cat) => {
        const btn = document.createElement("button");
        btn.className = `filter-btn ${cat === "all" ? "active" : ""}`;
        // Capitalize info
        const display =
            cat === "all"
                ? "Todos"
                : cat.charAt(0).toUpperCase() + cat.slice(1);
        btn.textContent = display;
        btn.onclick = () => filterProducts(cat);
        container.appendChild(btn);
    });
}

// Renderizar Productos (Grid Principal)
function renderProducts() {
    const container = document.getElementById("productsContainer");
    container.innerHTML = "";

    // 1. Filtrar por categoría
    let filtered =
        currentCategory === "all"
            ? products
            : products.filter((p) => p.category === currentCategory);

    // 2. Filtrar por búsqueda
    if (searchQuery) {
        filtered = filtered.filter((p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()),
        );
    }

    // 3. Ordenar por precio
    if (sortOrder === "asc") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
        filtered.sort((a, b) => b.price - a.price);
    }

    // Renderizar
    if (filtered.length === 0) {
        container.innerHTML = `<p style="text-align:center; width:100%; color:#888;">No se encontraron productos.</p>`;
        return;
    }

    filtered.forEach((product, index) => {
        const card = createProductCard(product, index);
        container.appendChild(card);
    });
}

// Crear Tarjeta de Producto (Reutilizable)
function createProductCard(product, index = 0) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.style.animationDelay = `${index * 0.05}s`;

    // Label
    let labelHTML = "";
    if (product.label) {
        let labelClass = "";
        switch (product.label.toLowerCase()) {
            case "oferta":
                labelClass = "oferta";
                break;
            case "nuevo":
                labelClass = "nuevo";
                break;
            case "más vendido":
                labelClass = "mas-vendido";
                break;
            case "últimas unidades":
                labelClass = "ultimas";
                break;
            case "sin stock":
                labelClass = "sinstock";
                break;
            default:
                labelClass = "";
        }
        labelHTML = `<span class="product-label ${labelClass}">${product.label}</span>`;
    }

    // Precio HTML (con tachado si existe)
    let priceHTML = "";
    if (product.originalPrice) {
        priceHTML = `
            <div class="price-container">
                <span class="original-price">${formatCurrency(product.originalPrice)}</span>
                <span class="price">${formatCurrency(product.price)}</span>
            </div>
        `;
    } else {
        priceHTML = `<span class="price">${formatCurrency(product.price)}</span>`;
    }

    card.innerHTML = `
        ${labelHTML}
        <img src="${product.image}" alt="${product.name}" class="product-image" onclick="openProductModal(${product.id})">
        <div class="product-category">${product.category}</div>
        <h3 class="product-title" onclick="openProductModal(${product.id})" style="cursor:pointer;">${product.name}</h3>
        <div class="product-footer">
            ${priceHTML}
            <button class="add-btn" onclick="addToCart(${product.id})">
                <span class="btn-text">Añadir</span>
                <span class="btn-icon">+</span>
            </button>
        </div>
    `;
    return card;
}

// Renderizar Carrusel (Más vendidos)
function renderCarousel() {
    const container = document.getElementById("featuredCarousel");
    // Filtrar productos más vendidos (simulado con la propiedad label o sold)
    const featured = products
        .filter(
            (p) =>
                p.sold > 50 ||
                p.label === "Más vendido" ||
                p.label === "Oferta",
        )
        .slice(0, 5);

    featured.forEach((product) => {
        const item = createProductCard(product);
        item.classList.add("carousel-item");
        container.appendChild(item);
    });
}

// Filtros de Categoría
function filterProducts(category) {
    currentCategory = category;

    // Actualizar UI botones
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach((btn) => btn.classList.remove("active"));

    // Buscar el botón correspondiente y activarlo (podría ser optimizado)
    const targetBtn = Array.from(buttons).find(
        (b) =>
            b.textContent.toLowerCase() === category ||
            (category === "all" && b.textContent === "Todos"),
    );
    if (targetBtn) targetBtn.classList.add("active"); // Fallback simple
    // Nota: en el onclick del HTML ya se pasa el evento, pero aquí lo manejamos por estado

    renderProducts();
}

// Búsqueda
function setupEventListeners() {
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        renderProducts();
    });
}

// Ordenar (Dropdown)
// Ordenar (Dropdown)
function toggleSortDropdown() {
    const dropdown = document.querySelector(".sort-dropdown");
    dropdown.classList.toggle("active");
}

function sortProducts(order) {
    sortOrder = order;

    // Actualizar UI Texto
    const triggerText = document.querySelector(".sort-trigger");
    if (order === "asc") {
        triggerText.innerHTML = `Menor Precio <span class="sort-arrow">⬆️</span>`;
    } else {
        triggerText.innerHTML = `Mayor Precio <span class="sort-arrow">⬇️</span>`;
    }

    // Cerrar dropdown
    document.querySelector(".sort-dropdown").classList.remove("active");

    renderProducts();
}

// Cerrar dropdown al hacer click fuera
document.addEventListener("click", (e) => {
    const dropdown = document.querySelector(".sort-dropdown");
    if (dropdown && !dropdown.contains(e.target)) {
        dropdown.classList.remove("active");
    }
});

// --- MODAL ---

function openProductModal(id) {
    const product = products.find((p) => p.id === id);
    if (!product) return;

    currentModalProductId = id;

    // Poblar datos generales
    const mainImg = document.getElementById("modalImg");
    mainImg.src = product.image;

    document.getElementById("modalCategory").textContent = product.category;
    document.getElementById("modalTitle").textContent = product.name;
    document.getElementById("modalPrice").textContent = formatCurrency(
        product.price,
    );

    // --- GALLERY LOGIC ---
    const thumbContainer = document.getElementById("modalThumbnails");
    thumbContainer.innerHTML = ""; // Clear previous

    if (product.images && product.images.length > 0) {
        // Use product.images for gallery
        // Ensure main image starts with first in array or product.image
        mainImg.src = product.images[0];

        product.images.forEach((imgSrc, index) => {
            const thumb = document.createElement("img");
            thumb.src = imgSrc;
            thumb.className = `thumb-img ${index === 0 ? "active" : ""}`;
            thumb.onclick = () => {
                // Change main image
                mainImg.src = imgSrc;
                // Update active state
                document
                    .querySelectorAll(".thumb-img")
                    .forEach((t) => t.classList.remove("active"));
                thumb.classList.add("active");
            };
            thumbContainer.appendChild(thumb);
        });
    } else {
        // No gallery, just clear container (already done)
    }

    // Poblar Descripción
    const descTab = document.getElementById("tab-desc");
    descTab.innerHTML = `<p>${product.description || "Sin descripción disponible."}</p>`;

    // Poblar Especificaciones
    const specsTab = document.getElementById("tab-specs");
    if (product.specs && Array.isArray(product.specs)) {
        let specsHTML = "<ul>";
        product.specs.forEach((spec) => {
            specsHTML += `<li>${spec}</li>`;
        });
        specsHTML += "</ul>";
        specsTab.innerHTML = specsHTML;
    } else {
        specsTab.innerHTML = "<p>Sin especificaciones detalladas.</p>";
    }

    // Resetear Tabs
    switchTab("desc");

    // Mostrar modal
    document.getElementById("productModal").classList.add("active");
}

function closeProductModal() {
    document.getElementById("productModal").classList.remove("active");
    currentModalProductId = null;
}

function switchTab(tabName) {
    // Buttons
    document
        .querySelectorAll(".tab-btn")
        .forEach((btn) => btn.classList.remove("active"));

    const targetBtn = document.querySelector(
        `.tab-btn[onclick="switchTab('${tabName}')"]`,
    );
    if (targetBtn) targetBtn.classList.add("active");

    // Content
    document
        .querySelectorAll(".tab-content")
        .forEach((content) => content.classList.remove("active"));
    document.getElementById(`tab-${tabName}`).classList.add("active");
}

function addToCartFromModal() {
    if (currentModalProductId) {
        addToCart(currentModalProductId);
        closeProductModal(); // Opcional: cerrar modal al agregar
    }
}

// --- LÓGICA DEL CARRITO ---

function addToCart(id) {
    const product = products.find((p) => p.id === id);
    cart.push(product);
    updateCartUI();
    toggleCart(true);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    document.querySelector(".cart-count").innerText = cart.length;
    const container = document.getElementById("cartItemsContainer");
    const totalElement = document.getElementById("cartTotal");
    container.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        container.innerHTML =
            '<p style="text-align:center; color: #666; margin-top: 20px;">El carrito está vacío</p>';
    } else {
        cart.forEach((item, index) => {
            total += item.price;
            container.innerHTML += `
                <div class="cart-item">
                    <img src="${item.image}" alt="">
                    <div style="flex-grow:1;">
                        <div style="font-size:0.9rem; font-weight:600;">${item.name}</div>
                        <div style="color:var(--color-primary); font-size:0.85rem;">${formatCurrency(item.price)}</div>
                    </div>
                    <button onclick="removeFromCart(${index})" style="background:none; border:none; color:#f44336; cursor:pointer;">✕</button>
                </div>
            `;
        });
    }

    totalElement.innerText = formatCurrency(total);
}

function toggleCart(forceOpen = false) {
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.querySelector(".overlay");

    if (forceOpen) {
        sidebar.classList.add("open");
        overlay.classList.add("active");
    } else {
        sidebar.classList.toggle("open");
        overlay.classList.toggle("active");
    }
}

// --- FINALIZAR COMPRA (WhatsApp) ---

function finalizarCompra() {
    if (cart.length === 0) {
        alert(
            "Tu carrito está vacío. Agrega productos antes de finalizar la compra.",
        );
        return;
    }

    const numero = "595983092018";

    // Construir lista de productos
    let lineas = cart.map(
        (item) => `• ${item.name} — ${formatCurrency(item.price)}`,
    );

    // Calcular total
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const mensaje =
        "🛒 *Nuevo Pedido — ZyLogix*\n\n" +
        lineas.join("\n") +
        "\n\n" +
        `*Total: ${formatCurrency(total)}*` +
        "\n\nMe gustaría confirmar este pedido. ¡Gracias!";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}

document.addEventListener("click", function (e) {
    if (e.target && e.target.id === "finalizarCompra") {
        finalizarCompra();
    }
});
