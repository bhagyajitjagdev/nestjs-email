import { Body, Controller, Post } from '@nestjs/common';
import { TypedEventEmitter } from '@/event-emitter/typed-event-emitter.class';

@Controller('user')
export class UserController {
  constructor(private readonly eventEmitter: TypedEventEmitter) {}

  @Post('sign-up')
  async create(@Body() body) {
    this.eventEmitter.emit('user.welcome', {
      name: 'Bhagyajit Jagdev',
      email: body.email,
    });

    this.eventEmitter.emit('user.verify-email', {
      name: 'Bhagyajit Jagdev',
      email: body.email,
      otp: '****', // generate a random OTP
    });

    // Add your user to the database
  }
}
