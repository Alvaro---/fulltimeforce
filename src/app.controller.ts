import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/user')
  getRama(@Query() query: { githubUser: string }) {
    return this.appService.getBranch(query.githubUser);
  }

  @Get('/commits')
  getCommit(@Query() query: { githubUser: string; repo: string }) {
    return this.appService.getCommits(query.githubUser, query.repo);
  }
}
