class Produto {
    constructor () {
      this.id = 1
      this.arrayproduto = []
    }
    salvar () {
       let produto = this.lerDados()
       console.log(produto)
       if (this.validaCampos(produto) == true) {
           alert('salvar')
       }
    }

    lerDados() {
      let produto = {}
      produto.id = this.id
      produto.nome = document.querySelector('input#produto').value
      produto.valor = document.querySelector('input#valor').value
        
      return produto
      
    }

    validaCampos(produto) {
        let msg = ''
        if(produto.nome == '') { 
            msg += `Informe o nome ou valor do produto.\n`

        }

        if (produto.valor == '') {
            msg += `informe o preço do produto.\n`
        }

        if (msg != '') {
            alert(msg)
            return false
        }

       
        return true
    }

    cancelar() {
        
    }
}

var produto = new Produto()