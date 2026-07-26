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

const school37FacadePreview = new URL("../assets/object-photos/4/IMG_0174-preview.webp", import.meta.url).href;
const school37Facade = new URL("../assets/object-photos/4/IMG_0174.webp", import.meta.url).href;
const school37SportsGroundPreview = new URL("../assets/object-photos/4/IMG_0172-preview.webp", import.meta.url).href;
const school37SportsGround = new URL("../assets/object-photos/4/IMG_0172.webp", import.meta.url).href;
const school37SideTerritoryPreview = new URL("../assets/object-photos/4/IMG_0173-preview.webp", import.meta.url).href;
const school37SideTerritory = new URL("../assets/object-photos/4/IMG_0173.webp", import.meta.url).href;
const school37EntranceCanopyPreview = new URL("../assets/object-photos/4/IMG_4756-preview.webp", import.meta.url).href;
const school37EntranceCanopy = new URL("../assets/object-photos/4/IMG_4756.webp", import.meta.url).href;
const school37CorridorPreview = new URL("../assets/object-photos/4/IMG_4765-preview.webp", import.meta.url).href;
const school37Corridor = new URL("../assets/object-photos/4/IMG_4765.webp", import.meta.url).href;
const school37SecurityAreaPreview = new URL("../assets/object-photos/4/IMG_4766-preview.webp", import.meta.url).href;
const school37SecurityArea = new URL("../assets/object-photos/4/IMG_4766.webp", import.meta.url).href;
const school37LobbyPreview = new URL("../assets/object-photos/4/IMG_4767-preview.webp", import.meta.url).href;
const school37Lobby = new URL("../assets/object-photos/4/IMG_4767.webp", import.meta.url).href;

const school37Images: ProjectImage[] = [
  {
    src: school37FacadePreview,
    srcSet: `${school37FacadePreview} 960w, ${school37Facade} 1600w`,
    alt: "МБОУ СОШ № 37: обновленный главный фасад и входная группа после капитального ремонта",
    caption: "Главный фасад",
    width: 1600,
    height: 1200
  },
  {
    src: school37SportsGroundPreview,
    srcSet: `${school37SportsGroundPreview} 960w, ${school37SportsGround} 1600w`,
    alt: "МБОУ СОШ № 37: спортивная площадка и благоустроенная территория",
    caption: "Спортивная территория",
    width: 1600,
    height: 1200
  },
  {
    src: school37SideTerritoryPreview,
    srcSet: `${school37SideTerritoryPreview} 960w, ${school37SideTerritory} 1600w`,
    alt: "МБОУ СОШ № 37: боковой фасад и обновленная территория школы",
    caption: "Боковой фасад",
    width: 1600,
    height: 1200
  },
  {
    src: school37EntranceCanopyPreview,
    srcSet: `${school37EntranceCanopyPreview} 960w, ${school37EntranceCanopy} 1600w`,
    alt: "МБОУ СОШ № 37: крытая входная зона и переходы после ремонта",
    caption: "Входная зона",
    width: 1600,
    height: 1200
  },
  {
    src: school37CorridorPreview,
    srcSet: `${school37CorridorPreview} 960w, ${school37Corridor} 1600w`,
    alt: "МБОУ СОШ № 37: обновленный школьный коридор",
    caption: "Коридор",
    width: 1600,
    height: 1200
  },
  {
    src: school37SecurityAreaPreview,
    srcSet: `${school37SecurityAreaPreview} 960w, ${school37SecurityArea} 1600w`,
    alt: "МБОУ СОШ № 37: входной контроль и зона безопасности",
    caption: "Входной контроль",
    width: 1600,
    height: 1200
  },
  {
    src: school37LobbyPreview,
    srcSet: `${school37LobbyPreview} 960w, ${school37Lobby} 1600w`,
    alt: "МБОУ СОШ № 37: холл с турникетами после капитального ремонта",
    caption: "Холл",
    width: 1600,
    height: 1200
  }
];

const agrotechnicalCollegeMainFacadePreview = new URL("../assets/object-photos/5/IMG_0292-preview.webp", import.meta.url).href;
const agrotechnicalCollegeMainFacade = new URL("../assets/object-photos/5/IMG_0292.webp", import.meta.url).href;
const agrotechnicalCollegeLandscapeFacadePreview = new URL("../assets/object-photos/5/IMG_0295-preview.webp", import.meta.url).href;
const agrotechnicalCollegeLandscapeFacade = new URL("../assets/object-photos/5/IMG_0295.webp", import.meta.url).href;
const agrotechnicalCollegeEntrancePreview = new URL("../assets/object-photos/5/IMG_0297-preview.webp", import.meta.url).href;
const agrotechnicalCollegeEntrance = new URL("../assets/object-photos/5/IMG_0297.webp", import.meta.url).href;
const agrotechnicalCollegePassagePreview = new URL("../assets/object-photos/5/IMG_0298-preview.webp", import.meta.url).href;
const agrotechnicalCollegePassage = new URL("../assets/object-photos/5/IMG_0298.webp", import.meta.url).href;
const agrotechnicalCollegeCourtyardWidePreview = new URL("../assets/object-photos/5/IMG_0299-preview.webp", import.meta.url).href;
const agrotechnicalCollegeCourtyardWide = new URL("../assets/object-photos/5/IMG_0299.webp", import.meta.url).href;
const agrotechnicalCollegeCourtyardWingPreview = new URL("../assets/object-photos/5/IMG_0300-preview.webp", import.meta.url).href;
const agrotechnicalCollegeCourtyardWing = new URL("../assets/object-photos/5/IMG_0300.webp", import.meta.url).href;
const agrotechnicalCollegeCourtyardTreePreview = new URL("../assets/object-photos/5/IMG_0301-preview.webp", import.meta.url).href;
const agrotechnicalCollegeCourtyardTree = new URL("../assets/object-photos/5/IMG_0301.webp", import.meta.url).href;
const agrotechnicalCollegeCourtyardFacadePreview = new URL("../assets/object-photos/5/IMG_0302-preview.webp", import.meta.url).href;
const agrotechnicalCollegeCourtyardFacade = new URL("../assets/object-photos/5/IMG_0302.webp", import.meta.url).href;
const agrotechnicalCollegeSideFacadePreview = new URL("../assets/object-photos/5/IMG_0304-preview.webp", import.meta.url).href;
const agrotechnicalCollegeSideFacade = new URL("../assets/object-photos/5/IMG_0304.webp", import.meta.url).href;

