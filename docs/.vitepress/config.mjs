import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MegaMaker",
  description: "A documentation website for the MegaMaker printer",
  themeConfig: {
    
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  locales: {
    root: {
      label: 'Svenska',
      lang: 'sv',
      link: '/sv/',
      themeConfig: {
        nav: [
          { text: 'Hem', link: '/sv' },
          { text: 'Dokumentation', link: '/sv/getting-started/introduction.md' },
          {text: 'Produkten', 
            items: [
            {text: 'Specifikationer', link: '/sv/product/specifications.md' },
            {text: 'Reservdelar', link: 'https://www.google.com/' }
          ]},
          { text: 'FAQ', link: '/sv/resources-support/faq.md'},
          { text: 'Kontakt', link: '/sv/contact.md'}
        ],
        sidebar: [
          {
            text: 'Komma igång',
            items: [
              { text: 'Introduktion', link: '/sv/getting-started/introduction.md' },
              { text: 'Första utskriften', link: '/sv/getting-started/first-print.md' },
              {text: 'Material och filament', link: '/sv/getting-started/materials.md'}
            ]
          },
          {
            text: 'Maskinvaruinstallation',
            items: [
              { text: 'Montering', link: '/sv/hardware-setup/assembly.md' },
              { text: 'Justering av skrivbädden', link: '/sv/hardware-setup/bed-leveling.md' },
              { text: 'Installera filament', link: '/sv/hardware-setup/filament-loading.md' },
            ]
          },
          {
            text: 'Programvara och konfiguration',
            items: [
              { text: 'Anslutning till nätverk', link: '/sv/software-config/connection.md' },
              { text: 'Användning av USB-minne', link: '/sv/software-config/usb-print.md'},
              { text: 'Konfigurera skrivarinställningar', link: '/sv/software-config/configuration.md' },
              { text: 'Slicer-programvara', link: '/sv/software-config/slicer-guide.md' },
              { text: 'Fjärrstyrd utskrift och övervakning', link: '/sv/software-config/remote.md' }
            ]
          },
          {
            text: 'Resurser och support',
            items: [
              { text: 'Felsökning', link: '/sv/resources-support/troubleshooting.md' },
              { text: 'Felkoder', link: '/sv/resources-support/error_codes.md' },
              { text: 'Förstå G-code och skrivningsparametrar', link: '/sv/resources-support/gcode.md' },
              {text: 'Underhåll och skötsel', link: '/sv/resources-support/maintenace.md'},
              { text: 'Forum och användarstöd', link: '/sv/resources-support/forum.md' },
              { text: 'Garanti och reparationer', link: '/sv/resources-support/warranty-repairs.md' },
              { text: 'Vanliga frågor (FAQ)', link: '/sv/resources-support/faq.md' },
              {text: 'Säkerhet och bästa praxis', link: '/sv/resources-support/safety.md'}
            ]
          },
        ],
        docFooter: {
          prev: 'Föregående sida',
          next: 'Nästa sida'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Documentation', link: '/en/getting-started/introduction.md' }
        ],
        sidebar: [
          {
            text: 'Getting Started',
            items: [
              { text: 'Introduction', link: '/en/getting-started/introduction.md' },
              { text: 'Unboxing', link: '/en/getting-started/unboxing.md' }
            ]
          },
          {
            text: 'Hardware Setup',
            items: [
              { text: 'Assembly', link: '/en/hardware-setup/assembly.md' }
            ]
          }
        ],
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        }
      }
    }
  },
});
