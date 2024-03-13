import React from 'react'
import { Card, Container } from 'react-bootstrap'

const AdminGuide = () => {
    return (
        <div>
            <Container className='p-4'>
                <Card>
                    <Card.Body>
                        <h3 className='text-center mb-4'>Admin Paneli Kullanım Kılavuzu</h3>
                        <p>
                            Admin panelinde gezinmek için sol taraftaki menüyü kullanabilirsiniz.
                            Menüdeki sekmeler sırasıyla şu sayfalara yönlendirir:
                        </p>
                        <ul>
                            <li><strong>Öğrencilerimiz:</strong> Öğrenci ekleme, silme işlemleri burada yapılır. Öğrenciye ait bilgilerin detayları görüntülenir. </li>
                            <li><strong>Eğitmenlerimiz:</strong> Eğitmen ekleme, silme işlemleri burada yapılır.</li>
                            <li><strong>Görevliler:</strong> Görevli ekleme, silme işlemleri burada yapılır</li>
                            <li> <strong>Blog Ekle:</strong> Yeni bir blog yazısı eklemek için kullanılır.</li>
                            <li><strong>Bloglar:</strong> Var olan blogları görüntülemek için kullanılır.</li>
                            <li><strong>Basın Yazısı Ekle:</strong> Basın yazısı oluşturmak için kullanılır. Basın yazılarına resim eklenebilir.</li>
                            <li><strong>Basın Yazı İşlemleri:</strong> Oluşturulan basın yazıları görüntülenir.</li>
                            <li><strong>Duyuru ve Haberler:</strong> Duyuru eklemek için kullanılır.</li>
                            <li><strong>İletişim Bilgileri:</strong> Firmanın iletişim bilgileri güncelllenir.</li>
                            <li><strong>Görseller:</strong> Cloudinary sistemine eklenen fotoğrafların yönetilmesi sağlanır.</li>
                            <li><strong>Eğitim Ekle:</strong> Eğitim ekleme işlemlerinin yönetilmesi sağlanır.</li>
                            <li><strong>Eğitimler:</strong> Eklenen eğitimler görüntülenir.</li>
                            <li><strong>Sınavlar:</strong> Sınav eklem silme işlemleri yapılır. Sınavlara soru eklenebilir.</li>
                            <li><strong>Dil Seçenekleri:</strong></li>
                            <li><strong>Takvim:</strong> Takvim sayfasının yönetilmesi için kullanılır.</li>
                        </ul>
                        <p>
                            Sayfanın üst kısmındaki sekme değiştiricisi ile farklı sayfalara geçiş yapabilirsiniz.
                        </p>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default AdminGuide