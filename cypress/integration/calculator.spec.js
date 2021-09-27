describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number7').click();
    cy.get('.display').should('contain', '7')
  })

  it('should update the display of running total', () => {
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain', '23')
  })

  it('should update the total', () => {

    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '9')
  })

  it('should do multiple operations', () => {

    cy.get('#number5').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number7').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 66)
  })

  it ('should be able to handle large numbers', () => {

    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('#number7').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number5').click(); 
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 15240729615)
  })

  it('should be able to handle decimals', () => {

    cy.get('#number').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 1.5)
  })

  it('should be able to deal with negative numbers', () => {

    cy.get('#number2').click();
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', -9)
  })

  it('should be able to divide by zero', () => {

    cy.get('#number5').click();
    cy.get('#number0').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Void')
  })
})