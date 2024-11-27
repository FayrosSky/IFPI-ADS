from fayros_token import tokenize_lines 

def parse_line(tokens):
    if len(tokens) == 0:
        return Linha() 
    if tokens[0].type == 'SET': 
        if tokens[1].type != 'IDENTIFIER':
            raise Exception("NÂO È UM IDENTIFICADOR")
        ident = tokens[1].value
        if tokens[2].type != 'TO':
            raise Exception("NÃO È UM TO")
        tokens.pop(0)
        tokens.pop(0)
        tokens.pop(0)

        #4
        expr = parse_expr(tokens)
        return Linhaset(ident, expr)
        
        
def parse_expr(tokens):
    token = tokens.pop(0)
    match token.type:
        case "IDENTIFIER":
            return ExprIdent(token.value)
        case "NUMBER":
            return ExprLiteral(float(token.value))
        case "STRING": #de-escapar string
            return ExprLiteral(token.value)
        case "FALSE":
            return ExprLiteral(False)
        case "TRUE":
            return ExprLiteral(True)
        case "NOT":
            return ExpreOperadorUnario(token.type, parse_expr(tokens))
        case "ADD":
            return ExprOperadorDuplo(token.type, parse_expr(tokens), parse_expr(tokens))
        
        
#fazendo as expressões.. fazendo as classes que são a representação da classe construída... quem vai fazer a árvore vai ser a .. classe é a união de dados e funções e em C temos structs não tem métodos(função da classe) temos que fazer uma função externa, não podemos fazer tipo métodos que botamos uma gunção dentro de uma classe... em c o self é o this em c++ e c a expressao dos parênteses.
           
class ExprOperadorDuplo:
    def __init__(self, type, left, right):
        self.type = type
        self.left = left
        self.right = right
        
class ExpreOperadorUnario:
    def __init__(self, type, expr):
        self.type = type
        self.expr = expr

class ExprLiteral:
    def __init__(self, value):
        self.value = value
        
class ExprIdent:
    def __init_(self, ident):
        self.ident = ident

#fazer as linhas
class Linha:
    def __init__(self):
        pass
        
class Linhaset:
    def __init__(self, indent, expr):
        self.indent = indent
        self.expr = expr 
                
class Linhaprint:
    def __init__(self, expr):  #em python sempre tem que ter um método de classe
        self.expr = expr
        
class Linhaif:
    def __init__(self, expr):
        self.expr = expr
        
class Linhaelse:
    def __init__(self):
        pass
    
class Linhaendif:
    def __init__(self):
        pass
    
class Linhaend:    
    def __init__(self):
        pass

if __name__== '__main__':
    # Exemplo de uso
    code_example = """
    SET x TO + 1 2
    PRINT x
    IF >= x 5 THEN
        PRINT 'x é maior que 5'
    ELSE
        PRINT 'x é menor ou igual a 5'
    END IF
    END 
    """
    code_example = "SET x TO + 1 2"
    tokens = tokenize_lines(code_example)

    for i, line_tokens in enumerate(tokens, start=1):
        print(f"Linha {i}:")
        for token in line_tokens:
            print(token)
            
        result_parse_line = parse_line(line_tokens)
        
        print(result_parse_line)  # Espaço em branco entre as linhas
        