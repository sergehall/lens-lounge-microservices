export class OrderCreatedReplyEvent {
  constructor(
    public readonly orderId: string,
    public readonly status: string,
    public readonly timestamp: string,
  ) {}
}
