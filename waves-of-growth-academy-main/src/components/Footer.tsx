const Footer = () => (
  <footer className="bg-gradient-to-br from-foreground to-foreground/95 py-12 px-4">
    <div className="container mx-auto max-w-6xl text-center">
      <p className="font-display text-2xl md:text-3xl font-black text-background mb-2">The Waves Academy</p>
      <p className="text-background/80 text-lg italic font-light mb-2">A Unit of The River — "Do the Basics Right"</p>
      <p className="text-background/60 text-base font-medium mb-4">UDYAM Registration: UDYAM-TN-05-0064991</p>
      <p className="text-background/50 text-base">© {new Date().getFullYear()} The Waves Academy. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
