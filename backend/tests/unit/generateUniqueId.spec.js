const gerenateUniqueID = require('../../src/utils/generateUniqueId')
describe('Generate Unique ID', () => {
  it('should generate an unique ID', () => {
    const id = gerenateUniqueID();

    expect(id).toHaveLength(8);
  });
});