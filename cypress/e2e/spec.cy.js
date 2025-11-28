describe('Calculator Functionality', () => {
  beforeEach(() => {
    // Visit the home page before each test to ensure a clean state
    cy.visit('http://localhost:3000');
  });

  it('Addition: verifies that 5 + 3 equals 8', () => {
    cy.get('#btn-5').click();
    cy.get('#btn-add').click();
    cy.get('#btn-3').click();
    cy.get('#btn-eq').click();

    cy.get('#display').should('have.value', '8');
  });

  it('Subtraction: verifies that 10 - 4 equals 6', () => {
    cy.get('#btn-1').click();
    cy.get('#btn-0').click();
    cy.get('#btn-sub').click();
    cy.get('#btn-4').click();
    cy.get('#btn-eq').click();

    cy.get('#display').should('have.value', '6');
  });

  it('Multiplication: verifies that 6 * 7 equals 42', () => {
    cy.get('#btn-6').click();
    cy.get('#btn-mul').click();
    cy.get('#btn-7').click();
    cy.get('#btn-eq').click();

    cy.get('#display').should('have.value', '42');
  });

  it('Division: verifies that 15 / 3 equals 5', () => {
    cy.get('#btn-1').click();
    cy.get('#btn-5').click();
    cy.get('#btn-div').click();
    cy.get('#btn-3').click();
    cy.get('#btn-eq').click();

    cy.get('#display').should('have.value', '5');
  });
});