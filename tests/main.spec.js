import { expect } from 'chai';
import FizzBuzz from '../src/main';

describe('FizzBuzz', () => {

  // Smoke Test
  describe('Smoke Tests', () => {

    it('should exist the "FizzBuzz" module', () => {
      expect(FizzBuzz).to.exist;
      expect(FizzBuzz).to.be.a('function');
    });

  });

  describe('FizzBuzz', () => {

    it('should return "Fizz" when "FizzBuzz(3)"', () => {
      expect(FizzBuzz(3)).to.be.equal('Fizz');
    });

    it('should return "Buzz" when "FizzBuzz(5)"', () => {
      expect(FizzBuzz(5)).to.be.equal('Buzz');
    });

    it('should return "FizzBuzz" when "FizzBuzz(15)"', () => {
      expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
    });

    it('should return "7" when "FizzBuzz(7)"', () => {
      expect(FizzBuzz(7)).to.be.equal(7);
    });

    it('should return "0" when "FizzBuzz(0)"', () => {
      expect(FizzBuzz(0)).to.be.equal(0);
    });

  });

});
