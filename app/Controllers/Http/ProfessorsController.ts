import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Professor from 'App/Models/Professor'
export default class ProfessorsController {

    public async store({request, response}: HttpContextContract){
        const body = request.body()
        const nome = request.body()
        const email = request.body()
        const registro = request.body()
        const nascimento = request.body()

        const professor = await Professor.create(body)
        response.status(201)

        return{
        Message:'Professor inserido com sucesso',
        data: professor
        }
    }
    public async index() {
        const professores = await Professor.all()
            return {
                data: professores,  
        }
    }
    public async show({params}:HttpContextContract){
    
        const professores = await Professor.findOrFail(params.id)
        await professores.delete() 
        return{
            msg:'Cadastro excluido com sucesso',
            data: professores,
        }
    }
    public async destroy({params}:HttpContextContract){
        const professores = await Professor.findOrFail(params.id)
            await professores.delete() 
                return{
                    msg:'Cadastro excluido com sucesso',
                    data: professores,
                }
    }
    public async update({params, request}:HttpContextContract) {

        const body = request.body()

        const professor = await Professor.findOrFail(params.id)

        professor.nome = body.nome
        professor.email = body.email
        professor.registro = body.registro
        professor.nascimento = body.nascimento

        await professor.save()

        return{
            msg:'Cadastro atualizado com sucesso',
            data: professor,
        }
        
    }
}
