import express from 'express';
import cookieParser from 'cookie-parser';

import { PORT } from './config/env.js';

import userRouter from './routes/user.router.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js'
import errorMiddleware from './middlewares/error.middleware.js'
import arcjetMiddleware from './middlewares/arcjet.middleware.js'
import workflowRouter from './routes/workflow.routes.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(arcjetMiddleware);

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
app.use('/api/v1/workflows', workflowRouter);

app.use(errorMiddleware);

app.get('/', (req, res) => {
  res.send(`Welcome to the Subscription Tracker API! ${SERVER_URL}`);
});

app.listen(PORT, async () => {
  console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);
  await connectToDatabase();
});

// Por:
async function startServer() {
  try {
    // Conecta ao banco primeiro
    await connectToDatabase();
    console.log("✅ Conectado ao banco de dados com sucesso!");

    // Inicia o servidor após a conexão
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Falha ao conectar ao banco de dados:", error);
    process.exit(1); // Encerra o processo se houver erro
  }
}
startServer();

export default app;
