export type Carrier = 'dhl' | 'fedex' | 'ups';

export interface TrackingRequest {
  carrier: Carrier;
  orderId: string;
  extra?: Record<string, string | number>;
}

