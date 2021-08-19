# Hashtables
Array that each value contains a data structure in our example linkedilst that has one or more 

## Challenge
Testing , imagine it 
## Approach & Efficiency
Linkedlist for each key in the hashmap 

## API
class node to be used in linkedlist class , prepend to prepend new nodes to the linkedlist ,, hashmap class ,, establish an array to store the data hash and select size , hash function for generate a key  by summation of asci code *19 module the size of the array to make sure it's not bigger than the sizxe ,, set for adding a new value to the hasharray if there was no key before will be creating a linkedlist and add the object with the key and the value to it , if there is just add (prepend)it to the linkedklist in the key,,, an array that contains linkedlist with multi values each value is an object  ,, contains return true if there is a key O/(1), get returns value associated with the key after finding the element in the hashed array we will go through the linked list looking for the requested key if it's found we will break the loop and return the value time comp[lexity O(n)

#  Chaalenge 2 Hashmap "first dublicate word"

# Challenge Summary
 finds the first word to occur more than once in a string
Arguments: string
Return: string the first match)
## Whiteboard Process
Miro whiteboard:
https://miro.com/app/board/o9J_l2fWoEM=/


## Approach & Efficiency
Hashmap by saving converting each word in a string into indexes in array and staart saving each word using the helper method set in a hash table untill finding a match , use the helper method contains and get for checking the dublicate, space and thime complexity is O(n)

# challenge 3 Hashmap dublicates in two binary trees

# Challenge Summary
you are having two binary tree ,, and you want to return the equation values between them using hash tables , find a function called findequal that accepts two values and return array

EX:
(Values of trees)
Input : tree1(1,2,8,99) ,, tree2( 8,99,1,55)

Output :  [ 8,99,1 ]


## Whiteboard Process
https://miro.com/app/board/o9J_l13jhiE=/

## Approach & Efficiency
by using hashing map to find dublicates you are sppeeding up your code in compare with  for example another approach which is sorting the arrays then find dublicates which takes O(n^2) and O(n) space in the worst case assuming all values are dublicated ,, however in hashtable you are speeding it and the space complexity is O(n) in the end but with more contstant values , so hashmap wins in such a case but it takes more memory i think in similar problems!



## leftjoin hashtable
# Challenge Summary
Giving a two hashmap , write a function that return the left join of them 

Note:No problem which datastructure to save the returned value

## Whiteboard Process
https://miro.com/app/board/o9J_l14KFGc=/
