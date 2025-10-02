---
title: Week 1
sidebar:
    order: 1
---

Key characteristics of pseudocode
- Uses plain English mixed with programming 

## Example

```
BEGIN

SET largest_number to 0

FOR each number in the list:

IF number is greater than largest_number:

SET largest_number to number

DISPLAY largest_number

END
```

## Best Practices for Writing effective psuedocode

- **Start with clear structure:** Begin with **BEGIN** and end with **END** 
- **User standard Keywords**: These include SET,ASSIGN for variables. 


## Flowcharts.

Flowcharts use symbols to describe pseudocode in a more visual way.


### Symbols

- Terminal indicates the beginning or the end.
- The Flowline shows the process of the operations
- The Input/output parallelogram shows the input and output of writing.
- The process is represented by a rectangle and shows a process that is occurring such as setting a variable.
- The Diamond shows decision statements.

## Activity 1

**Instructions:**
You are given these 10 numbers in random order:
12, 3, 19, 7, 1, 15, 8, 2, 11, 6

**Your task:**
Write pseudocode to sort these numbers into ascending order

```pseudocode
BEGIN

SET list to 12, 3, 19, 7, 1, 15, 8, 2, 11, 6

SET swapped to TRUE

WHILE swapped is TRUE:

    SET swapped to FALSE

    FOR i in length_of_list:

        IF list[i] is less than list[i+1]:

            SET temp to list[i]

            SET list[i] to list[i+1]

            SET list[i+1] to temp

            SET swapped to TRUE

        INCREMENT i by 1

END 

```

## Activity 2

**Instructions:**
You have these numbers:
34, 12, 9, 56, 27, 8, 42, 18

**Your task:**
Write pseudocode to find the smallest number
```
BEGIN 

SET list to 34, 12, 9, 56, 27, 8, 42, 18

SET smallest_number to 34

FOR each number in the list: 

IF number is less than smallest_number: 

SET smallest_number to number 

DISPLAY smallest_number 

END 
```

## Activity 3

**Instructions:**
You have these numbers:
31, 45, 88, 12, 13, 64, 1, 24

**Your task:**
Write pseudocode to count all even numbers in the list and display the count.

### Pseudocode

```
BEGIN

SET list to 31, 45, 88, 12, 13, 64, 1, 24

SET count to 1

FOR each number in list:

IF Remainder of number divided by 2 is equal to 0:

INCREMENT count by 1

ELSE:

PASS

END
```