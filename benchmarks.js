import { performance } from 'perf_hooks'
import { groupBy, groupByKeys } from './groupBy.js';

// Sample data
const data = Array.from({ length: 1000000 }, (_, i) => ({
    organizationId: Math.floor(i / 1000),
    projectId: Math.floor(i / 100),
    name: `Task ${i}`
}));

// Benchmark
function benchmark(func, label) {
    const start = performance.now();
    func(data);
    const end = performance.now();
    console.log(`${label}: ${(end - start).toFixed(2)}ms`);
}

benchmark(() => groupBy(data), 'Reduce-based implementation');
benchmark(() => groupByKeys(data), 'Object.groupBy-based implementation');

// ❯ node --es-module-specifier-resolution=node benchmarks.js
// Reduce-based implementation: 87.24ms
// Object.groupBy-based implementation: 73.56ms
// ❯ node -v && npm -v && pnpm -v
// v22.11.0
// 10.9.0
// 9.14.2
