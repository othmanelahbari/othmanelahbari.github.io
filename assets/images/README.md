# Image Assets Guide

This folder contains all images for the Sipyanos Diving website.

## 📁 Folder Structure

```
assets/images/
├── hero/           # Hero section background images
├── gallery/        # Gallery photo collection
├── services/       # Service-related images
├── team/           # Team/profile photos
└── logo.png        # Website logo (optional)
```

## 📐 Image Specifications

### Hero Images (`hero/`)
- **Size**: 1920x1080px (Full HD)
- **Format**: JPG or WebP
- **Max File Size**: 500KB
- **Content**: Underwater diving scenes, ocean backgrounds
- **Quantity**: 1 main hero image
- **Naming**: `hero-background.jpg` or `hero-main.jpg`

### Gallery Images (`gallery/`)
- **Size**: 1200x800px (3:2 aspect ratio)
- **Format**: JPG or WebP
- **Max File Size**: 300KB per image
- **Content**: Best diving photos, underwater shots, diving activities
- **Quantity**: 3 images (you can add more later)
- **Naming**: 
  - `gallery-1.jpg`
  - `gallery-2.jpg`
  - `gallery-3.jpg`

### Service Images (`services/`)
- **Size**: 800x600px (4:3 aspect ratio)
- **Format**: JPG or WebP
- **Max File Size**: 200KB per image
- **Content**: Images representing each service
- **Quantity**: 4 images (one per service)
- **Naming**:
  - `service-diving-instruction.jpg`
  - `service-spearfishing.jpg`
  - `service-recovery.jpg`
  - `service-content-creation.jpg`

### Team/Profile Images (`team/`)
- **Size**: 400x400px (square)
- **Format**: JPG or WebP
- **Max File Size**: 100KB per image
- **Content**: Professional photo of Othmane Sipyanos
- **Quantity**: 1 main profile photo
- **Naming**: `othmane-sipyanos.jpg` or `profile.jpg`

### Logo (`logo.png`)
- **Size**: 200x200px (or proportional)
- **Format**: PNG (with transparent background preferred)
- **Max File Size**: 50KB
- **Content**: Sipyanos Diving logo
- **Location**: Place directly in `assets/images/` folder

## 🎨 Image Guidelines

### Quality Standards
- **Resolution**: High quality, sharp, well-lit
- **Professional**: Avoid blurry, pixelated, or amateur photos
- **Relevant**: Each image should relate to diving/underwater activities
- **Authentic**: Use real photos when possible (not just stock photos)

### Content Suggestions

**Hero Section:**
- Underwater scene with diver
- Beautiful coral reef
- Ocean surface/waves
- Diving equipment in action

**Gallery:**
- Diving instruction moments
- Underwater wildlife
- Spearfishing scenes
- Group diving photos
- Underwater landscapes

**Services:**
- Diving Instruction: Teacher with student underwater
- Spearfishing: Underwater hunting scene
- Recovery: Diver searching/recovering objects
- Content Creation: Underwater camera work

**Profile:**
- Professional headshot of Othmane
- In diving gear
- Clear, friendly, professional appearance

## 🔧 Image Optimization

Before adding images to the website, **optimize them** to ensure fast loading:

### Recommended Tools:

1. **TinyPNG** (Online - Easiest)
   - Visit: [https://tinypng.com/](https://tinypng.com/)
   - Drag and drop your images
   - Download compressed versions
   - Can reduce file size by 50-80%!

2. **Squoosh** (Online - Advanced)
   - Visit: [https://squoosh.app/](https://squoosh.app/)
   - Fine-tune compression settings
   - Compare before/after

3. **ImageOptim** (Mac)
   - Free app for Mac users
   - Drag and drop images to compress

4. **RIOT** (Windows)
   - Free image optimization tool
   - Available at: [https://riot-optimizer.com/](https://riot-optimizer.com/)

### Optimization Checklist:
- [ ] Resize to specified dimensions
- [ ] Compress to reduce file size
- [ ] Ensure quality is still good after compression
- [ ] Rename files with descriptive names
- [ ] Check total file size is within limits

## 📝 Current Status

### Required Images (Update after adding):
- [ ] Hero background image
- [ ] Gallery image 1
- [ ] Gallery image 2
- [ ] Gallery image 3
- [ ] Service: Diving instruction
- [ ] Service: Spearfishing
- [ ] Service: Recovery
- [ ] Service: Content creation
- [ ] Profile photo
- [ ] Logo (optional)

## 🖼️ Using Images in the Website

Once you add images to these folders, you need to update the `index.html` file:

### Example Updates:

**Hero Section:**
```html
<!-- Find this in index.html: -->
background: url('https://source.unsplash.com/...')

<!-- Replace with: -->
background: url('assets/images/hero/hero-background.jpg')
```

**Gallery Images:**
```html
<!-- Find these in index.html: -->
<img src="https://source.unsplash.com/..." alt="...">

<!-- Replace with: -->
<img src="assets/images/gallery/gallery-1.jpg" alt="Diving Adventure 1" loading="lazy">
```

**About Section:**
```html
<!-- Find this: -->
<img src="https://source.unsplash.com/..." alt="...">

<!-- Replace with: -->
<img src="assets/images/team/othmane-sipyanos.jpg" alt="Othmane Sipyanos - Professional Diving Instructor" loading="lazy">
```

## 🌐 Placeholder Images

Currently, the website uses placeholder images from Unsplash. These are temporary and should be replaced with real images before going live.

**Current placeholders:**
- Hero: Unsplash underwater/diving stock photos
- Gallery: Unsplash ocean/diving stock photos
- About: Unsplash diving instructor stock photo

## 💡 Tips for Great Images

1. **Lighting**: Ensure good visibility, especially for underwater shots
2. **Composition**: Follow the rule of thirds for better framing
3. **Action Shots**: Show diving in action, not just static poses
4. **Variety**: Mix close-ups, wide shots, and different angles
5. **Colors**: Ocean blues, vibrant coral, clear water
6. **Safety**: Show proper equipment and safety practices
7. **Authenticity**: Real photos build trust with potential clients

## 📱 Mobile Considerations

All images are automatically responsive and will look good on mobile devices. The CSS handles:
- Automatic resizing
- Proper aspect ratios
- Fast loading with lazy loading
- Optimized display on small screens

## ⚠️ Important Notes

1. **Copyright**: Only use images you have rights to use
   - Your own photos ✅
   - Stock photos with proper license ✅
   - Other people's photos without permission ❌

2. **File Names**: 
   - Use lowercase
   - Use hyphens, not spaces
   - Be descriptive
   - Example: `diving-instructor-morocco.jpg` ✅
   - Avoid: `IMG_1234.jpg` ❌

3. **Alt Text**: When updating HTML, always add descriptive alt text for accessibility

4. **Backup**: Keep original high-resolution versions in a separate folder before optimizing

## 🎯 Priority Images

If you can only add a few images initially, prioritize in this order:

1. **Hero background** - Most visible, sets the tone
2. **Profile photo** - Builds personal connection
3. **Gallery images** - Shows your work
4. **Service images** - Can work with icons if needed

## 📞 Need Help?

If you need assistance with:
- Image selection
- Optimization
- Updating the HTML
- Finding stock photos

Contact the webRapide MA support team.

---

**Remember**: High-quality, optimized images make a huge difference in how professional your website looks and how fast it loads! 📸🌊
