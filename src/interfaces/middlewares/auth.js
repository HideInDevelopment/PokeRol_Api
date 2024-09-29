const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const authenticateGoogleToken = async (request, response, next) => {
  const token = request.headers['authorization']?.split(' ')[1];

  if (!token)
    return response.status(401).json({ message: 'No token provided' });

  try {
    //To verify id token recibe from client
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID, //To specify oauth client id
    });

    const payload = ticket.getPayload(); //To obtain user information from payload;

    request.user = {
      googleId: payload['sub'],
      email: payload[''],
      name: payload[''],
      picture: payload[''],
    };

    next();
  } catch (error) {
    console.error('Error verifying Google token:', error);
    response.status(401).json({ message: 'Invalid or expired token' });
  }
};

module.exports = authenticateGoogleToken;
