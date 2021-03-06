import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonService {
  constructor(

    @InjectRepository(Person)
    private personRepository: Repository<Person>
  ){}
  async create(createPersonDto: CreatePersonDto) {
    const newPeson: Person = this.personRepository.create(createPersonDto)
    return this.personRepository.save(newPeson);
  }

  async findAll() {
    return await this.personRepository.find();
  }

  async findOne(id: number) {
    return await this.personRepository.findOne(id);
  }

  async update(id: number, updatePersonDto: UpdatePersonDto) {
    return await this.personRepository.update(id, updatePersonDto);
  }

  async remove(id: number) {
    return await this.personRepository.delete(id);
  }
}