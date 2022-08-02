function calcular() {
    cfa = document.getElementById('txta')
    cfb = document.getElementById('txtb')
    cfc = document.getElementById('txtc')

    a = Number(cfa.value)
    b = Number(cfb.value)
    c = Number(cfc.value)

    delta = (b*b - 4*a*c)

    if(delta < 0) {
        raizes.innerHTML = `A função não possui raízes reais pois o valor de delta é igual a ${delta}.`
    } else {
        d = Math.sqrt(delta)
        x1 = (-b + d)/2*a
        x2 = (-b - d)/2*a
        if(x1 = x2) {
            raizes.innerHTML = `A função possui duas raízes iguais a ${x1}.`
        } else {

        raizes.innerHTML = `A função possui duas raízes iguais a x1 = ${x1} e x2 = ${x2}.`
        }
    }
}