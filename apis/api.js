import axios from 'axios';
import mock from './mock/api';

export const client = axios.create({
  baseURL: 'https://test.com/url/of/your/api',
})

// モック起動
if (JSON.parse(process.env.VUE_APP_USE_MOCK)) {
  mock.run(client);
}

export default {
  /**
   * Todoリスト取得API
   * 結果はPromiseを返してハンドリングする
   * @param {Object} params パラメータ
   */
  getTodos (params) {
    return client.get('/todos', params);
  }
}

// export default HelloWorld;
