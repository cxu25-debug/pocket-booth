import './globals.css';
export const metadata = {title:'Pocket Booth — Four little moments',description:'A little photo booth for wherever you are. Four frames, one keepsake.',manifest:'/manifest.webmanifest',appleWebApp:{capable:true,statusBarStyle:'black-translucent',title:'Pocket Booth'},icons:{icon:'/icon.png',apple:'/apple-touch-icon.png'}};
export const viewport = {width:'device-width',initialScale:1,viewportFit:'cover',themeColor:'#f4eee4'};
export default function RootLayout({children}){return <html lang="en"><body>{children}</body></html>}
