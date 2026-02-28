# MEOW COFFEE - Personal Website Project

A cozy coffee shop website project for the "Introduction to Web Development" course. This site features a clean and user-friendly interface for a local coffee business.

## 1. Project Objectives
- **Target**: Build a 10-page website for "MEOW COFFEE".
- **Technical Stack**: HTML5, CSS3, JavaScript.
- **Compliance**: Responsive layout, accessible design, and semantic HTML structure.

## 2. Site Map (10 Pages)
1.  `index.html`: Home page - Introduction and a video about our brand.
2.  `about.html`: Our Story - Heritage and mission.
3.  `menu.html`: Menu - List of coffee and drinks with prices.
4.  `promotions.html`: Promotions - Latest deals and membership info.
5.  `booking.html`: Online Booking - Reservation form for customers.
6.  `gallery.html`: Photos - Visual collection of coffee art and our shop space.
7.  `blog.html`: News - Updates and coffee brewing tips.
8.  `post-1.html`: Blog Detail - A sample post about Chemex brewing.
9.  `contact.html`: Contact - Send us a message directly.
10. `map.html`: Location - Find us on Google Maps.

## 3. Technical Features

### 3.1 HTML & Structure
- [x] **10 separate HTML files**.
- [x] **Semantic tags**: Used `header`, `nav`, `main`, `section`, `article`, `footer`.
- [x] **Consistent Navigation**: The top menu is identical across all pages.
- [x] **Media**: More than 5 images with descriptive `alt` text.
- [x] **Iframe**: YouTube video on Home page and Google Maps on Map page.

### 3.2 Full Form (booking.html)
- [x] **Grouping**: Organized with `fieldset` and `legend`.
- [x] **Diverse Inputs**: 
    - Text, Email, Tel, Password (reservation code), Number (people).
    - Date (visit date), Range (time pick), Color (table theme).
    - File (upload receipt), Radio (seating), Checkbox (options).
    - Select with Optgroup, Textarea (notes), Datalist (vouchers), Hidden field.
- [x] **Validation**: Uses `required`, `pattern`, and `min`/`max` attributes.

### 3.3 CSS & Responsive
- [x] **External CSS**: All styles are in `assets/css/styles.css`.
- [x] **Modern Layout**: Flexbox for navigation and Grid for Menu/Gallery.
- [x] **Responsive**: Optimized for screen widths under 768px.
- [x] **Style**: Consistent colors managed with CSS variables; includes hover and focus effects.

### 3.4 Accessibility
- [x] **Readability**: Font size 16px and clear color contrast.
- [x] **Navigation**: Visible focus rings for keyboard users.

## 4. Credits
- **Images**: Unsplash and Pexels.
- **Fonts**: Google Fonts (Inter, Playfair Display).
- **Tools**: VS Code, Gemini Agent

## 5. AI Usage Log
- **Tool used**: Gemini Agent
- **Usage Details**:
    1. **Project Content**:
        - *Prompt*: "Suggest 10 essential pages for a modern coffee shop website."
        - *How I modified*: Chosen 10 specific pages (Home, Menu, Booking, etc.) and refined the site map to ensure clear navigation.
    2. **CSS Layouts**:
        - *Prompt*: "Provide a simple CSS grid for a product list and a vertical form layout."
        - *How I modified*: Implemented `auto-fit` and `object-fit: cover` to ensure the layout remains stable and images are uniform.
    3. **HTML Structure**:
        - *Prompt*: "Create a basic HTML5 framework for a booking page with diverse input types."
        - *How I modified*: Customized labels into English and added manual validation attributes (`required`, `pattern`).
    4. **Media & Assets**:
        - *Prompt*: "Help generate high-quality coffee images and a logo for 'MEOW COFFEE'."
        - *How I modified*: Manually resized images and adjusted the logo to match the brand's color palette.

