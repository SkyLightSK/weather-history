import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {City} from "../city/city.entity";

@Entity()
export class Weather {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column({ type: "jsonb", nullable: true })
  day: any;

  @Column({ type: "jsonb", nullable: true })
  astro: any;

  @Column({ type: "jsonb", nullable: true })
  hour: any;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => City, city => city.weather)
  city: City;

}
