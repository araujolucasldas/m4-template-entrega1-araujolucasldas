export interface IProduct{
    id: number
    name: string
    price: number
    createdAt: Date
    updatedAt: Date
}


export type TCreateProduct = Pick<IProduct, "name" | "price">

export type TUpdateProduct = Partial<TCreateProduct>
//export type TUpdateProduct = Partial<Pick<IProduct, "name"| "price">>

export interface IModelProduct{
    createProduct(data: TCreateProduct): IProduct
    getProducts(): IProduct[]
    getOneProduct(id: number): IProduct | undefined
    updateProduct(id: number, data: TUpdateProduct): IProduct | undefined
    deleteProduct(id: number): object | undefined
}
