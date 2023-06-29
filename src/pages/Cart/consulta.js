import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../components/config";

const consulta = async () => {
    try{
        const colecao1Docs = await getDocs(collection(db, 'produto'));
        const dadosColecao1 = colecao1Docs.docs.map((doc) => doc.data());

        const dados = {
            produto: dadosColecao1
        }

        console.log(dados);

    }catch(error){
        console.error('Erro ao consultar coleção: ', error)
    }
}

const consultaEs = async () => {
    try {
        const tabela = collection(db, 'carrinho');
        const q = query(tabela, where('usuario_id', '==', '0qRBEeuugD5w2rKRhU8T'))
        const snapShot = await getDocs(q);

        const produtos = []
        snapShot.forEach((doc) => {
            produtos.push(doc.data().produto_id)
        })

        const tabelaPro = collection(db, 'produto');
        const snapShotPro = await getDocs(tabelaPro);
        const produto = []
        console.log(snapShotPro);
        produtos.forEach((doc) => {
            // console.log(doc);
            snapShotPro.forEach((docPro) => {
                if(doc === docPro.id){
                    produto.push({...docPro.data(), id: docPro.id})
                }
            })
        })

        return produto
    } catch (error) {
        console.error('Erro ao verificar', error)
    }
}

export default consultaEs;