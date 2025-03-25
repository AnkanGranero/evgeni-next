export default function Hero({children}) {
    return (
      <div className="relative h-screen bg-fixed bg-center bg-cover bg-[url('/Evgeni_Leonov_foto.jpg')] w-full">
            {children}
      </div>
    );
  }