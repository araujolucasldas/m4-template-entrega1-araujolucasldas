import { IModelProduct, IProduct, TCreateProduct, TUpdateProduct } from "./interfaces";

class ProductList implements IModelProduct {
    private productList: IProduct[] = []
    id: number = 1

    createProduct(data: TCreateProduct): IProduct {
        const getDate = new Date()

        const newProduct: IProduct = {
            ...data,
            id: this.id,
            createdAt: getDate,
            updatedAt: getDate
        }

        this.productList.push(newProduct)
        this.id++

        return newProduct
    }

    getProducts(): IProduct[] {
        return this.productList
    }

    getOneProduct(id: number): IProduct | undefined {
        const currentProduct = this.productList.find((product) => product.id === id)

        return currentProduct
    }

    updateProduct(id: number, data: TUpdateProduct): IProduct | undefined {
        const currentProduct = this.productList.find((product) => product.id === id)

        if (currentProduct) {
            const index = this.productList.findIndex((product) => product.id === id)

            const getDate = new Date()

            const updatedProduct: IProduct = {
                ...currentProduct,
                ...data,
                updatedAt: getDate
            }

            this.productList.splice(index, 1, updatedProduct)

            return updatedProduct
        } 
    }

    deleteProduct(id: number): object | undefined {
        const currentProduct = this.productList.find((product) => product.id === id)

        const deleteMessage = { message: "Product successfully deleted." }

        if (currentProduct) {
            const index = this.productList.findIndex((product) => product.id === id)

            this.productList.splice(index, 1)

            return deleteMessage
        }

    }
}

export const productList = new ProductList()