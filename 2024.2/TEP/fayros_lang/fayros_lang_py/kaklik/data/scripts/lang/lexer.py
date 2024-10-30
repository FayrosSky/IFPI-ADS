class Token:
    def __init__(self,tp,value=None):
        self.type=tp
        self.value=value
    def __repr__(self) -> str:
        return "<Toke"