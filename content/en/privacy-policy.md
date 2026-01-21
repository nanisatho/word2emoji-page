---
title: Privacy Policy
lastUpdated: December 20, 2025
---

# Privacy Policy

**Last Updated: December 20, 2025**

This Privacy Policy describes how Nathalia Thomas @ Inventa Labs 💡 ("we," "our," or "us") collects, uses, and protects your information when you use the Emojify Text mobile application (the "App").

## 1. Information We Collect

### 1.1 User-Generated Content

When you use Emojify Text, we collect the following information:

- **Text Input:** The text you enter into the App to convert to emojis (limited to a maximum of 1,000 characters)
- **Emoji Results:** The emoji suggestions generated in response to your input (up to 5 options per request)
- **Timestamps:** The date and time when you generate emoji conversions
- **App Configuration:** Optional settings such as language preference, emoji count, color palette, and iOS version for compatibility

### 1.2 Automatically Collected Information

The App may automatically collect certain information about your device and usage, including:

- Device information (model, operating system version)
- App usage statistics
- Error logs and crash reports
- App Check tokens for security verification (Firebase App Check)
- Rate limiting data to prevent abuse (request count and timestamps)
- Advertising-related data (device identifiers including IDFA if permitted, IP address, ad interaction data) collected by Google AdMob for ad serving and measurement purposes

## 2. How We Use Your Information

We use the information we collect to:

- Provide the core functionality of the App (converting text to emoji suggestions)
- Store your conversion history locally on your device
- Improve the App's performance and user experience
- Diagnose and fix technical issues

## 3. Data Storage

### 3.1 Local Storage

Your conversion history (text input, emoji results, and timestamps) is stored locally on your device using iOS UserDefaults. This data:

- Remains on your device and is not transmitted to our servers
- May be included in your device's iCloud backup if you have iCloud Backup enabled
- Can be deleted at any time through the App's history feature

### 3.2 Cloud Storage

We use Firebase services for:

- **Firebase Cloud Functions:** Processing your text input and generating emoji suggestions using Google Gemini AI (gemini-2.0-flash-lite model)
- **Firebase App Check:** Verifying that requests come from authenticated, unmodified app instances to prevent abuse and unauthorized access
- **Firebase Firestore:** Storing rate limiting data (request counts and timestamps) to enforce fair usage limits
- **Firebase Analytics:** Understanding how the App is used (if enabled)
- **Error Logging:** Collecting crash reports and error information to improve the App

Content filtering is performed by Google Gemini AI's built-in safety filters, which we configure to block inappropriate content. Content is filtered across four specific harm categories:

- **Harassment:** Content that harasses, intimidates, or threatens others
- **Hate Speech:** Content that promotes hatred, discrimination, or violence against individuals or groups
- **Sexually Explicit Content:** Content that is sexually explicit or pornographic
- **Dangerous Content:** Content that promotes violence, self-harm, or illegal activities

Google Gemini AI's safety filters are configured to block content with LOW, MEDIUM, or HIGH probability of harm in these categories. Content that violates these policies will be rejected, and you will receive an error message indicating that the content violates our content policy.

## 4. Third-Party Services

### 4.1 Google Gemini AI

To generate emoji suggestions, we send your text input to Google's Gemini AI service. When you use Emojify Text:

- Your text input is transmitted to Google's servers for processing
- Google's AI service analyzes your text and generates emoji suggestions
- Google may process and store your text input according to their privacy practices
- We do not control how Google processes your data once it is sent to their service

