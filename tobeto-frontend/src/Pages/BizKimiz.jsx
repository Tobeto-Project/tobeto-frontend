import React from "react";
import Banner from "../Components/Layouts/Banner";
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";

const BizKimiz = () => {
  return (
    <div className="bg-dark body-container bg-dark">
      <Banner />
      <Header />

      <div className="main-content">
        <h1>Biz Kimiz ?</h1>
        <p>
          Geleceğin mesleklerindeki yetenek açığını, geleneksel "headhunting"
          yaklaşımının "headfarming" olarak değişmesiyle çözülebileceğine
          inanarak yola çıktık. <br /> Tobeto, "headfarming" yaklaşımıyla yeteneği
          potansiyel olarak değerlendirir, en kıymetli olacağı alanda
          yetiştirir, değer yaratacağı projeler ve kurumlarla eşleştirir. Bu
          fırsata Y.E.S. (Yetiş-Eşleş-Sürdür) diyen herkesi Tobeto’lu olmaya
          çağırıyoruz. <br /> Günümüzde iş bulmak, bir projeye dahil olmak veya
          kariyerinde yükselmek gibi değer yaratma yolları için en önemli
          unsurların başında dijital beceri sahibi olmak geliyor. Tam da bu
          ihtiyaçları kapsamak üzere, Tobeto'da eğitim içeriklerimizi hem
          dijital beceri sahibi olmak isteyen yeteneklerin teknik beceri
          kazanması hem de genç profesyonellerin, ihtiyaçlarına uygun olarak
          yenilenmeleri ve yetkinliklerini geliştirmelerini kapsayacak şekilde
          tek platformda birleştirdik. <br /> Tobeto’da hem bireylere hem de kurumlara
          hizmet eden yapımızla, doğru yetenekle doğru pozisyonun sürdürülebilir
          bir şekilde eşleşmesine ve birlikte gelişmelerine alan açıyoruz. Kurum
          içi çözümlere destek veriyor, eğitim ve istihdam arasında köprü
          görevini üstleniyoruz.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default BizKimiz;
