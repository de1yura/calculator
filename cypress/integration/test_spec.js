//npm i cypress --save-dev

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe('The Main Page', () => {
  it('The page loads successfully', () => {
    cy.visit('http://127.0.0.1:5501')
  })
})

describe('Basic Operator Test', () => {
  it('Should check 7+2=9', () => {
    //Arrange
    cy.visit('http://127.0.0.1:5501')

    //Act
    cy.get('.7').click();
    cy.get('#plus').click();
    cy.get('.2').click();
    cy.get('.equals').click();

    //Assert
    cy.get('.display1').should("have.value", 9)
  })

  it('Should check 8-3=5', () => {
    //Arrange
    cy.visit('http://127.0.0.1:5501')

    //Act
    cy.get('.8').click();
    cy.get('#minus').click();
    cy.get('.3').click();
    cy.get('.equals').click();

    //Assert
    cy.get('.display1').should("have.value", 5)
  })

  it('Should check 6*7=42', () => {
    //Arrange
    cy.visit('http://127.0.0.1:5501')

    //Act
    cy.get('.6').click();
    cy.get('#multiply').click();
    cy.get('.7').click();
    cy.get('.equals').click();

    //Assert
    cy.get('.display1').should("have.value", 42)
  })

  it('Should check 9/3=3', () => {
    //Arrange
    cy.visit('http://127.0.0.1:5501')

    //Act
    cy.get('.9').click();
    cy.get('#divide').click();
    cy.get('.3').click();
    cy.get('.equals').click();

    //Assert
    cy.get('.display1').should("have.value", 3)
  })
})