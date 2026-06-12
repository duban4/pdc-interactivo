import {getContradosRawPaginados,getContratosFormateadosPaginados} from "../services/secopService.js"

export const getContratos = async(req,res)=>{
  try {
        const page = parseInt(req.query.page, 10) || 1;
        const size = parseInt(req.query.size, 10) || 40; // Forzamos los 40 del requisito

        if(page < 1 ||  size < 1){
            return res.status(400).json({
                status:"error",
                msm:"La pagina y el tamaño deben ser enteros mayores a 0"
            })
        }

        const limit = size;
        const offset = (page - 1) * size;

        const contratos = await getContratosPaginados(limit, offset);

        return res.status(200).json({
            meta: { page, size, count: contratos.length },
            data: contratos
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}