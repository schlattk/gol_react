import initializer from '../initializer';
import index from '../index';
describe('Initializer', () => {
  it('should have an init function', () => {
    expect(initializer.init).toBeDefined();
  });
  it('should have a functionCall function', () => {
    expect(initializer.call).toBeDefined();
  });
  it('should have a blank function', () => {
    expect(initializer.blank).toBeDefined();
  });
  it('should have called the printer function with init', () => {
    spyOn(index.printer, 'print')
    initializer.init(40,40)
    expect(index.printer.print).toHaveBeenCalledWith(jasmine.any(Array))
  })
  it('should have called the printer function with move', () => {
    spyOn(index.printer, 'print')
    initializer.call()
    expect(index.printer.print).toHaveBeenCalledWith(jasmine.any(Array))
  })
});
describe('Initializer Make facility', () => {
  it('should have called the printer function with blank', () => {
    spyOn(index.printer, 'print')
    initializer.blank(40,40)
    expect(index.printer.print).toHaveBeenCalledWith(jasmine.any(Array))
  })
});
