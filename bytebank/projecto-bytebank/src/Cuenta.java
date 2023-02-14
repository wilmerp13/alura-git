//entidad Cuenta:
class Cuenta {
	double saldo;
	int agencia;
	int	numero;
	String titular;
	
	
	// No retorna valor
	public void depositar(double valor) { 
		this.saldo = this.saldo + valor;
		
	}
	
	//retorna valor
	public boolean retirar(double valor){
		if (this.saldo >= valor) {
			this.saldo = this.saldo - valor;
			return true;
		}
	}
	
	
	
}
