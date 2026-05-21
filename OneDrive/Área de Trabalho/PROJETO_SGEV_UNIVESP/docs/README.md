# Sistema de Gestão de Estoque e Validade (SGEV)

O SGEV é um sistema desenvolvido com foco em medicamentos e insumos hospitalares, tendo como objetivo principal 
a gestão eficiente e a segurança do estoque desses produtos. Este projeto foi criado para garantir que os 
recursos médicos estejam disponíveis quando precisados, ajudando a reduzir o risco de erros na administração de 
medicamentos.

## Metas Técnicas

### Confiabilidade (ISO/IEC 25010)
A confiabilidade do SGEV foi uma prioridade durante o desenvolvimento. O sistema foi projetado para garantir 
que todas as operações, desde a entrada e saída de produtos até a verificação de prazos de validade, sejam 
realizadas com precisão e segurança.

- **Durabilidade**: O sistema é projetado para resistir ao uso frequente e possíveis desafios ambientais.
- **Disponibilidade**: Garantimos que o sistema esteja disponível 24/7, com redundância adequada para minimizar 
a chance de downtime.
- **Foi utilizadas práticas recomendadas de segurança em software** como validação dos dados de entrada e 
controle de acessos restritos.

### Manutenibilidade (ISO/IEC 25010)
O SGEV foi projetado com uma visão em longo prazo, considerando a facilidade de manutenção e escalabilidade. O 
código-fonte é bem estruturado, seguindo padrões de boas práticas de desenvolvimento.

- **Modularização**: O sistema está composto por componentes menores e independentes, facilitando a atualização 
e o troubleshooting.
- **Documentação**: Todas as partes importantes do projeto estão documentadas para que qualquer membro da 
equipe ou terceiros possam entender rapidamente como o sistema funciona.
- **Controle de Versão com Git**: O uso de controle de versão permite rastrear alterações, colaborar em equipe 
e reverter a qualquer momento.

## Tecnologias Utilizadas

### Docker
O SGEV foi containerizado usando Docker para garantir que ele seja replicável e portátil. Isso permite uma 
implantação consistente e rápida em diferentes ambientes de desenvolvimento e produção.

### Node.js
Node.js foi escolhido como plataforma principal para o backend do sistema, aproveitando suas capacidades de 
processamento assíncrono e sua comunicação eficiente entre serviços.

## Controle de Estoque

O controle de estoque é um componente crucial do SGEV. Este sistema inclui funcionalidades específicas para 
lidar com medicamentos e insumos hospitalares, garantindo que todos os produtos estejam sempre disponíveis 
quando necessário. Aqui estão alguns pontos importantes sobre o controle de estoque:

- **Entrada de Produtos**: Funcionalidade para registrar a entrada de novos produtos no estoque.
- **Saída de Produtos**: Sistema de saída que garante que os medicamentos sejam retirados corretamente e com 
segurança.
- **Validação dos Prazos de Validade**: Verificação automática das datas de validade dos produtos para evitar 
uso após o prazo.

## Referências

A implementação do controle de estoque no SGEV foi inspirada nas normas ISO/IEC 25010 e nas referências 
teóricas abaixo:

- **Norma ISO/IEC 25010**: Este padrão estabelece uma metodologia para avaliar a confiabilidade, eficiência e 
usabilidade dos sistemas de informação. Ele define métodos rigorosos para avaliar como esses sistemas atendem 
às necessidades do usuário.

- **Trabalho Acadêmico "Controle de estoque em sistemas de gerenciamento de medicamentos":**
  - Autor: Roseli Maria de Almeida Rocha
  - Orientador: José Carlos dos Santos Baranauskas

Este trabalho aborda os principais aspectos do controle de estoque em contextos médicos, incluindo a 
importância da segurança e eficiência nas operações de armazenamento.

## Próximos Passos

- **Testes de Qualidade**: Realizar testes rigorosos para garantir que todas as funcionalidades estejam 
corretamente implementadas.
- **Implantação em Produção**: Preparar o sistema para a implantação em um ambiente de produção seguro e 
robusto.

## Contribuição

Se você quiser contribuir com este projeto, sinta-se à vontade para abrir issues ou enviar pull requests. Seu 
envolvimento é muito apreciado!

### Como Rodar o Projeto

1. Clonar o repositório
   ```bash
   git clone https://github.com/https://github.com/kiancaraja/SGEV-Sistema-Gestao-Estoque/sgev.git
   ```
2. Navegar até a pasta do projeto
   ```bash
   cd sgev
   ```
3. Criar e iniciar o Docker Compose
   ```bash
   docker-compose up --build
   ```

---

Este README.md foi projetado para fornecer uma visão clara e detalhada sobre as metas técnicas do SGEV, as 
tecnologias utilizadas e como começar com o projeto. Estamos sempre abertos a feedbacks e sugestões adicionais!Documentação do Sistema de Gestão de Estoque.

# SGEV - Suprimentos e Gestão de Enfermagem e Visitas

Este repositório contém a documentação técnica e os códigos-fonte do **SGEV**, um sistema de gestão de estoque e validade desenvolvido para a ILPI (Instituição de Longa Permanência para Idosos) *Arte de Cuidar*. Projeto desenvolvido para o **Projeto Integrador IV da UNIVESP**.

## 📺 Apresentação do Projeto (Vídeo)
Confira a nossa apresentação em vídeo detalhando o funcionamento do sistema, as telas do código e a justificativa técnica:
👉 [**Clique aqui para assistir à Apresentação no YouTube**](https://youtu.be/gbBO_hzzPRw)
---

## 📄 Resumo do Projeto (Parte Teórica)

### 🧩 O Problema
Nas rotinas de assistência de enfermagem, o controle manual de insumos e medicamentos em papel ou planilhas isoladas gera riscos críticos, como o vencimento de medicações de alto custo, falta de alertas para estoques mínimos e desperdício financeiro.

### 💡 A Solução
O SGEV automatiza esse processo, trazendo segurança na dispensação e rastreabilidade total de lotes. O grande diferencial do sistema é a aplicação de inteligência logística:
* **FIFO (PEPS):** Primeiro que entra, primeiro que sai (aplicado a materiais de consumo geral).
* **FEFO (PVPS):** First Expired, First Out / Primeiro que vence, primeiro que sai (regra de ouro aplicada à farmácia clínica).

---

## 🛠️ Stack Tecnológica e Arquitetura

O sistema foi construído visando portabilidade, segurança e robustez para o ambiente de saúde:
* **Backend:** Node.js (Express) para orquestração da API e middlewares de segurança.
* **Infraestrutura:** Docker e Docker Compose, garantindo o isolamento da aplicação e do banco de dados em containers.

### 📂 Arquivos Principais do Core:
* `src/app.js`: Inicialização do servidor e gerenciamento de rotas.
* `src/models/medicin.js`: Lógica de negócio, validações e cálculo dos alertas de vencimento.
* `docker-compose.yml`: Orquestração e deploy automatizado do ambiente.

---

## 👥 Integrantes do Grupo
* Eliene Maria da Silva (Lily)
* Elisa
* Marcela
* Orlando