import type { FeaturedProject, ProjectContractDetails, ProjectImage, ProjectStage } from "../types/project";

const UKS_CUSTOMER = "ОГБУ «Управление капитального строительства Белгородской области»";

const placeholderImages = (title: string) => [
  {
    src: "",
    alt: `${title}: основное фото будет добавлено`,
    caption: "Основное фото",
    isPlaceholder: true
  },
  {
    src: "",
    alt: `${title}: дополнительное фото будет добавлено`,
    caption: "Фото 2",
    isPlaceholder: true
  },
  {
    src: "",
    alt: `${title}: дополнительное фото будет добавлено`,
    caption: "Фото 3",
    isPlaceholder: true
  }
];

const livnySocialCareImages: ProjectImage[] = [
  {
    src: new URL("../assets/object-photos/1/2-straight.webp", import.meta.url).href,
    alt: "Ливенский дом социального обслуживания: главный вход после ремонта",
    caption: "Главный вход",
    width: 1280,
    height: 1707
  },
  {
    src: new URL("../assets/object-photos/1/1.webp", import.meta.url).href,
    alt: "Ливенский дом социального обслуживания: основной фасад здания",
    caption: "Основной фасад",
    width: 1280,
    height: 1707
  },
  {
    src: new URL("../assets/object-photos/1/6.webp", import.meta.url).href,
    alt: "Ливенский дом социального обслуживания: благоустроенная территория",
    caption: "Благоустройство территории",
    width: 1280,
    height: 1707
  },
  {
    src: new URL("../assets/object-photos/1/5.webp", import.meta.url).href,
    alt: "Ливенский дом социального обслуживания: интерьер коридора после ремонта",
    caption: "Интерьер",
    width: 1280,
    height: 1707
  }
];

const adaptiveSportsCenterImages: ProjectImage[] = [
  {
    src: new URL("../assets/object-photos/2/IMG_0135.webp", import.meta.url).href,
    alt: "Спортивный центр Вершина: входная группа и вывеска",
    caption: "Главный вход",
    width: 1257,
    height: 1800
  },
  {
    src: new URL("../assets/object-photos/2/IMG_0136.webp", import.meta.url).href,
    alt: "Спортивный центр Вершина: навигационный знак и территория объекта",
    caption: "Территория объекта",
    width: 1800,
    height: 1350
  },
  {
    src: new URL("../assets/object-photos/2/IMG_0139.webp", import.meta.url).href,
    alt: "Спортивный центр Вершина: фасад спортивного блока",
    caption: "Фасад спортивного блока",
    width: 1800,
    height: 1350
  },
  {
    src: new URL("../assets/object-photos/2/IMG_0144.webp", import.meta.url).href,
    alt: "Спортивный центр Вершина: просторный входной холл",
    caption: "Входной холл",
    width: 1800,
    height: 1350
  },
  {
    src: new URL("../assets/object-photos/2/IMG_0140.webp", import.meta.url).href,
    alt: "Спортивный центр Вершина: внутренняя беговая зона и навигация по залам",
    caption: "Навигация по залам",
    width: 1800,
    height: 1350
  },
  {
    src: new URL("../assets/object-photos/2/IMG_0146.webp", import.meta.url).href,
    alt: "Спортивный центр Вершина: универсальный спортивный зал",
    caption: "Универсальный спортивный зал",
    width: 1800,
    height: 1350
  }
];

