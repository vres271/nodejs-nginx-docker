import { DataSource } from 'typeorm';
import { Photo } from './photo/photo.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: "postgres",
        host: 'localhost',
        port: 5432,
        username: 'user',
        password: 'password',
        database: 'mydatabase',
        entities: [Photo],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];