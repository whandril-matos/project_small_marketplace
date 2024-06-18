export async function callApiProduct(rows: number, id: number) {
    let rowsS = filter(rows);
    let idS: string = id.toString(); 
    let url: string = `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=${idS}&rows=${rowsS}&sortBy=id&orderBy=DESC`
    
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Erro ao buscar os dados');
        }
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error('Erro:', error);
        return null; // Retornando null em caso de erro
    }
}

export function filter(rows: number): string {
    if (rows > 50){
        rows = 50
    }
    if (rows < 1){
        rows = 1
    }
    console.log(rows)
    return rows.toString()
}