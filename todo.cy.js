context('TodoMVC', () => {
  it('Adicionar uma nova tarefa', () => {
      cy.visit ('https://todomvc-app-for-testing.surge.sh/')
      cy.get('input.new-todo').type('Estudar automação de testes')
      cy.get('ul.todo-list').should('have.length', 1)
      
  })
}) 