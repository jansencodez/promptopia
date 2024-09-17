import Head from 'next/head';
import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
  icons: {
    icon: ['/favicon.ico?v=4'],
  },
  manifest: '/app/site.webmanifest'
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <Head>
      <meta name="google-adsense-account" content="ca-pub-4394790876666238" />
      {/* Other head elements can be included here */}
    </Head>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
