const nom = document.getElementById("nome");
const tel = document.getElementById("telefone");
const em = document.getElementById("email");
const alt = document.getElementById("altura");
const larg = document.getElementById("largura");
const ar = document.getElementById("area");
const largj = document.getElementById("larguraJanela");
const altj = document.getElementById("alturaJanela");
const arj = document.getElementById("areaJanela");
const largp = document.getElementById("larguraPorta");
const altp = document.getElementById("alturaPorta");
const arp = document.getElementById("areaPorta");
const art = document.getElementById("areaTotal");
const rend = document.getElementById("rendimento");
const dem = document.getElementById("demao");
const quant = document.getElementById("quantidade");
const botao = document.getElementById("b1");
const r = document.getElementById('resp');

botao.addEventListener('click',() => {
    let n  = nom.value;
    let altura = Number(alt.value);
    let largura = Number(larg.value);
    let area = (altura*largura);
    
    let alturaJanela = Number(altj.value);
    let larguraJanela = Number(largj.value);
    let areaJanela = (alturaJanela*larguraJanela);

    let alturaPorta = Number(altp.value);
    let larguraPorta = Number(largp.value);
    let areaPorta = (alturaPorta*larguraPorta);

    let areaTotal = (area-areaJanela-areaPorta);

    let demao = Number(dem.value);
    let rendimento = Number(rend.value);
    let quant = (areaTotal*demao)/rendimento;
  
    r.innerHTML = `${n} <br>
     <br>
    <p> A quantidade de tinta a ser usada é: <br> 
     ${quant.toFixed(2)} litros`
});