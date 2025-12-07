import { describe, expect, it } from 'vitest';
import { buildTrackingLink } from '../src';

describe('buildTrackingLink', () => {
  it('builds DHL link with extras', () => {
    const url = buildTrackingLink({
      carrier: 'dhl',
      orderId: '123',
      extra: { locale: 'th', source: 'app' }
    });
    expect(url).toContain('https://www.dhl.com/th-en/home/tracking.html');
    expect(url).toContain('tracking-id=123');
    expect(url).toContain('locale=th');
    expect(url).toContain('source=app');
  });

  it('builds FedEx link with extras', () => {
    const url = buildTrackingLink({
      carrier: 'fedex',
      orderId: 'ABC',
      extra: { locale: 'th', priority: 1 }
    });
    expect(url).toContain('https://www.fedex.com/fedextrack');
    expect(url).toContain('trknbr=ABC');
    expect(url).toContain('locale=th');
    expect(url).toContain('priority=1');
  });

  it('builds UPS link with extras', () => {
    const url = buildTrackingLink({
      carrier: 'ups',
      orderId: 'ZXCV',
      extra: { lang: 'en' }
    });
    expect(url).toContain('https://www.ups.com/track');
    expect(url).toContain('trackNums=ZXCV');
    expect(url).toContain('lang=en');
  });

  it('throws for unsupported carrier', () => {
    // @ts-expect-error forcing unsupported carrier for runtime coverage
    expect(() => buildTrackingLink({ carrier: 'foo', orderId: '1' })).toThrow(
      /Unsupported carrier: foo/
    );
  });
});

