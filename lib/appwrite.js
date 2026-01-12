import {Client, Account, Avatars} from 'react-native-appwrite'

const client = new Client()
  .setEndpoint('https://fra.cloud.appwrite.io/v1')
  .setProject('6964bd3d001bc1968385')   // Your Project ID
  .setPlatform('com.komissarchik.navtrail');   // Your package name / bundle identifier

export const account = new Account(client);
export const avatars = new Avatars(client);