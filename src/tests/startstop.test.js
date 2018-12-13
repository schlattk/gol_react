import initializer from '../initializer';
import startStop from '../startstop';
import index from '../index'
describe('setInterval startstop function', () => {
  beforeEach( () => {
    jest.useFakeTimers();
  });
  afterEach( () => {
    jest.clearAllTimers()
  });
  it('calls setInterval with startStop.run after 500ms', () => {
    spyOn(index.printer, 'print');
    initializer.init(40, 40)
    startStop.run();
    jest.advanceTimersByTime(600);
    expect((index.printer.print).calls.count()).toEqual(2);
  });
  it('printer gets called every 500 ms', () => {
    spyOn(index.printer, 'print');
    initializer.init(40, 40);
    startStop.run();
    jest.advanceTimersByTime(1000);
    expect((index.printer.print).calls.count()).toEqual(3);
  });
  it('startstop function stops setInterval', () => {
    spyOn(index.printer, 'print');
    initializer.init(40, 40);
    startStop.run();
    jest.advanceTimersByTime(1000);
    startStop.stop();
    jest.advanceTimersByTime(2000);
    expect((index.printer.print).calls.count()).toEqual(3);
  });
});
