# Documentação → Conversor de Moedas Online

# Análise de Requisitos

## Requisitos Funcionais

### 1. Gestão de Moedas

- **RF001 - Seleção de Moeda de Entrada:** O sistema deve permitir ao usuário selecionar a **nacionalidade da moeda de entrada**.
- **RF002 - Seleção de Moeda de Saída:** O sistema deve permitir ao usuário selecionar a **nacionalidade da moeda de saída**.

### 2. Funcionalidade de Inversão de Valores

- **RF003 - Inversão de Valores:** O sistema deve disponibilizar um botão que permita inverter as posições dos valores de entrada e saída. Ao acionar este botão, o **valor de entrada (Valor 1)** e o **valor de saída (Valor 2)** devem trocar de posição.

### 3. Funcionalidade de Conversão de Valores

- **RF004 - Conversão de Moeda:** O sistema deve disponibilizar um botão para realizar a conversão de valores. Ao acionar este botão, o **valor de entrada (Valor 1)** será convertido para a **moeda de saída selecionada**, e o resultado dessa conversão será exibido como o **valor de saída (Valor 2)**.

## Requisitos Não Funcionais

### 1. Integração com API Externa

- **RNF001 - Fonte de Dados de Cotação:** O sistema dependerá de uma **API pública de serviço de cotação** para obter dados em tempo real sobre o valor das moedas.

### 2. Tecnologias Utilizadas

- **RNF002 - Padrões de Desenvolvimento:** O desenvolvimento do sistema será restrito ao uso das tecnologias **HTML, CSS e JavaScript**.

### 3. Estrutura do Projeto

- **RNF003 - Organização do Código:** A arquitetura do projeto será modularizada, dividida logicamente em **funcionalidades (features), serviços (services) e validações (validations)**.

# Caso de Uso

![Diagrama de caso de uso.png](Documenta%C3%A7%C3%A3o%20%E2%86%92%20Conversor%20de%20Moedas%20Online%2022b7e3b243058008a170ede9df78ae6e/Diagrama_de_caso_de_uso.png)

## Diagrama de Atividades

![Diagrama de atividade.png](Documenta%C3%A7%C3%A3o%20%E2%86%92%20Conversor%20de%20Moedas%20Online%2022b7e3b243058008a170ede9df78ae6e/Diagrama_de_atividade.png)

## Protótipo

![protótipo.PNG](Documenta%C3%A7%C3%A3o%20%E2%86%92%20Conversor%20de%20Moedas%20Online%2022b7e3b243058008a170ede9df78ae6e/prottipo.png)