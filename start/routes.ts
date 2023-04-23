/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import AlunosController from 'App/Controllers/Http/AlunosController'
import SalasController from 'App/Controllers/Http/SalasController'

Route.group(() => {
  Route.get('/', async ()=>{
    return {Hello: 'World'}
  })

  Route.resource('/alunos', 'AlunosController').apiOnly()
  Route.resource('/professores', 'ProfessorsController').apiOnly()
  Route.resource('/salas', 'SalasController').apiOnly()
  Route.post('/salas/:matricula/alunos','SalasController.store')
}).prefix('/api')
