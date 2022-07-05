---
title:  "Exemplos de programação RAD com Delphi"
date: 2021-05-31 10:22:00 -0300
categories: [DESENVOLVIMENTO, RAD]
tags: [delphi, tutorial, curso, programação]
---
Exemplos de programação básica com a IDE Delphi 10 (Rio) para uma introdução às instruções e operações básicas.

## iniciando um novo projeto
- Acessar: File/ New/ Multi Device Aplication/ Blank Application.

## Executando o projeto
- Selecionar no menu superior: File / Save all;
- Selecionar "Run" (executar) no menu superior, ou teclar "F9".

## Alterando propriedades de componentes
### Mudando o título da janela:
- Selecionar o Form1 clicanco do form;
- Acessar as propriedades na janela Object Inspector;
- Selecionar a propriedade "Caption";
- Alterar para "Primeiro exemplo";

### Mudando a cor de fundoda janela:
- Acessar a propriedade "Fill" e expandir o submenu;
- Alterar a propriedade "Kind" para "solid";
- Alterar a propriedade "Color" para "White";

### Centralizando a janela:
- Selecionar a propriedade "Posiition";
- Definir para "Desktop center";

### Usando botões
- Acessar a palleta de componentes;
- Inserir 2 componentes do tipo Button;
- Selecionar o button1 para mudar as suas propriedades;
- Acessar as propriedades na janela Object Inspector;
- Alterar a propriedade "Text" para "Título";
- Selecionar o button2 para mudar as suas propriedades;
- Alterar a propriedade "Text" para "Cor";

Mudando o título da janela:
- Inserir a ação no botão: dando um duplo click no botão Título, será acessado o "Unit1" para edição do código;
- Inserir o código a seguir:

```
procedure TForm1.Bt1Click(Sender: TObject);
begin
      Form1.Caption := 'Segundo exemplo';
end;
```

Mudando a cor de fundo da janela:
- Da mesma forma damos um duplo click no botão cor, e será acessado o "Unit1" para edição do código;
- Inserir o código a seguir:

```
procedure TForm1.Bt2Click(Sender: TObject);
begin
      Form1.Fill.Color := TAlphaColors.Red;
end;
```
Para voltar ao formulário basta teclar F12.

## Trabalhando com texto
Concatenando (unido) o texto ao clicar no botão:
- Acessar a palleta de componentes;
- Selecionar o componente "Label";
- Clicar no Form para adicionar o componente;
- Acessar suas propriedades na janela Object Inspector;
- Alterar a propriedade "Text" para "Nome";
- Repetir esta operação com outro Label, com seu texto "Sobrenome";
- Podemos também copiar e colar o componente;
- Inserir um componente "Button" e posicioná-lo abaixo do "Label Sobrenome";
- Alterar a propriedade "Text" do botão para "Concatenar";
- Inserir outro Label e mudar a propriedade "Text" para "Universidade";
- Inserir 4 componentes "Edit" ao lado dos labels e do botão, onde podemos inserir valores;
- Agora vamos programar a ação clciando 2 vezes no botão concatenar e inserindo o código:

```
procedure TForm1.Button1Click(Sender: TObject);
begin
      Edit3.Text := Edit1.Text + Edit2.Text;
      Edit4.Text := 'Escola';
end;
```


Para inserir a ação "concatenar" ao botão, que irá unir o texto do edit1 ao texto do edit2, e exibir no edit3, usamos o seguinte código, clicando 2 vezes no botão:

```
procedure TForm1.Bt2Click(Sender: TObject);
begin
      Form1.Fill.Color := TAlphaColors.Red;
end;
```

## Referências

BEZERRA, Cicero Aparecido Bezerra. **Introdução à linguagem de programação Delphi**. 2018. UFPR. Disponível em: <https://acervodigital.ufpr.br/bitstream/handle/1884/55881/delphi.pdf>. Acessado em: 29 de maio de 2021.

ROSELT, Shaun. Delphi Programing Tutorials - For Absolute Begginners. **YouTube**, 2018. Disponível em: <https://www.youtube.com/playlist?list=PLfrySFqYRf2dKxG1Xd1sJaEMtoVTeL5dw>. Acessado em 27 de maio de 2021.