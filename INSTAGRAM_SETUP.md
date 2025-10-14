# Instagram Feed Setup Guide

Your website now includes an Instagram feed that can display your latest posts automatically!

## Current Status

✅ **Instagram feed component is installed and working**
✅ **Shows placeholder images by default**
✅ **Can be connected to your real Instagram account**

---

## Option 1: Quick Setup with Third-Party Service (Recommended - Easiest)

### Using SnapWidget (Free, No Coding)

1. Go to [SnapWidget.com](https://snapwidget.com/)
2. Click "Create Widget" → Select "Grid"
3. Enter your Instagram username: `plant_saver_and_accounting`
4. Customize the grid (2x4 or 4x2)
5. Copy the embed code
6. Replace the `<InstagramFeed />` component in `src/pages/References.tsx`

**Pros:** No API setup, free, very easy
**Cons:** Less customization, external dependency

### Using Juicer.io (Free Tier Available)

1. Go to [Juicer.io](https://www.juicer.io/)
2. Sign up for free account
3. Connect your Instagram account
4. Get the embed code
5. Add to your website

---

## Option 2: Instagram Basic Display API (More Control)

This method gives you full control but requires some setup.

### Step 1: Create a Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click "My Apps" → "Create App"
3. Choose "Consumer" as app type
4. Enter app name: "Plant Saver Website"
5. Enter your email and create app

### Step 2: Add Instagram Basic Display

1. In your app dashboard, click "Add Product"
2. Find "Instagram Basic Display" and click "Set Up"
3. Click "Create New App" in Instagram Basic Display settings
4. Accept the terms

### Step 3: Configure Basic Display

1. **Valid OAuth Redirect URIs:** Add these:
   ```
   https://localhost/
   https://yourdomain.com/
   ```

2. **Deauthorize Callback URL:**
   ```
   https://yourdomain.com/auth/instagram/deauthorize
   ```

3. **Data Deletion Request URL:**
   ```
   https://yourdomain.com/auth/instagram/delete
   ```

4. Save changes

### Step 4: Add Instagram Test User

1. Go to "Roles" → "Instagram Testers"
2. Click "Add Instagram Testers"
3. Enter your Instagram username: `plant_saver_and_accounting`
4. Go to your Instagram account settings
5. Apps and Websites → Tester Invites
6. Accept the invitation

### Step 5: Get Access Token

1. Generate authorization URL (replace `{app-id}` and `{redirect-uri}`):
   ```
   https://api.instagram.com/oauth/authorize
     ?client_id={app-id}
     &redirect_uri={redirect-uri}
     &scope=user_profile,user_media
     &response_type=code
   ```

2. Visit the URL in your browser
3. Authorize the app
4. Copy the code from the redirect URL
5. Exchange code for access token using this curl command:
   ```bash
   curl -X POST \
     https://api.instagram.com/oauth/access_token \
     -F client_id={app-id} \
     -F client_secret={app-secret} \
     -F grant_type=authorization_code \
     -F redirect_uri={redirect-uri} \
     -F code={code-from-step-4}
   ```

### Step 6: Get Long-Lived Token

1. Exchange short-lived token for long-lived (60 days):
   ```bash
   curl -X GET \
     "https://graph.instagram.com/access_token
       ?grant_type=ig_exchange_token
       &client_secret={app-secret}
       &access_token={short-lived-token}"
   ```

2. Save the long-lived access token

### Step 7: Add Token to Your Website

1. Open `.env` file in your project
2. Add your access token:
   ```
   VITE_INSTAGRAM_ACCESS_TOKEN=your_access_token_here
   ```
3. Restart your development server

### Step 8: Refresh Token (Every 60 Days)

Long-lived tokens expire after 60 days. To refresh:

```bash
curl -X GET \
  "https://graph.instagram.com/refresh_access_token
    ?grant_type=ig_refresh_token
    &access_token={current-token}"
```

---

## Option 3: Use Instagram Embed Widget (Simplest)

Instagram provides an official embed widget for your profile.

### Setup:

1. Go to your website code
2. In `src/pages/References.tsx`, replace `<InstagramFeed />` with:

```tsx
<div className="max-w-6xl mx-auto">
  <iframe
    src="https://www.instagram.com/plant_saver_and_accounting/embed"
    width="100%"
    height="600"
    frameBorder="0"
    scrolling="no"
    allowTransparency
    className="rounded-lg"
  />
</div>
```

**Pros:** Official Instagram widget, no API needed
**Cons:** Less customizable, shows full profile

---

## Option 4: Manual Curated Posts (Most Control)

Instead of auto-loading, manually curate your best posts.

### Setup:

1. Go to your Instagram posts
2. Click on a post → Click "..." → "Embed"
3. Copy the embed code
4. Or use direct image URLs

Update `src/pages/References.tsx`:

```tsx
const instagramPosts = [
  {
    id: '1',
    image: '/images/instagram/post1.jpg',
    link: 'https://www.instagram.com/p/your-post-id/',
    caption: 'Your caption'
  },
  // Add more posts
];
```

---

## Current Implementation

The website currently uses **placeholder images** that link to your Instagram profile. When clicked, they open your Instagram page.

### To Switch to Real Posts:

**Easy Way (Recommended):**
Use SnapWidget or Juicer.io (see Option 1 above)

**Advanced Way:**
Follow Option 2 to set up Instagram Basic Display API

---

## Troubleshooting

### Posts Not Loading?

1. Check if access token is valid
2. Verify token hasn't expired (60 days)
3. Check browser console for errors
4. Ensure account is public or connected

### Token Expired?

Refresh your token using Step 8 in Option 2

### Want to Change Number of Posts?

Edit `src/pages/References.tsx`:
```tsx
<InstagramFeed 
  accessToken={import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN}
  limit={12}  // Change this number
/>
```

---

## Alternative: Embed Social Feed Service

### Using Taggbox or Flockler

These services aggregate all your social media:

1. Sign up for free account
2. Connect Instagram + Facebook
3. Create a feed widget
4. Embed on your website

**Pros:** Shows multiple social networks, professional look
**Cons:** May have watermark on free plan

---

## Recommendations

### For Quick Setup (Next 10 Minutes):
→ Use **SnapWidget** (Option 1)

### For Professional Look:
→ Use **Juicer.io** or **Taggbox**

### For Full Control:
→ Set up **Instagram Basic Display API** (Option 2)

### For Manual Control:
→ Use **Manual Curated Posts** (Option 4)

---

## Need Help?

1. Check that your Instagram account is public
2. Verify you accepted the tester invite
3. Make sure access token is properly formatted
4. Restart dev server after adding token

---

**Current Feed Status:**
- ✅ Component installed
- ✅ Placeholder images working
- ⏳ Waiting for Instagram API setup

Once you add an access token to `.env`, real posts will load automatically!

---

**Your Instagram:** [@plant_saver_and_accounting](https://www.instagram.com/plant_saver_and_accounting/)

