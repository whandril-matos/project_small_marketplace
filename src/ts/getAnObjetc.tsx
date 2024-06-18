import { cardProduct } from "./App"

export async function getAnObjetc(idObject: number, keyObjectQuestions: string, allObject: any) {
    let tost = await allObject;
    const searchProductId = tost.products.find((product: { id: any; }) => product.id === idObject);
    
    if (!searchProductId) {
        throw new Error("Produto não encontrado");
    }

    if (keyObjectQuestions === "y") {
        Object.keys(searchProductId).forEach(function (item) {
            console.log(item + ' - ' + searchProductId[item]);
        });
    } 
    if (keyObjectQuestions === "n") {
        let { price, brand, description, photo, name } = searchProductId;
        return cardProduct(price, brand, name, description, photo);
    }
}