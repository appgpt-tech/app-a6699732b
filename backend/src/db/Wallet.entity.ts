//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Wallet')
export class WalletEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  walletID: string;

  @Column('integer', { nullable: true })
  customerID: number;

  @Column('real', { nullable: true })
  balance: number;

  @Column('integer', { nullable: true })
  transactionHistory: number;
}