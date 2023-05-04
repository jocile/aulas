---
title:  "Registros em Java"
date: 2023-05-03 17:00:00 -0300
categories: [DESENVOLVIMENTO, PROGRAMADOR]
tags: [Senac, programador, programação, gui, java]
---
Imagine quanto trabalho seu amigo terá para controlar todas as fichas. Para ajudá-lo, você pode desenvolver um programa de computador. Antes, porém, deve criar um algoritmo, seguindo algumas etapas.

Declare as variáveis necessárias para ler a ficha.

```plaintext
NOME, ESTADOCIVIL, NOMECONJ, ENDERECO, BAIRRO,CIDADE, UF, EMAIL: literal
IDADE, DATANASC, NUMERO, CEP, FONE1, FONE2, FONE3: numérico

Se quiser, você pode utilizar um vetor de três posições para os telefones.

NOME, ESTADOCIVIL, NOMECONJ, ENDERECO, BAIRRO,CIDADE, UF, EMAIL: literal
IDADE, DATANASC, NUMERO, CEP: numérico
FONE: conjunto [1..3] numérico

```

## Registro de ficha

Para resolver o problema anterior, existe o recurso de se utilizar uma variável heterogênea, isto é, que permite armazenar vários tipos diferentes de constantes. Esse recurso chama-se Registro.
Ao contrário do vetor e da matriz, o registro pode conter variáveis simples e/ou compostas. As variáveis do registro são chamadas Campos.
Observe como fica a declaração das variáveis por meio do registro FICHA.
Declarando as variáveis do registro

```plaintext
FICHA: registro

NOME, ESTADOCIVIL, NOMECONJ, ENDERECO, BAIRRO,CIDADE, UF, EMAIL: literal
IDADE, DATANASC, NUMERO, CEP: numérico
FONE: conjunto [1..3] numérico

fim-registro
```

## Exemplo de Registro de alunos

Utilizar a estrutura de registro para cadastrar matrículas e notas de alunos em determinada disciplina.

Problema:  Monte o algoritmo de cadastramento de alunos utilizando a estrutura de registros. Represente o algoritmo em pseudocódigo.

Montar um algoritmo de cadastramento de alunos utilizando a estrutura de registros. Represente o algoritmo em pseudocódigo, e o código em java para fazer um formulário em uma gui swing, salvando em arquivo texto.

Segue abaixo o pseudocódigo para o algoritmo de cadastramento de alunos utilizando a estrutura de registros, seguido do código em Java para criar um formulário em uma GUI Swing e salvar as informações em um arquivo de texto:

Pseudocódigo:

1. Definir a estrutura de registro para o aluno, contendo os campos nome, idade, matrícula e curso.
2. Inicializar as variáveis de entrada nome, idade, matrícula e curso.
3. Criar um formulário com campos de entrada para nome, idade, matrícula e curso.
4. Ler as informações de entrada do usuário e armazená-las nas variáveis correspondentes.
5. Criar um objeto do tipo Aluno com as informações armazenadas nas variáveis.
6. Escrever as informações do objeto Aluno em um arquivo de texto.
7. Exibir uma mensagem de confirmação para o usuário.

Código em Java:

