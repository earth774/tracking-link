export type Carrier =
  | 'best'
  | 'dhl'
  | 'dhl-ecom'
  | 'fedex'
  | 'flash'
  | 'grab'
  | 'jtex'
  | 'kerry'
  | 'nim'
  | 'scg'
  | 'tnt'
  | 'ups'
  | 'th-post';

export interface TrackingRequest {
  carrier: Carrier;
  orderId: string;
  extra?: Record<string, string | number>;
}
