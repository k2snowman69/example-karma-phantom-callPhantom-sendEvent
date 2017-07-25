describe('Test run', function() {

    it("Always succeeds", function() {
        expect(true).to.be.true;
    });

    it('Test window name and fire log', function() {
        // This is what I eventually want to have work
        expect(window.callPhantom).to.exist;
        window.callPhantom({ type: 'log' });
        
        // Why does this fail?
        expect(window.name).to.equal("my-window");
    });
});
