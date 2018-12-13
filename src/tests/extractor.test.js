import index from '../index';
describe('extractor', () => {
    beforeEach(function() {
        document.body.innerHTML = 
            '<div id = "grid">' +
            '<div class = "square--grey" width = "15" height = "15"></div>' +
            '<div class = "square--green" width = "15" height = "15"></div>' +
            '<div class = "square--grey" width = "15" height = "15"></div>' +
            '<div class = "square--green" width = "15" height = "15"></div>' +
            '</div>'
    });
    afterEach(function() {
        document.body.innerHTML = '';
    });
  it('should have an extract method', () => {
    expect(index.extractor.extract).toBeDefined();
  });
  it('should return an array', () => {
    let list = index.extractor.extract()
    expect(list).toEqual(jasmine.any(Array));
  });
  it('array should have two arrays', () => {
    let list = index.extractor.extract();
    expect(list[0]).toEqual(jasmine.any(Array));
  });
  it('array should have a length of two', () => {
    let list = index.extractor.extract();
    expect(list[0].length).toBe(2);
  })
  it('array should have a length of two', () => {
    let list = index.extractor.extract();
    expect(list[0][0]).toBe('O');
  });
  it('array should have a length of two', () => {
    let list = index.extractor.extract();
    expect(list[1][1]).toBe('X');
  });
});
