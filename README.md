# Servidor - Pedidos de Lanchonete

### Descrição
Este projeto é o resultado de um desafio com foco no back-end, proposto no curso "Formação Full Stack JavaScript", do professor Thiago Munhoz 
Medeiros. Para realizá-lo, o avaliado deveria construir uma API Restful, a fim de simular um sistema de pedidos de lanchonete, que contemplasse 
três módulos: clientes, produtos e pedidos. Neste ponto, fiz uma adaptação, visto que, não criei uma coleção exclusiva para pedidos, ao invés disso,
os inseri em um campo específico, na coleção de clientes, de forma individual. Assim, se esse campo estivesse vazio, não haveria pedidos por parte 
do cliente em questão, caso contrário, algum pedido teria sido feito.

### Requisitos Mínimos
#### Cliente
&nbsp;&nbsp;&nbsp;&nbsp;•  Cadastrar-se <br>
&nbsp;&nbsp;&nbsp;&nbsp;•  Fazer pedidos <br>
&nbsp;&nbsp;&nbsp;&nbsp;•  Listar pedidos <br>
&nbsp;&nbsp;&nbsp;&nbsp;•  Excluir ou cancelar pedidos <br>
&nbsp;&nbsp;&nbsp;&nbsp;•  Possuir os campos: nome, e-mail, telefone e endereço

#### Produto
&nbsp;&nbsp;&nbsp;&nbsp;•  Possuir os campos: nome e preço

#### Pedido
&nbsp;&nbsp;&nbsp;&nbsp;•  Possuir os campos: código do cliente, código do produto, data de criação e status <br>
&nbsp;&nbsp;&nbsp;&nbsp;•  Os status de cada pedido deveriam ser: pendente, em preparo, saiu para entrega, entregue e cancelado

#### Administrador
&nbsp;&nbsp;&nbsp;&nbsp;•  Listar clientes <br>
&nbsp;&nbsp;&nbsp;&nbsp;•  Listar pedidos <br>
&nbsp;&nbsp;&nbsp;&nbsp;•  Gerenciar os produtos cadastrados

#### Autenticação
&nbsp;&nbsp;&nbsp;&nbsp; Deveria haver um controle de autenticação básico, a fim de validar os dados inseridos

#### Segurança
&nbsp;&nbsp;&nbsp;&nbsp;•  Não poderia haver mais de um cliente com o mesmo e-mail ou telefone <br>
&nbsp;&nbsp;&nbsp;&nbsp;•  Um cliente não poderia excluir pedidos feitos por um outro cliente 

### Pontos Extras (não cobrados)
&nbsp;&nbsp;&nbsp;&nbsp;•  Cada produto, além de nome e preço, possui uma descrição <br>
&nbsp;&nbsp;&nbsp;&nbsp;•  Cada pedido cadastrado vai possuir, além da data, a <b>hora</b> <br>
&nbsp;&nbsp;&nbsp;&nbsp;•  Há um endpoint específico para inserir produtos <br>

### Maiores desafios
  •	Aprender a atualizar ou excluir campos específicos dentro uma coleção, em um banco de dados MongoDB <br>
  •	Implementar os endpoints de forma adequada, que atendesse aos requisitos básicos e aos pontos extras <br>
  
### Tecnologias
  •	Node JS <br>
  •	Express JS  <br>
  •	MongoDB  <br>

### Front-End
  •	A camada visual desta aplicação, pode ser acessado neste link: [Front-End - Pedidos de Lanchonete](https://github.com/renardbergson/front-pedidos-de-lanchonete) 

### Plataformas utilizadas
  •	Render (servidor) <br>
  •	Atlas (banco de dados)

### Autor
  •	Renard Bergson 🤓 <br>
	•	renardrock@gmail.com <br>
	•	[LinkedIn](https://www.linkedin.com/in/renardbergson) <br>
	•	[GitHub](https://www.github.com/renardbergson)
