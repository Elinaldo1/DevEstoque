


function themes() {


    const colorScheme: ("light" | "dark") = 'dark'

    if (colorScheme === 'dark') {

      const theme = {
        colors: {
          brand: '#047C3F',
          background: '#09090A',

          surface_primary: '#121214',
          // surface_primary: '#18181B',
          // surface_secondary: '#202024',
          surface_secondary: '#27272A',

          text_primary: '#F4F4F5',
          text_secondary: '#A1A1AA',
          text_on_brand_color: '#FFFFFF',

          stroke: '#52525B',

          // danger: '#DC1637'
          danger: '#FF4A4A'
        },

      };

      return theme

    } else {

      const theme = {
        colors: {

          brand: '#047C3F',
          background: '#09090A',

          surface_primary: '#F4F4F5',
          surface_secondary: '#A1A1AA',

          text_primary: '#18181B',
          text_secondary: '#27272A',
          text_on_brand_color: '#FFFFFF',

          stroke: '#52525B',

          // danger: '#DC1637'
          danger: '#FF4A4A'
        },
      };

      return theme
    }
  };

  export const theme = themes();
