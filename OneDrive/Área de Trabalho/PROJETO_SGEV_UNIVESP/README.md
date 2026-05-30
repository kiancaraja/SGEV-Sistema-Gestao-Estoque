# SGEV - Sistema de Gestão de Estoque e Validade
> **Projeto Integrador XV - UNIVESP** > *Segurança farmacêutica e eficiência operacional para a ILPI Arte de Cuidar.*

---

## 👥 Integrantes
* Eliene Maria da Silva
* Elisa
* Marcela
* Orlando Guilherme

---

## 📌 Sobre o Projeto
O **SGEV** (Sistema de Gestão de Estoque e Validade) foi desenvolvido para solucionar os gargalos críticos do controle manual (listas em papel e anotações informais) na Instituição de Longa Permanência para Idosos (ILPI) "Arte de Cuidar". O sistema automatiza o gerenciamento de insumos e medicamentos de alto custo, mitigando riscos de desperdício e falta de alertas para estoques mínimos.

### 🛡️ Regra de Ouro: Lógica Inteligente FIFO e FEFO
Para garantir a máxima segurança farmacêutica, o software prioriza a dispensação inteligente:
* **FEFO (First Expired, First Out / PVPS):** O medicamento que vence primeiro é o primeiro que sai. Aplicado estritamente na farmácia clínica.
* **FIFO (First In, First Out / PEPS):** O primeiro material que entra é o primeiro que sai. Aplicado a materiais de consumo geral e escritório.

---

## 🚀 Demonstração do Software e Testes Práticos
*Nota para a banca: Abaixo constam as cookies/evidências do ambiente de desenvolvimento web em plena execução, validando a solução tecnológica proposta.*

### 1. Interface Web do Usuário (Painel de Controle)
Exibição do ecossistema rodando no navegador, com listagem de fármacos, organização por lotes e aplicação automática da prioridade FEFO:
![Painel do Sistema Web - SGEV](https://raw.githubusercontent.com/Vaic/PROJETO_SGEV_UNIVESP/main/1.jpeg)

### 2. Alertas de Validade e Estoque Mínimo
Sistema de monitoramento inteligente indicando visualmente os medicamentos próximos ao vencimento:
![Alertas de Validade em Execução](https://raw.githubusercontent.com/Vaic/PROJETO_SGEV_UNIVESP/main/2.jpeg)

---

## 🛠️ Arquitetura e Ecossistema Tecnológico
A solução foi construída com foco em portabilidade, robustez e rapidez de processamento:

* **Backend:** Node.js (Servidor Express, gerenciamento de rotas e middlewares de segurança).
* **Core Loop (`src/app.js`):** Ponto de entrada que orquestra a aplicação e centraliza as configurações de ambiente.
* **Módulo de Negócio (`src/models/medicin.js`):** Inteligência responsável pela validação de campos obrigatórios, cálculo de alertas e ordenação de lotes.
* **Infraestrutura:** Docker Containers (Garantia de isolamento, segurança de dados sensíveis e eliminação de conflitos locais).

### Como rodar a aplicação localmente via terminal (Deploy Automatizado)
Certifique-se de ter o Docker instalado e execute o comando abaixo na raiz do projeto para subir o banco de dados e a aplicação de forma isolada:

```bash
docker-compose up --build

---

## 📄 Documentação Científica
O referencial teórico completo, a justificativa e os critérios normativos (ANVISA RDC nº 502/2021) que embasaram o desenvolvimento deste ecossistema estão registrados no documento oficial do grupo.