const agrotechnicalCollegeImages: ProjectImage[] = [
  {
    src: agrotechnicalCollegeMainFacadePreview,
    srcSet: `${agrotechnicalCollegeMainFacadePreview} 960w, ${agrotechnicalCollegeMainFacade} 1600w`,
    alt: "Старооскольский агротехнологический техникум: главный фасад учебного корпуса после капитального ремонта",
    caption: "Главный фасад",
    width: 1600,
    height: 1200
  },
  {
    src: agrotechnicalCollegeLandscapeFacadePreview,
    srcSet: `${agrotechnicalCollegeLandscapeFacadePreview} 960w, ${agrotechnicalCollegeLandscapeFacade} 1600w`,
    alt: "Старооскольский агротехнологический техникум: фасад и благоустроенная территория перед корпусом",
    caption: "Фасад и территория",
    width: 1600,
    height: 2133
  },
  {
    src: agrotechnicalCollegeEntrancePreview,
    srcSet: `${agrotechnicalCollegeEntrancePreview} 960w, ${agrotechnicalCollegeEntrance} 1600w`,
    alt: "Старооскольский агротехнологический техникум: входная группа учебного корпуса",
    caption: "Входная группа",
    width: 1600,
    height: 2133
  },
  {
    src: agrotechnicalCollegePassagePreview,
    srcSet: `${agrotechnicalCollegePassagePreview} 960w, ${agrotechnicalCollegePassage} 1600w`,
    alt: "Старооскольский агротехнологический техникум: крытый проход к учебному корпусу",
    caption: "Крытый проход",
    width: 1600,
    height: 2133
  },
  {
    src: agrotechnicalCollegeCourtyardWidePreview,
    srcSet: `${agrotechnicalCollegeCourtyardWidePreview} 960w, ${agrotechnicalCollegeCourtyardWide} 1600w`,
    alt: "Старооскольский агротехнологический техникум: внутренний двор и обновленный фасад корпуса",
    caption: "Внутренний двор",
    width: 1600,
    height: 1200
  },
  {
    src: agrotechnicalCollegeCourtyardWingPreview,
    srcSet: `${agrotechnicalCollegeCourtyardWingPreview} 960w, ${agrotechnicalCollegeCourtyardWing} 1600w`,
    alt: "Старооскольский агротехнологический техникум: двор и боковой корпус после ремонта",
    caption: "Двор корпуса",
    width: 1600,
    height: 2133
  },
  {
    src: agrotechnicalCollegeCourtyardTreePreview,
    srcSet: `${agrotechnicalCollegeCourtyardTreePreview} 960w, ${agrotechnicalCollegeCourtyardTree} 1600w`,
    alt: "Старооскольский агротехнологический техникум: учебный корпус со стороны внутреннего двора",
    caption: "Корпус со двора",
    width: 1600,
    height: 2133
  },
  {
    src: agrotechnicalCollegeCourtyardFacadePreview,
    srcSet: `${agrotechnicalCollegeCourtyardFacadePreview} 960w, ${agrotechnicalCollegeCourtyardFacade} 1600w`,
    alt: "Старооскольский агротехнологический техникум: протяженный фасад во внутреннем дворе",
    caption: "Фасад во дворе",
    width: 1600,
    height: 2133
  },
  {
    src: agrotechnicalCollegeSideFacadePreview,
    srcSet: `${agrotechnicalCollegeSideFacadePreview} 960w, ${agrotechnicalCollegeSideFacade} 1600w`,
    alt: "Старооскольский агротехнологический техникум: боковой фасад учебного корпуса",
    caption: "Боковой фасад",
    width: 1600,
    height: 2133
  }
];

const southWestStadiumTrackPreview = new URL("../assets/object-photos/6/IMG_0151-preview.webp", import.meta.url).href;
const southWestStadiumTrack = new URL("../assets/object-photos/6/IMG_0151.webp", import.meta.url).href;
const southWestStadiumFieldPreview = new URL("../assets/object-photos/6/IMG_0152-preview.webp", import.meta.url).href;
const southWestStadiumField = new URL("../assets/object-photos/6/IMG_0152.webp", import.meta.url).href;
const southWestStadiumTurfPreview = new URL("../assets/object-photos/6/IMG_0150-preview.webp", import.meta.url).href;
const southWestStadiumTurf = new URL("../assets/object-photos/6/IMG_0150.webp", import.meta.url).href;
const southWestStadiumLightingPreview = new URL("../assets/object-photos/6/IMG_0148-preview.webp", import.meta.url).href;
const southWestStadiumLighting = new URL("../assets/object-photos/6/IMG_0148.webp", import.meta.url).href;
const southWestStadiumTerritoryPreview = new URL("../assets/object-photos/6/IMG_0149-preview.webp", import.meta.url).href;
const southWestStadiumTerritory = new URL("../assets/object-photos/6/IMG_0149.webp", import.meta.url).href;

