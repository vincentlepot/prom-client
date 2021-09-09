'use strict';
const Histogram = require('../histogram');

let perf_hooks;

try {
	// eslint-disable-next-line
	perf_hooks = require('perf_hooks');
} catch {
	// node version is too old
}

const NODEJS_GC_DURATION_SECONDS = 'nodejs_gc_duration_seconds';
const DEFAULT_GC_DURATION_BUCKETS = [0.001, 0.01, 0.1, 1, 2, 5];

const kinds = [];
kinds[perf_hooks.constants.NODE_PERFORMANCE_GC_MAJOR] = 'major';
kinds[perf_hooks.constants.NODE_PERFORMANCE_GC_MINOR] = 'minor';
kinds[perf_hooks.constants.NODE_PERFORMANCE_GC_INCREMENTAL] = 'incremental';
kinds[perf_hooks.constants.NODE_PERFORMANCE_GC_WEAKCB] = 'weakcb';

module.exports = () => {
	return;
};

module.exports.metricNames = [NODEJS_GC_DURATION_SECONDS];
