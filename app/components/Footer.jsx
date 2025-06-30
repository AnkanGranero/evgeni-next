export default function Footer() {
  return (
    <footer className="p-4 text-center mt-8 h-[2.5rem] flex text-white justify-center bottom-0 w-full">
      <address className="not-italic flex items-center space-x-4">
        <p>
          <span className="">Kontakta mig:</span> 070 402 46 06
        </p>
        <a
          href="mailto:evgenileonov1987@gmail.com"
          aria-label="Skicka e-post till evgenileonov1987@gmail.com"
          className="mr-4 ml-4"
        >
          <img className="h-6 w-6" src="/icons/mail.png" alt="mailikon" />
        </a>
        <p>
          <span className="hidden md:block">evgenileonov1987@gmail.com</span>
        </p>
      </address>
    </footer>
  );
}
