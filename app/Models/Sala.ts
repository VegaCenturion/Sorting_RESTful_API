import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, HasOne, belongsTo, column, hasMany, hasOne } from '@ioc:Adonis/Lucid/Orm'
import aluno from './Aluno'
import Aluno from './Aluno'
import Professor from './Professor'
export default class Sala extends BaseModel {
  
  
  @hasOne(()=> Professor)
  public Professor: HasOne<typeof Professor> 
  
  @belongsTo(() => Professor)
  public sala: BelongsTo<typeof Professor>

  @hasMany(() => Aluno)
  public Alunos: HasMany<typeof aluno>
  
  @column({ isPrimary: true })
  public salaId: number

  @column()
  public numero: string

  @column()
  public capacidade: number

  @column()
  public dispo: number

  @column()
  public criador: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
