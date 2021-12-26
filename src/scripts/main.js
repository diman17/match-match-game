import '../scss/style.scss';
import { MainController } from './controllers/main-controller';
import { Router } from './router/router';

const router = new Router();

const mainController = new MainController(document.body, router);
mainController.init();
