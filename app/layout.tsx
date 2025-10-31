// import "./globals.css";
// import { ReduxProvider } from "./provider";

// export const metadata = {
//   title: "Nice2Strangers",
//   description: "Next.js + Redux",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Favicon */}
//         <link rel="icon" type="image/svg+xml" href="/assets/img/favicon.ico" />

//         {/* Fonts */}
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link
//           rel="preconnect"
//           href="https://fonts.gstatic.com"
//           crossOrigin="anonymous"
//         />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap"
//           rel="stylesheet"
//         />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap"
//           rel="stylesheet"
//         />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
//           rel="stylesheet"
//         />

//         {/* Meta */}
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       </head>
//       <body>
//         <ReduxProvider>{children}</ReduxProvider>
//       </body>
//     </html>
//   );
// }

// app/layout.tsx
import "./globals.css";
import ClientRoot from "./ClientRoot";
import { ReduxProvider } from "./provider";

export const metadata = {
  title: "Nice2Strangers",
  description: "Next.js + Redux",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/assets/img/favicon.ico" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <ReduxProvider>
          <ClientRoot>{children}</ClientRoot>
        </ReduxProvider>
      </body>
    </html>
  );
}
