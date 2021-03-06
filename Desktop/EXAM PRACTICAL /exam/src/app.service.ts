import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello3(): string {
    return 'Hello World!';
  }

  getHello2(): {} {
    return {message: 'GUY no dey touch the GOODS!', title: 'My GUY'};
  }
  getHome(): {} {
    return {title: 'Home Page'};
  }
  getAboutUs(): {} {
    return {title: 'About Us Page'};
  }
}

  
