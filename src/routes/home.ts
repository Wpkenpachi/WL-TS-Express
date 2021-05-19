import { Router, Request, Response } from 'express';
import { index } from '../controllers/HomeController';
const route = Router();


route.get('/', index);



export default route;