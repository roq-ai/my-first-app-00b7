interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Administrator'],
  tenantName: 'Team',
  applicationName: 'my first app',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View data', 'View shared data', 'Read user information', 'View team information'],
  ownerAbilities: ['Manage team', 'Manage user', 'Manage role', 'Manage data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/cbedaee2-fa3a-4a3c-9227-93a09b06f55e',
};
