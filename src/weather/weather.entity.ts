import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {City} from "../city/city.entity";

@Entity()
export class Weather {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column("numeric")
  uv: number;

  @Column("numeric")
  avgtemp_c: number;

  @Column("numeric")
  avgtemp_f: number;

  @Column("numeric")
  avgvis_km: number;

  @Column({ type: "jsonb", nullable: true })
  condition:
      {
    code: number,
    icon: string,
    text: string
  };

  @Column("numeric")
  maxtemp_c: number;

  @Column("numeric")
  maxtemp_f: number;

  @Column("numeric")
  mintemp_c: number;

  @Column("numeric")
  mintemp_f: number;

  @Column("numeric")
  avghumidity: number;

  @Column("numeric")
  maxwind_kph: number;

  @Column("numeric")
  maxwind_mph: number;

  @Column("numeric")
  avgvis_miles: number;

  @Column("numeric")
  totalprecip_in: number;

  @Column("numeric")
  totalprecip_mm: number;

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
