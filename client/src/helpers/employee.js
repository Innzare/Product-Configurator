import { generateRandomId } from '@/helpers/common';

export class Employee {
  constructor() {
    this.name = '';
    this.surname = '';
    this.experience = '';
    this.age = '';
    this.address = '';
    this.id = generateRandomId();
  }
}
