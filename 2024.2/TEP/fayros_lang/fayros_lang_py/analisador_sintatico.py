import tokenize
import io

class Token:
    def __init__(self, type, value, line, column):
        self.type = type
        self.value = value
        self.line = line
        self.column = column

    def __repr__(self):
        return f"Token({self.type}, {self.value}, line={self.line}, column={self.column})"

def tokenize_lines(code):
    code_io = io.StringIO(code)
    tokens = list(tokenize.generate_tokens(code_io.readline))
    custom_tokens = []
    for token in tokens:
        token_type, token_string, start, _, _ = token
        # Mapeie os tipos de token para os nomes específicos do seu analisador
        if token_type == tokenize.NAME:
            if token_string in ['SET', 'PRINT', 'IF', 'THEN', 'ELSE', 'END']:
                token_type = token_string.upper()
            else:
                token_type = 'IDENTIFIER'
        elif token_type == tokenize.NUMBER:
            token_type = 'NUMBER'
        elif token_type == tokenize.STRING:
            token_type = 'STRING'
        elif token_type == tokenize.OP:
            if token_string == '+':
                token_type = 'PLUS'
            elif token_string == '>=':
                token_type = 'GREATER_EQUAL'
            # Adicione mais mapeamentos conforme necessário
        custom_tokens.append(Token(token_type, token_string, line=start[0], column=start[1]))
    return custom_tokens

# Código de exemplo para testar a tokenização
code_example = """
SET x TO 1 + 2
PRINT x
IF x >= 5 THEN
    PRINT 'x é maior que 5'
ELSE
    PRINT 'x é menor ou igual a 5'
END IF
END
"""

# Tokenize o código
tokens = tokenize_lines(code_example)

# Imprima os tokens
for i, token in enumerate(tokens):
    print(f"Linha {i+1}:")
    print(token)