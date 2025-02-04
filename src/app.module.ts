import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotoService } from './photo/photo.service';
import { DatabaseModule } from './database.module';
import { PhotoModule } from './photo/photo.module';
import { photoProviders } from './photo/photo.providers';

@Module({
  imports: [DatabaseModule, PhotoModule],
  controllers: [AppController],
  providers: [AppService, PhotoService, ...photoProviders],
})
export class AppModule {}
