import test from 'node:test';
import assert from 'node:assert/strict';
import {
  AUSTIN_SERVICES,
  calculateInstantEstimate,
  validateLeadForm
} from './estimateCalculator';

test('AUSTIN_SERVICES contains all 4 required lawn care services', () => {
  assert.equal(AUSTIN_SERVICES.length, 4);
  const titles = AUSTIN_SERVICES.map((s) => s.title);
  assert.deepEqual(titles, [
    'Lawn Mowing & Maintenance',
    'Weed Control & Texas Fertilization',
    'Mulching & Flower Bed Upkeep',
    'Aeration'
  ]);
});

test('validateLeadForm rejects empty or malformed fields with descriptive errors', () => {
  const emptyResult = validateLeadForm({
    name: '',
    phone: '512',
    address: 'Austin',
    serviceType: 'Lawn Mowing & Maintenance'
  });

  assert.equal(emptyResult.isValid, false);
  assert.ok(emptyResult.errors.name);
  assert.ok(emptyResult.errors.phone);
  assert.ok(emptyResult.errors.address);
});

test('validateLeadForm accepts valid Austin homeowner lead input', () => {
  const validResult = validateLeadForm({
    name: 'Sarah Jenkins',
    phone: '(512) 555-0194',
    address: '2408 Windsor Rd, Austin, TX 78703',
    serviceType: 'Weed Control & Texas Fertilization'
  });

  assert.equal(validResult.isValid, true);
  assert.deepEqual(validResult.errors, {});
});

test('calculateInstantEstimate computes deterministic pricing and applies weekly route discount', () => {
  const biweeklyQuote = calculateInstantEstimate({
    serviceType: 'Lawn Mowing & Maintenance',
    lotSizeSqFt: 7500,
    frequency: 'biweekly',
    address: '2408 Windsor Rd'
  });

  const weeklyQuote = calculateInstantEstimate({
    serviceType: 'Lawn Mowing & Maintenance',
    lotSizeSqFt: 7500,
    frequency: 'weekly',
    address: '2408 Windsor Rd'
  });

  assert.ok(biweeklyQuote.estimatedPerVisit > weeklyQuote.estimatedPerVisit);
  assert.ok(biweeklyQuote.estimatedRangeLow <= biweeklyQuote.estimatedPerVisit);
  assert.ok(biweeklyQuote.estimatedRangeHigh >= biweeklyQuote.estimatedPerVisit);
  assert.equal(biweeklyQuote.referenceCode, 'AEL-2408-7500');
});

test('calculateInstantEstimate scales price with lot square footage across all 4 services', () => {
  const smallLot = calculateInstantEstimate({
    serviceType: 'Aeration',
    lotSizeSqFt: 4500,
    frequency: 'seasonal'
  });
  const largeLot = calculateInstantEstimate({
    serviceType: 'Aeration',
    lotSizeSqFt: 12000,
    frequency: 'seasonal'
  });

  assert.ok(largeLot.estimatedPerVisit > smallLot.estimatedPerVisit);
  assert.equal(smallLot.includedChecklist.length, 4);
});
