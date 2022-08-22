import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getBranch(userGitHub) {
    let res;
    try {
      res = await lastValueFrom(
        this.httpService.get(`https://api.github.com/users/${userGitHub}`),
      );
    } catch (error) {
      console.log(error);
    }
    // console.log('res', res.data);
    return res.data;
  }

  async getCommits(userGitHub, repo) {
    const res = await lastValueFrom(
      this.httpService.get(
        `https://api.github.com/repos/${userGitHub}/${repo}/commits`,
      ),
    );
    return res.data;
  }
}
