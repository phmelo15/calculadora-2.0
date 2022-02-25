function somarf(){
    let s1 = document.getElementById('somar1')
    let s2 = document.getElementById('somar2')
    let somar1 = Number(s1.value)
    let somar2 = Number(s2.value)
    let somaf = somar1 + somar2
    document.getElementById('res1').value = somaf
}
function subtrairf(){
    let su1 = document.getElementById('subtrair1')
    let su2 = document.getElementById('subtrair2')
    let sub1 = Number(su1.value)
    let sub2 = Number(su2.value)
    let subf = sub1 - sub2
    document.getElementById('res2').value = subf
}
function multiplicarf(){
    let m1 = document.getElementById('multiplicar1')
    let m2 = document.getElementById('multiplicar2')
    let mult1 = Number(m1.value)
    let mult2 = Number(m2.value)
    let multf = mult1 * mult2
    document.getElementById('res3').value = multf
}
function dividirf(){
    let d1 = document.getElementById('dividir1')
    let d2 = document.getElementById('dividir2')
    let divid1 = Number(d1.value)
    let divid2 = Number(d2.value)
    let dividf = divid1 / divid2
    document.getElementById('res4').value = dividf
}