const school48Images: ProjectImage[] = [
  {
    src: new URL("../assets/object-photos/3/IMG_010222-enhanced.webp", import.meta.url).href,
    alt: "МБОУ СОШ № 48: главный вход после капитального ремонта",
    caption: "Главный вход",
    width: 1126,
    height: 1397
  },
  {
    src: new URL("../assets/object-photos/3/IMG_0099.webp", import.meta.url).href,
    alt: "МБОУ СОШ № 48: обновленный фасад и школьная территория",
    caption: "Фасад и территория",
    width: 1350,
    height: 1800
  },
  {
    src: new URL("../assets/object-photos/3/IMG_0103.webp", import.meta.url).href,
    alt: "МБОУ СОШ № 48: просторный холл после ремонта",
    caption: "Холл",
    width: 1800,
    height: 1350
  },
  {
    src: new URL("../assets/object-photos/3/IMG_0106.webp", import.meta.url).href,
    alt: "МБОУ СОШ № 48: актовый зал",
    caption: "Актовый зал",
    width: 1350,
    height: 1800
  },
  {
    src: new URL("../assets/object-photos/3/IMG_0109.webp", import.meta.url).href,
    alt: "МБОУ СОШ № 48: спортивный зал",
    caption: "Спортивный зал",
    width: 1800,
    height: 1350
  },
  {
    src: new URL("../assets/object-photos/3/IMG_0111.webp", import.meta.url).href,
    alt: "МБОУ СОШ № 48: специализированный дорожный класс",
    caption: "Дорожный класс",
    width: 1800,
    height: 1350
  },
  {
    src: new URL("../assets/object-photos/3/IMG_0117.webp", import.meta.url).href,
    alt: "МБОУ СОШ № 48: столовая зона",
    caption: "Столовая",
    width: 1800,
    height: 1350
  }
];

const contract = (details: ProjectContractDetails): ProjectContractDetails => details;

const stage = (details: ProjectStage): ProjectStage => details;

