import app from './app';
import config from './config';

app.listen(config.devPort, () => console.log(`Servidor escutando na porta ${config.devPort}`));