import axios from 'axios'

const api = "https://www.datos.gov.co/resource/p6dx-8zbt.json"

const mapContratosOptimizados =(contratos)=>{
    return contratos.map(item=>({
        
    }))
}


//metodo base con todo
export const  getContradosRawPaginados = async (limit,offset)=>{
    try {
        const url = `${api}?$limit=${limit}&$offset=${offset}`
        const res = await axios.get(url)

        return res.data
    } catch (error) {
        console.error(error)
        throw new Error("error al recuperar la informacion")
    }
}

//metodo formateado y paginado
export const getContratosFormateadosPaginados = async(limit,offset)=>{
    try {
        const url = `${api}?$limit=${limit}&$offset=${offset}`
        const res = await axios.get(url)

        return mapContratosOptimizados(res.data)
    } catch (error) {
        console.error(`[SecopService - Formatted Error]: ${error.message}`);
        throw new Error('Error al recuperar los datos formateados de SECOP II');
    }
}














