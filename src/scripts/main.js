import '../scss/style.scss';
import { HeaderController } from './controllers/header-controller';

const headerController = new HeaderController(document.body);
headerController.render();