const southWestStadiumImages: ProjectImage[] = [
  {
    src: southWestStadiumTrackPreview,
    srcSet: `${southWestStadiumTrackPreview} 960w, ${southWestStadiumTrack} 1600w`,
    alt: "Стадион в микрорайоне Юго-Западный: футбольное поле и беговые дорожки после монтажа покрытий",
    caption: "Поле и беговые дорожки",
    width: 1600,
    height: 1200
  },
  {
    src: southWestStadiumFieldPreview,
    srcSet: `${southWestStadiumFieldPreview} 960w, ${southWestStadiumField} 1600w`,
    alt: "Стадион в микрорайоне Юго-Западный: искусственное покрытие футбольного поля",
    caption: "Футбольное поле",
    width: 1600,
    height: 1200
  },
  {
    src: southWestStadiumTurfPreview,
    srcSet: `${southWestStadiumTurfPreview} 960w, ${southWestStadiumTurf} 1600w`,
    alt: "Стадион в микрорайоне Юго-Западный: разметка и искусственный газон",
    caption: "Искусственное покрытие",
    width: 1600,
    height: 2133
  },
  {
    src: southWestStadiumLightingPreview,
    srcSet: `${southWestStadiumLightingPreview} 960w, ${southWestStadiumLighting} 1600w`,
    alt: "Стадион в микрорайоне Юго-Западный: беговые дорожки и мачты освещения",
    caption: "Дорожки и освещение",
    width: 1600,
    height: 1200
  },
  {
    src: southWestStadiumTerritoryPreview,
    srcSet: `${southWestStadiumTerritoryPreview} 960w, ${southWestStadiumTerritory} 1600w`,
    alt: "Стадион в микрорайоне Юго-Западный: спортивная территория и освещение стадиона",
    caption: "Территория стадиона",
    width: 1600,
    height: 2133
  }
];

const technologyDesignCollegeMainFacadePreview = new URL("../assets/object-photos/7/IMG_0269-preview.webp", import.meta.url).href;
const technologyDesignCollegeMainFacade = new URL("../assets/object-photos/7/IMG_0269.webp", import.meta.url).href;
const technologyDesignCollegeFrontFacadePreview = new URL("../assets/object-photos/7/IMG_0272-preview.webp", import.meta.url).href;
const technologyDesignCollegeFrontFacade = new URL("../assets/object-photos/7/IMG_0272.webp", import.meta.url).href;
const technologyDesignCollegeSideFacadePreview = new URL("../assets/object-photos/7/IMG_0265-preview.webp", import.meta.url).href;
const technologyDesignCollegeSideFacade = new URL("../assets/object-photos/7/IMG_0265.webp", import.meta.url).href;
const technologyDesignCollegeYardFacadePreview = new URL("../assets/object-photos/7/IMG_0266-preview.webp", import.meta.url).href;
const technologyDesignCollegeYardFacade = new URL("../assets/object-photos/7/IMG_0266.webp", import.meta.url).href;
const technologyDesignCollegeRoadFacadePreview = new URL("../assets/object-photos/7/IMG_0279-preview.webp", import.meta.url).href;
const technologyDesignCollegeRoadFacade = new URL("../assets/object-photos/7/IMG_0279.webp", import.meta.url).href;
const technologyDesignCollegeWorkshopEntrancePreview = new URL("../assets/object-photos/7/IMG_0276-preview.webp", import.meta.url).href;
const technologyDesignCollegeWorkshopEntrance = new URL("../assets/object-photos/7/IMG_0276.webp", import.meta.url).href;
const technologyDesignCollegeTerritoryPreview = new URL("../assets/object-photos/7/IMG_0277-preview.webp", import.meta.url).href;
const technologyDesignCollegeTerritory = new URL("../assets/object-photos/7/IMG_0277.webp", import.meta.url).href;
const technologyDesignCollegeMainEntrancePreview = new URL("../assets/object-photos/7/IMG_0270-preview.webp", import.meta.url).href;
const technologyDesignCollegeMainEntrance = new URL("../assets/object-photos/7/IMG_0270.webp", import.meta.url).href;
const technologyDesignCollegeInfoStandPreview = new URL("../assets/object-photos/7/IMG_0271-preview.webp", import.meta.url).href;
const technologyDesignCollegeInfoStand = new URL("../assets/object-photos/7/IMG_0271.webp", import.meta.url).href;

const technologyDesignCollegeImages: ProjectImage[] = [
  {
    src: technologyDesignCollegeMainFacadePreview,
    srcSet: `${technologyDesignCollegeMainFacadePreview} 960w, ${technologyDesignCollegeMainFacade} 1600w`,
    alt: "Старооскольский техникум технологий и дизайна: главный фасад учебного корпуса после капитального ремонта",
    caption: "Главный фасад",
    width: 1600,
    height: 2133
  },
  {
    src: technologyDesignCollegeFrontFacadePreview,
    srcSet: `${technologyDesignCollegeFrontFacadePreview} 960w, ${technologyDesignCollegeFrontFacade} 1600w`,
    alt: "Старооскольский техникум технологий и дизайна: обновленный фасад и входная группа корпуса",
    caption: "Фасад и вход",
    width: 1600,
    height: 1200
  },
  {
    src: technologyDesignCollegeSideFacadePreview,
    srcSet: `${technologyDesignCollegeSideFacadePreview} 960w, ${technologyDesignCollegeSideFacade} 1600w`,
    alt: "Старооскольский техникум технологий и дизайна: боковой фасад учебного корпуса",
    caption: "Боковой фасад",
    width: 1600,
    height: 2133
  },
  {
    src: technologyDesignCollegeYardFacadePreview,
    srcSet: `${technologyDesignCollegeYardFacadePreview} 960w, ${technologyDesignCollegeYardFacade} 1600w`,
    alt: "Старооскольский техникум технологий и дизайна: корпус со стороны территории техникума",
    caption: "Корпус со стороны двора",
    width: 1600,
    height: 2133
  },
  {
    src: technologyDesignCollegeRoadFacadePreview,
    srcSet: `${technologyDesignCollegeRoadFacadePreview} 960w, ${technologyDesignCollegeRoadFacade} 1600w`,
    alt: "Старооскольский техникум технологий и дизайна: протяженный фасад вдоль проезда",
    caption: "Фасад вдоль проезда",
    width: 1600,
    height: 2133
  },
  {
    src: technologyDesignCollegeWorkshopEntrancePreview,
    srcSet: `${technologyDesignCollegeWorkshopEntrancePreview} 960w, ${technologyDesignCollegeWorkshopEntrance} 1600w`,
    alt: "Старооскольский техникум технологий и дизайна: вход в обновленный корпус мастерских",
    caption: "Корпус мастерских",
    width: 1600,
    height: 1200
  },
  {
    src: technologyDesignCollegeTerritoryPreview,
    srcSet: `${technologyDesignCollegeTerritoryPreview} 960w, ${technologyDesignCollegeTerritory} 1600w`,
    alt: "Старооскольский техникум технологий и дизайна: территория рядом с корпусом после ремонта",
    caption: "Территория объекта",
    width: 1600,
    height: 1200
  },
  {
    src: technologyDesignCollegeMainEntrancePreview,
    srcSet: `${technologyDesignCollegeMainEntrancePreview} 960w, ${technologyDesignCollegeMainEntrance} 1600w`,
    alt: "Старооскольский техникум технологий и дизайна: главный вход в учебный корпус",
    caption: "Главный вход",
    width: 1600,
    height: 2133
  },
  {
    src: technologyDesignCollegeInfoStandPreview,
    srcSet: `${technologyDesignCollegeInfoStandPreview} 960w, ${technologyDesignCollegeInfoStand} 1600w`,
    alt: "Старооскольский техникум технологий и дизайна: информационный стенд проекта капитального ремонта",
    caption: "Информационный стенд",
    width: 1600,
    height: 2133
  }
];

