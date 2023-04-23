import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sala from 'App/Models/Sala'
import aluno from 'app/Models/Aluno'
import Aluno from 'app/Models/Aluno'

    export default class SalasController {
        public async store({request, response}: HttpContextContract){
            const body = request.body()
            const numero = request.body()
            const capacidade = request.body()
            const dispo = request.body()
            const criador = request.body()
    
            const sala = await Sala.create(body)
            response.status(201)
    
            return{
            Message:'Sala inserido com sucesso',
            data: sala
            }
        }

        public async index() {
            const salas = await Sala.all()
                return {
                    data: salas,  
            }
        }
        public async show({params}:HttpContextContract){
            const salas = await Sala.findOrFail(params.id)
                return{
                    data: salas,
                }
        }
        public async destroy({params}:HttpContextContract){
            const salas = await Sala.findOrFail(params.id)
                await salas.delete() 
                    return{
                        msg:'Cadastro excluido com sucesso',
                        data: salas,
                    }
        }
        public async update({params, request}:HttpContextContract) {

            const body = request.body()
    
            const salas = await Sala.findOrFail(params.id)
    
            salas.numero = body.nome
            salas.capacidade = body.capacidade
            salas.dispo = body.dispo
            salas.criador = body.criador
            
            await salas.save()
    
            return{
                msg:'Cadastro atualizado com sucesso',
                data: salas,
            }
            
        }
        public async storeAlunos({params, request, response}:HttpContextContract){
            const dispo = request.body()
            const capacidade = request.body()
            const body = request.body()
            const nome = request.body()
            const email = request.body()
            const matricula = request.body()
            const nascimento = request.body()

            const aluno = await Aluno.create(body)
            response.status(201)

            const matriculaAluno  = params.matricula
            await matriculaAluno.findByOrFail(matricula)
            if (matriculaAluno != matricula){
                if(dispo >= capacidade)
                    return{
                        Message:'Aluno alocado com sucesso',
                        data: aluno
                    }
            } else{
                return {
                    Message: 'Aluno já esta na sala'
                }
            }
        }
}
