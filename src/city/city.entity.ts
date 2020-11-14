import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {Weather} from "../weather/weather.entity";

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  region: string;

  @Column()
  country: string;

  @Column()
  lat: string;

  @Column()
  lon: string;

  @Column()
  tz_id: string;

  @Column({default: 0})
  views: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Weather, weather => weather.city)
  weather: Weather[];

}
