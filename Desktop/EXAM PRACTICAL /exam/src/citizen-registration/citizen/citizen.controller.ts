import { Controller, Get, Post, Body, Put, Param, Delete, Patch } from '@nestjs/common';
import { CitizenService } from './citizen.service';
import { CreateCitizenDto } from './dto/create-citizen.dto';
import { UpdateCitizenDto } from './dto/update-citizen.dto';

@Controller('citizen')
export class CitizenController {
  constructor(private readonly citizenService: CitizenService) {}

  @Post()
  create(@Body() createCitizenDto: CreateCitizenDto) {
    return this.citizenService.create(createCitizenDto);
  }

  @Get()
  findAll() {
    return this.citizenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.citizenService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCitizenDto: UpdateCitizenDto) {
    return this.citizenService.update(+id, updateCitizenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.citizenService.remove(+id);
  }
  @Patch(':citizenId/person/personId')
  setPersonById(@Param('citizenId') citizenId: string, @Param('personId') personId: string) {
    return this.citizenService.setPersonByID(+citizenId, +personId);
  }

  @Delete(':citizenId/person')
  unsetPersonById(@Param('citizenId') personId: string) {
    return this.citizenService.unsetPersonByID(+personId);
  }
}
