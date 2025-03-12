# Encryption Link System Documentation

## Overview
The Encryption Link System is a secure method for sharing account credentials with users. It generates time-limited, encrypted links that allow temporary access to account credentials while maintaining security. This system helps protect sensitive account information by encrypting data in transit and enforcing time-based access controls.

## Features
- **Secure Encryption**: All credentials are encrypted using AES encryption
- **Time-Limited Access**: Links automatically expire after a set period
- **Automatic Login Capabilities**: Attempts to automatically log users into platforms when possible
- **Manual Credential Access**: Provides clear display of credentials when auto-login is not possible
- **User-Friendly Interface**: Clear instructions and intuitive design for both link generators and recipients
- **Revocation Capabilities**: Account owners can invalidate links at any time
- **Cross-Platform Support**: Works across different streaming and subscription platforms

## How It Works

### For Account Owners
1. Navigate to the Account Detail page or use the dedicated Encryption Link Generator
2. Select the platform account you want to share
3. Choose an expiration time for the link (1 hour to 30 days)
4. Generate the encrypted access link
5. Share the link with your intended recipient through your preferred communication method

### For Link Recipients
1. Click on the received link, which will open the AccessPage
2. Choose between automatic login or manual credential entry
3. If using automatic login, a popup window will open and attempt to log in automatically
4. If using manual credentials, copy the username and password to log in manually
5. The link will remain valid until its expiration time

### Security Measures
- All credentials are encrypted using AES-256 encryption
- Decryption happens client-side in the recipient's browser
- Links automatically expire after the set time period
- No credential data is stored in URL parameters or exposed in browser history
- Cross-Origin Resource Sharing (CORS) protections are maintained

## Implementation Details

### Key Components
- **EncryptionLinkGenerator.tsx**: UI component for generating secure links
- **AccessPage.tsx**: Handles decryption and presentation of credentials
- **AutoLoginProxy.tsx**: Manages automatic login attempts
- **rentalEncryption.ts**: Core encryption and decryption functions

### Core Functions
- `generateAccessLink()`: Creates encrypted links with expiration times
- `decryptAccessLink()`: Securely decrypts credentials
- `isAccessLinkValid()`: Verifies link integrity and expiration status

## Testing
A test page is available at `/test-encryption` that allows you to:
- Generate test encryption links
- Validate generated links
- Test automatic login functionality
- Examine decrypted data structure

## Integration
The Encryption Link System is integrated in multiple locations:
- **Account Detail Page**: For owners to generate links for specific accounts
- **Rental Detail Page**: For renters to access their rented accounts
- **Profile Page**: For account owners to manage access to their accounts
- **Security Settings**: For users to view and revoke active links

## Automatic Login Feature
The automatic login feature attempts to log users into platforms without manually entering credentials:

### How Auto-Login Works
1. When a user selects "Auto Login" on the access page, a popup window opens
2. The system injects JavaScript that attempts to:
   - Identify username and password fields on the login page
   - Fill in the credentials automatically
   - Submit the login form
3. If successful, the user is logged into the platform immediately
4. If unsuccessful (due to security restrictions), the user can fall back to manual login

### Security Considerations
- Auto-login may not work on all platforms due to cross-origin security restrictions
- Some platforms use anti-automation measures that prevent script injection
- The feature is designed to gracefully fall back to manual login when automated attempts fail
- No credentials are stored in browser storage during the auto-login process

## Future Improvements
- Server-side revocation tracking for improved security
- Additional authentication methods for accessing encrypted links
- Email notifications when links are used
- Automated security checks for suspicious access patterns
- Extended platform-specific login support for major streaming services 