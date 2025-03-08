// theme/themeConfig.js

const theme = {
    cssVar: true, 
    token: {
      fontFamily: 'var(--font-family-primary)',
      fontSize: 'var(--font-size-base)',
      colorPrimary: 'var(--primary-color)', // Primary brand color
      colorLink: 'var(--link-color)', // Hyperlink color
      colorTextBase: 'var(--text-color)', // Global text color
      colorTextHeading: 'var(--text-color)', // Heading text color
      fontSizeHeading1: 'var(--font-size-h1)', // h1 font size
      fontSizeHeading2: 'var(--font-size-h2)', // h2 font size
      fontSizeHeading3: 'var(--font-size-h3)', // h3 font size
      fontSizeHeading4: 'var(--font-size-h4)', // h4 font size
      fontSizeHeading5: 'var(--font-size-h5)', // h5 font size
      colorBgContainer: 'var(--card-color)', // Global content background color
      colorText: 'var(--text-color)', // Body text color
      colorBgElevated: 'var(--card-color)', // Dark dropdown background 
      colorSplit: '#4a4a4a',
      colorBgElevated: 'var(--card-color)', // Drawer background color
    },
    Anchor: {
      colorLink: 'var(--link-color)', // Ensure this is applied globally
      colorLinkHover: 'var(--link-hover-color)',
    },
    components: {
        Button: { 
          fontSize: 'var(--font-size-small)',
          colorPrimary: 'var(--primary-color)',
          colorPrimaryHover: 'var(--primary-hover-color)',
          primaryShadow: '0',
          colorBorder: 'var(--button-outline-border)',
          colorBorderHover: 'var(--button-outline-hover-border)',
          controlItemBg: 'var(--button-outline-bg)',
          controlItemBgHover: 'var(--button-outline-hover-bg)',
        },
        Input: {
          fontSize: 'var(--font-size-small)',
          colorBorder: 'var(--input-outline-border)',
          algorithm: true, 
        },
        Menu: {
          darkItemBg: 'var(--sider-bg-color)', // Default background color for `.ant-menu`
          itemSelectedBg: 'var(--sider-bg-selected-color)', // Background when menu item is selected
          itemSelectedColor: 'var(--sider-text-selected-color)', // Text color for selected menu item
          iconSize: '20px',
        },
        Layout: {
          siderBg: 'var(--sider-bg-color)', // Default background color for `.ant-layout-sider`
          siderColor: 'var(--sider-text-color)', // Text color in the Sider
          bodyBg: 'var(--background-color)', // Main layout background
        },
        Breadcrumb: {
          linkColor: 'var(--link-color)', // Define breadcrumb link color
          linkHoverColor: 'var(--link-hover-color)', // Define breadcrumb link hover color
          separatorColor: 'var(--breadcrumb-separator-color)',
          fontSize: 'var(--font-size-small)', // Override breadcrumb font size if needed
        },
        Hr: {
          borderColor: 'var(--hr-color)', // Border color for hr
          borderWidth: '.5rem', // Adjust the border width if needed
        },
        Rate: {
          fontSize: 'var(--font-size-smaller)', // Customize the size of the rating stars
          colorPrimary: 'var(--primary-color)', // Primary color for the filled stars
          colorSecondary: 'var(--secondary-color)', // Color for empty or unfilled stars
          colorDisabled: 'var(--disabled-color)', // Color for disabled stars
          colorTextDisabled: 'var(--unrated-color)', // Color for unrated stars (use CSS variable for flexibility)
        },
      },
  };
  
  export default theme;
  