const mongoose = require('mongoose');

// Definindo o schema para a coleção 'medicines'
const medicineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
        minlength: 3
    },
    dosage: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
        minlength: 3
    },
    batchNumber: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    expirationDate: {
        type: Date,
        required: true,
        validate: (value) => value >= new Date() // A data de validade 
deve ser no futuro
    }
}, {
    timestamps: true // Adiciona campos createdAt e updatedAt 
automaticamente
});

// Criando o modelo 'Medicine' usando o schema definido acima
const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;
```

### Explicação do Schema

- **name**: Nome do medicamento. É obrigatório, com um comprimento 
máximo de 100 caracteres e mínimo de 3.
- **dosage**: Dosagem do medicamento. É obrigatório, com um 
comprimento máximo de 50 caracteres e mínimo de 3.
- **batchNumber**: Número do lote do medicamento. É obrigatório e 
único (não pode haver dois medicamentos com o mesmo número de lote).
- **quantity**: Quantidade disponível do medicamento. É obrigatório e 
deve ser um número inteiro maior ou igual a 1.
- **expirationDate**: Data de validade do medicamento. É obrigatório e 
deve ser uma data no futuro.

### Campos Adicionais

- **timestamps**: Adiciona automaticamente campos `createdAt` e 
`updatedAt` à coleção, indicando respectivamente a data e hora da 
criação e última atualização dos registros.

### Importando o Modelo

No seu arquivo de roteamento ou onde você precisar usar o modelo 
`Medicine`, você pode importá-lo assim:

```javascript
const Medicine = require('../models/Medicine');