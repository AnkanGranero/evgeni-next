export default function Footer() {
  return (
    <footer className="p-4 text-center h-[4rem] flex justify-center bottom-0 w-full bg-orange">
      <address className="not-italic flex items-center space-x-4 text-xl">
        <a
          href="mailto:evgenileonov1987@gmail.com"
          aria-label="Skicka e-post till evgenileonov1987@gmail.com"
          className="mr-4 ml-4 flex items-center"
        >
           <span className="mr-5">Kontakta mig:</span>
          <img className=" h-6 inline mr-1" src="/icons/mail.png" alt="mailikon" />
          <span className="hidden md:inline">evgenileonov1987@gmail.com</span>
        </a>
      </address>
    </footer>
  );
}
