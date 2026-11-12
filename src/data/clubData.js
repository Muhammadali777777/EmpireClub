// Данные для компьютерного клуба EMPIRE

export const CLUB_INFO = {
  name: "EMPIRE",
  fullName: "EMPIRE CYBER LOUNGE",
  tagline: "ТВОЯ ТЕРРИТОРИЯ ПОБЕД",
  subtitle: "Играй. Побеждай. Становись легендой.",
  address: "г. Москва, Пресненская набережная, д. 12 (Москва-Сити, Башня Федерация, -1 этаж)",
  metro: "Деловой Центр / Выставочная (2 минуты пешком)",
  phone: "+7 (495) 777-20-40",
  phoneRaw: "+74957772040",
  email: "vip@empire-club.ru",
  workHours: "24/7 • Круглосуточно, без перерывов и выходных",
  socials: {
    telegram: "https://t.me/empire_cyberclub",
    vk: "https://vk.com/empire_cyberclub",
    discord: "https://discord.gg/empire",
    whatsapp: "https://wa.me/74957772040",
    youtube: "https://youtube.com/@empire_cyber"
  },
  stats: [
    { value: "54+", label: "Топовых боевых машин" },
    { value: "360 Hz", label: "Частота мониторов ZOWIE & ROG" },
    { value: "1 Gbit/s", label: "Выделенный оптический канал (пинг < 1ms)" },
    { value: "24/7", label: "Круглосуточный премиум сервис" }
  ]
};

