describe('Test run', function() {
    var container;

    beforeEach(function() {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(function() {
    });

    it("Always succeeds", function() {
        expect(true).to.be.true;
    });

    it('Test getting a screenshot', function() {
        // Setup a div with a color so the image contains something
        var tab1 = document.createElement("div");
        tab1.style.backgroundColor = 'green';
        tab1.style.height = '50px';
        tab1.style.width = '50px';
        container.appendChild(tab1);

        // Take a screenshot
        window.callPhantom({ type: 'render'});
    });    

    it('Test tabbing in the browser', function() {
        // Setup the container
        var tab1 = document.createElement("div");
        tab1.setAttribute("tabindex", 3);
        container.appendChild(tab1);
        var tab2 = document.createElement("div");
        tab2.setAttribute("tabindex", 2);
        container.appendChild(tab2);

        // Body should be the default active element
        expect(document.activeElement, "body").to.equal(document.body);
        
        // Press the tab event
        window.callPhantom({ type: 'tab' });
        expect(document.activeElement, "tab1").to.equal(tab2);
        
        // Press the tab event
        window.callPhantom({ type: 'tab' });
        expect(document.activeElement, "tab2").to.equal(tab1);
    });
});
