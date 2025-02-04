import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PhotoService } from './photo/photo.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly photoService: PhotoService,
  ) {}

  @Get()
  async getHello(): Promise<string> {

    const savedPhotos = await this.photoService.findAll();
    const addedPhotos = await this.photoService.add();

    return `
    <p>----</p>
    <p>[${this.appService.getHello()}]</p>
    <p>----</p>
    <p>addedPhotos: [${JSON.stringify(addedPhotos)}]</p>
    <p>----</p>
    <p>savedPhotos: <table><tr><td>${savedPhotos.map(x => Object.values(x).join('</td><td>')).join('</td></tr><tr><td>')}</table></p>
    `;
  }
}