// Зоны и компьютеры клуба с подробными характеристиками
export const PC_ZONES = [
  {
    id: "standard",
    name: "STANDARD ZONE",
    badge: "Популярный",
    description: "Идеально сбалансированные ПК для комфортного гейминга в 2K и киберспорта при стабильных 240+ FPS.",
    specs: {
      cpu: "Intel Core i5-14600KF (до 5.3 GHz, 14 ядер)",
      gpu: "NVIDIA GeForce RTX 4070 SUPER 12GB GDDR6X",
      ram: "32GB Kingston FURY Beast DDR5 6000MHz RGB",
      storage: "1TB NVMe M.2 SSD Kingston KC3000 (7000 MB/s)",
      monitor: "24.5\" BenQ ZOWIE XL2546K (240Hz, 0.5ms, DyAc⁺)",
      peripherals: "Мышь Logitech G PRO X Superlight, Механика HyperX Alloy Origins Core, Наушники HyperX Cloud II",
      chair: "Эргономичные кресла DXRacer Formula Series"
    },
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    hourlyPrice: 200,
    fpsBenchmark: [
      { game: "CS 2", fps: "380+ FPS" },
      { game: "Dota 2", fps: "300+ FPS" },
      { game: "Valorant", fps: "450+ FPS" },
      { game: "Cyberpunk 2077 (High)", fps: "95+ FPS" }
    ],
    seatsCount: 24
  },
  {
    id: "pro",
    name: "PRO GAMING ARENA",
    badge: "Выбор про-игроков",
    description: "Киберспортивный полигон с мониторами 360Hz и флагманским железом для побед в турнирах и соревновательном ладдере.",
    specs: {
      cpu: "AMD Ryzen 7 7800X3D (Лучший игровой процессор в мире)",
      gpu: "NVIDIA GeForce RTX 4080 SUPER 16GB GDDR6X",
      ram: "32GB G.Skill Trident Z5 RGB DDR5 6400MHz CL30",
      storage: "2TB Samsung 990 PRO NVMe PCIe 4.0 (7450 MB/s)",
      monitor: "24.5\" BenQ ZOWIE XL2566K (360Hz Fast-TN, DyAc²)",
      peripherals: "Мышь Logitech G PRO X Superlight 2 (4K polling), Клавиатура Wooting 60HE (Rapid Trigger), Наушники Logitech G PRO X 2 Lightspeed",
      chair: "Профессиональные кресла noblechairs HERO Gaming"
    },
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1200&auto=format&fit=crop",
    hourlyPrice: 300,
    fpsBenchmark: [
      { game: "CS 2", fps: "550+ FPS" },
      { game: "Dota 2", fps: "420+ FPS" },
      { game: "Valorant", fps: "600+ FPS" },
      { game: "Apex Legends", fps: "280+ FPS" }
    ],
    seatsCount: 14
  },
  {
    id: "vip",
    name: "VIP LOUNGE ROOM",
    badge: "Премиум уединение",
    description: "Изолированные звуконепроницаемые апартаменты с ультраширокими OLED 240Hz дисплеями, RTX 4090 и персональным обслуживанием.",
    specs: {
      cpu: "Intel Core i9-14900KF (24 ядра, 6.0 GHz Turbo Boost)",
      gpu: "NVIDIA GeForce RTX 4090 24GB ASUS ROG STRIX OC",
      ram: "64GB Corsair Dominator Titanium DDR5 7200MHz",
      storage: "4TB Samsung 990 PRO (PCIe 4.0 x4)",
      monitor: "27\" ASUS ROG Swift OLED PG27AQDM (2K, 240Hz, 0.03ms)",
      peripherals: "Кастомные клавиатуры с Hot-Swap и смазанными свитчами, Razer DeathAdder V3 Pro, Наушники SteelSeries Arctis Nova Pro Wireless",
      chair: "Премиальные кожаные кресла Herman Miller x Logitech Embody"
    },
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    hourlyPrice: 450,
    fpsBenchmark: [
      { game: "CS 2", fps: "680+ FPS" },
      { game: "Cyberpunk 2077 (Overdrive)", fps: "125+ FPS" },
      { game: "GTA V / FiveM", fps: "210+ FPS" },
      { game: "Warzone 3", fps: "230+ FPS" }
    ],
    seatsCount: 6
  },
  {
    id: "bootcamp",
    name: "BOOTCAMP ARENA (5x5)",
    badge: "Для команд и кланов",
    description: "Отдельная турнирная комната для 5 игроков с тактической доской, капитанским пультом и командной звукоизоляцией.",
    specs: {
      cpu: "AMD Ryzen 7 7800X3D (Водяное охлаждение NZXT Kraken Elite)",
      gpu: "NVIDIA GeForce RTX 4080 SUPER 16GB",
      ram: "32GB Kingston Renegade Silver DDR5 6400MHz",
      storage: "2TB Kingston KC3000 PCIe 4.0",
      monitor: "24.5\" BenQ ZOWIE XL2566K 360Hz",
      peripherals: "Турнирный сетап: ZOWIE Camade, Mousepad Artisan Hayate Otsu, Logitech G Pro X Superlight 2",
      chair: "Кресла noblechairs EPIC Black Edition"
    },
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    hourlyPrice: 1400, // За всю комнату 5 мест
    isTeam: true,
    fpsBenchmark: [
      { game: "CS 2 (5v5 Lan)", fps: "580+ FPS" },
      { game: "Dota 2 Teamfight", fps: "400+ FPS" },
      { game: "Valorant Scrims", fps: "600+ FPS" },
      { game: "Apex Scrims", fps: "270+ FPS" }
    ],
    seatsCount: 10
  }
];

