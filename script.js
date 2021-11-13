//Jquery carousel
$(document).ready(function(){

    $(".owl-carousel").owlCarousel({
        items: 6,
        loop: true,
        margin: 10,
        autoplay: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

});

$(document).ready(function(){

    $("#text1").on("mouseover", function(){
        
        $("#text1").addClass("efeito");

    }).on("mouseout", function(){

        $("#text1").removeClass("efeito");
        
    });

});

//Banco de dados
var fields = document.querySelectorAll("#register [name]");
var user = {};

function addLine(dataUser){

    var tr = document.createElement("tr");

    tr.innerHTML = `
        <tr>
            <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
            <td>${dataUser.name}</td>
            <td>${dataUser.email}</td>
            <td>${dataUser.admin}</td>
            <td>${dataUser.birth}</td>
            <td>
                <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
        </tr>
    
    `;

}

document.getElementById("register").addEventListener("submit", function(event){

    event.preventDefault();

    fields.forEach(function(field, index){

        if (field.name == "name") {

            user[field.name] = field.value;
            
        } else {

            user[field.name] = field.value;

        }

    });

    addLine(user);

});