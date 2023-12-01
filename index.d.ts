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
  avatarUrl: string;
  locale: string;
  subscribed: boolean;
  subscribedUntilDate: number;
  subscribedFeatures: number[];
  subscriptionProductId: string;
  isPrivate: boolean;
  permissions: any[];
  createdDate: number;
  rpId: string;
  challenge: string;
  lastLoginTimestamp: number;
  armoredPublicKey?: string;
	encryptedArmoredPrivateKey?: string;
	securityKeyObjects?: SecurityKeyObject[];
  authorizedUsersOfVault?: Omit<ArmoredPublicKeyObject, "armoredPublicKey">[];
  iat: number;
  exp: number;
  iss: string;
}

export type Contact = {
  externalId: string;
  id: string;
  uuid: string;
  iconURL: string;
  about: string;
  publicKey: string;
  linkedInId: string;
  facebookId: string;
  twitterId: string;
  instagramId: string;
  tiktokId: string;
  googleId: string;
  microsoftId: string;
  type: string;
  userId: string;
  firstName: string;
  middleNames: string;
  lastName: string;
  dateOfBirth: string;
  placeOfBirth: string;
  addresses: Array<any>;
  emailAddresses: Array<string>;
  phoneNumbers: Array<string>;
  prefixes: string;
  suffixes: string;
  genderType: string;
  genderIdentity: string;
  jobTitle: string;
  organisationName: string;
  organisationRegisteredNumber: string;
  organisationTerritoryOfIncorporation: string;
  isCharity: boolean;
  acronym: string;
  isUkRegistered: boolean;
  charityNumber: string;
  website: string;
  createdDate: string;
  notes: string;
  source: string;
  isValid: boolean;
}
