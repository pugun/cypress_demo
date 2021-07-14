
describe("My First Test", () => {
  // beforeEach(() => {
  //   cy.server();

  //   cy.route(
  //     "POST",
  //     "https://jsonplaceholder.typicode.com/posts",
  //     { foo: "bar" },
  //   ).as("postedCountry");

  //   // cy.intercept({
  //   //   method: 'POST',
  //   //   url: 'https://jsonplaceholder.typicode.com/posts',
  //   //   response: {foo: 'bar'},
  //   // }).as('postForm')
  // });

  it("Visits the Kitchen Sink", () => {
    cy.visit("http://localhost:3000/");

    cy.get("[data-cy=name_input").type("pasagorn saengsawang");

    cy.get("[data-cy=email_input").type("pasasgorn@hotmail.com");

    cy.get("[data-cy=age_input").type("45");

    cy.get("[data-cy=website_input").type("www.pasagorn.com");

    cy.get("[data-cy=introduction_input").type("type a long long introduction");

    cy.get("[data-cy=dropdown]").click();

    cy.get("[data-cy=dropdown_v1]").click();
    

    cy.get("[data-cy=submit_btn").click();

    cy.intercept("https://jsonplaceholder.typicode.com/posts").as("postForm");

    cy.wait("@postForm").then(intercept => {
      const { body } = intercept.request

      assert.equal(body.name, "pasagorn saengsawang");
      assert.equal(body.email, "pasasgorn@hotmail.com");
      expect(body.age).to.be.at.least(18)
      assert.equal(body.website, "www.pasagorn.com");
      assert.equal(body.introduction, "type a long long introduction");
      assert.equal(body.dropdown, "jack");

      console.log('intercept',intercept);

    }) 

    // cy.wait('@postedCountry').then((xhr) => {
    //   const { body } = xhr.request

    //   console.log(xhr);
    //   console.log(body);
    //   assert.equal(body.name, "pasagorn saengsawang")
    // })
  });
});
