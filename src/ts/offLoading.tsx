export async function offOnIntens(item: string, status: string, allOk: any) {
    await allOk
        const loadingTable = document.getElementById(item)
        if (loadingTable && allOk) {
            loadingTable.style.display = status
            
        }
    
}