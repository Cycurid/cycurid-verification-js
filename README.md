# cycurid-verification-js

cycurid-verification-js is a CycurID's solution to authentication and onboarding through the power of a Reusable Digital Identity Token. Users register with CycurID to create a Reusable Encrypted Zero-Knowledge Identity Token that they present to your company's onboarding or authentication platform, letting them seamlessly and instantly connect.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install cycurid-verification-js.

```bash
npm install cycurid-verification-js
```

## Usage

### Import

IMPORT IN REACT:

```javascript
import { immeVerification } from "cycurid-verification-js";
```

### Supported method

#### immeVerification

This is the main function to use for authentication. Invoking this function will do the whole login flow and generate an access token, refresh token and access token expiry date. The token is then used to fetch the specified scope after successful login and verification by the user.

```javascript
import { immeVerification } from "cycurid-verification-js";

  const myUserData = {
    verification: {
      callback: <YOUR_CALLBACK_URL>,
      person: {
        first_name: <USER_FIRSTNAME>,
        last_name: <USER_LASTNAME>,
      },
      documents: {
        type: <DOCUMENT_TYPE>,
        number: <DOCUMENT_NUMBER>,
        country: <DOCUMENT_COUNTRY>,
      },
      internal_reference: <YOUR_INTERNAL_REFERENCE>,
    },
  };

  const verificationConfig = {
    client_api_key: <YOUR_IMME_API_KEY>,
    client_api_secret: <YOUR_IMME_API_SECRET>,
    verifiable_data: myUserData,
  };


async function verify() {
  immeVerification(verificationConfig);
}
```

### User data object

- **client_api_key** - The key provided to you from [CycurID Portal Website](https://portal.cycurid.com/) see [Account Creation](#account-creation) for more details.
- **client_api_secret** - The Secret provided to you from [CycurID Portal Website](https://portal.cycurid.com/) see [Account Creation](#account-creation) for more details.
- **verifiable_data** - Your user data that will be compared to the Imme user's verified data.

This is the User data object that you collect and send for verification using the the **client_api_key** and **client_api_secret**.

==== About the **verification** object: ====

- **_callback_**: <string_URL >is required
- **_person_**: the <first_name_value> and <last_name_value> fields are required
- **_documents_**: the documents data are NOT required. They consist of:
  - **_type_**: "passport" or "driver_license"
  - **_number_**: the document number
  - **_country_**: the issued country in 3 string character lowecase. "can" for Canada, "fra" for France
- **_internal_reference_**: the internal reference string is required

E.g:

```javascript
    verification: {
      callback: 'https://myCallback/verification',
      person: {
        first_name: "John",
        last_name: "Smith",
      },
      documents: {
        type: "driver_license",
        number: "1234567",
        country: "can",
      },
      internal_reference: "driver_appointment",
    },
```

### Demo Repository and Site

[Imme Demo Website Github](https://github.com/Cycurid/Demo-Website)

[Imme Live Demo Website](https://imme-demo-website.vercel.app/)

## Account Creation

_An Cycurid Account is required to use this package_

To create an account, navigate to [CycurID Portal Website](https://portal.cycurid.com/) and click Create An Account to start verifying users' identity with CycurID.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

MIT License

Copyright (c) 2022 CycurID

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
