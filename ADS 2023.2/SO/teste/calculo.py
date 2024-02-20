num: x - 9
den:sqrt(x)-3
fator:sqrt(x)+3
f:num/den
num:expand(num*fator)
den:expand(den*fator)
f:ratsimp(num/den)