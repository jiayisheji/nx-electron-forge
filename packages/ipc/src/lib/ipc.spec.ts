import { ipc } from './ipc.js';

describe('ipc', () => {
  it('should work', () => {
    expect(ipc()).toEqual('ipc');
  });
});
