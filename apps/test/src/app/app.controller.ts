import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('working')
  workingPuppeteerEndpoint() {
    return this.appService.workingPuppeteerService();
  }

  @Get('not-working')
  notWorkingPuppeteerEndpoint() {
    return this.appService.notWorkingPuppeteerService();
  }
}
