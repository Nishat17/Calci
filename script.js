class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
clear(){
this.currentOperand=''
this.previousOperand=''
this.operation = undefined
}
delete(){
this.currentOperand = this.currentOperand.toString().slice(0,-1)

}

  compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      case 'Sqrt':
        computation = Math.sqrt(prev)
        break
      case 'Exp':
        computation = prev ** current
        break
      case '%':
        computation = prev % current
        break
        case '<<':
        computation = prev << current
        break
        case '>>':
        computation = prev >> current
        break
        case 'sin':
        computation = Math.sin(prev)
        break
        case 'cos':
        computation = Math.cos(current)
        break
        case 'tan':
        computation = Math.tan(current)
        break
        case 'sin-i':
        computation = Math.asin(prev)
        break
        case 'cos-i':
        computation = Math.acos(current)
        break
        case 'tan-i':
        computation = Math.atan(current)
        break
        case 'log(e)':
        computation = Math.log(prev)
        break
        case 'log(10)':
        computation = Math.log10(current)
        break
        case 'log(2)':
        computation = Math.log2(current)
        break
        case 'fact':
        computation = Math.sin(current)
        break
        
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
  }


update(){
this.currentOperandTextElement.innerText=this.display(this.currentOperand)
if (this.operation != null) {
    this.previousOperandTextElement.innerText =
      `${this.display(this.previousOperand)} ${this.operation}`
  } else {
    this.previousOperandTextElement.innerText = ''
  }
}
append(number){
if(number ==='.' && this.currentOperand.includes('.')) return
this.currentOperand = this.currentOperand.toString() + number.toString()
}
choose(operation){
if(this.currentOperand==='') return
if(this.previousOperand!==''){
this.compute()
}
this.previousOperand=this.currentOperand
this.currentOperand=''
this.operation=operation
}

display(number){
    
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
        if (isNaN(integerDigits)) {
          integerDisplay = ''
        } else {
          integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
          return `${integerDisplay}.${decimalDigits}`
        } else {
          return integerDisplay
        }
    }

  }
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.append(button.innerText)
    calculator.update()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.choose(button.innerText)
    calculator.update()
  })
})

equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.update()
})

allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.update()
})

deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.update()
})