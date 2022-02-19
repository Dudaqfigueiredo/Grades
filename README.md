<!-- Duvidas:

1 - Pq em Lista de Notas usou o index como key?

2 - handleMudancaTitulo(evento) {
console.log(evento.target.value);
}
pq funciona em class mas em função não?

3 - o e que usamos é evento?
 -->

State: Serve para guardar valores/estado que podem vir a mudar com a interação do usuário com o componente, tendo efeito na renderização do mesmo, o state pode ser passado como props!

Props: Valores para a configuração de um componente, essas props são passadas pelo elemento acima (que utiliza o componente que irá receber) e são imutáveis, utilizado para a comunicação de componentes.

Propriedades são imutáveis e isso nos garante que ao passarmos um valor para um objeto ele não será alterado.

Enquanto o stateless não guarda nenhum estado interno e tem sua renderização definida apenas pelas propriedades que recebe, um componente statefull gerencia e distribui estado entres diferentes partes do nosso sistema. Por isso, devemos sempre priorizar componentes stateless

componentDidMount - chamado assim que o componente é criado e está pronto, é dentro desse método que devemos iniciar chamadas para API ou executar código que tem efeito colateral
