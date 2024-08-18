/** @type {import('tailwindcss').Config} */

import Palette from './src/util/theme/Palette'

module.exports = {
  content: [
    "./src/**/*.{htm.,js}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {

        /**------------------------------------------------------------------------
         *                           Components
         *------------------------------------------------------------------------**/
        'navbar-bg' : {
          DEFAULT : Palette.light['white'],
        },
        'navbar-text' : {
          DEFAULT : Palette.light['grey'],
        },


        /**------------------------------------------------------------------------
         *                           Home
         *------------------------------------------------------------------------**/
        /**--------------------------------------------
         *               hero
         *---------------------------------------------**/
        'landing-hero-text' : {
          DEFAULT : Palette.light['white'],
        },

        /**--------------------------------------------
         *               brief desc
         *---------------------------------------------**/
        'landing-desc-bg': {
          DEFAULT : Palette.light['secondary'],
        },
        'landing-desc-text' : {
          DEFAULT : Palette.light['white'],
        },

        /**--------------------------------------------
         *               featured projects
         *---------------------------------------------**/
        'landing-projects-bg' : {
          DEFAULT : Palette.light['white'],
        },
        'landing-projects-text' : {
          DEFAULT : Palette.light['black'],
        },

        
        /**--------------------------------------------
         *              testimonial 
         *---------------------------------------------**/
        'landing-testimonial-bg' : {
          DEFAULT : Palette.light['white'],
        },
        'landing-testimonial-text' : {
          DEFAULT : Palette.light['black'],
        },

        /**--------------------------------------------
         *               contact
         *---------------------------------------------**/
        'landing-contact-bg' : {
          DEFAULT : Palette.light['tertiary'],
        },
        'landing-contact-text' : {
          DEFAULT : Palette.light['black'],
        },



      },
      backgroundImage: {
        'hero-bgimg' : "url(/src/assets/images/hero-bg-img.jpg)",
      }

    },
  },
  plugins: [],
}

