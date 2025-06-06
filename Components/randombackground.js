document.addEventListener("DOMContentLoaded", function () {

    // Arrays of background images for phones and computers
    const phoneImages = [
        '/Assets/Images/Vertical_Backgrounds/abhijeet-majhi-5y1YGhrsH0c-unsplash.jpg',
        '/Assets/Images/Vertical_Backgrounds/giorgi-iremadze-10Xp5lIq5wY-unsplash.jpg',
        '/Assets/Images/Vertical_Backgrounds/alexx-cooper-VB3cvKx9-Hc-unsplash.jpg',
        '/Assets/Images/Vertical_Backgrounds/jan-kopriva-y_U0VqiKFFk-unsplash.jpg',
        '/Assets/Images/Vertical_Backgrounds/angelina-korolchak-FRRZK1ULzRM-unsplash.jpg',
        '/Assets/Images/Vertical_Backgrounds/kier-in-sight-archives-0kKBt4dGwN4-unsplash.jpg',
        '/Assets/Images/Vertical_Backgrounds/atik-sulianami-xwiO6w6XEiM-unsplash.jpg',
        '/Assets/Images/Vertical_Backgrounds/lance-reis-tJHKM92J_yM-unsplash.jpg',
        '/Assets/Images/Vertical_Backgrounds/lucas-marulier-o5qGmMRquOg-unsplash.jpg',
        '/Assets/Images/Vertical_Backgrounds/bruno-kelzer-75-aDN68ZJE-unsplash.jpg',
        '/Assets/Images/Vertical_Backgrounds/mason-unrau-LpAsInS9ctU-unsplash.jpg',
        '/Assets/Images/Vertical_Backgrounds/rosie-pritchard-epwBnTgYMAc-unsplash.jpg',
        '/Assets/Images/Vertical_Backgrounds/damir-omerovic-UMaGtammiSI-unsplash.jpg',
        '/Assets/Images/Vertical_Backgrounds/samuel-pWeA162MJ9Q-unsplash.jpg',
        '/Assets/Images/Vertical_Backgrounds/vlad-rudkov-UMAJG4y1mm0-unsplash.jpg'
    ];

    const computerImages = [
        '/Assets/Images/Landscape_Backgrounds/abbie-parks-XA1-J2rRGVw-unsplash.jpg',
        '/Assets/Images/Landscape_Backgrounds/patrick-hendry-vOFzgDqPh3Y-unsplash.jpg',
        '/Assets/Images/Landscape_Backgrounds/casper-van-battum-icWhBzRNUFw-unsplash.jpg',
        '/Assets/Images/Landscape_Backgrounds/peter-neumann-Uofb3of6CCQ-unsplash.jpg',
        '/Assets/Images/Landscape_Backgrounds/christopher-ott-qdcRECrSppU-unsplash.jpg',
        '/Assets/Images/Landscape_Backgrounds/phoenix-han-2v_bZYAlKQ4-unsplash.jpg',
        '/Assets/Images/Landscape_Backgrounds/david-clode-8tZJG2t30fI-unsplash.jpg',
        '/Assets/Images/Landscape_Backgrounds/sandra-alekseeva-h4vXoyKX_-Y-unsplash.jpg',
        '/Assets/Images/Landscape_Backgrounds/david-clode-NugxTvRaQT0-unsplash.jpg',
        '/Assets/Images/Landscape_Backgrounds/shiho-azuma-jbz9h7pWxkg-unsplash.jpg',
        '/Assets/Images/Landscape_Backgrounds/david-clode-iQi_QFMfBZI-unsplash.jpg',
        '/Assets/Images/Landscape_Backgrounds/timothy-dykes-3EUmV_AwKoA-unsplash.jpg',
        '/Assets/Images/Landscape_Backgrounds/emanuel-rodriguez-2hdbY4Xaihw-unsplash.jpg',
        '/Assets/Images/Landscape_Backgrounds/timothy-dykes-3JrIpTJ7tkM-unsplash.jpg',
        '/Assets/Images/Landscape_Backgrounds/harshal-s-hirve-oZ0xzQFVCWY-unsplash.jpg',
        '/Assets/Images/Landscape_Backgrounds/timothy-dykes-DyraknirZ84-unsplash.jpg',
        '/Assets/Images/Landscape_Backgrounds/henry-schneider-s3sJ5j2ml2o-unsplash.jpg',
        '/Assets/Images/Landscape_Backgrounds/timothy-dykes-zpuVzW5rv4Q-unsplash.jpg',
        '/Assets/Images/Landscape_Backgrounds/james-wainscoat-WJ2ev0gQo4k-unsplash.jpg',
        '/Assets/Images/Landscape_Backgrounds/viktor-talashuk-0_cIDZw6rgc-unsplash.jpg',
        '/Assets/Images/Landscape_Backgrounds/jason-mitrione-MLAXy8PcGNk-unsplash.jpg',
        '/Assets/Images/Landscape_Backgrounds/wolfgang-hasselmann-PUcrsXh9V4s-unsplash.jpg',
        '/Assets/Images/Landscape_Backgrounds/matt-seymour-qLvikxzTtWY-unsplash.jpg',
        '/Assets/Images/Landscape_Backgrounds/wyxina-tresse-D74M77fOzyg-unsplash.jpg',
        '/Assets/Images/Landscape_Backgrounds/nyusha-svoboda-_AaHmPTYzig-unsplash.jpg',
        '/Assets/Images/Landscape_Backgrounds/wyxina-tresse-iNfpmebMc4k-unsplash.jpg',
        '/Assets/Images/Landscape_Backgrounds/patrick-hendry-_gHLz18DEpE-unsplash.jpg',
        '/Assets/Images/Landscape_Backgrounds/zdenek-machacek-DwrVhMZmcaY-unsplash.jpg',
        '/Assets/Images/Landscape_Backgrounds/patrick-hendry-hqcxvmNyFyg-unsplash.jpg'
    ];

    // Function to get a random image from a given array
    function getRandomImage(images) {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    // Detect if the device is a phone or computer
    const isPhone = window.matchMedia("(max-width: 768px)").matches;

    // Select the appropriate image array
    const selectedImages = isPhone ? phoneImages : computerImages;

    // Apply random background image to the body
    const body = document.body;
    const randomImage = getRandomImage(selectedImages);

    body.style.backgroundImage = `url(${randomImage})`;
    body.style.backgroundSize = 'Cover';
    body.style.backgroundPosition = 'center';
    body.style.backgroundRepeat = 'no-repeat';
});