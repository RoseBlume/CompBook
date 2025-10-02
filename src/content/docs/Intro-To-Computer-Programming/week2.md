---
title: Week 2
sidebar:
    order: 2
---

## Homework Solutions

### Activity 1

**Instructions:**
You are given these 10 numbers in random order:
12, 3, 19, 7, 1, 15, 8, 2, 11, 6

**Your task:**
Write pseudocode to sort these numbers into ascending order

```pseudocode

BEGIN Sort Numbers

SET numbers to [12, 3, 19, 7, 1, 15, 8, 2, 11, 6]

SET swapped to True

SET temp to 0

WHILE swapped is True:

      SET swapped to False

      SET index to 1

      WHILE index <= 10:

             IF number at position index > number at position (index + 1):

                    SET temp = number at position index 

                    SET number at position index to number at position (index + 1)

                    SET number at position (index + 1) to temp

                    SET swapped to True

             INCREMENT index by 1

OUTPUT "Sorted numbers are: " + numbers

END
```

### Activity 2

**Instructions:**
You have these numbers:
34, 12, 9, 56, 27, 8, 42, 18

**Your task:**
Write pseudocode to find the smallest number
```pseudocode
BEGIN Find Smallest Number

SET numbers to [34, 12, 9, 56, 27, 8, 42, 18]

SET index to 2

SET smallest to first number in numbers

WHILE index <= 8

     IF number at position index < smallest:

    SET smallest to number at position index

   INCREMENT index by 1

OUTPUT "The smallest number is " + smallest

END
```

### Activity 3

**Instructions:**
You have these numbers:
31, 45, 88, 12, 13, 64, 1, 24

**Your task:**
Write pseudocode to count all even numbers in the list and display the count.

### Pseudocode

```pseudocode
BEGIN Count Even Numbers

SET numbers to [31, 45, 88, 12, 13, 64, 1, 24]

SET index to 1

SET count to 0

WHILE index <= length of numbers:

     IF (number at position index) MOD 2 equals 0:

             INCREMENT count by 1

     INCREMENT index by 1

OUTPUT "The number of even numbers is " + count

END
```

## Creating an executing a simple Java program

### Welcome
```java, editable

public class main {

	public static void main(String[] args) {
		System.out.println("Hello World!");
		
	}
}
```

### Three Messages
```java, editable

public class WelcomeWithThreeMessages {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("Programming is fun!");
		System.out.println("Fundamentals");
		System.out.println("Problem Driven");
	}

}
```

### Basic Computation
```java, editable

public class computeExpression {

	public static void main(String[] args) {
		System.out.print("(10.5 + 2 * 3) / (45 - 3.5) =");
		System.out.println("(10.5 + 2 * 3) / (45 - 3.5)");
	}

}
```