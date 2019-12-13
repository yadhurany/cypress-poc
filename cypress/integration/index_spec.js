describe("Testing Login page", function() {
  beforeEach(() => {
    cy.visit("./index.html")
  });

  it("Should login with success", () => {
    cy.get("#username").type("yadhurany");
    cy.get("#password").type("1senha");
    cy.get("#login").click();
    cy.wait(200);
    cy.location("href").should("contains", "/logado.html");
  });

  it("Should display an alert because the password pattern does not match", () => {
    cy.get("#username").type("yadhurany");
    cy.get("#password").type("senha-invalida");
    const stub = cy.stub()

    cy.on("window:alert", stub)
    cy.get("#login").click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Campo Senha invalido!");
      });
    
  });
})