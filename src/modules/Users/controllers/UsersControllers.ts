import { Request, Response } from "express";
import { ServiceCreateUser } from "../services/ServiceCreateUser";

interface Data {
  name: string
  email: string
  age: number
  phone: string
}

export class UsersControllers {
  public index(request: Request, response: Response) {
    const serviceCreateUser = ServiceCreateUser.getInstance()
    const result = serviceCreateUser.list()
    
    response.json(result)
  }

  public create(request: Request, response: Response) {

    const {name, age, phone, email} = request.body

    const serviceCreateUser = ServiceCreateUser.getInstance()
    const result = serviceCreateUser.execute({name, age, phone, email})

    response.json({message: "usuário cadastrado", data: result})
  }

  public update(request: Request, response: Response) {
    const {name, age, phone, email} = request.body

    const serviceCreateUser = ServiceCreateUser.getInstance()
    const result = serviceCreateUser.update(
      { name, age, phone, email}
      )

    response.json({message: "usuário atualizado", data: result})
  }

  public show(request: Request, response: Response) {
    const {name} = request.params

    const serviceCreateUser = ServiceCreateUser.getInstance()
    const result = serviceCreateUser.show(name)

    response.json({message: "usuário cadastrado",  data: result})
  }

  public delete(request: Request, response: Response) {
    const {name} = request.params

    const serviceCreateUser = ServiceCreateUser.getInstance()
    const result = serviceCreateUser.delete(name)

    response.json({message: "usuário deletado", data:result})
  }
}