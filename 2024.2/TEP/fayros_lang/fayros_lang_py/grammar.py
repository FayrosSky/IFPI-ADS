# grammar.py

# Definição da gramática
GRAMMAR = {
    'PROGRAM': ['STATEMENT_LIST', 'END'],
    'STATEMENT_LIST': [['STATEMENT', 'STATEMENT_LIST'], []],
    'STATEMENT': [['SET', 'IDENTIFIER', 'TO', 'EXPRESSION'],
                  ['PRINT', 'EXPRESSION'],
                  ['IF', 'CONDITION', 'THEN', 'STATEMENT_LIST', 'ELSE_IF_CLAUSE*', 'ELSE_CLAUSE?', 'END_IF'],
                  ['DO', 'STATEMENT_LIST', 'WHILE', 'CONDITION']],
    'SET_STATEMENT': ['SET', 'IDENTIFIER', 'TO', 'EXPRESSION'],
    'PRINT_STATEMENT': ['PRINT', 'EXPRESSION'],
    'IF_STATEMENT': ['IF', 'CONDITION', 'THEN', 'STATEMENT_LIST', 'ELSE_IF_CLAUSE*', 'ELSE_CLAUSE?', 'END_IF'],
    'DO_WHILE_STATEMENT': ['DO', 'STATEMENT_LIST', 'WHILE', 'CONDITION'],
    'CONDITION': ['EXPRESSION', 'RELATIONAL_OPERATOR', 'EXPRESSION'],
    'EXPRESSION': ['TERM', ['PLUS', 'MINUS', 'TERM']*]],
    'TERM': ['FACTOR', ['MULT', 'DIV', 'INT_DIV', 'MOD', 'FACTOR']*]],
    'FACTOR': [['NUMBER'], ['IDENTIFIER'], ['STRING'], ['EXPRESSION']],
    'RELATIONAL_OPERATOR': [['GREATER_THAN'], ['LESS_THAN'], ['EQUAL'], ['GREATER_EQUAL'], ['LESS_EQUAL'], ['NOT_EQUAL']]
}