
public class TestReferencia2 {
   public static void main(String[] args) {

	   Cuenta cDiego = new Cuenta();
	   cDiego.titular = new Cliente();
	   cDiego.titular.nombre = "Diego Barahona";
	   System.out.println(cDiego.titular.nombre);
	   
	   
	cDiego.setAgencia(8);
	System.out.println(cDiego.agencia);
	
}
   
   
   
}
