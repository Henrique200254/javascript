class Produto {
    constructor () {
      this.id = 1
      this.arrayproduto = []
      this.editID = null
    }
    salvar () {
       let produto = this.lerDados()
       console.log(produto)
       if (this.validaCampos(produto) == true) {
           if (this.editID === null) {
                this.adicionar(produto)
           } else {
                this.atualizar(this.editID, produto)
           }
        
       }
       this.listaTabela()
       this.cancelar()
    }

    listaTabela() {
        let tbody = document.querySelector('tbody#tbody')
        tbody.innerText = ''
        for (let i = 0; i < this.arrayproduto.length; i++) {
            let tr = tbody.insertRow()

            let td_id = tr.insertCell()
            let td_produto = tr.insertCell()
            let td_valor = tr.insertCell()
            let td_acoes = tr.insertCell()

            td_id.innerText = this.arrayproduto[i].id
            td_produto.innerText = this.arrayproduto[i].nome
            td_valor.innerText = this.arrayproduto[i].valor


            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/favicon.png';
            imgEdit.setAttribute("onclick", "produto.editar(" + JSON.stringify(this.arrayproduto[i]) +")")

            let imgDelete = document.createElement('img')
            imgDelete.src = 'img/excluir.png'
            imgDelete.setAttribute("onclick", "produto.deletar(" + this.arrayproduto[i].id + ")")
            
            td_acoes.appendChild(imgDelete)
            td_acoes.appendChild(imgEdit);

            console.log(this.arrayproduto)
            
        }
    }

    adicionar(produto) {
        produto.valor = parseFloat(produto.valor)
       this.arrayproduto.push(produto)
       this.id++
    }

    atualizar(id, produto) {
       for (let i = 0; i < this.arrayproduto.length; i++) {
        if (this.arrayproduto[i].id == id) {
            this.arrayproduto[i].nome = produto.nome
            this.arrayproduto[i].valor = produto.valor
        }
       }
    }

    editar(dados) {
        this.editID = dados.id

        document.querySelector('input#produto').value = dados.nome
        document.querySelector('input#valor').value = dados.valor
        
        document.getElementById('btn1').innerText = 'Atualizar'
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
        document.getElementById('produto').value = ''
        document.getElementById('valor').value = ''

        document.getElementById('btn1').innerText = 'Salvar'
        this.editID = null
        
    }

    deletar(id) {
        if (confirm('Deseja realmente deletar o produto do ID' + id)) {
             
        
          let tr = tbody.insertRow()
          for (let i = 0; i < this.arrayproduto.length; i++) {
            if (this.arrayproduto[i].id == id) {
                 this.arrayproduto.splice(i, 1)
                 tbody.deleteRow(i)
            }
          }
          console.log(this.arrayproduto)
        }
    }
}

var produto = new Produto()