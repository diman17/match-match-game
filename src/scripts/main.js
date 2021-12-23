import '../scss/style.scss';
import { HeaderController } from './controllers/header-controller';
import { Router } from './router/router';

const router = new Router();

const headerController = new HeaderController(document.body, router);
headerController.init();
