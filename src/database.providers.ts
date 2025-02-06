import { DataSource } from 'typeorm';
import { Photo } from './photo/photo.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: "postgres",
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT ? +process.env.DB_PORT : 5432,
        username: process.env.DB_USER || 'user',
        password: process.env.DB_PASSWORD || 'password',
        database: process.env.DB_NAME || 'mydatabase',
        entities: [Photo],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];