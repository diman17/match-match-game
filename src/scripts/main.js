import '../scss/style.scss';
import { MainController } from './controllers/main-controller';
import { Router } from './router/router';

const ROOT_CONTAINER = document.body;

const router = new Router(ROOT_CONTAINER);

const mainController = new MainController(ROOT_CONTAINER, router);
mainController.init();
