import { ModeOfEntry } from "src/citizen-registration/citizenRegistration.types";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "src/citizen-registration/person/entities/person.entity";

@Entity()
export class Citizen {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    nin: number;

    @Column({type: 'enum', enum: ModeOfEntry, default: ModeOfEntry.UTME})
    modeOfEntry: ModeOfEntry;

    @Column()
    bvn: number;

    @Column()
    mobileNumber: number;

    @JoinColumn()
    @OneToOne(type => Person, person => person.citizen, {cascade:true})
    person: Person;
}
