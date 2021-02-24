import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService{
  /**
   * 模拟数据库服务器
   */
  createDb() {
    const users = [
      {id: 11, name: '王五'},
      {id: 12, name: '李四'},
      {id: 13, name: '李五'},
      {id: 14, name: '李七'},
      {id: 15, name: '李八'},
      {id: 16, name: '李九'},
      {id: 17, name: '胡漢三'},
      {id: 18, name: '張三'}
    ];
    return {users};
  }
  constructor() { }
}
