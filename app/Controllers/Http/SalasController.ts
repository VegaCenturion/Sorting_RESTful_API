import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sala from 'App/Models/Sala'

    export default class SalasController {
        public async store({request, response}: HttpContextContract){
            const body = request.body()
            const numero = request.body()
            const capacidade = request.body()
            const dispo = request.body()
    
            const salas = await Sala.create(body)
            response.status(201)
    
            return{
            Message:'Sala cadastrada com sucesso',
            data: Sala
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
    
            const sala = await Sala.findOrFail(params.id)
    
            sala.numero = body.numero
            sala.capacidade = body.capacidade
            sala.dispo = body.dispo
    
            await sala.save()
    
            return{
                msg:'Cadastro atualizado com sucesso',
                data: sala,
            }
            
        }
/*
        public async storeAlunos({params, request, response}:HttpContextContract){
            const dispo = params.dispo
            const capacidade = params.capacidade
            const body = request.body()
           const matricula = params.matricula
            const nome = params.nome
            const email = params.email
            const nascimento = params.nascimento
            
            //não sei se precisa desses campos ou se precisa só do body
            ajeitar o problema da sala não ser direcionada ao criador
           

            const aluno = await Aluno.create(body)
            response.status(201)

            const matriculaAluno = params.matricula
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
        } */
}
