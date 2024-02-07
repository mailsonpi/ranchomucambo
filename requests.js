function enviarFormulario() {
    const entrada = document.getElementById('datepicker1').value;
    const saida = document.getElementById('datepicker2').value;
    const responsavel = document.getElementById('responsavel').value;
    const cellNumber = document.getElementById('cellNumber').value.replace(/\D/g, '');
    const cpf = document.getElementById('cpfdocument').value.replace(/\D/g, '');


    const dados = {
        phone: cellNumber,
        document: cpf,
        checkInDate: entrada,
        checkOutDate: saida,
        name: responsavel,
    };

    axios.post('https://space-tracker-api.vercel.app/rentals', dados)
        .then(function (response) {
            Toastify({
                text: "Agendamento Feito",
                duration: 3000,
                close: true,
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                stopOnFocus: true,
                position: "bottom-center"
            }).showToast();
        })
        .catch(function (error) {
            Toastify({
                text: "Erro ao cadastrar: " + error.message,
                duration: 3000,
                close: true,
                backgroundColor: "linear-gradient(to right, #FF6B6B, #FF7878)",
                stopOnFocus: true,
                position: "bottom-center"
            }).showToast();
        });
}

function cellNumberFormt(input) {
    const numero = input.value.replace(/\D/g, '');
    const numeroFormatado = numero.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})$/, '$1 $2 $3-$4');
    input.value = numeroFormatado;
}

function documentFormat(input) {
    const cpf = input.value.replace(/\D/g, '');
    const cpfFormatado = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
    input.value = cpfFormatado;
}