---
title: Week 3
sidebar:
    order: 3
---
## Reading Input from the console

**Process:**
1. Create the prompt (You will typically use `System.out.print` instead of `System.out.println` as you will normally want the user to answer on the same line.)
2. Create a Scanner Object
3. Use a method such as nextDouble to obtain the correct data type.


```java
// Prompt the User
System.out.print("Enter a double value: ");

// Create the Scanner Object
Scanner input = new Scanner(System.in);

// Obtain the Double Value

double d = input.nextDouble();
```


## Implicit vs Explicit Import

```java
java.util.* // Implicit import

java.util.Scanner; // Explicit Import
```

There is no performance difference between the Implicit and Explicit Imports


## Identifiers

- An Identifier is a sequence of characters that consist of letters, digits, underscores (_), and dollar signs ($).

- An identifier must start with a letter, an underscore (_), 
or a dollar sign ($). It cannot start with a digit.

- An identifier cannot be a reserved word. (See Appendix 
A, “Java Keywords,” for a list of reserved words).

- An identifier cannot be `true`, `false`, or
`null`.

An identifier can be of any length.


## Numerical Data Types


| Name   | Range                                                                                      | Storage Size      |
|--------|:--------------------------------------------------------------------------------------------:|:-------------------:|
| byte   | -2<sup>7</sup> to 2<sup>7</sup> – 1 <br> (-128 to 127)                                     | 8-bit signed      |
| short  | -2<sup>15</sup> to 2<sup>15</sup> – 1 <br> (-32,768 to 32,767)                             | 16-bit signed     |
| int    | -2<sup>31</sup> to 2<sup>31</sup> – 1 <br> (-2,147,483,648 to 2,147,483,647)               | 32-bit signed     |
| long   | -2<sup>63</sup> to 2<sup>63</sup> – 1 <br> (-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807) | 64-bit signed     |
| float  | Negative: -3.4028235E+38 to -1.4E-45 <br> Positive: 1.4E-45 to 3.4028235E+38               | 32-bit IEEE 754   |
| double | Negative: -1.7976931348623157E+308 to -4.9E-324 <br> Positive: 4.9E-324 to 1.7976931348623157E+308 | 64-bit IEEE 754   |

## Variable Declaration

```java
int x; // Declares x is an integer variable

double radius; // Declares that double is a double variable

char a; // Declares that a is a character variable
```

## Assignment Statements

```java
x = 1; // Assign 1 to x

radius = 1.0; // Assign 1.0 to radius

a = 'A'; // Assigns 'A' to the a variable
```

## Declaration/Initialization Shorthand

```java
int x = 1;

double d = 1.4
```

## Named Constants

To define a constant you must use the `final` keyword.

ex.
```java
// All constants must be written in the order final, datatype and then constant
final datatype CONSTANTNAME = VALUE;

// These are both examples of constants
final double PI = 3.14159
final int SIZE = 3;
```

## Naming Conventions

- Choose meaningful and descriptive names.
- Variables and method names;
    - Use lowercase. If the name consists of several words, concatenate all in one, use lowercase for the first word, and capitalize the first letter of each subsequent word in the name. For example, the variable `radius` and `area`, and the method `computerArea`. This is known as CamelCase

- Class names:
    - Capitalize the first letter of each word in the name. For example, the class name `ComputeArea`.

- Constants:
    - Capitalize all letters in constants, and use underscores to connect words. For example, the constant `PI` and `MAX_VALUE`. This is also known as Upper Snake Case.

## Reading Numbers from the Keyboard
```java
// Creating the scanner object
Scanner input = new Scanner(System.in);
// Reading the variable from the keyboard
int value = input.nextInt();
```

| Method        | Description                              |
|---------------|------------------------------------------|
| nextByte()    | Reads an integer of the byte type.       |
| nextShort()   | Reads an integer of the short type.      |
| nextInt()     | Reads an integer of the int type.        |
| nextLong()    | Reads an integer of the long type.       |
| nextFloat()   | Reads a number of the float type.        |
| nextDouble()  | Reads a number of the double type.       |

## Numeric Operators

| Operator | Meaning                | Example        | Result |
|----------|------------------------|---------------|--------|
| +        | Addition               | 34 + 1        | 35     |
| -        | Subtraction            | 34.0 - 0.1    | 33.9   |
| *        | Multiplication         | 300 * 30      | 9000   |
| /        | Division               | 1.0 / 2.0     | 0.5    |
| %        | Modulus (Remainder)    | 20 % 3        | 2      |

## Integer Division

5 / 2 yields an integer 2.
5.0 / 2 yields a double value 2.5
5 % 2 yields 1 (the remainder of the division)

## Remainder Operator:

Remainder is very useful in programming. For example, an 
even number % 2 is always 0 and an odd number % 2 is always 
1. So you can use this property to determine whether a number 
is even or odd. 
Problem: Displaying Time
Write a program that obtains minutes and remaining 
seconds from seconds. 

## NOTE
Calculations involving floating-point numbers are 
approximated because these numbers are not stored 
with complete accuracy. For example, 
System.out.println(1.0 - 0.1 - 0.1 - 0.1 - 0.1 - 0.1);
displays 0.5000000000000001, not 0.5, and
System.out.println(1.0 - 0.9);
displays 0.09999999999999998, not 0.1. Integers are 
stored precisely. Therefore, calculations with integers 
yield a precise integer result.