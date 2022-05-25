def fibonacci(num):
  num1=0
  num2=1
  sum=0
  
  for i in range(0,num):
    sum = num1 +num2
    num1 = num2
    num2 = sum
  return num1      




