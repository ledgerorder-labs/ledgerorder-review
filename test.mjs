import test from 'node:test';import assert from 'node:assert/strict';import {render} from './index.mjs';
test('untrusted report strings cannot inject markup',()=>{const h=render({schemaVersion:1,kind:'ledgerorder-audit',status:'<script>alert(1)</script>'});assert.ok(!h.includes('<script>'));assert.ok(h.includes('&lt;script&gt;'))});
test('unknown report schema is rejected',()=>assert.throws(()=>render({schemaVersion:2}),/versioned/));
