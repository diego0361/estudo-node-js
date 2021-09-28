interface CreateUser {
  name: string
  age: number
  phone: string
  email: string
}

interface UpdateUser {
  name: string
  age: number
  phone: string
  email: string
}

export class ServiceCreateUser {
  private data: UpdateUser[] = []
  private static instance: ServiceCreateUser;

  constructor() {}

  public static getInstance(): ServiceCreateUser {
    if (!ServiceCreateUser.instance) {
      ServiceCreateUser.instance = new ServiceCreateUser();
    }

    return ServiceCreateUser.instance;
  }

  private create(data: CreateUser) {
    this.data.push(data)
  }

  private findValue(nameFind: string) {
    const index = this.data.findIndex(({name}) => name === nameFind)
    return index;
  }

  private updateValue(data: UpdateUser) {
    const index = this.findValue(data.name)
    this.data[index] = data
  }

  private deleteValue(name: string) {
    const index = this.findValue(name)
    this.data.splice(index, 1)
  }

  public execute({name,age,phone,email}:CreateUser) {
    this.create({name,age,phone,email})

    return {name,age,phone,email}
  }

  public list() {
    return this.data
  }

  public update({name,age,phone,email}:UpdateUser) {
    this.updateValue({name,age,phone,email})

    return {name,age,phone,email}
  }

  public show(name: string) {
    return this.findValue(name)
  }

  public delete(name: string) {
    this.deleteValue(name)
    return {}
  }
}