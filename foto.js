const changeContentButton = document.getElementById('changeContentButton');
const dynamicImage = document.getElementById('dynamicImage');
const dynamicTitle = document.getElementById('dynamicTitle');
const dynamicText = document.getElementById('dynamicText');

let currentIndex = 0;

const contentArray = [
    {
        image: 'duduk.JPG',
        title: 'Teruntuk Kamu',
        text: '"Bersama kita menciptakan kenangan yang akan selalu hidup di hati."'
    },
    {
        image: 'terbuka.JPG',
        title: 'Kenangan Indah',
        text: '"Setiap momen adalah kenangan yang berharga, teringin selalu berada di sisi mu mengukir cerita indah yang selalu kita impikan "'
    },
    {
        image: 'gambarppelukan.JPG',
        title: 'Kebahagiaan',
        text: '"Kebahagiaan itu sederhana, cukup bersama orang yang kita cintai."'
    },
    {
        image: '1.jpg',
        title: 'Hadiah',
        text: '"Setiap detik bersamamu adalah hadiah terindah dalam hidupku."'
    },
    {
        image: '2.jpg',
        title: 'Terukir',
        text: '"Di balik tawa dan canda kita, terukir kisah cinta yang tak terlupakan."'
    },
    {
        image: '3.jpg',
        title: 'Lukisan',
        text: '"Setiap momen bersamamu adalah lukisan indah dalam galeri hatiku."'
    },
    {
        image: '4.jpg',
        title: 'Hangat',
        text: '"Saat tangan kita bersatu, dunia terasa lebih hangat dan penuh makna."'
    },
    {
        image: '5.jpg',
        title: 'Cahaya',
        text: '"Kau adalah cahaya dalam setiap langkahku, menemani perjalanan hidup ini."'
    },
    {
        image: '6.jpg',
        title: 'Petualangan',
        text: '"Denganmu, setiap hari terasa seperti petualangan yang baru dan menakjubkan."'
    },
    {
        image: '7.jpg',
        title: 'Rumah',
        text: '"Dalam dekapanmu, aku menemukan rumah yang sejati."'
    },
    {
        image: '8.jpg',
        title: 'Dua Bintang',
        text: '"Kita adalah dua bintang yang bersinar terang di langit malam."'
    },
    {
        image: '9.jpg',
        title: 'Sejati',
        text: '"Dalam kesederhanaan, kita menemukan kebahagiaan yang sejati."'
    },
    {
        image: '10.jpg',
        title: 'Nada Indah',
        text: '"Kau adalah nada indah dalam lagu cinta yang kita nyanyikan bersama."'
    },
    {
        image: '11.jpg',
        title: 'Pandanganmu',
        text: '"Setiap pandanganmu menyimpan ribuan kata yang tak terucapkan."'
    },
    {
        image: '12.JPG',
        title: 'Harta Yang Berharga',
        text: '"Kebersamaan kita adalah harta yang tak ternilai, dijaga dengan sepenuh hati."'
    },
    {
        image: '13.JPG',
        title: 'Senyummu',
        text: '"Setiap senyummu menghapus segala duka, menggantinya dengan kebahagiaan."'
    },
    {
        image: '14.JPG',
        title: 'Tertulis Oleh Waktu',
        text: '"Kita adalah kisah yang ditulis oleh waktu, penuh warna dan emosi."'
    },
    {
        image: '15.JPG',
        title: 'Kenyataan',
        text: '"Saat kita berbagi mimpi, kita menjadikannya kenyataan yang indah."'
    },
    {
        image: '16.JPG',
        title: 'Keajaiban',
        text: '"Kebersamaan kita adalah perjalanan yang dipenuhi oleh keajaiban."'
    },
    {
        image: '17.JPG',
        title: 'Ketenangan',
        text: '"Dalam setiap pelukan, aku menemukan ketenangan dan cinta yang mendalam."'
    },
    {
        image: '18.JPG',
        title: 'Teman, Sahabat, Cinta',
        text: '"Kau adalah teman, sahabat, dan cinta dalam satu sosok yang sempurna."'
    },
    {
        image: '19.JPG',
        title: 'Masa Depan',
        text: '"Setiap kenangan yang kita ciptakan menjadi jembatan menuju masa depan yang cerah."'
    },
    {
        image: '21.JPG',
        title: 'Bersamamu',
        text: '"Aku ingin menghabiskan seumur hidupku mengukir cerita indah bersamamu."'
    },
    {
        image: '20.JPG',
        title: 'Impian',
        text: 'AKU RINDU KAMU, Jangan Pernah tinggalin aku'
    }
];

changeContentButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % contentArray.length;
    const currentContent = contentArray[currentIndex];

    dynamicImage.src = currentContent.image;
    dynamicTitle.textContent = currentContent.title;
    dynamicText.textContent = currentContent.text;
});
