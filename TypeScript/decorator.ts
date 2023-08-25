//decorators servem para decorar nomes de funções para serem usadas
function ExibirNome(target: any){
    console.log(target);
};

@ExibirNome
class Funcionario{
    
}