const polytechnicCollegeFacadePreview = new URL("../assets/object-photos/8/IMG_0169-preview.webp", import.meta.url).href;
const polytechnicCollegeFacade = new URL("../assets/object-photos/8/IMG_0169.webp", import.meta.url).href;

const polytechnicCollegeImages: ProjectImage[] = [
  {
    src: polytechnicCollegeFacadePreview,
    srcSet: `${polytechnicCollegeFacadePreview} 960w, ${polytechnicCollegeFacade} 1600w`,
    alt: "Белгородский политехнический колледж: обновленный фасад корпуса после капитального ремонта",
    caption: "Фасад корпуса",
    width: 1600,
    height: 2133
  }
];

const cityHospital1MainFacadePreview = new URL("../assets/object-photos/9/IMG_0286-preview.webp", import.meta.url).href;
const cityHospital1MainFacade = new URL("../assets/object-photos/9/IMG_0286.webp", import.meta.url).href;
const cityHospital1CornerFacadePreview = new URL("../assets/object-photos/9/IMG_0290-preview.webp", import.meta.url).href;
const cityHospital1CornerFacade = new URL("../assets/object-photos/9/IMG_0290.webp", import.meta.url).href;
const cityHospital1FrontTerritoryPreview = new URL("../assets/object-photos/9/IMG_0282-preview.webp", import.meta.url).href;
const cityHospital1FrontTerritory = new URL("../assets/object-photos/9/IMG_0282.webp", import.meta.url).href;
const cityHospital1LongFacadePreview = new URL("../assets/object-photos/9/IMG_0285-preview.webp", import.meta.url).href;
const cityHospital1LongFacade = new URL("../assets/object-photos/9/IMG_0285.webp", import.meta.url).href;
const cityHospital1EntrancePreview = new URL("../assets/object-photos/9/IMG_0288-preview.webp", import.meta.url).href;
const cityHospital1Entrance = new URL("../assets/object-photos/9/IMG_0288.webp", import.meta.url).href;
const cityHospital1PassagePreview = new URL("../assets/object-photos/9/IMG_0291-preview.webp", import.meta.url).href;
const cityHospital1Passage = new URL("../assets/object-photos/9/IMG_0291.webp", import.meta.url).href;

const cityHospital1Images: ProjectImage[] = [
  {
    src: cityHospital1MainFacadePreview,
    srcSet: `${cityHospital1MainFacadePreview} 960w, ${cityHospital1MainFacade} 1600w`,
    alt: "Городская больница № 1 г. Старый Оскол: обновленный фасад главного больничного корпуса",
    caption: "Главный фасад",
    width: 1600,
    height: 2133
  },
  {
    src: cityHospital1CornerFacadePreview,
    srcSet: `${cityHospital1CornerFacadePreview} 960w, ${cityHospital1CornerFacade} 1600w`,
    alt: "Городская больница № 1 г. Старый Оскол: общий вид главного корпуса после капитального ремонта",
    caption: "Общий вид корпуса",
    width: 1600,
    height: 1200
  },
  {
    src: cityHospital1FrontTerritoryPreview,
    srcSet: `${cityHospital1FrontTerritoryPreview} 960w, ${cityHospital1FrontTerritory} 1600w`,
    alt: "Городская больница № 1 г. Старый Оскол: фасад и территория перед главным корпусом",
    caption: "Фасад и территория",
    width: 1600,
    height: 2133
  },
  {
    src: cityHospital1LongFacadePreview,
    srcSet: `${cityHospital1LongFacadePreview} 960w, ${cityHospital1LongFacade} 1600w`,
    alt: "Городская больница № 1 г. Старый Оскол: протяженный фасад главного больничного корпуса",
    caption: "Протяженный фасад",
    width: 1600,
    height: 2133
  },
  {
    src: cityHospital1EntrancePreview,
    srcSet: `${cityHospital1EntrancePreview} 960w, ${cityHospital1Entrance} 1600w`,
    alt: "Городская больница № 1 г. Старый Оскол: входная группа главного корпуса",
    caption: "Входная группа",
    width: 1600,
    height: 2133
  },
  {
    src: cityHospital1PassagePreview,
    srcSet: `${cityHospital1PassagePreview} 960w, ${cityHospital1Passage} 1600w`,
    alt: "Городская больница № 1 г. Старый Оскол: переход между корпусами",
    caption: "Переход между корпусами",
    width: 1600,
    height: 2133
  }
];

