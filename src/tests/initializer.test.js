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
    jest.spyOn(index.printer, 'print').mockImplementation(() => {});
    initializer.init(40,40)
    expect(index.printer.print).toHaveBeenCalledWith(expect.any(Array))
  })
  it('should have called the printer function with move', () => {
    jest.spyOn(index.printer, 'print').mockImplementation(() => {});
    initializer.call()
    expect(index.printer.print).toHaveBeenCalledWith(expect.any(Array))
  })
});
describe('Initializer Make facility', () => {
  it('should have called the printer function with blank', () => {
    jest.spyOn(index.printer, 'print').mockImplementation(() => {});
    initializer.blank(40,40)
    expect(index.printer.print).toHaveBeenCalledWith(expect.any(Array))
  })
});
