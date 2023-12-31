import { connect, connection } from 'mongoose';
import { config } from './config';

const log = config.createLogger('SetupDatabase');

export default async () => {
  async function start() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await connect(config.DB_URL!);
      return log.info('Connected successfully to DB');
    } catch (err) {
      log.error(err);
      return process.exit(1);
    }
  }
  await start();
  connection.on('disconnected', connect);
};
