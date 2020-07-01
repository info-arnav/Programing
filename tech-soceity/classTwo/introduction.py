# what actually are vaiables
"""
so when we assign some random word, alphabet, name, keword , string or any structure a value then is is a variable
however a number can not be considered a variable
"""

a = 10  #here we have assigned a a value 10

'''
so now ehnever i use keword a it will mean that i actually want to use number 10
'''

# 10 = 1 this is a wrong way of decalring a vaible 

#types of python variables are

"""
int => this represents a integer value
float => this represents a decimal value
str => this respresents any sentence, etc
bool => represents True or False which can be respectively said 1 or 0
"""

# python is a static language i believe and hence we do not use these keywords while declaring a vriable
# python automatically recognizes the type of the variabke 
# in some languages decalration is done in the following way 
# int a = 10

"""
to check the type of the variable we can just print type(<whatever the name of variable is>) 
print is used to get a output that can be seen by us
"""

integer = 10
floatNumber = 10.09
string = "this is a sentence that was radomly chosen"
boolean = True

print(type(integer)) #ints
print(type(floatNumber)) #float
print(type(string)) #strs
print(type(boolean)) #bool

# whenever a variable is saved it is saved with a uniqu id
# the variable with same value have same id i believe

someVariable = 10
print(id(someVariable))

# logic operators are listed below
""" 
and / &
    1 & 1 => 1
    1 & 0 => 0
    0 & 1 => 0
    0 & 0 => 0
or / |
    1 | 1 => 1
    1 | 0 => 1
    0 | 1 => 1
    0 | 0 => 0
"""

# if stam=em=nt takes a condition and executes if it is true
# = is used to assigne= value whereas == is used to compare value

a = 10
if a == 10:  #we put a condition
    print("the loop was hence executed")  #the tab before this print statemnt shows that the statemnt is inside the loop
    a+=1 #this over here means that a = a + 1 => a = 10 + 1 => a = 1 simmilarly a-=1 means subtact one , a-=2 means subtract 2, * means multiply, / means divide and ** means to the power of
print("this statement is not dependent on the loop")  #this statent=nt is outside the loop which means it will print the result wheather or not the condition prvided to the if loop is true or false

"""------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"""