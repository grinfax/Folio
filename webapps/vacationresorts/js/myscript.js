(function() {

    var app = angular.module('myContent',['angular.filter']);

    app.controller('ContentController',function($scope) {

        $scope.filtered = [];
        $scope.cities = [];

        $scope.img=[
            {
                name: 'Sandalo',
                city: 'Gibbs Beach',
                country: 'BARBADOS',
                source:'images/b1.jpg',
                people: '10',
                bed: '5',
                bath: '6.5',
                price:'6,950',
                link: 'https://www.luxuryretreats.com/vacation-rentals/caribbean/barbados/gibbs-beach/sandalo-106936'
            },

            {
                name: 'Bohemia',
                city: 'Sandy Lane',
                country: 'BARBADOS',
                source:'images/b2.jpg',
                people: '10',
                bed: '5',
                bath: '8',
                price:'5,650',
                link: 'https://www.luxuryretreats.com/vacation-rentals/caribbean/barbados/sandy-lane/bohemia-105052'
            },

            {
                name: 'CLaridges 6',
                city: 'St. Peter',
                country: 'BARBADOS',
                source:'images/b3.jpg',
                people: '6',
                bed: '3',
                bath: '4.5',
                price:'1,200',
                link: 'https://www.luxuryretreats.com/vacation-rentals/caribbean/barbados/st-peter/claridges-6-114461'
            },

            {
                name: 'Godings Beach House',
                city: 'St. Peter',
                country: 'BARBADOS',
                source:'images/b4.jpg',
                people: '10',
                bed: '5',
                bath: '5',
                price:'13,200',
                link: 'https://www.luxuryretreats.com/vacation-rentals/caribbean/barbados/st-peter/godings-beach-house-118867'
            },

            {
                name: 'Footprints',
                city: 'The Garden',
                country: 'BARBADOS',
                source:'images/b5.jpg',
                people: '10',
                bed: '5',
                bath: '5.5',
                price:'3,400',
                link: 'https://www.luxuryretreats.com/vacation-rentals/caribbean/barbados/the-garden/footprints-116262'
            },

            {
                name: 'Greensleeves',
                city: 'Gibbs Beach',
                country: 'BARBADOS',
                source:'images/b6.jpg',
                people: '18',
                bed: '9',
                bath: '9.5',
                price:'8,700',
                link: 'https://www.luxuryretreats.com/vacation-rentals/caribbean/barbados/gibbs-beach/greensleeves-105062'
            },

            {
                name: 'La Maison',
                city: 'St. James',
                country: 'BARBADOS',
                source:'images/b7.jpg',
                people: '14',
                bed: '7',
                bath: '8.5',
                price:'3,250',
                link: 'https://www.luxuryretreats.com/vacation-rentals/caribbean/barbados/st-james/la-maison-michelle-114578'
            },

            {
                name: 'Illusion',
                city: 'Sugar Hill',
                country: 'BARBADOS',
                source:'images/b8.jpg',
                people: '8',
                bed: '4',
                bath: '4.5',
                price:'2,400',
                link: 'https://www.luxuryretreats.com/vacation-rentals/caribbean/barbados/sugar-hill-resort/illusion-110399'
            },

            {
                name: 'Gardenia',
                city: 'The Garden',
                country: 'BARBADOS',
                source:'images/b9.jpg',
                people: '12',
                bed: '6',
                bath: '6.5',
                price:'4,000',
                link: 'https://www.luxuryretreats.com/vacation-rentals/caribbean/barbados/the-garden/gardenia-110414'
            },

            {
                name: 'Marsh Mellow',
                city: 'St. James',
                country: 'BARBADOS',
                source:'images/b10.jpg',
                people: '8',
                bed: '4',
                bath: '4.5',
                price:'965',
                link: 'https://www.luxuryretreats.com/vacation-rentals/caribbean/barbados/st-james/marsh-mellow-113692'
            },

            {
                name: 'Villa Valentina',
                city: 'Sapodilla Bay',
                country: 'TURKS AND CAICOS',
                source:'images/tc1.jpg',
                people: '8',
                bed: '4',
                bath: '4.5',
                price:'2,429',
                link: 'https://www.luxuryretreats.com/vacation-rentals/caribbean/turks-and-caicos/sapodilla-bay/villa-valentina-109667'
            },

            {
                name: 'Tip of the Tail Villa',
                city: 'Turtle Tail',
                country: 'TURKS AND CAICOS',
                source:'images/tc2.jpg',
                people: '12',
                bed: '5',
                bath: '5',
                price:'7,000',
                link: 'https://www.luxuryretreats.com/vacation-rentals/caribbean/turks-and-caicos/turtle-tail/tip-of-the-tail-villa-118868'
            },

            {
                name: 'Point House',
                city: 'Parrot Cay',
                country: 'TURKS AND CAICOS',
                source:'images/tc3.jpg',
                people: '6',
                bed: '3',
                bath: '3',
                price:'9,500',
                link: 'https://www.luxuryretreats.com/vacation-rentals/caribbean/turks-and-caicos/parrot-cay/point-house-at-como-parrot-cay-120060'
            },

            {
                name: 'Pearl West',
                city: 'Long Bay Beach',
                country: 'TURKS AND CAICOS',
                source:'images/tc4.jpg',
                people: '16',
                bed: '8',
                bath: '8.5',
                price:'7,500',
                link: 'https://www.luxuryretreats.com/vacation-rentals/caribbean/turks-and-caicos/long-bay-beach/pearl-west-117210'
            },

            {
                name: 'Hawksbill Estate',
                city: 'Grace Bay',
                country: 'TURKS AND CAICOS',
                source:'images/tc5.jpg',
                people: '20',
                bed: '10',
                bath: '10.5',
                price:'11,800',
                link: 'https://www.luxuryretreats.com/vacation-rentals/caribbean/turks-and-caicos/grace-bay/hawksbill-estate-118012'
            },

            {
                name: 'Footprints',
                city: 'Grace Bay',
                country: 'TURKS AND CAICOS',
                source:'images/tc6.jpg',
                people: '12',
                bed: '5',
                bath: '5',
                price:'2,564',
                link: 'https://www.luxuryretreats.com/vacation-rentals/caribbean/turks-and-caicos/grace-bay/footprints-on-the-beach-108776'
            },

            {
                name: 'Hawksbill',
                city: 'Grace Bay',
                country: 'TURKS AND CAICOS',
                source:'images/tc7.jpg',
                people: '16',
                bed: '8',
                bath: '8.5',
                price:'6,800',
                link: 'https://www.luxuryretreats.com/vacation-rentals/caribbean/turks-and-caicos/grace-bay/hawksbill-117334'
            },

            {
                name: 'Vila Sardinia',
                city: 'Taylor Bay Beach',
                country: 'TURKS AND CAICOS',
                source:'images/tc8.jpg',
                people: '2',
                bed: '1',
                bath: '2',
                price:'1,243',
                link: 'https://www.luxuryretreats.com/vacation-rentals/caribbean/turks-and-caicos/taylor-bay-beach/villa-sardinia-119768'
            },

            {
                name: 'Bajacu',
                city: 'Ocean Drive',
                country: 'TURKS AND CAICOS',
                source:'images/tc9.jpg',
                people: '12',
                bed: '6',
                bath: '7',
                price:'5,750',
                link: 'https://www.luxuryretreats.com/vacation-rentals/caribbean/turks-and-caicos/ocean-drive/bajacu-106111'
            },

            {
                name: 'Turtle House',
                city: 'Turtle Tail',
                country: 'TURKS AND CAICOS',
                source:'images/tc10.jpg',
                people: '14',
                bed: '7',
                bath: '6.5',
                price:'9,000',
                link: 'https://www.luxuryretreats.com/vacation-rentals/caribbean/turks-and-caicos/turtle-tail/turtle-house-114386'
            },

            {
                name: 'Sanctuary Villa',
                city: 'Parrot Cay',
                country: 'TURKS AND CAICOS',
                source:'images/tc11.jpg',
                people: '8',
                bed: '4',
                bath: '4.5',
                price:'8,800',
                link: 'https://www.luxuryretreats.com/vacation-rentals/caribbean/turks-and-caicos/parrot-cay/the-sanctuary-guest-villa-at-como-parrot-cay-112280'
            },

            {
                name: 'Love Pumpkin',
                city: 'Parrot Cay',
                country: 'TURKS AND CAICOS',
                source:'images/tc12.jpg',
                people: '6',
                bed: '3',
                bath: '3',
                price:'11,000',
                link: 'https://www.luxuryretreats.com/vacation-rentals/caribbean/turks-and-caicos/parrot-cay/love-pumpkin-120059'
            },

            {
                name: 'Cliff Top Residence',
                city: 'Phuket',
                country: 'THAILAND',
                source:'images/t1.jpg',
                people: '12',
                bed: '6',
                bath: '9',
                price:'4,100',
                link: 'https://www.luxuryretreats.com/vacation-rentals/thailand/phuket/ao-yon/cliff-top-residence-120321'
            },

            {
                name: 'Celadon Villa',
                city: 'Koh Samui',
                country: 'THAILAND',
                source:'images/t2.jpg',
                people: '8',
                bed: '4',
                bath: '4.5',
                price:'1,000',
                link: 'https://www.luxuryretreats.com/vacation-rentals/thailand/koh-samui/maenam/celadon-villa-112833'
            },

            {
                name: 'Golden Palm Villa',
                city: 'Koh Samui',
                country: 'THAILAND',
                source:'images/t3.jpg',
                people: '10',
                bed: '5',
                bath: '5.5',
                price:'1,400',
                link: 'https://www.luxuryretreats.com/vacation-rentals/thailand/koh-samui/chaweng/golden-palm-villa-110255'
            },

            {
                name: 'Villa Kya',
                city: 'Koh Samui',
                country: 'THAILAND',
                source:'images/t4.jpg',
                people: '8',
                bed: '4',
                bath: '4',
                price:'1,400',
                link: 'https://www.luxuryretreats.com/vacation-rentals/thailand/koh-samui/bophut/villa-kya-114045'
            },

            {
                name: 'Villa Bougainvillea',
                city: 'Koh Samui',
                country: 'THAILAND',
                source:'images/t5.jpg',
                people: '8',
                bed: '4',
                bath: '4',
                price:'4,450',
                link: 'https://www.luxuryretreats.com/vacation-rentals/thailand/koh-samui/maenam/villa-bougainvillea-miskawaan-108830'
            },

            {
                name: 'Villa Gardenia',
                city: 'Koh Samui',
                country: 'THAILAND',
                source:'images/t6.jpg',
                people: '10',
                bed: '5',
                bath: '5',
                price:'1,150',
                link: 'https://www.luxuryretreats.com/vacation-rentals/thailand/koh-samui/maenam/villa-gardenia-miskawaan-108833'
            },

            {
                name: 'Villa Waterlily',
                city: 'Koh Samui',
                country: 'THAILAND',
                source:'images/t7.jpg',
                people: '10',
                bed: '5',
                bath: '5.5',
                price:'1,200',
                link: 'https://www.luxuryretreats.com/vacation-rentals/thailand/koh-samui/maenam/villa-waterlily-miskawaan-110035'
            },

            {
                name: 'Ani Villas',
                city: 'Phuket',
                country: 'THAILAND',
                source:'images/t8.jpg',
                people: '20',
                bed: '10',
                bath: '10.5',
                price:'6,000',
                link: 'https://www.luxuryretreats.com/vacation-rentals/thailand/phuket/phang-nga/ani-villas-thailand-116295'
            },

            {
                name: 'Baan Lucia',
                city: 'Koh Samui',
                country: 'THAILAND',
                source:'images/t9.jpg',
                people: '6',
                bed: '3',
                bath: '3',
                price:'1,100',
                link: 'https://www.luxuryretreats.com/vacation-rentals/thailand/koh-samui/bang-por/baan-lucia-119990'
            },

            {
                name: 'Tassana Pra',
                city: 'Koh Samui',
                country: 'THAILAND',
                source:'images/t10.jpg',
                people: '8',
                bed: '4',
                bath: '4',
                price:'1,118',
                link: 'https://www.luxuryretreats.com/vacation-rentals/thailand/koh-samui/choeng-mon/tassana-pra-119992'
            },

            {
                name: 'Benyasiri',
                city: 'Phuket',
                country: 'THAILAND',
                source:'images/t11.jpg',
                people: '10',
                bed: '5',
                bath: '4',
                price:'3,500',
                link: 'https://www.luxuryretreats.com/vacation-rentals/thailand/phuket/kamala/benyasiri-at-samsara-110710'
            },

            {
                name: 'Villa Nema',
                city: 'Ibiza',
                country: 'SPAIN',
                source:'images/s1.jpg',
                people: '8',
                bed: '4',
                bath: '5',
                price:'3,211',
                link: 'https://www.luxuryretreats.com/vacation-rentals/spain/ibiza/sa-caleta/villa-nema-115814'
            },

            {
                name: 'Villa Vista',
                city: 'Ibiza',
                country: 'SPAIN',
                source:'images/s2.jpg',
                people: '12',
                bed: '6',
                bath: '7',
                price:'3,923',
                link: 'https://www.luxuryretreats.com/vacation-rentals/spain/ibiza/cala-jondal/villa-vista-cala-jondal-116704'
            },

            {
                name: 'Villa Yelda',
                city: 'Ibiza',
                country: 'SPAIN',
                source:'images/s3.jpg',
                people: '10',
                bed: '5',
                bath: '6',
                price:'1,369',
                link: 'https://www.luxuryretreats.com/vacation-rentals/spain/ibiza/es-cubells/villa-yelda-120041'
            },

            {
                name: 'Casa India',
                city: 'Ibiza',
                country: 'SPAIN',
                source:'images/s4.jpg',
                people: '12',
                bed: '6',
                bath: '7',
                price:'2,412',
                link: 'https://www.luxuryretreats.com/vacation-rentals/spain/ibiza/santa-eularia-des-riu/casa-india-120335'
            },

            {
                name: 'Villa Laguna',
                city: 'Barcelona',
                country: 'SPAIN',
                source:'images/s5.jpg',
                people: '12',
                bed: '6',
                bath: '5',
                price: '1,702',
                link: 'https://www.luxuryretreats.com/vacation-rentals/spain/barcelona/sitges/villa-laguna-119748'
            },

            {
                name: 'Villa Isla Cozumel',
                city: 'Barcelona',
                country: 'SPAIN',
                source:'images/s6.jpg',
                people: '12',
                bed: '6',
                bath: '7',
                price:'2,900',
                link: 'https://www.luxuryretreats.com/vacation-rentals/spain/barcelona/sitges/villa-isla-cozumel-119750'
            },

            {
                name: 'Villa Mirador',
                city: 'Costa del Sol',
                country: 'SPAIN',
                source:'images/s7.jpg',
                people: '16',
                bed: '6',
                bath: '8.5',
                price:'3,286',
                link: 'https://www.luxuryretreats.com/vacation-rentals/spain/costa-del-sol/marbella/villa-mirador-116117'
            },

            {
                name: 'Villa Aloha',
                city: 'Costa del Sol',
                country: 'SPAIN',
                source:'images/s8.jpg',
                people: '15',
                bed: '5',
                bath: '6',
                price:'5,134',
                link: 'https://www.luxuryretreats.com/vacation-rentals/spain/costa-del-sol/marbella/villa-aloha-117780'
            },

            {
                name: 'Casa Caleta',
                city: 'Puerto Vallarta',
                country: 'MEXICO',
                source:'images/m1.jpg',
                people: '12',
                bed: '6',
                bath: '6.5',
                price:'3,950',
                link: 'https://www.luxuryretreats.com/vacation-rentals/mexico/puerto-vallarta/conchas-chinas/casa-caleta-111912'
            },

            {
                name: 'Casa La Laguna',
                city: 'Los Cabos',
                country: 'MEXICO',
                source:'images/m2.jpg',
                people: '13',
                bed: '6',
                bath: '8.5',
                price:'8,000',
                link: 'https://www.luxuryretreats.com/vacation-rentals/mexico/los-cabos/san-jose-del-cabo-san-jose-del-cabo/casa-la-laguna-110021'
            },

            {
                name: 'Villa Pacifica',
                city: 'Los Cabos',
                country: 'MEXICO',
                source:'images/m3.jpg',
                people: '15',
                bed: '6',
                bath: '6',
                price:'3,900',
                link: 'https://www.luxuryretreats.com/vacation-rentals/mexico/los-cabos/the-corridor-palmilla/villa-pacifica-palmilla-117403'
            },

            {
                name: 'Villa Alma Rosa',
                city: 'Riviera Maya',
                country: 'MEXICO',
                source:'images/m4.jpg',
                people: '8',
                bed: '4',
                bath: '4.5',
                price:'4,286',
                link: 'https://www.luxuryretreats.com/vacation-rentals/mexico/riviera-maya/akumal/villa-alma-rosa-114374'
            },

            {
                name: 'Casa Canal',
                city: 'Riviera Nayarit',
                country: 'MEXICO',
                source:'images/m5.jpg',
                people: '12',
                bed: '5',
                bath: '6.5',
                price:'3,000',
                link: 'https://www.luxuryretreats.com/vacation-rentals/mexico/riviera-nayarit/nuevo-vallarta/casa-canal-120272'
            },

            {
                name: 'Casa Bella Villa',
                city: 'Los Cabos',
                country: 'MEXICO',
                source:'images/m6.jpg',
                people: '12',
                bed: '5',
                bath: '6.5',
                price:'4,000',
                link: 'https://www.luxuryretreats.com/vacation-rentals/mexico/los-cabos/the-corridor-palmilla/casa-bella-villa-119102'
            },

            {
                name: 'Terraza',
                city: 'Los Cabos',
                country: 'MEXICO',
                source:'images/m7.jpg',
                people: '8',
                bed: '4',
                bath: '4.5',
                price:'4,500',
                link: 'https://www.luxuryretreats.com/vacation-rentals/mexico/riviera-maya/akumal/villa-alma-rosa-114374'
            }

        ];

        $scope.getData = function(value){
            $scope.filtered = $scope.img.filter(test=>test.country == value);
            $scope.count = $scope.filtered.length;
            $scope.hideImageOne = true;
            $scope.hideImageTwo = true;
            $scope.hideImageThree = true;
            $scope.hideImageFour = true;
            $scope.hideImageFive = true;
            $scope.showTitle = true;
            $scope.showCard = true;
            $scope.hideCard2 = true;
            console.log('value', value);
            $scope.countryVar = value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                console.log(letter);
                return letter.toUpperCase();
            });
        };
        
        $scope.getCitys = function () {
            $scope.cities = $scope.img.filter(test=>test.city, test=>test.country, test=>test.source);
            $scope.hideImageOne = true;
            $scope.hideImageTwo = true;
            $scope.hideImageThree = true;
            $scope.hideImageFour = true;
            $scope.hideImageFive = true;
            $scope.showTitle = false;
            $scope.showCard = false;
            $scope.hideCard2 = false;
        }
    });

})();
