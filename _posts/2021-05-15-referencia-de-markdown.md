---
title:  "Referência de formatação em Markdown"
date: 2021-05-15 23:05:00 -0300
categories: [DESENVOLVIMENTO, MARKDOWN]
tags: [web, github, estilo, markdown]
---
Markdown é um estilo de texto na web. Você controla a exibição do documento; formando palavras como **negrito** ou _itálico_ adicionar imagens e cria listas, etc.

## Títulos
```
# Título 1
## Subtítulo nível 2
### Subtítulo nível 3
```
## Formatação
```
_Italico_
**Negrito**
**_Italico e negrito_**
```
```
Links: [Texto do link](https://jocile.com/)
```
```
 Listas:
* Item 1
* Item 2
* Item 3
```

## Imagens

```
 Imagens:
Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: 
![alt text][logo]

```
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

## Código
```
`Código` em linha tem `áspas ao redor`.
 ```
     ```
    Blocos de código são envoltas por linhas com três áspas ```, 
    ou são identadas com quatro espaços.
     ```

## Tabelas

```
| Tabelas            | são                     | legais |
| -----------------  |:-----------------------:| ------:|
| col 3 é            | alinhada para à direita |  $1600 |
| col 2 is           | centralizada            |    $12 |
| listras das zebras | são legais              |     $1 |

Devem haver ao menos 3 hifens ('-') separando cada célula do cabeçalho.
As barras externas (`|`) são opcionais e você não precisa fazer as células em Markdown estarem bem alinhadas.

Markdown | menos | bonito
--- | --- | ---
*ainda* | `renderiza` | **bem**
1 | 2 | 3

```

| Tabelas            | são                     | legais |
| -----------------  |:-----------------------:| ------:|
| col 3 é            | alinhada para à direita |  $1600 |
| col 2 is           | centralizada            |    $12 |
| listras das zebras | são legais              |     $1 |

---

Markdown | menos | bonito
--- | --- | ---
*ainda* | `renderiza` | **bem**
1 | 2 | 3

---

## Citações

```
> Citações são muito úteis em em email para emular respostas textuais.
> Esta linha faz parte da mesma citação.
```
> Citações são muito úteis em em email para emular respostas textuais.
> Esta linha faz parte da mesma citação.


## Referências
* [Referência da syntaxe markdown na UFRGS](http://www.if.ufrgs.br/fis01069/sintaxemarkdown.html)
* [Referência da syntaxe markdown no firebal](https://daringfireball.net/projects/markdown/syntax)
* [Referência da syntaxe markdown no GitHub](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)
