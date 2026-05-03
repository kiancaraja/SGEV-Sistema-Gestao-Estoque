const mongoose = require('mongoose');
require('../configs/db'); // Importa a 
conexão com o banco de dados
const Medicine = require('./Medicine'); // 
Importa o modelo Medicine

// Lista de medicamentos a serem inseridos no 
banco de dados
const medicinesData = [
    {
        name: 'Amitriptilina',
        dosage: '25mg',
        batchNumber: 'A25-2026',
        quantity: 30,
        expirationDate: new Date(Date.now() + 
14 * 24 * 60 * 60 * 1000) // Vencimento em 20 
dias
    },
    {
        name: 'Sinvastatina',
        dosage: '20mg',
        batchNumber: 'S20-EXP',
        quantity: 50,
        expirationDate: new 
Date('2027-12-31')
    },
    {
        name: 'Fluoxetina',
        dosage: '20mg',
        batchNumber: 'F20-MN',
        quantity: 40,
        expirationDate: new 
Date('2028-12-31')
    },
    {
        name: 'Omeprazol',
        dosage: '20mg',
        batchNumber: 'OM20-V',
        quantity: 75,
        expirationDate: new 
Date('2029-12-31')
    },
    {
        name: 'Cálcio',
        dosage: '500mg',
        batchNumber: 'C500-MA',
        quantity: 60,
        expirationDate: new 
Date('2027-12-31')
    },
    {
        name: 'Endrostan',
        dosage: '70mg',
        batchNumber: 'EN70-J',
        quantity: 55,
        expirationDate: new 
Date('2028-12-31')
    },
    {
        name: 'Vitamina D',
        dosage: '7000UI',
        batchNumber: 'VD7000',
        quantity: 90,
        expirationDate: new 
Date('2026-12-31')
    },
    {
        name: 'Quetiapina',
        dosage: '25mg',
        batchNumber: 'Q25-NT',
        quantity: 80,
        expirationDate: new 
Date('2027-12-31')
    },
    {
        name: 'Memantina',
        dosage: '10mg',
        batchNumber: 'M10-MN',
        quantity: 45,
        expirationDate: new 
Date('2028-12-31')
    },
    {
        name: 'Donepezila',
        dosage: '10mg',
        batchNumber: 'D10-D',
        quantity: 65,
        expirationDate: new 
Date('2027-12-31')
    },
    {
        name: 'Sertralina',
        dosage: '50mg',
        batchNumber: 'S50-M',
        quantity: 35,
        expirationDate: new 
Date('2026-12-31')
    }
];

// Função para inserir medicamentos no banco 
de dados
const seedMedicines = async () => {
    try {
        await Medicine.deleteMany(); // Limpa 
a coleção antes de inserir novos dados
        await 
Medicine.insertMany(medicinesData);
        console.log('Medicamentos inseridos 
com sucesso!');
    } catch (error) {
        console.error('Erro ao inserir 
medicamentos:', error.message);
        process.exit(1);
    }
};

// Executa a função para inserir os 
medicamentos
seedMedicines();
```

### Explicação do Código

- **Importações**:
  - `mongoose`: Importa a biblioteca 
Mongoose.
  - `connectDB` da pasta 
`../configs/db`: Importa a conexão com o 
banco de dados.
  - `Medicine` do arquivo atual 
(`./Medicine`): Importa o modelo `Medicine`.

- **Lista de Medicamentos**:
  - `medicinesData`: Contém um array de 
objetos, cada representando um medicamento. 
Cada objeto contém campos como `name`, 
`dosage`, `batchNumber`, `quantity`, e 
`expirationDate`.
    - A validade para a próxima vencimento em 
20 dias é calculada usando `new 
Date(Date.now() + 14 * 24 * 60 * 60 * 1000)`.

- **Função `seedMedicines`**:
  - Limpa a coleção de medicamentos 
(`Medicine.deleteMany()`) antes de inserir 
novos dados para evitar duplicação.
  - Insere os medicamentos na coleção usando 
`Medicine.insertMany(medicinesData)`.
  - Trata erros utilizando um bloco 
`try/catch` e encerra o processo se houver 
algum erro.

- **Execução**:
  - A função `seedMedicines()` é chamada para 
executar a inserção dos medicamentos no banco 
de dados.

### Como Executar

Para executar este arquivo, você pode usar um 
comando como:

```bash
node src/models/seed.js
```

Isso irá conectar ao banco de dados e inserir 
os três medicamentos na coleção `medicines`.