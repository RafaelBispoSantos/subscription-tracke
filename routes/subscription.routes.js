import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";
const subscriptionRouter = Router();

subscriptionRouter.get('/',(req,res)=>{ res.send( {title:'Get all Subscription'})});
subscriptionRouter.get('/:id',(req,res)=>{ res.send( {title:'Get  Subscription details'})});
subscriptionRouter.post('/',authorize,createSubscription);
subscriptionRouter.put('/:id',(req,res)=>{ res.send( {title:'UPDATE  Subscription'})});
subscriptionRouter.delete('/:id',(req,res)=>{ res.send( {title:'DELETE Subscription'})});
subscriptionRouter.get('/user/:id',authorize, getUserSubscriptions);
subscriptionRouter.put('/:id/cancel',(req,res)=>{ res.send( {title:'CANCEL Subscription'})});
subscriptionRouter.get('/upcoming-renewals',(req,res)=>{ res.send( {title:'Get upcoming Subscription'})});

export default subscriptionRouter;
