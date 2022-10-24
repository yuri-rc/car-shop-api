interface IService<T> {
  create(obj:unknown):Promise<T>,
  read():Promise<T[]>,
  readOne(_id:string):Promise<T>,
  update(_id:string, obj:unknown):Promise<T>,
  delete(_id:string):Promise<T>,
}

export default IService;
