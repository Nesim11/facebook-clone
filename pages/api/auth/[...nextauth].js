import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  // Configure one or more authentication providers

  Providers:[
      Providers. Facebook({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK-CLIENT_SECRET,   
      }),
      // ...add more providers here
    ],
  
    // A database is optional, but required to
      });
  
