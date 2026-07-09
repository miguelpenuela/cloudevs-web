import {ProjectInfoCard} from '../models/IProjectInfoCard';
import {TechnologiesEnum} from '../enums/technologiesEnum';
import {CategoryEnum} from '../enums/categoryEnum';

export const projectsList: ProjectInfoCard[] = [
  {
    topic: 'Desarrollo web',
    title: 'Fasomes - Mensajería',
    description: 'Plataforma completa de gestión de envíos de mensajería a través de diferentes franquicias como Interrapidisimo, Coodinadora y/o Envía.',
    tags: [
      TechnologiesEnum.ANGULAR,
      TechnologiesEnum.LARAVEL,
      TechnologiesEnum.MYSQL
    ],
    path: "",
    externalLink: "",
    image: "dummy.png",
    category: CategoryEnum.CustomSoftware.toString()
  },
  {
    topic: 'Software as a Service',
    title: 'Factory',
    description: `Plataforma para la gestión de su negocio, realice la configuración para la producción de sus productos,
      formulaciones e inventarios.`,
    tags: [
      TechnologiesEnum.ANGULAR,
      TechnologiesEnum.JAVA,
      TechnologiesEnum.SPRING_BOOT,
      TechnologiesEnum.POSTGRESQL,
    ],
    path: "",
    externalLink: "",
    image: "dummy.png",
    category: CategoryEnum.SoftwareAsAService.toString()
  }
];
