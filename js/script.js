if (window.SimpleForm) {
	new SimpleForm({
		form: ".formphp", // seletor do formulário
		button: "#enviar", // seletor do botão
		erro: "<div id='form-erro'><h2>Error!</h2><p>Um erro ocorreu tente para o email </p></div>",
		sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve retornamos o contato.</p></div>",
});
}