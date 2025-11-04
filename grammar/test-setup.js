// test-setup.js
import 'fake-indexeddb/auto';
import { IDBFactory } from 'fake-indexeddb';

// Ensure IndexedDB is available globally
if (!globalThis.indexedDB) {
  globalThis.indexedDB = new IDBFactory();
}