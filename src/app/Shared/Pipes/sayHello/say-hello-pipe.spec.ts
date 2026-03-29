import { SayHelloPipe } from './say-hello-pipe';

describe('SayHelloPipe', () => {
  it('create an instance', () => {
    const pipe = new SayHelloPipe();
    expect(pipe).toBeTruthy();
  });
});