// Тарифы клуба
export const TARIFF_PACKS = [
  {
    id: "pack_1h",
    duration: "1 час",
    durationHours: 1,
    title: "Разминка / Быстрый матч",
    subtitle: "Для короткой сессии или пары каток в соло",
    prices: {
      standard: 200,
      pro: 300,
      vip: 450,
      bootcamp: 1400
    },
    popular: false,
    perks: [
      "Доступ ко всем установленным играм",
      "Сверхбыстрый интернет 1 Гбит/с",
      "Профессиональная периферия",
      "Бесплатная вода и чай"
    ]
  },
  {
    id: "pack_3h",
    duration: "3 часа",
    durationHours: 3,
    title: "Рейтинговый марафон",
    subtitle: "Самый частый выбор для подъема ранга",
    prices: {
      standard: 500,
      pro: 750,
      vip: 1150,
      bootcamp: 3600
    },
    popular: true,
    badge: "ХИТ ПРОДАЖ",
    discountBadge: "Выгода 17%",
    perks: [
      "Все преимущества базового тарифа",
      "Фирменный энергетический напиток на выбор",
      "Возможность продления по льготной цене",
      "Приоритетный доступ к стриминговым утилитам"
    ]
  },
  {
    id: "pack_5h",
    duration: "5 часов",
    durationHours: 5,
    title: "PRO Погружение",
    subtitle: "Полноценный турнирный день или кланвар",
    prices: {
      standard: 750,
      pro: 1100,
      vip: 1750,
      bootcamp: 5500
    },
    popular: false,
    discountBadge: "Выгода 25%",
    perks: [
      "Все преимущества 3-часового тарифа",
      "Скидка 15% на всё меню лаундж-бара",
      "Сохранение персональных конфигов в облаке",
      "Бесплатная смена игровой периферии по запросу"
    ]
  },
  {
    id: "pack_night",
    duration: "Ночной пакет",
    durationHours: 10,
    timeRange: "22:00 — 08:00 (10 часов)",
    title: "Легендарная Ночь",
    subtitle: "10 часов бескомпромиссного драйва в особой атмосфере",
    prices: {
      standard: 950,
      pro: 1400,
      vip: 2200,
      bootcamp: 6900
    },
    popular: true,
    badge: "НОЧНОЙ ДРАЙВ",
    discountBadge: "Выгода 50%",
    perks: [
      "10 часов ночного гейминга без ограничений",
      "Атмосферный неоновый клубный свет и DJ-сеты",
      "Специальный комбо-набор снеков и напитков",
      "Доступ в лаундж-зону с PS5 во время перерывов",
      "Завтрак от шеф-повара бара в подарок утром"
    ]
  },
  {
    id: "pack_morning",
    duration: "Утренний буст",
    durationHours: 5,
    timeRange: "08:00 — 13:00 (5 часов)",
    title: "Утренний Прайм",
    subtitle: "Спокойная атмосфера и максимальная концентрация",
    prices: {
      standard: 450,
      pro: 650,
      vip: 990,
      bootcamp: 3200
    },
    popular: false,
    discountBadge: "Скидка 55%",
    perks: [
      "5 часов утреннего гейминга по спеццене",
      "Свежесваренный зерновой кофе в подарок",
      "Тихий зал для максимального фокуса",
      "Идеально для калибровки и тренировок"
    ]
  }
];

// Преимущества клуба
export const CLUB_ADVANTAGES = [
  {
    icon: "cpu",
    title: "Ультимативное железо",
    description: "RTX 4090 и RTX 4080 Super в паре с Ryzen 7 7800X3D и i9-14900KF. Стабильные 360+ FPS в любых играх без просадок."
  },
  {
    icon: "monitor",
    title: "Мониторы 240 & 360 Hz",
    description: "Легендарные киберспортивные ZOWIE XL2566K и OLED 240Hz с откликом 0.03ms. Никакого шлейфа — кристальная четкость каждого кадра."
  },
  {
    icon: "wifi",
    title: "Пинг < 1 ms и 1 Гбит/с",
    description: "Собственный выделенный оптоволоконный канал прямо до магистральных узлов. Забудь про лаги, choke и loss пакетов."
  },
  {
    icon: "mouse",
    title: "Топовая периферия",
    description: "Wooting 60HE с Rapid Trigger, Logitech G PRO X Superlight 2, HyperX Cloud III. Мы регулярно чистим и калибруем каждое устройство."
  },
  {
    icon: "air",
    title: "Микроклимат и тишина",
    description: "Промышленная приточно-вытяжная вентиляция с фильтрацией воздуха HEPA и кондиционированием. Всегда свежо и прохладно."
  },
  {
    icon: "coffee",
    title: "Авторский бар и кухня",
    description: "Энергетики, крафтовые лимонады, сочные бургеры, пицца и сендвичи. Официант принесет заказ прямо к твоему игровому месту."
  },
  {
    icon: "gamepad",
    title: "PS5 Lounge Zone",
    description: "Зона отдыха с 85\" OLED панелями, консолями PlayStation 5, удобными диванами и библиотекой новинок: EA FC, Mortal Kombat 1, UFC 5."
  },
  {
    icon: "shield",
    title: "Приватность и охрана",
    description: "Круглосуточная охрана, видеонаблюдение, гардероб и индивидуальные шкафчики с электронным замком для твоих личных вещей."
  }
];

