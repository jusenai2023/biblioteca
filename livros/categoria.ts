export default class biblioteca{
    titulo: string;
    autor: string;
    ano: number;

    constructor(titulo:string , autor:string ,ano: number){
        this.titulo = titulo;
        this.autor =autor;
        this.ano = ano;
      
    }
}
class LivroCategoria extends biblioteca {
    categoria: string;

    constructor(titulo: string, autor:string, ano:number, categoria: string) {
        super(titulo, autor, ano);
        this.categoria = categoria;
      }
      exibirDetalhes() {
          console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.ano}, Categoria: ${this.categoria}`);
        }
      
      
        éAntigo() {
          return this.ano < 2000;
        }
}

const Lista:LivroCategoria [] = [
    new LivroCategoria("Livro 1", "John Green", 1997, "A culpa é das estrelas"),
    new LivroCategoria("Livro 2", "Bruna Pallazzo", 2023, "envenenados"),
    new LivroCategoria("Livro 3", "Charlie Donlea", 2017, "a garota do lago"),
]

Lista.forEach(livro => {
    livro.exibirDetalhes();
    if(livro.éAntigo()){
        console.log('Esse livro é antigo')
    } else {
        console.log('Esse livro não é antigo')
    }
});