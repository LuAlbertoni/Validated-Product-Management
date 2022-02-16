const Product = require('../models/productModel')

// Adicionar um produto no banco de dados
async function add(req, res) {
    try {
        let { name, price } = req.body;
        // Se os campos não estiverem vazios
        if (name && price !== undefined) {
            name = name.toLowerCase();

            // Criando o produto no banco de dados
            let product = await Product.create({
                name,
                price
            })

            res.status(201).json(product);
        } else {
            res.status(400).send({ error: 'Preencha todos os campos' });
        }
    } catch (error) {
        res.status(400).send({ error: 'Erro ao cadastrar produto' });
        console.log(error);
    }
}

// Remover produto do banco de dados
async function remove(req, res) {
    try {
        let { id } = req.body;

        // Se os campos não estiverem vazios
        if (id !== undefined) {
            let product = await Product.findById(id);

            if (!product) {
                return res.status(400).send({ error: 'Produto não encontrado' });
            }
            await Product.deleteOne({ _id: id });
            res.status(200).send({ message: 'Produto removido com sucesso' });
        } else {
            res.status(400).send({ error: 'Preencha todos os campos' });

        }
    } catch (error) {
        res.status(400).send({ error: 'Erro ao remover produto' });
        console.log(error);
    }
}

// Exibir a lista de produtos
async function list(req, res) {
    try {
        let products = await Product.find();
        res.status(200).json(products.map(product => ({
            Nome: product.name,
            Preço: product.price,
            ID: product._id
        })));

    } catch (error) {
        res.status(400).send({ error: 'Erro ao listar produtos' });
        console.log(error);
    }
}

module.exports = { add, remove, list }