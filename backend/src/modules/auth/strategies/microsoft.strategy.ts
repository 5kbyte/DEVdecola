// microsoft.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-microsoft';

@Injectable()
export class MicrosoftStrategy extends PassportStrategy(Strategy, 'microsoft') {
  constructor() {
    super({
      clientID: process.env.MICROSOFT_CLIENT_ID!,
      clientSecret: process.env.MICROSOFT_CLIENT_SECRET!,
      callbackURL: process.env.MICROSOFT_CALLBACK_URL!,
      scope: ['user.read'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: Function) {
    
    const { id, displayName, emails } = profile;
    const user = {
      microsoftId: id,
      name: displayName,
      email: emails[0].value,
      accessToken,
    };
    done(null, user);
  }
}