const cityHospital2PolyclinicMainPreview = new URL("../assets/object-photos/10/IMG_0307-preview.webp", import.meta.url).href;
const cityHospital2PolyclinicMain = new URL("../assets/object-photos/10/IMG_0307.webp", import.meta.url).href;
const cityHospital2PolyclinicEntranceRampPreview = new URL("../assets/object-photos/10/IMG_0305-preview.webp", import.meta.url).href;
const cityHospital2PolyclinicEntranceRamp = new URL("../assets/object-photos/10/IMG_0305.webp", import.meta.url).href;
const cityHospital2PolyclinicSideFacadePreview = new URL("../assets/object-photos/10/IMG_0308-preview.webp", import.meta.url).href;
const cityHospital2PolyclinicSideFacade = new URL("../assets/object-photos/10/IMG_0308.webp", import.meta.url).href;
const cityHospital2PolyclinicDrivewayPreview = new URL("../assets/object-photos/10/IMG_0309-preview.webp", import.meta.url).href;
const cityHospital2PolyclinicDriveway = new URL("../assets/object-photos/10/IMG_0309.webp", import.meta.url).href;
const cityHospital2PolyclinicYardFacadePreview = new URL("../assets/object-photos/10/IMG_0313-preview.webp", import.meta.url).href;
const cityHospital2PolyclinicYardFacade = new URL("../assets/object-photos/10/IMG_0313.webp", import.meta.url).href;
const cityHospital2PolyclinicParkingSidePreview = new URL("../assets/object-photos/10/IMG_0314-preview.webp", import.meta.url).href;
const cityHospital2PolyclinicParkingSide = new URL("../assets/object-photos/10/IMG_0314.webp", import.meta.url).href;

const cityHospital2PolyclinicImages: ProjectImage[] = [
  {
    src: cityHospital2PolyclinicMainPreview,
    srcSet: `${cityHospital2PolyclinicMainPreview} 960w, ${cityHospital2PolyclinicMain} 1600w`,
    alt: "Поликлиника ОГБУЗ Городская больница №2: главный фасад и входная зона после капитального ремонта",
    caption: "Главный фасад",
    width: 1600,
    height: 2133
  },
  {
    src: cityHospital2PolyclinicEntranceRampPreview,
    srcSet: `${cityHospital2PolyclinicEntranceRampPreview} 960w, ${cityHospital2PolyclinicEntranceRamp} 1600w`,
    alt: "Поликлиника ОГБУЗ Городская больница №2: входная группа и пандус",
    caption: "Входная группа",
    width: 1600,
    height: 2133
  },
  {
    src: cityHospital2PolyclinicSideFacadePreview,
    srcSet: `${cityHospital2PolyclinicSideFacadePreview} 960w, ${cityHospital2PolyclinicSideFacade} 1600w`,
    alt: "Поликлиника ОГБУЗ Городская больница №2: боковой фасад и территория объекта",
    caption: "Боковой фасад",
    width: 1600,
    height: 2133
  },
  {
    src: cityHospital2PolyclinicDrivewayPreview,
    srcSet: `${cityHospital2PolyclinicDrivewayPreview} 960w, ${cityHospital2PolyclinicDriveway} 1600w`,
    alt: "Поликлиника ОГБУЗ Городская больница №2: проезд вдоль обновленного корпуса",
    caption: "Проезд вдоль корпуса",
    width: 1600,
    height: 2133
  },
  {
    src: cityHospital2PolyclinicYardFacadePreview,
    srcSet: `${cityHospital2PolyclinicYardFacadePreview} 960w, ${cityHospital2PolyclinicYardFacade} 1600w`,
    alt: "Поликлиника ОГБУЗ Городская больница №2: фасад корпуса со стороны внутренней территории",
    caption: "Фасад со стороны двора",
    width: 1600,
    height: 2133
  },
  {
    src: cityHospital2PolyclinicParkingSidePreview,
    srcSet: `${cityHospital2PolyclinicParkingSidePreview} 960w, ${cityHospital2PolyclinicParkingSide} 1600w`,
    alt: "Поликлиника ОГБУЗ Городская больница №2: боковая сторона корпуса и парковочная зона",
    caption: "Боковая сторона корпуса",
    width: 1600,
    height: 2133
  }
];

const oncologyDispensaryMainFacadePreview = new URL("../assets/object-photos/11/IMG_0001-preview.webp", import.meta.url).href;
const oncologyDispensaryMainFacade = new URL("../assets/object-photos/11/IMG_0001.webp", import.meta.url).href;
const oncologyDispensarySideBlockPreview = new URL("../assets/object-photos/11/IMG_0163-preview.webp", import.meta.url).href;
const oncologyDispensarySideBlock = new URL("../assets/object-photos/11/IMG_0163.webp", import.meta.url).href;
const oncologyDispensaryDrivewayPreview = new URL("../assets/object-photos/11/IMG_0164-preview.webp", import.meta.url).href;
const oncologyDispensaryDriveway = new URL("../assets/object-photos/11/IMG_0164.webp", import.meta.url).href;
const oncologyDispensaryGreenFacadePreview = new URL("../assets/object-photos/11/IMG_0165-preview.webp", import.meta.url).href;
const oncologyDispensaryGreenFacade = new URL("../assets/object-photos/11/IMG_0165.webp", import.meta.url).href;
const oncologyDispensaryEntranceCanopyPreview = new URL("../assets/object-photos/11/IMG_0166-preview.webp", import.meta.url).href;
const oncologyDispensaryEntranceCanopy = new URL("../assets/object-photos/11/IMG_0166.webp", import.meta.url).href;
const oncologyDispensaryRampPreview = new URL("../assets/object-photos/11/IMG_0167-preview.webp", import.meta.url).href;
const oncologyDispensaryRamp = new URL("../assets/object-photos/11/IMG_0167.webp", import.meta.url).href;
const oncologyDispensaryRestAreaPreview = new URL("../assets/object-photos/11/IMG_0168-preview.webp", import.meta.url).href;
const oncologyDispensaryRestArea = new URL("../assets/object-photos/11/IMG_0168.webp", import.meta.url).href;
const oncologyDispensaryTerritoryPreview = new URL("../assets/object-photos/11/P1012485-preview.webp", import.meta.url).href;
const oncologyDispensaryTerritory = new URL("../assets/object-photos/11/P1012485.webp", import.meta.url).href;

