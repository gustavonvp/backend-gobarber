import { Router } from 'express';

import multer from 'multer';

import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';

import SessionController from './app/controllers/SessionController';

import FileController from './app/controllers/FileController';

import ProviderController from './app/controllers/ProviderController';

import authMiddleware from './app/middlewares/auth';

import AppointmentController from './app/controllers/AppointmentController';

import ScheduleController from './app/controllers/ScheduleController';

import NotificationController from './app/controllers/NotificationController';

import AvaliableController from './app/controllers/AvailableController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/providers', ProviderController.index);
routes.get('/providers/:providerId/available', AvaliableController.index);

routes.post('/appointments', AppointmentController.store);
routes.get('/appointments', AppointmentController.index);
routes.delete('/appointments/:id', AppointmentController.delete);

routes.get('/schedule', ScheduleController.index);

routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

export default routes;