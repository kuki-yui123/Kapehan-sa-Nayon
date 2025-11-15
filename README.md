# KAPEHAN SA NAYON - Coffee Shop Website

A fully responsive, modern, and aesthetically pleasing website for a coffee shop with smooth animations, dark mode, and interactive features.

## Features

### Design & Aesthetics
- 🎨 Warm color palette (brown, cream, beige, black)
- ✨ Smooth scroll animations
- 🎭 Hover effects and transitions
- 📱 Fully responsive design
- 🌙 Dark mode toggle
- 🔝 Scroll-to-top button

### Pages

#### 1. Home (index.html)
- Hero banner with coffee background
- Shop name and slogan
- Call-to-action buttons
- About section with café story
- Features section highlighting unique selling points

#### 2. Menu (menu.html)
- Grid layout with coffee images
- Item name, price, and description
- Hover animations that enlarge images
- Modal popup with detailed information for each coffee

#### 3. Location (location.html)
- Embedded Google Map
- Address and operating hours
- Directions button
- Contact information

#### 4. Contact (contact.html)
- Contact form (Name, Email, Message)
- Clickable social media links
- Phone number (tel link)
- Email (mailto link)

## File Structure

```
kapehan-sa-nayon/
├── index.html          # Home page
├── menu.html           # Menu page
├── location.html       # Location page
├── contact.html        # Contact page
├── style.css           # All styles
├── script.js           # JavaScript functionality
├── images/             # Image folder
│   └── placeholder-info.txt
└── README.md           # This file
```

## Technologies Used

- HTML5
- CSS3 (with CSS Variables for theming)
- Vanilla JavaScript
- Google Fonts (Playfair Display & Poppins)
- Font Awesome Icons

## Setup Instructions

1. **Download/Clone the project**
   ```
   All files are ready to use
   ```

2. **Add Images**
   - Add coffee images to the `images/` folder
   - See `images/placeholder-info.txt` for required images
   - You can use stock photos from Unsplash, Pexels, or Pixabay

3. **Open in Browser**
   - Simply open `index.html` in your web browser
   - No server required for basic functionality

## Customization

### Colors
Edit CSS variables in `style.css`:
```css
:root {
    --primary-color: #6F4E37;
    --secondary-color: #A0826D;
    --accent-color: #D4A574;
    /* ... */
}
```

### Content
- Update text in HTML files
- Modify menu items in `script.js` (menuData object)
- Change Google Maps location in `location.html`

### Contact Information
Update the following in all HTML files:
- Phone: `+1 (234) 567-890`
- Email: `hello@brewhaven.com`
- Address: `123 Coffee Street, Brew City`
- Social media links

## Features Breakdown

### Navigation
- Fixed navigation bar
- Smooth scrolling
- Mobile-responsive hamburger menu
- Active page indicator

### Dark Mode
- Toggle button in navigation
- Saves preference to localStorage
- Smooth transition between themes

### Animations
- Fade-in effects on scroll
- Hover animations on cards
- Smooth page transitions
- Bounce effect on scroll indicator

### Modal System
- Detailed coffee information
- Click outside to close
- ESC key to close
- Smooth animations

### Form Handling
- Client-side validation
- Success message on submit
- Form reset after submission

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Future Enhancements

- Online ordering system
- User authentication
- Backend integration
- Payment gateway
- Loyalty program
- Blog section
- Gallery page

## Credits

- Fonts: Google Fonts
- Icons: Font Awesome
- Design: Custom minimalist café theme

## License

Free to use for personal and commercial projects.

---

**KAPEHAN SA NAYON** - Crafting perfect moments, one cup at a time. ☕
