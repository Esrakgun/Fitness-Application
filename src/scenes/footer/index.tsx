import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        {/* Sol sütun - Logo ve açıklama */}
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Özgün hedeflere ulaşmak için ilham veren bir yolculuk. Bedeninizi güçlendirirken, zihninizi de özgürleştirin. Evogym ile sağlıklı bir yaşam tarzına adım atın.
          </p>
          <p>© Evogym Tüm Hakları Saklıdır.</p>
        </div>

        {/* Orta sütun - Bağlantılar */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Bağlantılar</h4>
          <p className="my-5">Antrenman Programları</p>
          <p className="my-5">Üyelik Seçenekleri</p>
          <p>Hakkımızda</p>
        </div>

        {/* Sağ sütun - İletişim */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Bize Ulaşın</h4>
          <p className="my-5">Her türlü sorunuz için bizimle iletişime geçebilirsiniz.</p>
          <p>(333) 425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;