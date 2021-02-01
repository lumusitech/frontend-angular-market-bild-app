import { TypePipe } from './type.pipe';

describe('FoodPipe', () => {
  it('create an instance', () => {
    const pipe = new TypePipe();
    expect(pipe).toBeTruthy();
  });
});