export const featuredProjects: FeaturedProject[] = [
  {
    id: "featured-livny-social-care-2025",
    title: "Капитальный ремонт Ливенского дома социального обслуживания",
    year: 2025,
    periodLabel: "2025",
    sortDate: "2025-12-01",
    type: "Социальная инфраструктура",
    workType: "Капитальный ремонт",
    cost: "661 000 000 руб.",
    amountLabel: "Стоимость",
    status: "В работе",
    shortDescription:
      "Капитальный ремонт здания ГБСУСОССЗН «Ливенский дом социального обслуживания». Объект находится в процессе производства работ.",
    images: livnySocialCareImages
  },
  {
    id: "featured-adaptive-sports-center-2024",
    sourceNumber: 96,
    title: "Спортивный центр адаптивной физической культуры и спорта",
    year: 2024,
    periodLabel: "2024",
    sortDate: "2024-12-01",
    city: "Белгород",
    type: "Спортивная инфраструктура",
    workType: "Строительство",
    cost: "476 975 549 руб.",
    amountLabel: "Стоимость",
    status: "Реализован",
    shortDescription:
      "Строительство спортивного центра для занятий адаптивной физической культурой и спортом в Белгороде.",
    contractDetails: contract({
      customer: UKS_CUSTOMER,
      contractNumber: "13/323",
      contractDate: "16.05.2022",
      contractPrice: "476 975 549 руб.",
      completionDate: "25.11.2024"
    }),
    images: adaptiveSportsCenterImages
  },
  {
    id: "featured-school-48-2024",
    sourceNumber: 99,
    title: "Капитальный ремонт МБОУ СОШ № 48",
    year: 2024,
    periodLabel: "2024",
    sortDate: "2024-11-01",
    city: "Белгород",
    type: "Образовательная инфраструктура",
    workType: "Капитальный ремонт",
    cost: "532 000 000 руб.",
    amountLabel: "Стоимость",
    status: "Реализован",
    shortDescription: "Капитальный ремонт здания МБОУ СОШ № 48 в Белгороде.",
    images: school48Images
  },
  {
    id: "featured-school-37-2023-2024",
    title: "Капитальный ремонт МБОУ СОШ № 37",
    year: 2024,
    periodLabel: "2023–2024",
    sortDate: "2024-10-01",
    city: "Белгород",
    type: "Образовательная инфраструктура",
    workType: "Капитальный ремонт",
    cost: "680 100 899 руб.",
    amountLabel: "Стоимость",
    status: "Реализован",
    shortDescription:
      "Объединенный объект по трем этапам капитального ремонта МБОУ СОШ № 37 в Белгороде.",
    stages: [
      stage({
        id: "school-37-stage-1",
        title: "1-й этап",
        period: "2023",
        completedAmount: "132 747 810 руб.",
        customer: UKS_CUSTOMER,
        contractNumber: "13/998",
        contractDate: "24.06.2022",
        completionDate: "29.07.2023"
      }),
      stage({
        id: "school-37-stage-2",
        title: "2-й этап",
        period: "2024",
        completedAmount: "207 420 170 руб.",
        customer: UKS_CUSTOMER,
        contractNumber: "13/517",
        contractDate: "17.07.2023",
        completionDate: "15.07.2024"
      }),
      stage({
        id: "school-37-stage-3",
        title: "3-й этап",
        period: "2024",
        completedAmount: "339 932 919 руб.",
        customer: UKS_CUSTOMER,
        contractNumber: "13/613",
        contractDate: "24.07.2023",
        completionDate: "23.07.2024"
      })
    ],
    images: placeholderImages("МБОУ СОШ № 37"),
    isPlaceholder: true
  },
  {
    id: "featured-agrotechnical-college-2023",
    sourceNumber: 94,
    title: "Капитальный ремонт учебного корпуса Старооскольского агротехнологического техникума",
    year: 2023,
    periodLabel: "2023",
    sortDate: "2023-12-01",
    city: "Старый Оскол",
    region: "мкр. Макаренко, 39",
    type: "Образовательная инфраструктура",
    workType: "Капитальный ремонт",
    cost: "265 992 689,20 руб.",
    amountLabel: "Стоимость",
    status: "Реализован",
    shortDescription:
      "Капитальный ремонт здания учебного корпуса ОГАПОУ «Старооскольский агротехнологический техникум», мкр. Макаренко, 39, 1-й этап.",
    contractDetails: contract({
      customer: UKS_CUSTOMER,
      contractNumber: "13/1069",
      contractDate: "05.11.2020",
      contractPrice: "266 794 643 руб.",
      completionDate: "30.09.2023"
    }),
    images: placeholderImages("Старооскольский агротехнологический техникум"),
    isPlaceholder: true
  },
  {
    id: "featured-south-west-stadium-2022",
    sourceNumber: 93,
    title: "Стадион в мкр. «Юго-Западный»",
    year: 2022,
    periodLabel: "2022",
    sortDate: "2022-12-01",
    city: "Белгород",
    region: "мкр. «Юго-Западный»",
    type: "Спортивная инфраструктура",
    workType: "Подготовка основания и монтаж покрытий",
    cost: "106 725 459 руб.",
    amountLabel: "Стоимость",
    status: "Реализован",
    shortDescription:
      "Подготовка основания футбольного поля, легкоатлетических беговых дорожек и монтаж искусственных покрытий стадиона.",
    contractDetails: contract({
      customer: UKS_CUSTOMER,
      contractNumber: "13/579",
      contractDate: "19.07.2022",
      contractPrice: "106 826 459 руб.",
      completionDate: "20.10.2022"
    }),
    images: placeholderImages("Стадион в мкр. Юго-Западный"),
    isPlaceholder: true
  },
  {
    id: "featured-technology-design-college-2021",
    title: "Капитальный ремонт учебного корпуса и мастерских техникума технологий и дизайна",
    year: 2021,
    periodLabel: "2020–2021",
    sortDate: "2021-12-01",
    city: "Старый Оскол",
    region: "мкр. Студенческий, 4",
    type: "Образовательная инфраструктура",
    workType: "Капитальный ремонт",
    cost: "90 701 018 руб.",
    amountLabel: "Стоимость",
    status: "Реализован",
    shortDescription:
      "Капитальный ремонт здания учебного корпуса и мастерских ОГАПОУ «Старооскольский техникум технологий и дизайна».",
    stages: [
      stage({
        id: "technology-design-college-abk",
        title: "Капитальный ремонт здания АБК",
        period: "2020",
        completedAmount: "11 442 598 руб.",
        customer: UKS_CUSTOMER,
        contractNumber: "13/965А",
        contractDate: "06.10.2020",
        completionDate: "28.12.2020"
      }),
      stage({
        id: "technology-design-college-workshops",
        title: "Учебный корпус и мастерские",
        period: "2021",
        completedAmount: "79 258 420 руб.",
        customer: UKS_CUSTOMER,
        contractNumber: "13/397",
        contractDate: "20.04.2020",
        completionDate: "22.06.2021"
      })
    ],
    images: placeholderImages("Старооскольский техникум технологий и дизайна"),
    isPlaceholder: true
  },
  {
    id: "featured-polytechnic-college-2019-2020",
    title: "Капитальный ремонт объектов Белгородского политехнического колледжа",
    year: 2020,
    periodLabel: "2019–2020",
    sortDate: "2020-12-01",
    city: "Белгород",
    region: "пр. Б. Хмельницкого, 137А",
    type: "Образовательная инфраструктура",
    workType: "Капитальный ремонт",
    cost: "160 788 215 руб.",
    amountLabel: "Стоимость",
    status: "Реализован",
    shortDescription:
      "Объединенный объект по капитальному ремонту учебного корпуса, общежития и актового зала Белгородского политехнического колледжа.",
    stages: [
      stage({
        id: "polytechnic-college-dormitory",
        title: "Общежитие",
        period: "2019",
        completedAmount: "70 697 187 руб.",
        customer: UKS_CUSTOMER,
        contractNumber: "01262000004190014900001-17-449",
        contractDate: "28.07.2019",
        completionDate: "20.12.2019"
      }),
      stage({
        id: "polytechnic-college-assembly-hall",
        title: "Актовый зал",
        period: "2020",
        completedAmount: "5 391 028 руб.",
        customer: UKS_CUSTOMER,
        contractNumber: "13/784А",
        contractDate: "20.08.2020",
        completionDate: "14.11.2020"
      }),
      stage({
        id: "polytechnic-college-academic-building",
        title: "Учебный корпус",
        period: "2020",
        completedAmount: "84 700 000 руб.",
        customer: UKS_CUSTOMER,
        contractNumber: "13/390А",
        contractDate: "17.04.2020",
        completionDate: "14 и 30.12.2020"
      })
    ],
    images: placeholderImages("Белгородский политехнический колледж"),
    isPlaceholder: true
  },
  {
    id: "featured-city-hospital-1-2019-2022",
    title: "Капитальный ремонт главного больничного корпуса городской больницы № 1",
    year: 2022,
    periodLabel: "2019–2022",
    sortDate: "2020-11-01",
    city: "Старый Оскол",
    region: "ул. Комсомольская, 81",
    type: "Медицинская инфраструктура",
    workType: "Капитальный ремонт",
    cost: "374 172 938,83 руб.",
    amountLabel: "Стоимость",
    status: "Реализован",
    shortDescription:
      "Объединенный объект по капитальному ремонту главного больничного корпуса ОГБУЗ «Городская больница № 1 г. Старый Оскол».",
    stages: [
      stage({
        id: "city-hospital-2019-2020",
        title: "Договор 2019 года с вводом в 2020",
        period: "2019–2020",
        completedAmount: "146 607 098 руб.",
        customer: UKS_CUSTOMER,
        contractNumber: "01262000004190007770001-17/202А",
        contractDate: "29.04.2019",
        completionDate: "20.12.2020"
      }),
      stage({
        id: "city-hospital-2021",
        title: "Завершение 2021 года",
        period: "2021",
        completedAmount: "130 377 194 руб.",
        customer: UKS_CUSTOMER,
        contractNumber: "13/513А",
        contractDate: "25.05.2020",
        completionDate: "30.09.2021"
      }),
      stage({
        id: "city-hospital-2021-2022",
        title: "Лимит 2021–2022 годов",
        period: "2021–2022",
        completedAmount: "97 188 646,83 руб.",
        customer: UKS_CUSTOMER,
        contractNumber: "13/1247А",
        contractDate: "09.12.2021",
        completionDate: "20.06.2022"
      })
    ],
    images: placeholderImages("Городская больница № 1 г. Старый Оскол"),
    isPlaceholder: true
  },
  {
    id: "featured-city-hospital-2-polyclinic-2018-2019",
    sourceNumber: 57,
    title: "Капитальный ремонт поликлиники ОГБУЗ «Городская больница №2»",
    year: 2019,
    periodLabel: "2018–2019",
    sortDate: "2019-12-01",
    city: "Старый Оскол",
    type: "Медицинская инфраструктура",
    workType: "Капитальный ремонт",
    cost: "111 307 704 руб.",
    amountLabel: "Стоимость",
    status: "Реализован",
    shortDescription:
      "Капитальный ремонт поликлиники ОГБУЗ «Городская больница №2» в Старом Осколе.",
    images: placeholderImages("Поликлиника ОГБУЗ «Городская больница №2»"),
    isPlaceholder: true
  },
  {
    id: "featured-oncology-dispensary-2012-2015",
    title: "Капитальный ремонт онкологического диспансера",
    year: 2015,
    periodLabel: "2012–2015",
    sortDate: "2015-12-01",
    city: "Белгород",
    type: "Медицинская инфраструктура",
    workType: "Капитальный ремонт",
    cost: "255 695 204,63 руб.",
    amountLabel: "Стоимость",
    status: "Реализован",
    shortDescription:
      "Объединенный объект по капитальному ремонту онкологического диспансера в Белгороде: хирургический корпус, котельная, дополнительные и остаточные работы.",
    stages: [
      stage({
        id: "oncology-surgical-2012",
        title: "Хирургический корпус",
        period: "2012",
        completedAmount: "51 440 765,30 руб.",
        customer: UKS_CUSTOMER,
        contractNumber: "2012.23879",
        contractDate: "10.04.2012",
        completionDate: "19.12.2012"
      }),
      stage({
        id: "oncology-boiler-2012",
        title: "Котельная, завершение работ",
        period: "2012",
        completedAmount: "14 724 724 руб.",
        customer: UKS_CUSTOMER,
        contractNumber: "2012.29087",
        contractDate: "23.04.2012",
        completionDate: "19.11.2012"
      }),
      stage({
        id: "oncology-boiler-extra-2013",
        title: "Котельная, дополнительные работы",
        period: "2013",
        completedAmount: "4 069 950 руб.",
        customer: UKS_CUSTOMER,
        contractNumber: "2013.88484",
        contractDate: "18.06.2013",
        completionDate: "21.08.2013"
      }),
      stage({
        id: "oncology-surgical-remaining-2014",
        title: "Хирургический корпус, остаточные работы",
        period: "2014",
        completedAmount: "121 223 786 руб.",
        customer: "ОГБУЗ «Белгородский онкологический диспансер»",
        contractNumber: "50",
        contractDate: "29.04.2013",
        completionDate: "07.07.2014"
      }),
      stage({
        id: "oncology-surgical-extra-2014",
        title: "Хирургический корпус, дополнительные работы",
        period: "2014",
        completedAmount: "27 227 392 руб.",
        customer: "ОГБУЗ «Белгородский онкологический диспансер»",
        contractNumber: "115",
        contractDate: "28.10.2013",
        completionDate: "19.02.2014"
      }),
      stage({
        id: "oncology-bill-extra-2014",
        title: "Допработы по ведомости",
        period: "2014",
        completedAmount: "34 322 234 руб.",
        customer: UKS_CUSTOMER,
        contractNumber: "2013.174512",
        contractDate: "08.10.2013",
        completionDate: "07.07.2014"
      }),
      stage({
        id: "oncology-limit-2015",
        title: "Лимит 2015 года",
        period: "2015",
        completedAmount: "2 586 628,33 руб.",
        customer: UKS_CUSTOMER,
        contractNumber: "2015.236851",
        contractDate: "30.06.2015",
        completionDate: "21.11.2015"
      }),
      stage({
        id: "oncology-cooling-2015",
        title: "Холодоснабжение и подогрев воздуха",
        period: "2015",
        completedAmount: "99 725 руб.",
        customer: UKS_CUSTOMER,
        contractNumber: "17/329",
        contractDate: "07.10.2015",
        completionDate: "16.10.2015"
      })
    ],
    images: placeholderImages("Онкологический диспансер"),
    isPlaceholder: true
  },
  {
    id: "featured-belgik-dormitory-2011",
    sourceNumber: 44,
    title: "Общежитие на 530 мест для студентов БелГИК",
    year: 2011,
    periodLabel: "2011",
    sortDate: "2011-12-01",
    city: "Белгород",
    region: "ул. Королева, 7",
    type: "Студенческая инфраструктура",
    workType: "Строительство",
    cost: "330 000 000 руб.",
    amountLabel: "Стоимость",
    status: "Реализован",
    area: "530 мест",
    shortDescription: "Строительство общежития на 530 мест для студентов БелГИК на ул. Королева, 7.",
    images: placeholderImages("Общежитие БелГИК на 530 мест"),
    isPlaceholder: true
  },
  {
    id: "featured-diorama-museum-2008",
    sourceNumber: 41,
    title: "Капитальный ремонт музея-диорамы «Курская битва. Белгородское направление»",
    year: 2008,
    periodLabel: "2008",
    sortDate: "2008-12-01",
    city: "Белгород",
    region: "ул. Попова, 2",
    type: "Культурная инфраструктура",
    workType: "Капитальный ремонт",
    cost: "240 000 000 руб.",
    amountLabel: "Стоимость",
    status: "Реализован",
    shortDescription:
      "Капитальный ремонт здания историко-художественного музея-диорамы «Курская битва. Белгородское направление» в Белгороде.",
    images: placeholderImages("Музей-диорама Курская битва"),
    isPlaceholder: true
  },
  {
    id: "featured-sputnik-dom-2007",
    sourceNumber: 34,
    title: "Торговый центр «Спутник ДОМ»",
    year: 2007,
    periodLabel: "2007",
    sortDate: "2007-12-01",
    city: "Белгород",
    region: "ул. Магистральная",
    type: "Коммерческая инфраструктура",
    workType: "Строительство",
    cost: "640 000 000 руб.",
    amountLabel: "Стоимость",
    status: "Реализован",
    shortDescription: "Строительство торгового центра «Спутник ДОМ» в Белгороде.",
    images: placeholderImages("Торговый центр Спутник ДОМ"),
    isPlaceholder: true
  },
  {
    id: "featured-krasivo-sanatorium-2003-2004",
    title: "Санаторий «Красиво»",
    year: 2004,
    periodLabel: "2003–2004",
    sortDate: "2004-12-01",
    region: "Борисовский район",
    type: "Санаторно-курортная инфраструктура",
    workType: "Строительство",
    cost: "200 000 000 руб.",
    amountLabel: "Стоимость",
    status: "Реализован",
    shortDescription: "Строительство санатория «Красиво» в Борисовском районе Белгородской области.",
    images: placeholderImages("Санаторий Красиво"),
    isPlaceholder: true
  },
  {
    id: "featured-belgu-dormitory-1080-2003-2004",
    sourceNumber: 22,
    title: "Студенческое общежитие БелГУ на 1080 мест",
    year: 2004,
    periodLabel: "2003–2004",
    sortDate: "2004-11-01",
    city: "Белгород",
    type: "Студенческая инфраструктура",
    workType: "Строительство",
    cost: "300 000 000 руб.",
    amountLabel: "Стоимость",
    status: "Реализован",
    area: "1080 мест",
    shortDescription: "Строительство здания студенческого общежития БелГУ на 1080 мест.",
    images: placeholderImages("Студенческое общежитие БелГУ на 1080 мест"),
    isPlaceholder: true
  }
];