const oncologyDispensaryImages: ProjectImage[] = [
  {
    src: oncologyDispensaryMainFacadePreview,
    srcSet: `${oncologyDispensaryMainFacadePreview} 960w, ${oncologyDispensaryMainFacade} 1600w`,
    alt: "Белгородский онкологический диспансер: главный фасад корпуса после капитального ремонта",
    caption: "Главный фасад",
    width: 1600,
    height: 1200
  },
  {
    src: oncologyDispensarySideBlockPreview,
    srcSet: `${oncologyDispensarySideBlockPreview} 960w, ${oncologyDispensarySideBlock} 1600w`,
    alt: "Белгородский онкологический диспансер: боковой корпус после капитального ремонта",
    caption: "Боковой корпус",
    width: 1600,
    height: 2133
  },
  {
    src: oncologyDispensaryDrivewayPreview,
    srcSet: `${oncologyDispensaryDrivewayPreview} 960w, ${oncologyDispensaryDriveway} 1600w`,
    alt: "Белгородский онкологический диспансер: проезд и обновленный фасад корпуса",
    caption: "Проезд к корпусу",
    width: 1600,
    height: 2133
  },
  {
    src: oncologyDispensaryGreenFacadePreview,
    srcSet: `${oncologyDispensaryGreenFacadePreview} 960w, ${oncologyDispensaryGreenFacade} 1600w`,
    alt: "Белгородский онкологический диспансер: фасад корпуса со стороны пешеходной зоны",
    caption: "Фасад у пешеходной зоны",
    width: 1600,
    height: 2133
  },
  {
    src: oncologyDispensaryEntranceCanopyPreview,
    srcSet: `${oncologyDispensaryEntranceCanopyPreview} 960w, ${oncologyDispensaryEntranceCanopy} 1600w`,
    alt: "Белгородский онкологический диспансер: входная зона с навесом",
    caption: "Входная зона",
    width: 1600,
    height: 2133
  },
  {
    src: oncologyDispensaryRampPreview,
    srcSet: `${oncologyDispensaryRampPreview} 960w, ${oncologyDispensaryRamp} 1600w`,
    alt: "Белгородский онкологический диспансер: пандус и благоустроенная территория",
    caption: "Пандус и территория",
    width: 1600,
    height: 2133
  },
  {
    src: oncologyDispensaryRestAreaPreview,
    srcSet: `${oncologyDispensaryRestAreaPreview} 960w, ${oncologyDispensaryRestArea} 1600w`,
    alt: "Белгородский онкологический диспансер: зона отдыха рядом с обновленным фасадом",
    caption: "Зона отдыха",
    width: 1600,
    height: 2133
  },
  {
    src: oncologyDispensaryTerritoryPreview,
    srcSet: `${oncologyDispensaryTerritoryPreview} 960w, ${oncologyDispensaryTerritory} 1600w`,
    alt: "Белгородский онкологический диспансер: корпус и территория медицинского комплекса",
    caption: "Территория комплекса",
    width: 1600,
    height: 1200
  }
];

const belgikDormitoryMainFacadePreview = new URL("../assets/object-photos/12/IMG_0122-preview.webp", import.meta.url).href;
const belgikDormitoryMainFacade = new URL("../assets/object-photos/12/IMG_0122.webp", import.meta.url).href;
const belgikDormitoryTowerFacadePreview = new URL("../assets/object-photos/12/IMG_0120-preview.webp", import.meta.url).href;
const belgikDormitoryTowerFacade = new URL("../assets/object-photos/12/IMG_0120.webp", import.meta.url).href;
const belgikDormitoryEntrancePreview = new URL("../assets/object-photos/12/IMG_0121-preview.webp", import.meta.url).href;
const belgikDormitoryEntrance = new URL("../assets/object-photos/12/IMG_0121.webp", import.meta.url).href;
const belgikDormitorySideFacadePreview = new URL("../assets/object-photos/12/IMG_0124-preview.webp", import.meta.url).href;
const belgikDormitorySideFacade = new URL("../assets/object-photos/12/IMG_0124.webp", import.meta.url).href;

const belgikDormitoryImages: ProjectImage[] = [
  {
    src: belgikDormitoryMainFacadePreview,
    srcSet: `${belgikDormitoryMainFacadePreview} 960w, ${belgikDormitoryMainFacade} 1600w`,
    alt: "Общежитие БелГИК на 530 мест: главный фасад с центральным остеклением",
    caption: "Главный фасад",
    width: 1600,
    height: 2133
  },
  {
    src: belgikDormitoryTowerFacadePreview,
    srcSet: `${belgikDormitoryTowerFacadePreview} 960w, ${belgikDormitoryTowerFacade} 1600w`,
    alt: "Общежитие БелГИК на 530 мест: общий вид фасада и входной зоны",
    caption: "Фасад и входная зона",
    width: 1600,
    height: 2133
  },
  {
    src: belgikDormitoryEntrancePreview,
    srcSet: `${belgikDormitoryEntrancePreview} 960w, ${belgikDormitoryEntrance} 1600w`,
    alt: "Общежитие БелГИК на 530 мест: входная группа общежития",
    caption: "Входная группа",
    width: 1600,
    height: 2133
  },
  {
    src: belgikDormitorySideFacadePreview,
    srcSet: `${belgikDormitorySideFacadePreview} 960w, ${belgikDormitorySideFacade} 1600w`,
    alt: "Общежитие БелГИК на 530 мест: боковой фасад здания",
    caption: "Боковой фасад",
    width: 1600,
    height: 2133
  }
];

const dioramaMuseumMainEntrancePreview = new URL("../assets/object-photos/13/IMG_0081-preview.webp", import.meta.url).href;
const dioramaMuseumMainEntrance = new URL("../assets/object-photos/13/IMG_0081.webp", import.meta.url).href;
const dioramaMuseumMemorialStarPreview = new URL("../assets/object-photos/13/IMG_0079-preview.webp", import.meta.url).href;
const dioramaMuseumMemorialStar = new URL("../assets/object-photos/13/IMG_0079.webp", import.meta.url).href;
const dioramaMuseumSideEntrancePreview = new URL("../assets/object-photos/13/IMG_0080-preview.webp", import.meta.url).href;
const dioramaMuseumSideEntrance = new URL("../assets/object-photos/13/IMG_0080.webp", import.meta.url).href;
const dioramaMuseumTerritoryPreview = new URL("../assets/object-photos/13/IMG_0082-preview.webp", import.meta.url).href;
const dioramaMuseumTerritory = new URL("../assets/object-photos/13/IMG_0082.webp", import.meta.url).href;

