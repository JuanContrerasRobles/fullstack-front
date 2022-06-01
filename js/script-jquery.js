$(function(){
    $("#formulario").submit(function(event){
        if ($("#Nombre").val() === "") {
            $("#LabelNombre").css("color","#ff0000");
            event.preventDefault();
        }
        
        if($("#Apellidos").val() === ""){
            $("#LabelApellidos").css("color","#ff0000");
            event.preventDefault();
        }

        $("#Nombre").focus(function(){
            $("#LabelNombre").css("color","#000");
        })

        $("#Apellidos").focus(function(){
            $("#LabelApellidos").css("color","#000");
        })
    })
})

$("#tamaño").on('change',function(){
    console.log(this.value);
        $.ajax({
            type: "POST",
            url: "http://localhost:5000/checksize",
            success: function(resultado){
                $("#resultado_tamaño").text(resultado)
            }
        })
})
