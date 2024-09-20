export {}

export type SecurityKeyObject = {
  securityKeyId: string;
  credentialId: string;
  credential?: string;
  name: string;
  notes: string;
  created: number;
  lastModified: number;
}

export type ArmoredPublicKeyObject = {
  armoredPublicKey: string;
  userId: string;
  scope: string;
}

export type DeviceNotificationToken = {
  os: string;
  deviceId: string;
  nativeDeviceToken: string;
  expoDeviceToken: string;
}

export type IdpUserPermission = {
  scope: string;
  role: string;
}

export type IdpUser = {
  sessionId: string;
  userId: string;
  email: string;
  firstName: string;
  middleNames: string;
  lastName: string;
  address1: string;
  address2: string;
  postcode: string;
  country: string;
  avatar?: string;
  avatarUrl?: string;
  locale: string;
  subscribed?: boolean;
  subscribedUntilDate: number;
  subscribedFeatures: number[];
  subscriptionProductId: string;
  isPrivate: boolean;
  receiveEmailNotificiations: boolean;
  receiveApplePN: boolean;
  receiveGCM: boolean;
  deviceNotificationTokens: DeviceNotificationToken[];
  permissions: IdpUserPermission[];
  createdDate: number;
  lastLoginTimestamp: number;
  armoredPublicKey?: string;
	encryptedArmoredPrivateKey?: string;
	securityKeyObjects?: SecurityKeyObject[];
  authorizedUsersOfVault?: Omit<ArmoredPublicKeyObject, "armoredPublicKey">[];
  rpId?: string;
  challenge?: string;
  iat?: number;
  exp?: number;
  iss?: string;
}

export type EmailAddress = {
  label: 'home' | 'work' | string;
  email: string;
}

export type PhoneNumber = {
  label: 'home' | 'cell' | 'work' | string;
  phoneNumber: string;
}

export type Address = {
  street: string;
  city: string;
  postalCode: string;
  region: string;
  country: string;
}

export type Contact = {
  contactId: string;
  externalId: string;
  userId: string | null;
  armoredPublicKey: string | null;
  image: string;
  about: string;
  type: string;
  firstName: string;
  middleNames: string;
  lastName: string;
  dateOfBirth: number | null;
  placeOfBirth: string;
  addresses: Array<Address>;
  emailAddresses: Array<EmailAddress>;
  phoneNumbers: Array<PhoneNumber>;
  prefix: string;
  suffix: string;
  genderType: string;
  genderIdentity: string;
  jobTitle: string;
  organisationName: string;
  website: string;
  createdDate: number;
  source: string;
  searchKey: string;
}

export type FileNodePermissions = {
  read: string[];
  write: string[];
}

export type FileNodeMember = {
  userId: string;
  armoredPublicKey: string;
  firstName: string;
  middleNames?: string;
  lastName: string;
  avatarUrl: string;
  allowWrite: boolean;
  acceptedTimestamp: number;
  rejectedTimestamp: number;
}

export type EncryptedFileNode = {
  id: string;
  encryptedFileNode: string;
  readOnly: boolean;
  ownerUserId: string;
  permissions: FileNodePermissions;
  createDate: number;
  updateDate: number;
  updateUserId: string;
  hasHistory: boolean;
  members: FileNodeMember[];
}
