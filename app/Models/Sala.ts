import { DateTime } from 'luxon'
import { BaseModel, column} from '@ioc:Adonis/Lucid/Orm'

export default class Sala extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @column()
  public numero: string

  @column()
  public capacidade: number

  @column()
  public dispo: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}


/* @hasOne(()=> Professor)
  public Professor: HasOne<typeof Professor> 
  
  @belongsTo(() => Professor)
  public sala: BelongsTo<typeof Professor>

  @hasMany(() => Aluno, {
    foreignKey: 'matricula'
    })
  public Alunos: HasMany<typeof aluno>*/
