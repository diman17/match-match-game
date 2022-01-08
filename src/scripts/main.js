import '../scss/style.scss';
import { PlayersAPI } from './api/players-api';
import { MainController } from './controllers/main-controller';
import { Model } from './model/model';
import { Router } from './router/router';

const ROOT_CONTAINER = document.body;

const playersAPI = new PlayersAPI();
const model = new Model();

const router = new Router(ROOT_CONTAINER, model, playersAPI);

const mainController = new MainController(ROOT_CONTAINER, router, model, playersAPI);
mainController.init();