// Галерея клуба
export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Главная арена PRO Gaming",
    category: "arena",
    categoryName: "Главный зал",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    desc: "360Hz сетапы и турнирная посадка для бескомпромиссных матчей"
  },
  {
    id: 2,
    title: "VIP Lounge Room 'Gold Crown'",
    category: "vip",
    categoryName: "VIP-комнаты",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    desc: "Изолированная комната с RTX 4090 и премиальной акустикой"
  },
  {
    id: 3,
    title: "Bootcamp Team 5v5 Arena",
    category: "bootcamp",
    categoryName: "Bootcamp",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    desc: "Командная звукоизоляция и тактический центр"
  },
  {
    id: 4,
    title: "Консольная зона PlayStation 5",
    category: "lounge",
    categoryName: "Лаундж & Бар",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop",
    desc: "Диванная зона отдыха с 4K 120Hz ТВ для дружеских баттлов"
  },
  {
    id: 5,
    title: "Кастомный водяной контур EMPIRE",
    category: "hardware",
    categoryName: "Железо",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop",
    desc: "Эксклюзивные ПК ручной сборки с золотым хладагентом"
  },
  {
    id: 6,
    title: "Cyber Bar & Kitchen",
    category: "lounge",
    categoryName: "Лаундж & Бар",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    desc: "Коктейли, энергетики и горячая еда 24/7"
  },
  {
    id: 7,
    title: "Standard Zone Ночной режим",
    category: "arena",
    categoryName: "Главный зал",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1200&auto=format&fit=crop",
    desc: "Неоновая киберпанк подсветка и идеальный звук"
  },
  {
    id: 8,
    title: "VIP Room 2 'Cyberpunk Suite'",
    category: "vip",
    categoryName: "VIP-комнаты",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop",
    desc: "Индивидуальный климат-контроль и анатомические кресла"
  }
];

// Схема компьютеров зала (для интерактивной карты выбора места)
export const COMPUTER_SEATS = [
  // STANDARD ZONE: ПК 1 - 20
  ...Array.from({ length: 20 }, (_, i) => {
    const num = i + 1;
    // симулируем статус для реализма: некоторые ПК заняты, большинство свободно
    const isBusy = [3, 7, 11, 14, 18].includes(num);
    return {
      id: `pc-${num}`,
      number: num,
      zone: "standard",
      zoneName: "Standard Zone",
      status: isBusy ? "busy" : "free",
      gpu: "RTX 4070 SUPER",
      cpu: "i5-14600KF",
      monitor: "240Hz ZOWIE",
      pricePerHour: 200
    };
  }),
  // PRO ARENA: ПК 21 - 32
  ...Array.from({ length: 12 }, (_, i) => {
    const num = i + 21;
    const isBusy = [22, 25, 29].includes(num);
    return {
      id: `pc-${num}`,
      number: num,
      zone: "pro",
      zoneName: "PRO Arena",
      status: isBusy ? "busy" : "free",
      gpu: "RTX 4080 SUPER",
      cpu: "Ryzen 7 7800X3D",
      monitor: "360Hz ZOWIE",
      pricePerHour: 300
    };
  }),
  // VIP ROOM: ПК 33 - 38 (VIP 1 - VIP 6)
  ...Array.from({ length: 6 }, (_, i) => {
    const num = i + 33;
    const isBusy = [35].includes(num);
    return {
      id: `pc-${num}`,
      number: num,
      label: `VIP-${i + 1}`,
      zone: "vip",
      zoneName: "VIP Lounge",
      status: isBusy ? "busy" : "free",
      gpu: "RTX 4090 24GB",
      cpu: "i9-14900KF",
      monitor: "240Hz OLED 2K",
      pricePerHour: 450
    };
  }),
  // BOOTCAMP: ПК 39 - 48 (Team A 1-5, Team B 1-5)
  ...Array.from({ length: 10 }, (_, i) => {
    const num = i + 39;
    const isBusy = [40, 41].includes(num);
    const team = num <= 43 ? "Team-A" : "Team-B";
    const slot = (num <= 43 ? num - 38 : num - 43);
    return {
      id: `pc-${num}`,
      number: num,
      label: `${team} #${slot}`,
      zone: "bootcamp",
      zoneName: "Bootcamp (5v5)",
      status: isBusy ? "busy" : "free",
      gpu: "RTX 4080 SUPER",
      cpu: "Ryzen 7 7800X3D",
      monitor: "360Hz Fast-TN",
      pricePerHour: 350
    };
  })
];

