import {CategoryEnum} from '../enums/categoryEnum';
import {TechnologiesEnum} from '../enums/technologiesEnum';

export interface ProjectInfoCard {
  topic: string;
  title: string;
  description: string;
  tags: TechnologiesEnum[];
  path: string;
  externalLink: string;
  image: string;
  category: string;
}
