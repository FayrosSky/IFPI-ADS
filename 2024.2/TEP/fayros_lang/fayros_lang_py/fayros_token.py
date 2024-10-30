import re

# Definição das regras de tokenização
token_patterns = [
    (r'SET', 'SET'),
    (r'PRINT', 'PRINT'),
    (r'SCAN', 'SCAN'),
    (r'END', 'END'),
    (r'IF', 'IF'),
    (r'THEN', 'THEN'),
    (r'ELSE IF', 'ELSE_IF'),
    (r'ELSE', 'ELSE'),
    (r'END IF', 'END_IF'),
    (r'DO', 'DO'),
    (r'WHILE', 'WHILE'),
    (r'UNTIL', 'UNTIL'),
    (r'LOOP', 'LOOP'),
    (r'\+', 'PLUS'),
    (r'-', 'MINUS'),
    (r'\*', 'MULT'),
    (r'/', 'DIV'),
    (r'\\', 'INT_DIV'),  # Inteiro divisão
    (r'%', 'MOD'),
    (r'>=', 'GREATER_EQUAL'),
    (r'>', 'GREATER_THAN'),
    (r'<=', 'LESS_EQUAL'),
    (r'<>', 'NOT_EQUAL'),
    (r'<', 'LESS_THAN'),
    (r'=', 'EQUAL'),
    (r'&', 'CONCAT'),
    (r'NOT', 'NOT'),
    (r'AND', 'AND'),
    (r'OR', 'OR'),
    (r'[a-zA-Z_][a-zA-Z0-9_]*', 'IDENTIFIER'),
    (r'\d+(\.\d+)?', 'NUMBER'),
    (r"'[^']*'", 'STRING'),  # String entre aspas simples
    (r'\s+', 'WHITESPACE'),  # Ignorar espaços em branco
    (r"'.*", 'COMMENT'),  # Comentário após aspa simples
    (r'.', 'INVALID_TOKEN')  # Token inválido
]

# Compilar as expressões regulares
token_regex = re.compile('|'.join(pattern for pattern, _ in token_patterns))

class Token:
    def __init__(self, type, value, line, column):
        self.type = type
        self.value = value
        self.line = line
        self.column = column

    def __repr__(self):
        return f"Token({self.type}, {self.value}, line={self.line}, column={self.column})"

def tokenize(code, line_number):
    tokens = []
    column = 0

    for match in token_regex.finditer(code):
        token_type = next(type for pattern, type in token_patterns if re.fullmatch(pattern, match.group()))
        if token_type == 'WHITESPACE':
            column += match.end() - match.start()
            continue
        elif token_type == 'COMMENT':
            column += match.end() - match.start()
            continue
        elif token_type == 'INVALID_TOKEN':
            raise SyntaxError(f"Invalid token '{match.group()}' at line {line_number}, column {column}")
        
        tokens.append(Token(token_type, match.group(), line_number, column + match.start()))
        column += match.end() - match.start()

    return tokens

def tokenize_lines(code):
    lines = code.split('\n')
    all_tokens = []

    for i, line in enumerate(lines, start=1):
        line_tokens = tokenize(line, i)
        all_tokens.append(line_tokens)

    return all_tokens

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
tokens = tokenize_lines(code_example)

for i, line_tokens in enumerate(tokens, start=1):
    print(f"Linha {i}:")
    for token in line_tokens:
        print(token)
    print()  # Espaço em branco entre as linhas