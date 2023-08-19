function idade(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ("txtano")
    var res = document.getElementById ("res")
    var img = document.getElementById ("foto")
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    }else{
        var sex = document.getElementsByName ("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        if (sex[0].checked){
            genero = "Homem"
            if(idade >= 0 && idade < 12){
                //Criança
                img.setAttribute("src", "criançamas.png")
            }else if(idade < 18){
                //Adolescente
                img.setAttribute("src", "jovemmas.png")
            }else if(idade < 60){
                //Adulto
                img.setAttribute("src", "adultomas.png")
            }else if(idade < 120){
                //Idoso
                img.setAttribute("src", "idosomas.png")
            }else{
                //TITAN
                img.setAttribute("src", "zumbi.gif")
            }
        }else if (sex[1].checked){
            genero = "Mulher"
            if(idade < 12){
                img.setAttribute("src", "criançafem.png")
            }else if(idade < 18){
                img.setAttribute("src", "jovemfem.png")
            }else if(idade < 60 ){
                img.setAttribute("src", "adultofem.png")         
            }else if(idade < 120){
                img.setAttribute("src", "idosofem.png")
            }else{
                img.setAttribute("src", "zumbi.gif")
            }
        }
        res.innerHTML = (`Detectamos ${genero} com ${idade} anos`)
    res.style.textAlign = "center"
    res.appendChild(img)
    }
    
}