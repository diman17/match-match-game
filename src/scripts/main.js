import '../scss/style.scss';
import { MainController } from './controllers/main-controller';
import { generatePlayers } from './mock/players';
import { Model } from './model/model';
import { Router } from './router/router';

const ROOT_CONTAINER = document.body;
const players = generatePlayers();

const model = new Model();
model.setPlayers(players);

const router = new Router(ROOT_CONTAINER, model);

const mainController = new MainController(ROOT_CONTAINER, router, model);
mainController.init();
