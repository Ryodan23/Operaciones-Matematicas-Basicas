$(document).ready(function(){

    //Funciones
    setTimeout(function () { 
        cargaDatos();
    },6000)
    
    //Suma
    $('#btnSumar').click(function (e) { 
        // e.preventDefault();

        let valor1 = $('#number1Sum').val();
        let valor2 = $('#number2Sum').val();

        if(!valor1.length || !valor2.length){
            Swal.fire('Advertencia','Los valores no pueden estar vacíos','warning')
        }else{
            let num1 = parseFloat(valor1);
            let num2 = parseFloat(valor2);

            let total = num1 + num2;
            $('#ResultSum').val(total);            
        }
    });

    //Calcula Total Suma
    $('#number2Sum').bind("keyup", function () {

        var num1 = parseFloat($('#number1Sum').val());
        var num2 = parseFloat($(this).val());

        var total = num1 + num2;
        $('#TotalS').val(total);
    });

    //Resta
    $('#btnRestar').click(function (e) { 
        // e.preventDefault();

        let valor1 = $('#number1Res').val();
        let valor2 = $('#number2Res').val();

        if(!valor1.length || !valor2.length){
            Swal.fire('Advertencia','Los valores no pueden estar vacíos','warning')
        }else{
            let num1 = parseFloat(valor1);
            let num2 = parseFloat(valor2);

            let total = num1 - num2;
            $('#ResultRes').val(total);
        }
    });

    //Calcula Total Resta
    $('#number2Res').bind("keyup", function () {

        var num1 = parseFloat($('#number1Res').val());
        var num2 = parseFloat($(this).val());

        var total = num1 - num2;
        $('#TotalR').val(total);
    });

    //Multiplicación
    $('#btnMultiplicar').click(function (e) { 
        // e.preventDefault();

        let valor1 = $('#number1Mul').val();
        let valor2 = $('#number2Mul').val();

        if(!valor1.length || !valor2.length){
            Swal.fire('Advertencia','Los valores no pueden estar vacíos','warning')
        }else{
            let num1 = parseFloat(valor1);
            let num2 = parseFloat(valor2);

            let total = num1 * num2;
            $('#ResultMul').val(total);
        }
    });

    //Calcula Total Multiplicación
    $('#number2Mul').bind("keyup", function () {

        var num1 = parseFloat($('#number1Mul').val());
        var num2 = parseFloat($(this).val());

        var total = num1 * num2;
        $('#TotalM').val(total);
    });

    //Division
    $('#btnDividir').click(function (e) { 
        // e.preventDefault();

        let valor1 = $('#number1Div').val();
        let valor2 = $('#number2Div').val();

        if(!valor1.length || !valor2.length){
            Swal.fire('Advertencia','Los valores no pueden estar vacíos','warning')
        }else{
            if(valor1==0 || valor2==0){
                Swal.fire('Error','No se puede dividir entre 0','error')
            }else{
                let num1 = parseFloat(valor1);
                let num2 = parseFloat(valor2);
    
                let total = num1 / num2;
                $('#ResultDiv').val(total);
            }
        }
    });

    //Calcula Total Division
    $('#number2Div').bind("keyup", function () {

        var num1 = parseFloat($('#number1Div').val());
        var num2 = parseFloat($(this).val());

        var total = num1 / num2;
        $('#TotalD').val(total);
    });

    function cargaDatos() {

        $.getJSON("../datosDB.json", function (json) {
            for (let i = 0; i < json.length; i++) {
                let datos = JSON.parse(JSON.stringify(json[i]));
                $('#TablaOperaciones').append(`<tr><td>${datos._id}</td><td>${datos.operacion}</td><td>${datos.valores}</td></tr>`);
            }
        });
    }

})