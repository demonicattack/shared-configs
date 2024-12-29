import { describe, expect, it } from 'vitest';

import { determineBase } from './determine-base';

describe('determineBase', () => {
    it('should return /shared-configs/ when string is undefined', () => {
        const result = determineBase();
        expect(result).toBe('/shared-configs/');
    });

    it('should return /shared-configs/ when string is an empty string', () => {
        const result = determineBase('');
        expect(result).toBe('/shared-configs/');
    });

    it('should return the correct PR path when string is a valid PR reference without /head', () => {
        const prReference = 'refs/pull/44';
        const result = determineBase(prReference);
        expect(result).toBe('/pr/44/');
    });

    it('should return the correct PR path when string is a valid PR reference with /head', () => {
        const prReference = 'refs/pull/44/head';
        const result = determineBase(prReference);
        expect(result).toBe('/pr/44/');
    });

    it('should return /shared-configs/ when string is not a PR reference', () => {
        const branchReference = 'refs/heads/main';
        const result = determineBase(branchReference);
        expect(result).toBe('/shared-configs/');
    });

    it('should return /shared-configs/ when string is an invalid PR reference', () => {
        const invalidReference = 'refs/pull/44/merge';
        const result = determineBase(invalidReference);
        expect(result).toBe('/shared-configs/');
    });
});
