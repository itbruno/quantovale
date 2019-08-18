import Validate from './Validate';

export default class Quantocusta {
    
    constructor() {
        this.inputSalary = document.getElementById('salario');
        this.inputDays = document.getElementById('dias');
        this.inputHours = document.getElementById('horas');

        this.total = 0;
        this.resultContent = document.getElementById('resultado');
    }

    // Total value from all data inputed
    result() {
        this.total = (parseFloat(this.inputSalary.value) / this.inputDays.value) / this.inputHours.value;
    }

    showResult() {
        this.resultContent.classList.remove('hide');
        document.querySelector('.calculoFinal').innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(this.total);
    }

    // Events handle in app
    eventsHandle() {
        let submitButton = document.querySelector('.js-submit');
        
        submitButton.onclick = (e) => {
            e.preventDefault();
            
            if(
                Validate(this.inputSalary, this.inputDays, this.inputHours)
            ) {
                this.result();
                this.showResult(this.total);
            }
        }
    }

    init() {
        this.eventsHandle();
    }
}