const dioramaMuseumImages: ProjectImage[] = [
  {
    src: dioramaMuseumMainEntrancePreview,
    srcSet: `${dioramaMuseumMainEntrancePreview} 960w, ${dioramaMuseumMainEntrance} 1600w`,
    alt: "Музей-диорама Курская битва. Белгородское направление: главный вход после капитального ремонта",
    caption: "Главный вход",
    width: 1600,
    height: 2133
  },
  {
    src: dioramaMuseumMemorialStarPreview,
    srcSet: `${dioramaMuseumMemorialStarPreview} 960w, ${dioramaMuseumMemorialStar} 1600w`,
    alt: "Музей-диорама Курская битва. Белгородское направление: фасад и мемориальная звезда у входа",
    caption: "Фасад и мемориальная зона",
    width: 1600,
    height: 2133
  },
  {
    src: dioramaMuseumSideEntrancePreview,
    srcSet: `${dioramaMuseumSideEntrancePreview} 960w, ${dioramaMuseumSideEntrance} 1600w`,
    alt: "Музей-диорама Курская битва. Белгородское направление: боковая входная группа",
    caption: "Боковая входная группа",
    width: 1600,
    height: 2133
  },
  {
    src: dioramaMuseumTerritoryPreview,
    srcSet: `${dioramaMuseumTerritoryPreview} 960w, ${dioramaMuseumTerritory} 1600w`,
    alt: "Музей-диорама Курская битва. Белгородское направление: благоустроенная территория и фасад музея",
    caption: "Территория музея",
    width: 1600,
    height: 2133
  }
];

const sputnikDomMainFacadePreview = new URL("../assets/object-photos/14/IMG_0125-preview.webp", import.meta.url).href;
const sputnikDomMainFacade = new URL("../assets/object-photos/14/IMG_0125.webp", import.meta.url).href;
const sputnikDomSideWalkwayPreview = new URL("../assets/object-photos/14/IMG_0126-preview.webp", import.meta.url).href;
const sputnikDomSideWalkway = new URL("../assets/object-photos/14/IMG_0126.webp", import.meta.url).href;
const sputnikDomEntranceGalleryPreview = new URL("../assets/object-photos/14/IMG_0127-preview.webp", import.meta.url).href;
const sputnikDomEntranceGallery = new URL("../assets/object-photos/14/IMG_0127.webp", import.meta.url).href;
const sputnikDomEscalatorHallPreview = new URL("../assets/object-photos/14/IMG_0128-preview.webp", import.meta.url).href;
const sputnikDomEscalatorHall = new URL("../assets/object-photos/14/IMG_0128.webp", import.meta.url).href;
const sputnikDomAtriumPreview = new URL("../assets/object-photos/14/IMG_0129-preview.webp", import.meta.url).href;
const sputnikDomAtrium = new URL("../assets/object-photos/14/IMG_0129.webp", import.meta.url).href;
const sputnikDomRetailGalleryPreview = new URL("../assets/object-photos/14/IMG_0130-preview.webp", import.meta.url).href;
const sputnikDomRetailGallery = new URL("../assets/object-photos/14/IMG_0130.webp", import.meta.url).href;
const sputnikDomInnerPassagePreview = new URL("../assets/object-photos/14/IMG_0131-preview.webp", import.meta.url).href;
const sputnikDomInnerPassage = new URL("../assets/object-photos/14/IMG_0131.webp", import.meta.url).href;
const sputnikDomColorFacadePreview = new URL("../assets/object-photos/14/IMG_0132-preview.webp", import.meta.url).href;
const sputnikDomColorFacade = new URL("../assets/object-photos/14/IMG_0132.webp", import.meta.url).href;
const sputnikDomParkingFacadePreview = new URL("../assets/object-photos/14/IMG_0133-preview.webp", import.meta.url).href;
const sputnikDomParkingFacade = new URL("../assets/object-photos/14/IMG_0133.webp", import.meta.url).href;