```java
// Definir a estrutura de registro para o aluno

import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextField;

class Aluno extends JFrame implements ActionListener{
  String nome;
  int idade;
  int matricula;
  String curso;
// Inicializar as variáveis de entrada
JTextField nomeTextField, idadeTextField, matriculaTextField, cursoTextField; 


public Aluno() {
  super("Cadastro de Aluno");
}

// Criar o formulário
public void CadastroAluno() {


  // Criar os campos de entrada para nome, idade, matrícula e curso
  JLabel nomeLabel = new JLabel("Nome:");
  nomeTextField = new JTextField(20);
  JLabel idadeLabel = new JLabel("Idade:");
  idadeTextField = new JTextField(3);
  JLabel matriculaLabel = new JLabel("Matrícula:");
  matriculaTextField = new JTextField(10);
  JLabel cursoLabel = new JLabel("Curso:");
  cursoTextField = new JTextField(20);

  // Criar o botão para submeter o formulário
  JButton cadastrarButton = new JButton("Cadastrar");
  cadastrarButton.addActionListener(this);

  // Adicionar os campos de entrada e o botão ao formulário
  JPanel panel = new JPanel(new GridLayout(5, 2));
  panel.add(nomeLabel);
  panel.add(nomeTextField);
  panel.add(idadeLabel);
  panel.add(idadeTextField);
  panel.add(matriculaLabel);
  panel.add(matriculaTextField);
  panel.add(cursoLabel);
  panel.add(cursoTextField);
  panel.add(new JLabel(""));
  panel.add(cadastrarButton);
  add(panel);

  // Configurar o tamanho e a visibilidade do formulário
  setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  setSize(300, 200);
  setVisible(true);
}

// Ação do botão cadastrar
public void actionPerformed(ActionEvent event) {
  try {
      // Ler as informações de entrada do usuário
      String nome = nomeTextField.getText();
      int idade = Integer.parseInt(idadeTextField.getText());
      int matricula = Integer.parseInt(matriculaTextField.getText());
      String curso = cursoTextField.getText();

      // Criar um objeto Aluno com as informações lidas
      Aluno aluno = new Aluno();
      aluno.nome = nome;
      aluno.idade = idade;
      aluno.matricula = matricula;
      aluno.curso = curso;

      // Escrever as informações do objeto Aluno em um arquivo de texto
      FileWriter writer = new FileWriter("alunos.txt", true);
      PrintWriter printer = new PrintWriter(writer);
      printer.printf("%s,%d,%d,%s\\n", aluno.nome, aluno.idade, aluno.matricula, aluno.curso);
      printer.close();

      // Exibir uma mensagem de confirmação para o usuário
      JOptionPane.showMessageDialog(this, "Aluno cadastrado com sucesso!");

      // Limpar os campos de entrada
      nomeTextField.setText("");
      idadeTextField.setText("");
      matriculaTextField.setText("");
      cursoTextField.setText("");
  } catch (NumberFormatException e) {
      // Exibir uma mensagem de erro para o usuário caso a idade ou a matrícula não sejam números
      JOptionPane.showMessageDialog(this, "A idade e a matrícula devem ser números!");
  } catch (IOException e) {
      // Exibir uma mensagem de erro para o usuário caso ocorra um erro ao escrever no arquivo
      JOptionPane.showMessageDialog(this, "Erro ao cadastrar aluno!");
  }
}

// Método main para iniciar o programa
public static void main(String[] args) {
  Aluno Aluno = new Aluno();
  Aluno.CadastroAluno();
}
}

```

Este código cria uma interface gráfica para cadastro de alunos com campos para nome, idade, matrícula e curso. Quando o usuário clica no botão "Cadastrar", o código lê as informações dos campos de entrada, cria um objeto Aluno com essas informações, escreve as informações do aluno em um arquivo de texto e exibe uma mensagem de confirmação para o usuário. Se a idade ou a matrícula não forem números, o código exibe uma mensagem de erro. Se ocorrer um erro ao escrever no arquivo, o código também exibe uma mensagem de erro.

Este é apenas um exemplo que deve ser evoluído para a solução do problemas inicial.

## Referências

- Xavier, Gley Fabiano Cardoso. Lógica de programação. E-book. Disponível em: [https://bibliotecadigitalsenac.com.br/?from=%3FcontentInfo%3D1306#/legacy/epub/1306](https://bibliotecadigitalsenac.com.br/?from=%3FcontentInfo%3D1306#/legacy/epub/1306) Acesso em 17/04/2023.
- [Java Files - W3Schools](https://www.w3schools.com/java/java_files.asp)
- [Introduction to GUI Building](https://netbeans.apache.org/kb/docs/java/gui-functionality.html)
- [Lesson: Learning Swing with the NetBeans IDE (The Java™ Tutorials > Creating a GUI With Swing)](https://docs.oracle.com/javase/tutorial/uiswing/learn/index.html)
- [Setting up the CelsiusConverter Project (The Java™ Tutorials > Creating a GUI With Swing > Learning Swing with the NetBeans IDE)](https://docs.oracle.com/javase/tutorial/uiswing/learn/settingup.html)
