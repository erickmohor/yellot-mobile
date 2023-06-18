# Prévia
<p float="left">
<img src="https://github.com/erickmohor/yellot-mobile/blob/main/image_preview/preview_gif.gif" alt="App gif" width="250" height="475">

<img src="https://github.com/erickmohor/yellot-mobile/blob/main/image_preview/preview_image1.png" alt="Tela Inicial" width="250" height="475">

<img src="https://github.com/erickmohor/yellot-mobile/blob/main/image_preview/preview_image2.png" alt="Tela de Estatísticas 1" width="250" height="475">

<img src="https://github.com/erickmohor/yellot-mobile/blob/main/image_preview/preview_image3.png" alt="Tela de Estatísticas 2" width="250" height="475">

<img src="https://github.com/erickmohor/yellot-mobile/blob/main/image_preview/preview_image4.png" alt="Tela de Estatísticas 3" width="250" height="475">
</p>

# Descrição do projeto
O aplicativo fornece informações sobre a geração de energia de uma usina solar. Essas informações são obtidas através de uma API.


# Funcionalidades

## Tela Inicial
Nessa tela são fornecidas as seguintes informações:
- Status: Caso tenha dados sobre a geração no dia de hoje, aparece "Gerando" na cor verde, caso contrário, aparece "Inativo" na cor vermelha;
- Produção Esperada Hoje: Aparece a produção de energia em kWh, esperada no dia de hoje;
- Energia Gerada Ontem: Aparece a energia gerada em kWh, no dia de ontem;
- Energia Gerada Hoje: Aparece a energia gerada em kWh, no dia de hoje;
- Comparativo: É calculado a diferença entre a energia gerada no dia de hoje e a energia gerada no dia de ontem. Caso o cálculo seja maior ou igual a 0, aparece um ícone de indicador crescente na cor verde, caso contrário, aparece um ícone de indicador decrescente na cor vermelha.
Além dessas informações a tela possui um botão de atualizar, quando pressionado, a API é consultada para atualizar os dados (caso exista um dado atual).

## Tela de Estatísticas
Nessa tela possui um filtro de informações por hora, por dia, por mês e por ano. Quando selecionado algum desses itens é fornecido as seguintes informações:

### Informações
- Total de Energia Gerada: Aparece o total de energia gerada em kwh;
- %: Aparece um gráfico circular com o número da porcentagem do total de energia gerada;
- Redução de CO₂: Aparece a quantidade de carbono evitado em kg;
- Árvores salvas: Aparece a quantidade de árvores salvas devido ao uso de energia solar;

### Gráfico "Geração de Energia x Tempo"
Nesse gráfico é mostrado a geração de energia pelo tempo, de acordo com as informações obtidas na API e de acordo com o filtro selecionado. Nesse gráfico há duas linhas, a linha cinza representa a geração de energia esperada e a linha laranja representa a energia gerada.

### Tabela de Dados
Nessa tabela contém os mesmos dados representados no gráfico citado anteriormente, porém nesse caso os dados são apresentados em forma de tabela. A primeira coluna da tabela contém o período dos dados (de acordo com o filtro selecionado), a segunda coluna contém os dados de energia gerada e a terceira coluna contém os dados de valor esperado.

Além dessas informações a tela possui um botão de atualizar, quando pressionado, a API é consultada para atualizar os dados (caso exista um dado atual).


# Tech Stack
- React Native CLI
- TypeScript
- Styled components
- Jest e Testing Library


# Principais Dependências
Axios, React Navigation, React Native SplashScreen, Victory Native, Phosphor Icons e Eslint.


# Variáveis de ambiente
`API_TOKEN`


# Para rodar localmente
Clone o diretório
```bash
  git clone https://github.com/erickmohor/yellot-mobile
```

Vá no diretório do projeto
```bash
  cd yellot-mobile
```

Instale as dependências
```bash
  yarn
```

Crie na raiz do projeto um arquivo .env contendo a variável de ambiente descrita anteriormente e seu respectivo valor (caso queira usar mock, deixar a variável sem nada)
```bash
  touch .env
```

Para iniciar o aplicativo usando um emulador Android (você deve possuir um emulador android instalado na sua máquina)
```bash
  yarn android
```

Para iniciar o aplicativo usando um emulador iOS (você deve possuir um computador da Apple e ter o XCode instalado)
```bash
  yarn ios
```

# Usar mock
Para usar os mocks, em vez de fazer chamadas a API, basta comentar o código abaixo de "Use API" dentro de cada arquivo com inicio get, dentro da pasta services e habilitar a importação e código abaixo de "Use mock".

# Testes
Para executar os testes:
```bash
  yarn test
```

Para obter os dados dos testes de forma mais abrangente e ver a cobertura dos testes, execute:
```bash
  yarn test:coverage
```