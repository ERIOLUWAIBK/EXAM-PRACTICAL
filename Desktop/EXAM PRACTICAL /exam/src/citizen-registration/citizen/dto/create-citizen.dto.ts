import { CreatePersonDto } from "src/citizen-registration/person/dto/create-person.dto";
import { ModeOfEntry } from "src/citizen-registration/citizenRegistration.types";

export class CreateCitizenDto {

    readonly nin: number;
    readonly bvn: number;
    readonly modeOfEntry: ModeOfEntry;
    readonly mobileNumber: number;
    readonly person: CreatePersonDto;
  
}