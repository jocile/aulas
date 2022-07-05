---
title:  "Manipulação de Strings Java"
categories: [ DESENVOLVIMENTO, JAVA]
tags: [java, comandos, strings, programação]
---
Para manipular texto (strings) com a linguagem de programação Java, podemos usar os seguintes comandos:

## Comparar valores
* equals() - compara conteúdos, ex: s1.equals(s2);
* equalsIgnoreCase() - não diferencia maiúsculas e minúsculas
* compareTo() - compara por ordem alfabética na tabela ascII
* compareToIgnoreCase()

## Verificações
* contains() - verifica se uma string contém outra
* startsWith() - verifica se começa com outra string
* endsWith() - verifica se termina com outra string
* indexOf() - retorna o posição de uma substring
* lastIndexOf() - retorna a última posição de uma substring
* isEmpty() - verifica se a string está vazia
* length() - retorna o tamanho da string

## Métodos substituindo objetos String
* concat() - combina strings
* replace() - substitui strings
* toLowerCase() - todas as letras minúsculas
* toUpperCase() - todas as letras maiúsculas
* trim() - remove espaços
* split() - divide a string em outras, ex: String[] ps = s1.trim().split(" ");
* charAt() - retorna um caractere na posição, ex: s1.charAt(5);
* substring() -  retorna parte da string, ex: s1.substring(1,3);
* String.valueOf(object) - converte qualquer objeto para string

## Buffer de strings
* StringBuilder - tipo que cria o buffer
* append() - acrescenta uma string no fim do buffer
* insert() - insere uma string em uma posição do buffer
* toString() - transforma o buffer em string

## Formatação de strings
* String s1 = String.format("texto a ser formatado", v1, v2, ..., vn);
* System.out.format("texto a ser formatado", v1, v2, ..., vn);
* System.out.printf("texto a ser formatado", v1, v2, ..., vn);
* Formatter - tipo formatador, ex:
```
Formatter fmt = new Formatter(sb);
fmt.format("Maior inteiro: %d%n", Integer.MAX_VALUE);
fmt.format("Menor inteiro: %d%n", Integer.MIN_VALUE);
fmt.close();
System.out.println(sb.toString());
```
### Especificadores para a formatação

Especificador | Tipo | Saída 
---: | :---: | ---
%s | qualquer tipo | string 
%d | inteiro (byte, short, long) | inteiro decimal 
%f | ponto flutuante (float, double) | número decimal
%n | nenhum | quebra de linha
%b | qualquer tipo | "true" se não for nulo
%c | char, byte, short, int | carctere unicode
%x | byte, short, int, long | inteiro hexadecimal
%o | byte, short, int, long | inteiro octal
%a | float, double |número hexadecimal
%e | float, double | decimal em notação científica
%g | float, double | número decimal
%h | qualquer tipo | hexadecimal de hashCode()
%t | long, Calendar, Date | datas e horas formatadas

Exemplos:
```
int valorInteiro = 65;
System.out.printf("%d%n", valorInteiro); // 65
System.out.printf("%o%n", valorInteiro); // 101
System.out.printf("%x%n", valorInteiro); // 41
System.out.printf("%#x%n", valorInteiro); // 0x41
System.out.printf("%#X%n", valorInteiro); // 0X41
System.out.printf("%b%n", valorInteiro); // true
System.out.printf("%c%n", valorInteiro); // A
System.out.printf("%s%n", valorInteiro); // 65
System.out.printf("%h%n", valorInteiro); // 41
```

## Referência
* [Curso do Ricardo Maroquio no YouTube](https://www.youtube.com/watch?v=kJBUCUsDU0c&list=PL0YuSuacUEWtnWE0zVGKw3qDcEJEpNeZb&index=13&t=1816s&ab_channel=RicardoMaroquio)
* [Introdução ao Java no Developer IBM](https://developer.ibm.com/br/tutorials/j-introtojava1/)
* [Documentação do Java na Oracle em inglês](https://docs.oracle.com/javase/tutorial/)
* [Estudando java no blog da computação](http://programandopc.blogspot.com/2010/02/estudando-java.html)
