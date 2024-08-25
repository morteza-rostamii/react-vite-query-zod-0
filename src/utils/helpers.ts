import { v4 as uuidv4 } from 'uuid';

export const helper = {

  generateId() {
    return uuidv4(); 
  }
}