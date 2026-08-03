# 📋 Shopify App Audit & Speed Checklist
Created by: **Abdullah Al Rakib**

Even with the best code, a Shopify store can be slow due to excessive apps and heavy media. Use this checklist to perform a professional speed audit.

---

## 1. 🛑 The App Audit (The #1 Speed Killer)
Shopify apps are the main reason for slow stores. Follow these steps:
- [ ] **Identify "Ghost" Apps:** Apps you uninstalled but still have leftover code in `theme.liquid`. Remove them manually.
- [ ] **Consolidate Apps:** If you are using 3 different apps for (1) Product Reviews, (2) Trust Badges, and (3) Sticky Add to Cart, find a single app that does all three or ask a developer (me!) to code them manually.
- [ ] **Analyze App Impact:** Use the Chrome DevTools 'Network' tab to see which app's script takes the longest to load.

## 2. 🖼️ Media & Content Optimization
- [ ] **Hero Banners:** Avoid using large 4K images for banners. 1920px width is usually enough. Use `.jpg` or `.webp` format.
- [ ] **Video Hosting:** Never upload large videos directly to Shopify. Use YouTube or Vimeo and lazy-load the iframe.
- [ ] **GIFs:** Replace heavy GIFs with high-quality MP4 videos (they are much smaller in size).

## 3. 🧩 Theme Settings Audit
- [ ] **Dynamic Checkout Buttons:** If not needed, disable them. They load a lot of external scripts from PayPal/Apple Pay.
- [ ] **Font Count:** Limit your store to 2 custom fonts (one for headings, one for body text). Every extra font adds weight.
- [ ] **Mega Menus:** If your mega menu has 20+ images, ensure they are using the `image-optimization` snippet from this repo.

## 4. 🛠️ Professional Testing Tools
Don't just rely on the Shopify Dashboard score. Use these:
1. **Google PageSpeed Insights:** Focus on 'Core Web Vitals'.
2. **GTmetrix:** Look at the 'Waterfall' chart to find slow scripts.
3. **Shopify Theme Inspector (Chrome Extension):** This is a pro tool to see which Liquid part is taking the most time to render.

---

### 💡 Pro Tip for Merchants:
"Speed is not a one-time task; it's a habit." Every time you install a new app, check your PageSpeed score. If it drops by 10+ points, ask yourself: *Is this app's feature more valuable than the lost speed?*

---
**Need a custom audit for your store?**  
[Contact me on Fiverr](https://www.fiverr.com/rakibdevbd)