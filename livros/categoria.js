"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var biblioteca = /** @class */ (function () {
    function biblioteca(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }
    return biblioteca;
}());
exports.default = biblioteca;
var LivroCategoria = /** @class */ (function (_super) {
    __extends(LivroCategoria, _super);
    function LivroCategoria(titulo, autor, ano, categoria) {
        var _this = _super.call(this, titulo, autor, ano) || this;
        _this.categoria = categoria;
        return _this;
    }
    LivroCategoria.prototype.exibirDetalhes = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo, ", Autor: ").concat(this.autor, ", Ano: ").concat(this.ano, ", Categoria: ").concat(this.categoria));
    };
    LivroCategoria.prototype.éAntigo = function () {
        return this.ano < 2000;
    };
    return LivroCategoria;
}(biblioteca));
var Lista = [
    new LivroCategoria("Livro 1", "John Green", 1997, "A culpa é das estrelas"),
    new LivroCategoria("Livro 2", "Bruna Pallazzo", 2023, "envenenados"),
    new LivroCategoria("Livro 3", "Charlie Donlea", 2017, "a garota do lago"),
];
Lista.forEach(function (livro) {
    livro.exibirDetalhes();
    if (livro.éAntigo()) {
        console.log('Esse livro é antigo');
    }
    else {
        console.log('Esse livro não é antigo');
    }
});
