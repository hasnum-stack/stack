import { Controller, Get, Post, HttpCode, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/goToSchool')
  goToSchool() {
    return { a: 1237890 };
  }

  @Post('/submit')
  @HttpCode(200)
  goSubmit(@Body() data) {
    console.log('🚀 ~ AppController ~ goSubmit ~ data', data);
    return { data };
  }
}
