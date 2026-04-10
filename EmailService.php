<?php ini_set('display_errors', 0); 
//error_reporting(E_ALL);

class EmailService{
	public $mensaje_ok 			= 'Formulario enviado con exito gracias por contactarnos';
	public $mensaje_error 		= 'Lo sentimos ocurrio un error al enviar su formulario, intentelo nuevamente';
	public $mensaje_validacion 	= 'Debe completar todos los campos';
	public $destino 			= 'contacto@grupoissaseguridad.com'; // !important
	public $asunto  			= 'Contacto Grupo ISSA Pagina Web'; 
	//public $formato			= 'text/html' ;
	public $formato				= 'text/plain' ;

	public function __construct(){		
		if ($_SERVER['REMOTE_ADDR']!=$_POST["token"]){
			die("Acceso no autorizado");
		}		
	}

	protected function filtrar($data){
		if ( empty($data['nombre']) || empty($data['telefono']) || empty($data['empresa']) || empty($data['email']) || empty($data['mensaje'])){
			return false;
		}

		// Campos de Texto
		$data_filtrada["nombre"]   = filter_var($data['nombre'], FILTER_SANITIZE_STRING);
		$data_filtrada["telefono"] = filter_var($data['telefono'], FILTER_SANITIZE_STRING);
		$data_filtrada["empresa"] = filter_var($data['empresa'], FILTER_SANITIZE_STRING);
		

		// Campo de email	
		$data_filtrada["email"] = filter_var($data['email'], FILTER_VALIDATE_EMAIL);

		// Campos de contenido (textarea)
		$data_filtrada["mensaje"] = filter_var($data['mensaje'], FILTER_SANITIZE_STRING);
		$data_filtrada["mensaje"] = stripslashes(trim(htmlspecialchars($data_filtrada["mensaje"])));

		return $data_filtrada;
	}

	protected function cuerpo($data){
		// Escribo el cuerpo del mensaje
		$cuerpo = "Nombre: ".$data["nombre"]."\n". "Telefono: ".$data["telefono"]."\n". "Empresa: ".$data["empresa"]."\n". "Email: ".$data["email"]."\n". "Mensaje: ".$data["mensaje"]."\n";
		return $cuerpo;
	}

	public function enviar($data){
		// Sanitizo la data
		$data_filtrada = EmailService::filtrar($data);
		if (!$data_filtrada){
			return $this->mensaje_validacion;
		}
		// Creo el cuerpo
		$cuerpo = EmailService::cuerpo($data);
		// Envio el mensaje	
		$cabeceras = "From: ".$data["email"]." \r\n". "Content-Type: ".$this->formato."; charset=UTF-8". "X-Mailer: PHP/" . phpversion();	   
		if (mail($this->destino, utf8_decode($this->asunto), utf8_decode($cuerpo), $cabeceras)){
			return $this->mensaje_ok;
		}
		else{
			return $this->mensaje_error;
		}
	}
}

$email = new EmailService(); $respuesta = $email->enviar($_POST); ?>