export default interface IUser {
  _id?: string;
  name: string;
  email: string;
  organizationId: string;
  provider?: any;
  providerId?: any;
  histories: [{ name: string }]
}