For more information about how Google handles your data, please review [Google's Privacy Policy](https://policies.google.com/privacy).

### 4.2 Firebase (Google)

We use Firebase, a service provided by Google, for:

- Backend processing through Cloud Functions
- Analytics and usage statistics (if enabled)
- Error reporting and crash analytics

Firebase is subject to Google's privacy practices. For more information, please review [Firebase's Privacy Policy](https://firebase.google.com/support/privacy).

### 4.3 Google AdMob

We use Google AdMob to display advertisements in the App. When you use Emojify Text, AdMob may collect and process the following information:

- **Device Identifiers:** Including the Identifier for Advertisers (IDFA) on iOS devices, if you have granted permission for tracking
- **IP Address:** Your device's IP address may be collected to serve relevant advertisements
- **Device Information:** Information about your device such as device model, operating system version, and device settings
- **Usage Data:** Information about how you interact with advertisements, including ad views, clicks, and engagement metrics
- **Crash Logs:** Technical information related to ad serving, including crash reports and error logs

This information is used by AdMob to:

- Serve personalized or non-personalized advertisements based on your preferences and consent
- Measure ad performance and effectiveness
- Prevent fraud and ensure ad quality
- Comply with advertising regulations

AdMob's data collection and use is governed by Google's privacy practices. For more information about how Google AdMob handles your data, please review [Google's Privacy Policy](https://policies.google.com/privacy) and [AdMob's Privacy Information](https://support.google.com/admob/answer/6128543).

You can control personalized advertising through your device's privacy settings. On iOS, you can manage tracking permissions through Settings → Privacy & Security → Tracking.

## 5. Data Sharing and Disclosure

We do not sell, rent, or trade your personal information. However, we share your data with the following third-party services as necessary to provide the App's functionality:

- **Google Gemini AI:** Your text input is sent to Google's AI service to generate emoji suggestions
- **Firebase (Google):** Your data may be processed and stored by Firebase for backend operations
- **Google AdMob:** Device identifiers, IP address, device information, usage data, and crash logs may be shared with AdMob to serve and measure advertisements

We may also disclose your information if required by law or to protect our rights and safety.

## 6. Data Retention

### 6.1 Local Data

Your conversion history stored locally on your device:

- Is retained until you delete it through the App
- Is limited to a maximum of 100 recent conversions to prevent unlimited storage growth
- Can be cleared at any time using the App's history deletion features

### 6.2 Cloud Data

Data processed through Firebase and Google Gemini AI:

- Is processed temporarily to generate emoji suggestions
- May be retained by Google according to their data retention policies
- We do not store your text input or emoji results on our servers after processing
- Rate limiting data (request counts and timestamps) is stored in Firebase Firestore and is used solely to enforce usage limits

## 7. Your Rights and Choices

### 7.1 Access and Deletion

You have the right to:

- View your conversion history within the App
- Delete individual history items at any time
- Clear all history data from your device

### 7.2 Data Portability

Your conversion history is stored locally on your device. You can access this data through the App's history feature.

### 7.3 Opt-Out

If you do not want your data to be processed by third-party services, you may stop using the App. The App requires data processing by Google Gemini AI to function.

## 8. Children's Privacy

Emojify Text is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.

## 9. Security

We implement appropriate technical and organizational measures to protect your information:

- Input sanitization to prevent security vulnerabilities
- Content filtering and validation to block inappropriate or harmful content
- Prompt injection detection to prevent AI system manipulation
- Rate limiting to prevent abuse
- Secure API communication using HTTPS
- Secure storage of API keys and sensitive credentials

We implement rate limiting to prevent abuse: users are limited to 10 requests per minute. Requests exceeding this limit will be temporarily blocked until the rate limit window resets.

However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.

## 10. International Data Transfers

Your information may be transferred to and processed in countries other than your country of residence. When you use Emojify Text, your data may be processed by:

- Google's servers, which may be located in various countries
- Firebase services, which operate globally

By using the App, you consent to the transfer of your information to these countries.

## 11. Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will notify you of any changes by:

- Posting the new Privacy Policy on this page
- Updating the "Last Updated" date at the top of this policy

You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.

## 12. Contact Us

If you have any questions about this Privacy Policy or our data practices, please contact us at:

- Email: [info@inventa-labs.com](mailto:info@inventa-labs.com)
- Support Page: [Visit our Support page](/support/)

**Last Updated: December 20, 2025**