// Вопросы и ответы (FAQ)
export const FAQ_ITEMS = [
  {
    q: "Нужно ли бронировать компьютер заранее?",
    a: "Мы рекомендуем бронировать ПК минимум за 2-3 часа, особенно в вечернее время (с 18:00) и в выходные дни, когда заполняемость залов максимальная. В VIP-комнаты и Bootcamp бронь лучше оформлять за 1-2 дня."
  },
  {
    q: "Можно ли приходить со своими девайсами (мышь, клавиатура, наушники)?",
    a: "Да, абсолютно! Мы приветствуем игру со своими привычными девайсами. На каждом месте выведен удобный USB-хаб на столе, а наши администраторы помогут быстро подключить и настроить ПО (Razer Synapse, Logitech G Hub, Wooting Hub)."
  },
  {
    q: "Какие игры уже установлены на компьютерах?",
    a: "Установлено более 100 актуальных игр: CS 2, Dota 2, Valorant, Apex Legends, PUBG, Warzone 3, GTA V / RP, Cyberpunk 2077, Rust, Fortnite, Overwatch 2, EA Sports FC 24, Mortal Kombat 1 и многие другие. Если вам нужна редкая игра — напишите в комментарии к бронированию, и мы скачаем её заранее на скорости 1 Гбит/с."
  },
  {
    q: "Есть ли возрастные ограничения для ночного пакета?",
    a: "Посещение клуба в ночное время (с 22:00 до 06:00) разрешено лицам старше 18 лет. Пожалуйста, возьмите с собой паспорт или водительское удостоверение. Днем ограничений нет."
  },
  {
    q: "Можно ли заказывать еду и напитки к игровому месту?",
    a: "Да, у нас работает круглосуточный бар с бургерами, пиццей, снеками, кофе, фирменными лимонадами и энергетиками. Заказать можно прямо через QR-код на мониторе или обратившись к администратору."
  },
  {
    q: "Проводятся ли в EMPIRE турниры с призовыми фондами?",
    a: "Да! Каждые выходные мы проводим локальные и онлайн-турниры по CS 2, Dota 2 и Valorant с денежными призами, скинами и клубным мерчем. Следите за анонсами в нашем Telegram-канале."
  }
];

// Популярные киберспортивные игры для бегущей строки
export const POPULAR_GAMES = [
  "COUNTER-STRIKE 2",
  "DOTA 2",
  "VALORANT",
  "CYBERPUNK 2077: PHANTOM LIBERTY",
  "APEX LEGENDS",
  "GTA V / RADMIR RP",
  "CALL OF DUTY: WARZONE",
  "RUST",
  "FORTNITE",
  "EA SPORTS FC 25",
  "MORTAL KOMBAT 1",
  "STALKER 2: HEART OF CHORNOBYL"
];

// Отзывы гостей
export const REVIEWS = [
  {
    name: "Александр «N1TRO» Волков",
    role: "Капитан полупрофессиональной команды по CS2",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Лучший клуб в столице без преувеличения. Мониторы ZOWIE 360Hz — это совершенно другой уровень регистрации выстрелов в CS2. Пинг в Стокгольм и Варшаву минимальный. Bootcamp комната оборудована идеально для 5 человек."
  },
  {
    name: "Михаил Кузнецов",
    role: "Постоянный гость VIP Lounge",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Берем VIP-комнату на ночной пакет почти каждые выходные. RTX 4090 и 2K OLED экран создают полное погружение в Cyberpunk и сюжетки. Звукоизоляция топ, кресла Herman Miller спасают спину за 10 часов игры."
  },
  {
    name: "Дарья «Valkyrie» Соколова",
    role: "Стример и контент-мейкер",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Шикарная атмосфера, неоновый золотой дизайн прямо для красивых сторис! Отдельный респект за чистоту — девайсы обрабатываются антисептиком после каждого игрока. Кухня и авторские напитки на высоте."
  }
];
