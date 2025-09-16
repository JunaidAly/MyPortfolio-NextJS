# EmailJS Setup Guide

This guide will help you set up EmailJS for your contact form to receive emails directly from your website.

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Copy the **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Submission: {{subject}}

Hello {{to_name}},

You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Save the template and copy the **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** in your dashboard
2. Find your **Public Key** (also called User ID)
3. Copy this key

## Step 5: Configure Environment Variables

1. Create a `.env.local` file in your project root
2. Add these variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual EmailJS credentials

## Step 6: Test Your Setup

1. Start your development server: `npm run dev`
2. Navigate to your contact form
3. Fill out and submit a test message
4. Check your email for the message

## Template Variables

The following variables are available in your EmailJS template:

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_name}}` - Your name (hardcoded as "Junaid Ali")

## Troubleshooting

### Common Issues:

1. **"User ID is required"** - Make sure your public key is correct
2. **"Service is not found"** - Check your service ID
3. **"Template is not found"** - Verify your template ID
4. **CORS errors** - Make sure your domain is added to EmailJS allowed origins

### Free Plan Limits:

- 200 emails per month
- EmailJS branding in emails
- Basic support

### Security Notes:

- Public key is safe to expose in frontend code
- Never expose your private key
- Consider upgrading to paid plan for production use

## Support

For more help, visit the [EmailJS Documentation](https://www.emailjs.com/docs/)