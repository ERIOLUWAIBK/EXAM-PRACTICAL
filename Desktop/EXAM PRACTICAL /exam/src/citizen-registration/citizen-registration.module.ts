import { Module } from '@nestjs/common';
import { PersonModule } from './person/person.module';
import { CitizenModule } from './citizen/citizen.module';

@Module({
  imports: [PersonModule, CitizenModule]
})
export class CitizenRegistrationModule {}
