import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHealth() {
    return {
      message: 'Amanotes API is running',
      status: 'ok',
    };
  }
}
