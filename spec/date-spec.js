import {Person} from './../src/Person.js';

describe('Date', function() {
    it('should test whether for correct date', function() {
        var date = new Person("17/6/1984");
        expect(date.day).toEqual(17);
        expect(date.month).toEqual(6);
        expect(date.year).toEqual(1984);
    });
    it('should check fo correct age', function() {
        var date = new Person("17/6/1984");
        date.age();
        
        expect(date.age).toEqual(33);
    });
    it('should check for your age in seconds', function() {
        var date = new Person("17/6/1984");
        date.age();
        
        var answer = date.ageInSeconds();
        expect(date.age).toEqual(1040688000);
        expect(answer).toEqual(1040588000);
    });
    it('should check for your age on mercury', function() {
        var date = new Person("17/6/1984");
        var answer = date.ageOnMercury();
        expect(date.age).toEqual(141);
        expect(answer).toEqual(41);
    });
    it('should check for your age on Venus', function() {
        var date = new Person("17/6/1984");
        var answer = date.ageOnVenus();
        expect(date.age).toEqual(54);
        expect(answer).toEqual(4);
    });
    it('should check for your age on Mars', function() {
        var date = new Person("17/6/1984");
        var answer = date.ageOnMars();
        expect(date.age).toEqual(18);
        expect(answer).toEqual(1);
    });
    it('should check for your age on Jupiter', function() {
        var date = new Person("17/6/1984");
        var answer = date.ageOnJupiter();
        expect(date.age).toEqual(2);
        expect(answer).toEqual(1);
    });
});