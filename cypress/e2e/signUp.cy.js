//This function is to describe my automation test process
describe('signUp to konga', () => { 
it('should be able to signUp', () => {
    cy.visit('https://www.konga.com/')
    cy.get('._12e27_1r3kc > ._7ad32_SD12Y').click()
    cy.get('._1dce2_MjLDv > a').click()
    cy.get('#firstname').type('QavDev')
    cy.get('#lastname').type('limited')
    cy.get('#email').type('remotebillyxx@yopmail.com', {log: false})
    cy.get('#phone').type('08100484805')
    cy.get(':nth-child(6) > #password').type('moneyanswersallthings', {log: false})
    cy.get('.d563b_2w5FH > ._2aac2_3bwnD > ._0a08a_3czMG').click()
  })
})
