import { Request } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aluno from 'App/Models/Aluno'

export default class AlunosController {
    
    public async store({request, response}: HttpContextContract){
        const body = request.body()
        const nome = request.body()
        const email = request.body()
        const matricula = request.body()
        const nascimento = request.body()

        const aluno = await Aluno.create(body)
        response.status(201)

        return{
            Message:'Aluno inserido com sucesso',
            data: aluno
        }
    }
    public async index() {
        const alunos = await Aluno.all()
            return {
                data: alunos,  
        }
    }
    public async show({params}:HttpContextContract){
        const alunos = await Aluno.findOrFail(params.id)
            return{
                data: alunos,
            }
    }
    public async destroy({params}:HttpContextContract){
        const aluno = await Aluno.findOrFail(params.id)

            await aluno.delete() 

                return{
                    msg:'Cadastro excluido com sucesso',
                    data: aluno,
                }
    }
    public async update({params, request}:HttpContextContract) {

        const body = request.body()

        const aluno = await Aluno.findOrFail(params.id)

        aluno.nome = body.nome
        aluno.email = body.email
        aluno.matricula = body.matricula
        aluno.nascimento = body.nascimento

        await aluno.save()

        return{
            msg:'Cadastro atualizado com sucesso',
            data: aluno,
        }
        
    }
}