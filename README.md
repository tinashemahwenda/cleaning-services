# Cleenit - Professional Cleaning Services Website

A modern, responsive website for a cleaning services company built with HTML, CSS, JavaScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Modern and clean UI
- Interactive service cards and pricing tables
- Smooth scrolling navigation
- Mobile-friendly navigation menu
- Contact form with validation
- Animated elements on scroll
- SVG icons for services

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- Tailwind CSS
- Google Fonts (Inter)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cleenit.git
cd cleenit
```

2. Open the project:
- You can use any web server to serve the files
- For development, you can use the Live Server extension in VS Code
- Or simply open the `index.html` file in your browser

## Project Structure

```
cleenit/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
├── images/            # SVG icons and images
│   ├── bedroom.svg
│   ├── bathroom.svg
│   └── kitchen.svg
└── README.md          # Project documentation
```

## Customization

### Colors
The primary and secondary colors can be customized in the Tailwind configuration in `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#3B82F6',    // Change this for primary color
                secondary: '#1E40AF',  // Change this for secondary color
            }
        }
    }
}
```

### Images
Replace the placeholder images with your own:
1. Hero section image
2. About section image
3. Service icons in the `images` directory

## Browser Support

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or suggestions, please contact:
- Email: contact@cleenit.com
- Website: https://cleenit.com 