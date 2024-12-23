describe('template spec', () => {

  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('http://localhost:5173/');
  });

  it('Test all buttons', () => {
    cy.get('button[data-testid="cell-0"]').click();
    cy.get('button[data-testid="cell-0"]').should('have.text', 'X');
    
    cy.get('button[data-testid="cell-1"]').click();
    cy.get('button[data-testid="cell-1"]').should('have.text', 'O');
    
    cy.get('button[data-testid="cell-2"]').click();
    cy.get('button[data-testid="cell-2"]').should('have.text', 'X');
    
    cy.get('button[data-testid="cell-3"]').click();
    cy.get('button[data-testid="cell-3"]').should('have.text', 'O');
    
    cy.get('button[data-testid="cell-4"]').click();
    cy.get('button[data-testid="cell-4"]').should('have.text', 'X');
    
    cy.get('button[data-testid="cell-5"]').click();
    cy.get('button[data-testid="cell-5"]').should('have.text', 'O');
    
    cy.get('button[data-testid="cell-7"]').click();
    cy.get('button[data-testid="cell-7"]').should('have.text', 'X');

    cy.get('button[data-testid="cell-6"]').click();
    cy.get('button[data-testid="cell-6"]').should('have.text', 'O');
    
    cy.get('button[data-testid="cell-8"]').click();
    cy.get('button[data-testid="cell-8"]').should('have.text', 'X');
    
    cy.contains('h2', 'Winner: ').should('be.visible');
    cy.contains('h2', 'X').should('be.visible');
  });

  it('Test X player win', () => {
    cy.get('button[data-testid="cell-0"]').click();

    cy.get('button[data-testid="cell-1"]').click();

    cy.get('button[data-testid="cell-3"]').click();

    cy.get('button[data-testid="cell-4"]').click();

    cy.get('button[data-testid="cell-6"]').click();

    cy.contains('h2', 'Winner: ').should('be.visible');
    cy.contains('h2', 'X').should('be.visible');
  });

  it('Test O player win', () => {
    cy.get('button[data-testid="cell-0"]').click();

    cy.get('button[data-testid="cell-1"]').click();

    cy.get('button[data-testid="cell-3"]').click();

    cy.get('button[data-testid="cell-4"]').click();

    cy.get('button[data-testid="cell-2"]').click();

    cy.get('button[data-testid="cell-7"]').click();

    cy.contains('h2', 'Winner: ').should('be.visible');
    cy.contains('h2', 'O').should('be.visible');
  });

  it('Test restart game button', () => {
    cy.get('button[data-testid="cell-0"]').click();
    cy.get('button[data-testid="cell-1"]').click();
    cy.get('button[data-testid="cell-2"]').click();
    cy.get('button[data-testid="cell-3"]').click();
    cy.get('button[data-testid="cell-4"]').click();
    cy.get('button[data-testid="cell-5"]').click();
    cy.get('button[data-testid="cell-7"]').click();
    cy.get('button[data-testid="cell-6"]').click();
    cy.get('button[data-testid="cell-8"]').click();

    cy.get('button[data-testid="restart-button"]').click();

    cy.get('button[data-testid="cell-0"]').should('have.text', '');
    cy.get('button[data-testid="cell-1"]').should('have.text', '');
    cy.get('button[data-testid="cell-2"]').should('have.text', '');
    cy.get('button[data-testid="cell-3"]').should('have.text', '');
    cy.get('button[data-testid="cell-4"]').should('have.text', '');
    cy.get('button[data-testid="cell-5"]').should('have.text', '');
    cy.get('button[data-testid="cell-6"]').should('have.text', '');
    cy.get('button[data-testid="cell-7"]').should('have.text', '');
    cy.get('button[data-testid="cell-8"]').should('have.text', '');

    cy.contains('h2', 'Next Player: ').should('be.visible');
    cy.contains('h2', 'X').should('be.visible');
  });
})