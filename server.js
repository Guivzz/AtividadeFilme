import express from "express"
import cors from "cors"

import database from "./firebase-db.js"
import { ref, get, set } from "firebase/database"

// iniciando o express
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota raiz direciona para a pasta front
app.use("/", express.static("./front"))


app.get('/filmes', function (req, res) {
    // Pega uma referência para o caminho /bandas
    let filmesRef = ref(database, "/filmes")
    get(filmesRef).then((snap) => {
        let listaFilmes = snap.val()
        console.log("listaFilmes", listaFilmes);
        return res.status(200).json(listaFilmes)
    })
})

app.post('/filmes', function (req, res) {
    console.log("recebi requisição POST com body: ", req.body);
    //pega os dados enviados na requisição
    let dados = req.body
    let id = dados.id
    // Pega uma referência para o caminho /bandas/<ID>
    let novoFilmeRef = ref(database, "/filmes/" + id)
    // Adiciona dados no firebase no caminho /bandas/<ID>
    set(novoFilmeRef, dados).then(() => {
        console.log("Adicionado")
        return res.status(200).json(dados)
    })
})

app.put('/filmes/:id', function (req, res) {
    console.log("recebi requisição PUT com body: ", req.body);
    //pega os dados enviados na requisição
    let dados = req.body
    let id = req.params.id
    // Pega uma referência para o caminho /bandas/<ID>
    let novaFilmeRef = ref(database, "/filmes/" + id)
    // Adiciona dados no firebase no caminho /bandas/<ID>
    set(novaFilmeRef, dados).then(() => {
        console.log("Adicionado")
        return res.status(200).json(dados)
    })
})

app.delete('/filmes/:id', function (req, res) {
    console.log("recebi requisição POST com body: ", req.body);
    //pega os dados enviados na requisição
    let dados = req.body
    let id = req.params.id
    // Pega uma referência para o caminho /bandas/<ID>
    let novaFilmeRef = ref(database, "/filmes/" + id)
    // Remove /bandas/<ID>
    set(novaFilmeRef, null).then(() => {
        console.log("Excluido")
        return res.status(200).json(dados)
    })
})

app.listen(3000, function () {
    console.log("Servidor rodando na porta 3000 ...");
})