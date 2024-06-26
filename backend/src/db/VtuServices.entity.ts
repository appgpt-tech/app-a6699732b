//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('VtuServices')
export class VtuServicesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  serviceName: string;

  @Column('real', { nullable: true })
  cost: number;

  @Column('text', { nullable: true })
  provider: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('integer', { nullable: true })
  transactionsMenu: number;

  @Column('integer', { nullable: true })
  wallet: number;
}
