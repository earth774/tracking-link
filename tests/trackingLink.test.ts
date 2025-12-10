import { describe, expect, it } from 'vitest';
import { buildTrackingLink } from '../src';

describe('buildTrackingLink', () => {
  it('builds DHL link with extras', () => {
    const url = buildTrackingLink({
      carrier: 'dhl',
      orderId: '123',
      extra: { locale: 'th', source: 'app' },
    });
    expect(url).toContain('https://www.dhl.com/th-en/home/tracking.html');
    expect(url).toContain('tracking-id=123');
    expect(url).toContain('locale=th');
    expect(url).toContain('source=app');
  });

  it('builds Best Express link with extras', () => {
    const url = buildTrackingLink({
      carrier: 'best',
      orderId: 'BEST123456',
      extra: { lang: 'th' },
    });
    expect(url).toContain('https://www.best-inc.co.th/track');
    expect(url).toContain('bills=BEST123456');
    expect(url).toContain('lang=th');
  });

  it('builds DHL eCommerce link with extras', () => {
    const url = buildTrackingLink({
      carrier: 'dhl-ecom',
      orderId: 'E123',
      extra: { country: 'TH' },
    });
    expect(url).toContain('https://ecommerceportal.dhl.com/track/');
    expect(url).toContain('ref=E123');
    expect(url).toContain('country=TH');
  });

  it('builds FedEx link with extras', () => {
    const url = buildTrackingLink({
      carrier: 'fedex',
      orderId: 'ABC',
      extra: { locale: 'th', priority: 1 },
    });
    expect(url).toContain('https://www.fedex.com/fedextrack');
    expect(url).toContain('trknbr=ABC');
    expect(url).toContain('locale=th');
    expect(url).toContain('priority=1');
  });

  it('builds Flash Express link with extras', () => {
    const url = buildTrackingLink({
      carrier: 'flash',
      orderId: 'FLASH123',
      extra: { lang: 'th' },
    });
    expect(url).toContain('https://www.flashexpress.com/tracking/');
    expect(url).toContain('se=FLASH123');
    expect(url).toContain('lang=th');
  });

  it('builds Grab Express link with extras', () => {
    const url = buildTrackingLink({
      carrier: 'grab',
      orderId: 'GRAB123',
      extra: { lang: 'th' },
    });
    expect(url).toContain('http://th.grabexpress.com/tracking.php');
    expect(url).toContain('trackingId=GRAB123');
    expect(url).toContain('lang=th');
  });

  it('builds SCG EXPRESS link with extras', () => {
    const url = buildTrackingLink({
      carrier: 'scg',
      orderId: 'SCG123456',
      extra: { lang: 'th' },
    });
    expect(url).toContain('https://www.scgexpress.co.th/tracking/');
    expect(url).toContain('tracking_search=SCG123456');
    expect(url).toContain('lang=th');
  });

  it('builds TNT link with extras', () => {
    const url = buildTrackingLink({
      carrier: 'tnt',
      orderId: 'TNT123456',
      extra: { locale: 'th' },
    });
    expect(url).toContain(
      'https://www.tnt.com/express/en_th/site/shipping-tools/tracking.html',
    );
    expect(url).toContain('searchType=CON');
    expect(url).toContain('cons=TNT123456');
    expect(url).toContain('locale=th');
  });

  it('builds Nim Express link with extras', () => {
    const url = buildTrackingLink({
      carrier: 'nim',
      orderId: 'NIM123456',
      extra: { lang: 'th' },
    });
    expect(url).toContain('http://www.nimexpress.com/web/p/tracking');
    expect(url).toContain('i=NIM123456');
    expect(url).toContain('lang=th');
  });

  it('builds J&T Express link with extras', () => {
    const url = buildTrackingLink({
      carrier: 'jtex',
      orderId: 'JT123456',
      extra: { lang: 'th' },
    });
    expect(url).toContain(
      'https://www.jtexpress.co.th/index/query/gzquery.html',
    );
    expect(url).toContain('bills=JT123456');
    expect(url).toContain('lang=th');
  });

  it('builds Kerry Express link with extras', () => {
    const url = buildTrackingLink({
      carrier: 'kerry',
      orderId: 'KEX123456',
      extra: { lang: 'th' },
    });
    expect(url).toContain('https://th.kerryexpress.com/en/track/');
    expect(url).toContain('track=KEX123456');
    expect(url).toContain('lang=th');
  });

  it('builds UPS link with extras', () => {
    const url = buildTrackingLink({
      carrier: 'ups',
      orderId: 'ZXCV',
      extra: { lang: 'en' },
    });
    expect(url).toContain('https://www.ups.com/track');
    expect(url).toContain('trackNums=ZXCV');
    expect(url).toContain('lang=en');
  });

  it('builds Thailand Post link with extras', () => {
    const url = buildTrackingLink({
      carrier: 'th-post',
      orderId: 'TH1234567890',
      extra: { locale: 'th' },
    });
    expect(url).toContain('https://track.thailandpost.co.th/');
    expect(url).toContain('trackNumber=TH1234567890');
    expect(url).toContain('locale=th');
  });

  it('throws for unsupported carrier', () => {
    // @ts-expect-error forcing unsupported carrier for runtime coverage
    expect(() => buildTrackingLink({ carrier: 'foo', orderId: '1' })).toThrow(
      /Unsupported carrier: foo/,
    );
  });
});
