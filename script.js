function adicionarValor(valor) {
    document.getElementById("display").value += valor;
  }
  
  function limparTela() {
    document.getElementById("display").value = "";
  }
  
  function deletar() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0, -1);
  }
  
  function calcular() {
    try {
      let display = document.getElementById("display").value;
      document.getElementById("display").value = eval(display);
    } catch (error) {
      document.getElementById("display").value = "Erro";
    }
  }

  