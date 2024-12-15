# InfnetFood - App de Pedidos e Delivery

# Descrição do Projeto
InfnetFood é um aplicativo de pedidos e delivery inspirado no universo de Harry Potter, criado com React Native. O app oferece uma experiência de pedidos de refeições e lanches com categorias temáticas, como "Lanches", "Bebidas" e "Sobremesas". O aplicativo permite que os usuários façam login, escolham suas refeições, adicionem itens ao carrinho e realizem o checkout. Além disso, o aplicativo simula um mapa com a localização dos restaurantes no Rio de Janeiro.

# Funcionalidades
1 - Tela de Login: Permite que os usuários façam login com e-mail e senha, usando dados mockados.

2 - Página Inicial: Exibe categorias de refeições utilizando o componente FlatList.

3 - Tela de Produtos: Mostra os produtos de uma categoria selecionada.

4 - Carrinho de Compras: Exibe os itens no carrinho e calcula o preço total.

5 - Tela de Perfil: Mostra informações do usuário logado.

6 - Tela de Pedidos: Exibe os pedidos atuais do usuário.

7 - Mapa Simulado: Mostra um mapa com 10 restaurantes no Rio de Janeiro.

8 - Tela de Detalhes do Restaurante: Exibe informações sobre um restaurante selecionado.

9 - Tela de Checkout: Permite que o usuário revise o pedido e insira dados de entrega.

10 - Autenticação Simples: Fluxo de login e navegação entre as áreas pública e logada.

11 - Feedback Visual: Animações e mudanças de cor ao adicionar itens ao carrinho.

12 - Tela de Configurações: Alternância entre tema claro e escuro.

13 - Notificações Simuladas: Notificações sobre o status do pedido.

14 - Testes Unitários: Testes de funcionalidades como exibição das categorias e navegação.

15 - Publicação: Preparação para publicação do app.

# Tecnologias Utilizadas
React Native: Framework principal para desenvolvimento de aplicativos móveis.
Expo: Para facilitar o desenvolvimento e teste da aplicação.
React Navigation: Para gerenciar a navegação entre as telas do aplicativo.
FlatList: Para exibição de listas scrolláveis (categorias e produtos).
State Local (useState): Para gerenciamento de estados como o carrinho de compras e dados do usuário.
Mocked Data: Para simular dados de login, categorias de produtos, restaurantes e pedidos.

# Como Rodar o Projeto
1. Clonar o Repositório
git clone https://github.com/seu-usuario/InfnetFood.git

2. Instalar as Dependências
Dentro da pasta do projeto, execute:
npm install
Ou, caso prefira o Yarn:
yarn install

3. Rodar o Projeto
Para rodar o aplicativo, use o comando:
expo start
Isso abrirá o Expo Developer Tools no seu navegador, e você poderá rodar o aplicativo no emulador ou dispositivo físico com o app Expo Go.

# Funcionalidades e Telas
Tela de Login
 Campos: E-mail e senha
 Botão: "Entrar" (Simulação de login com dados mockados)
 Mensagens de erro: Para entradas inválidas.
 
Página Inicial
 Exibe as categorias de refeições: Lanches, Bebidas, Sobremesas.
 Cores e temas inspirados no universo de Harry Potter.
 Navegação para a tela de produtos ao clicar em uma categoria.

Tela de Produtos
 Exibe os produtos de uma categoria selecionada.
 Produtos com temas baseados nas casas de Hogwarts.

Carrinho de Compras
 Exibe os itens no carrinho e o preço total.
 Permite adicionar e remover itens.

Tela de Perfil
 Mostra informações básicas do usuário logado.
 Dados mockados para nome e e-mail.

Tela de Pedidos
 Lista os pedidos atuais com dados mockados.

Mapa Simulado
 Exibe uma imagem simulando um mapa com 10 restaurantes no Rio de Janeiro.
 Dados mockados para os restaurantes.
 Tela de Detalhes do Restaurante
 Exibe informações sobre o restaurante selecionado.
 Mostra o nome, endereço e exemplo de item do cardápio.

Tela de Checkout
 Permite revisar o pedido e inserir dados de entrega (dados mockados).
 Validação básica de campos obrigatórios.
 Configurações e Feedback Visual
 Alternância entre tema claro e escuro.
 Animações simples ao adicionar itens ao carrinho.
 
# Licença
Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.

# Conclusão
O InfnetFood é um projeto desenvolvido com React Native e Expo, inspirado em Harry Potter, que oferece uma experiência simples e funcional para pedidos de lanches e refeições. Através de uma navegação fluida, recursos básicos como login, carrinho de compras e checkout são combinados com funcionalidades adicionais, como mapa simulado e notificações.