const sputnikDomImages: ProjectImage[] = [
  {
    src: sputnikDomMainFacadePreview,
    srcSet: `${sputnikDomMainFacadePreview} 960w, ${sputnikDomMainFacade} 1600w`,
    alt: "Торговый центр Спутник ДОМ: главный цветной фасад и входная зона",
    caption: "Главный фасад",
    width: 1600,
    height: 2133
  },
  {
    src: sputnikDomSideWalkwayPreview,
    srcSet: `${sputnikDomSideWalkwayPreview} 960w, ${sputnikDomSideWalkway} 1600w`,
    alt: "Торговый центр Спутник ДОМ: пешеходная зона вдоль бокового фасада",
    caption: "Боковой фасад",
    width: 1600,
    height: 2133
  },
  {
    src: sputnikDomEntranceGalleryPreview,
    srcSet: `${sputnikDomEntranceGalleryPreview} 960w, ${sputnikDomEntranceGallery} 1600w`,
    alt: "Торговый центр Спутник ДОМ: крытая входная галерея",
    caption: "Входная галерея",
    width: 1600,
    height: 2133
  },
  {
    src: sputnikDomEscalatorHallPreview,
    srcSet: `${sputnikDomEscalatorHallPreview} 960w, ${sputnikDomEscalatorHall} 1600w`,
    alt: "Торговый центр Спутник ДОМ: внутренний холл с эскалаторами",
    caption: "Холл с эскалаторами",
    width: 1600,
    height: 2133
  },
  {
    src: sputnikDomAtriumPreview,
    srcSet: `${sputnikDomAtriumPreview} 960w, ${sputnikDomAtrium} 1600w`,
    alt: "Торговый центр Спутник ДОМ: внутренняя торговая галерея",
    caption: "Торговая галерея",
    width: 1600,
    height: 2133
  },
  {
    src: sputnikDomRetailGalleryPreview,
    srcSet: `${sputnikDomRetailGalleryPreview} 960w, ${sputnikDomRetailGallery} 1600w`,
    alt: "Торговый центр Спутник ДОМ: проход с торговыми павильонами",
    caption: "Торговый проход",
    width: 1600,
    height: 2133
  },
  {
    src: sputnikDomInnerPassagePreview,
    srcSet: `${sputnikDomInnerPassagePreview} 960w, ${sputnikDomInnerPassage} 1600w`,
    alt: "Торговый центр Спутник ДОМ: внутренняя линия торговых помещений",
    caption: "Внутренний проход",
    width: 1600,
    height: 2133
  },
  {
    src: sputnikDomColorFacadePreview,
    srcSet: `${sputnikDomColorFacadePreview} 960w, ${sputnikDomColorFacade} 1600w`,
    alt: "Торговый центр Спутник ДОМ: цветной фасад со стороны проезда",
    caption: "Цветной фасад",
    width: 1600,
    height: 2133
  },
  {
    src: sputnikDomParkingFacadePreview,
    srcSet: `${sputnikDomParkingFacadePreview} 960w, ${sputnikDomParkingFacade} 1600w`,
    alt: "Торговый центр Спутник ДОМ: фасад и парковочная зона",
    caption: "Фасад и парковка",
    width: 1600,
    height: 1200
  }
];

const krasivoSanatoriumFacadePreview = new URL("../assets/object-photos/15/IMG-15001-enhanced-preview.webp", import.meta.url).href;
const krasivoSanatoriumFacade = new URL("../assets/object-photos/15/IMG-15001-enhanced.webp", import.meta.url).href;

const krasivoSanatoriumImages: ProjectImage[] = [
  {
    src: krasivoSanatoriumFacadePreview,
    srcSet: `${krasivoSanatoriumFacadePreview} 960w, ${krasivoSanatoriumFacade} 1449w`,
    alt: "Санаторий Красиво: фасад лечебного корпуса и благоустроенная территория",
    caption: "Фасад лечебного корпуса",
    width: 1449,
    height: 1086
  }
];

const belguDormitory1080MainEntrancePreview = new URL("../assets/object-photos/16/IMG_0156-preview.webp", import.meta.url).href;
const belguDormitory1080MainEntrance = new URL("../assets/object-photos/16/IMG_0156.webp", import.meta.url).href;
const belguDormitory1080FacadePreview = new URL("../assets/object-photos/16/IMG_0153-preview.webp", import.meta.url).href;
const belguDormitory1080Facade = new URL("../assets/object-photos/16/IMG_0153.webp", import.meta.url).href;
const belguDormitory1080EntranceGroupPreview = new URL("../assets/object-photos/16/IMG_0154-preview.webp", import.meta.url).href;
const belguDormitory1080EntranceGroup = new URL("../assets/object-photos/16/IMG_0154.webp", import.meta.url).href;
const belguDormitory1080TerritoryPreview = new URL("../assets/object-photos/16/IMG_0155-preview.webp", import.meta.url).href;
const belguDormitory1080Territory = new URL("../assets/object-photos/16/IMG_0155.webp", import.meta.url).href;
const belguDormitory1080LobbyPreview = new URL("../assets/object-photos/16/IMG_0158-preview.webp", import.meta.url).href;
const belguDormitory1080Lobby = new URL("../assets/object-photos/16/IMG_0158.webp", import.meta.url).href;

const belguDormitory1080Images: ProjectImage[] = [
  {
    src: belguDormitory1080MainEntrancePreview,
    srcSet: `${belguDormitory1080MainEntrancePreview} 960w, ${belguDormitory1080MainEntrance} 1600w`,
    alt: "Студенческое общежитие БелГУ на 1080 мест: главный вход",
    caption: "Главный вход",
    width: 1600,
    height: 2133
  },
  {
    src: belguDormitory1080FacadePreview,
    srcSet: `${belguDormitory1080FacadePreview} 960w, ${belguDormitory1080Facade} 1600w`,
    alt: "Студенческое общежитие БелГУ на 1080 мест: фасад и территория",
    caption: "Фасад и территория",
    width: 1600,
    height: 2133
  },
  {
    src: belguDormitory1080EntranceGroupPreview,
    srcSet: `${belguDormitory1080EntranceGroupPreview} 960w, ${belguDormitory1080EntranceGroup} 1600w`,
    alt: "Студенческое общежитие БелГУ на 1080 мест: входная группа",
    caption: "Входная группа",
    width: 1600,
    height: 2133
  },
  {
    src: belguDormitory1080TerritoryPreview,
    srcSet: `${belguDormitory1080TerritoryPreview} 960w, ${belguDormitory1080Territory} 1600w`,
    alt: "Студенческое общежитие БелГУ на 1080 мест: фасад со стороны территории",
    caption: "Фасад со стороны территории",
    width: 1600,
    height: 2133
  },
  {
    src: belguDormitory1080LobbyPreview,
    srcSet: `${belguDormitory1080LobbyPreview} 960w, ${belguDormitory1080Lobby} 1600w`,
    alt: "Студенческое общежитие БелГУ на 1080 мест: входной холл",
    caption: "Входной холл",
    width: 1600,
    height: 2133
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
    images: school37Images
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
    images: agrotechnicalCollegeImages
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
    images: southWestStadiumImages
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
    images: technologyDesignCollegeImages
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
    images: polytechnicCollegeImages
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
    images: cityHospital1Images
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
    images: cityHospital2PolyclinicImages
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
    images: oncologyDispensaryImages
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
    images: belgikDormitoryImages
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
    images: dioramaMuseumImages
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
    images: sputnikDomImages
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
    images: krasivoSanatoriumImages
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
    images: belguDormitory1080Images
  }
];
