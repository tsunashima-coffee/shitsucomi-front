import MockAdapter from 'axios-mock-adapter';

let data = [
  { id: '1', body: '朝ごはん食べた' },
  { id: '2', body: '昼ごはん食べた' },
  { id: '3', body: '夜ごはん食べた' },
];

export default {
  run: client => {
    const mock = new MockAdapter(client);
    mock.onGet('/todos').reply(200, data);
  }
}
