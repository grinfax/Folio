(function() {

    var app = angular.module('myContent',[]);

    app.controller('ContentController',function($scope) {

        $scope.filtered = [];
        $scope.breadcrumbs;

        $scope.img=[
            {
                id:'TOPS',
                source:'images/t1.jpg',
                website:'Make Me Chic',
                websiteLink : 'http://www.makemecchic.com',
                name:'Contrast Binding Crop Cami Top',
                price:'13.00',
                size: 'S',
                link: 'http://www.makemechic.com/products/Contrast-Binding-Crop-Cami-Top-43276.html'
            },

            {
                id:'TOPS',
                source:'images/t2.jpg',
                website:'Make Me Chic',
                websiteLink : 'http://www.makemecchic.com',
                name:'Cutout V Keyhole Slub Tee',
                price:'8.99',
                size: 'S',
                link: 'http://www.makemechic.com/products/Cutout-V-Keyhole-Slub-Tee-39059.html'
            },

            {
                id:'TOPS',
                source:'images/t3.jpg',
                website:'Make Me Chic',
                websiteLink : 'http://www.makemecchic.com',
                name:'Strappy Open Shoulder Sleeved Crop Top BLACK',
                price:'13.90',
                size: 'S',
                link: 'http://www.makemechic.com/products/Strappy-Open-Shoulder-Sleeved-Crop-Top-BLACK-31928.html'
            },

            {
                id:'TOPS',
                website:'Make Me Chic',
                websiteLink : 'http://www.makemecchic.com',
                source:'images/t4.jpg',
                name:'Self Tie Cross Back Denim Crop Top DENIM',
                price:'27.90',
                size: 'S',
                link: 'htthttp://www.makemechic.com/products/Self-Tie-Cross-Back-Denim-Crop-Top-DENIM-44570.html'
            },

            {
                id:'TOPS',
                source:'images/t5.jpg',
                website:'Make Me Chic',
                websiteLink : 'http://www.makemecchic.com',
                name:'Nails Hand Patch Halter Neck Mesh Bralette',
                price:'9.90',
                size: 'S',
                link: 'http://www.makemechic.com/products/Nails-Hand-Patch-Halter-Neck-Mesh-Bralette-37882.html'
            },

            {
                id:'TOPS',
                source:'images/t6.jpg',
                website:'Make Me Chic',
                websiteLink : 'http://www.makemecchic.com',
                name:'Drop Shoulder Grommet Lace Up Side Tee',
                price:'20.00',
                size: 'S',
                link: 'http://www.makemechic.com/products/Drop-Shoulder-Grommet-Lace-Up-Side-Tee-43091.html'
            },

            {
                id:'TOPS',
                source:'images/t7.jpg',
                website:'Make Me Chic',
                websiteLink : 'http://www.makemecchic.com',
                name:'Wrap Around Crop Top OLIVE',
                price:'14.90',
                size: 'S',
                link: 'http://www.makemechic.com/products/Wrap-Around-Crop-Top-OLIVE-38193.html'
            },

            {
                id:'TOPS',
                source:'images/t8.jpg',
                website:'Make Me Chic',
                websiteLink : 'http://www.makemecchic.com',
                name:'Palm Leaf Crop Top MULTI',
                price:'29.90',
                size: 'S',
                link: 'http://www.makemechic.com/products/Palm-Leaf-Crop-Top-MULTI-34698.html'
            },

            {
                id:'TOPS',
                source:'images/t9.jpg',
                website:'Make Me Chic',
                websiteLink : 'http://www.makemecchic.com',
                name:'Cami Sequined Crop Top SILVER',
                price:'26.90',
                size: 'S',
                link: 'http://www.makemechic.com/products/Cami-Sequined-Crop-Top-SILVER-44550.html'
            },

            {
                id:'TOPS',
                source:'images/t10.jpg',
                website:'Make Me Chic',
                websiteLink : 'http://www.makemecchic.com',
                name:'Drop Shoulder Cut Front Crop Hoodie',
                price:'19.00',
                size: 'S',
                link: 'http://www.makemechic.com/products/Drop-Shoulder-Cut-Front-Crop-Hoodie-41711.html'
            },

            {
                id:'TOPS',
                source:'images/t11.jpg',
                website:'Make Me Chic',
                websiteLink : 'http://www.makemecchic.com',
                name:'Letter Print Ripped Detail Crop Tee',
                price:'14.90',
                size: 'S',
                link: 'http://www.makemechic.com/products/Letter-Print-Ripped-Detail-Crop-Tee-36514.html'
            },

            {
                id:'TOPS',
                source:'images/t12.jpg',
                website:'Make Me Chic',
                websiteLink : 'http://www.makemecchic.com',
                name:'Black Graphic Print Cutout V Neck T-shirt',
                price:'12.90',
                size: 'S',
                link: 'http://www.makemechic.com/products/Black-Graphic-Print-Cutout-V-Neck-T-shirt-35853.html'
            },

            {
                id:'SHOES',
                source:'images/s1.jpg',
                website: 'FreePeople',
                websiteLink : 'http://www.freepeople.com',
                name:'Glass Slipper Heel',
                price:'128.00',
                size: '7',
                link: 'https://www.freepeople.com/shop/glass-slipper-heel/?color=100'
            },

            {
                id:'SHOES',
                source:'images/s2.jpg',
                website: 'FreePeople',
                websiteLink : 'http://www.freepeople.com',
                name:'Velvet Cecile Ankle Boot',
                price:'168.00',
                size: '7.5',
                link: 'https://www.freepeople.com/shop/velvet-cecile-ankle-boot/?color=001'
            },

            {
                id:'SHOES',
                source:'images/s3.jpg',
                website: 'FreePeople',
                websiteLink : 'http://www.freepeople.com',
                name:'Vegan Dorian Wedge',
                price:'168.00',
                size: '7',
                link: 'https://www.freepeople.com/shop/vegan-dorian-wedge/?color=001'
            },

            {
                id:'SHOES',
                source:'images/s4.jpg',
                website: 'FreePeople',
                websiteLink : 'http://www.freepeople.com',
                name:'Carpario Tall Moccasin',
                price:'388.00',
                size: '7',
                link: 'https://www.freepeople.com/shop/carpario-tall-moccasin/?color=023'
            },

            {
                id:'SHOES',
                source:'images/s5.jpg',
                website: 'FreePeople',
                websiteLink : 'http://www.freepeople.com',
                name:'Universal Flatform Teva',
                price:'60.00',
                size: '7',
                link: 'https://www.freepeople.com/shop/universal-flatform-teva/?color=009'
            },

            {
                id:'SHOES',
                source:'images/s6.jpg',
                website: 'FreePeople',
                websiteLink : 'http://www.freepeople.com',
                name:'Mursi Wrap Sandal',
                price:'128.00',
                size: '7',
                link: 'https://www.freepeople.com/shop/mursi-wrap-sandal/?color=023'
            },

            {
                id:'SHOES',
                source:'images/s7.jpg',
                website: 'FreePeople',
                websiteLink : 'http://www.freepeople.com',
                name:'Prince Street Sneaker',
                price:'100.00',
                size: '7',
                link: 'https://www.freepeople.com/shop/prince-street-sneaker/?color=001'
            },

            {
                id:'SHOES',
                source:'images/s8.jpg',
                website: 'FreePeople',
                websiteLink : 'http://www.freepeople.com',
                name:'Paradise Espadrille',
                price:'98.00',
                size: '7',
                link: 'https://www.freepeople.com/shop/paradise-espadrille/?color=023'
            },

            {
                id:'SHOES',
                source:'images/s9.jpg',
                website: 'FreePeople',
                websiteLink : 'http://www.freepeople.com',
                name:'Sk8-Hi Top Sneaker',
                price:'60.00',
                size: '7.5',
                link: 'https://www.freepeople.com/shop/sk8-hi-top-sneaker/?color=004'
            },

            {
                id:'SHOES',
                source:'images/s10.jpg',
                website: 'FreePeople',
                websiteLink : 'http://www.freepeople.com',
                name:'Got Me Twisted Sandal',
                price:'70.00',
                size: '7',
                link: 'https://www.freepeople.com/shop/got-me-twisted-sandal/?color=053'
            },

            {
                id:'SHOES',
                source:'images/s11.jpg',
                website: 'FreePeople',
                websiteLink : 'http://www.freepeople.com',
                name:'Sky V Sneaker',
                price:'125.00',
                size: '7',
                link: 'https://www.freepeople.com/shop/sky-v-sneaker/?color=066'
            },

            {
                id:'SHOES',
                source:'images/s12.jpg',
                website: 'FreePeople',
                websiteLink : 'http://www.freepeople.com',
                name:'Sk8 Slim Glitter High Top Sneakers',
                price:'65.00',
                size: '7',
                link: 'https://www.freepeople.com/shop/sk8-slim-glitter-high-top-sneakers/?color=066'
            },

            {
                id:'SWIMWEAR',
                source:'images/swim1.jpg',
                website:'Romwe',
                websiteLink : 'http://www.romwe.com',
                name:'White Pineapple Print Sexy Bikini Set',
                price:'14.99',
                size: 'S',
                link: 'http://romwe.com/White-Pineapple-Print-Sexy-Bikini-Set-p-206255-cat-679.html'
            },

            {
                id:'SWIMWEAR',
                source:'images/swim2.jpg',
                website:'Romwe',
                websiteLink : 'http://www.romwe.com',
                name:'Leaf Print Sexy Bikini Set',
                price:'13.99',
                size: 'S',
                link: 'http://romwe.com/Leaf-Print-Sexy-Bikini-Set-p-205309-cat-679.html'
            },

            {
                id:'SWIMWEAR',
                source:'images/swim3.jpg',
                website:'Romwe',
                websiteLink : 'http://www.romwe.com',
                name:'Pineapple Print Wrap Bikini Set',
                price:'14.99',
                size: 'S',
                link: 'http://romwe.com/Pineapple-Print-Wrap-Bikini-Set-p-227109-cat-679.html'
            },

            {
                id:'SWIMWEAR',
                source:'images/swim4.jpg',
                website:'Romwe',
                websiteLink : 'http://www.romwe.com',
                name:'Yellow Crochet Trim Triangle Bikini Set',
                price:'18.99',
                size: 'S',
                link: 'http://romwe.com/Yellow-Crochet-Trim-Triangle-Bikini-Set-p-208655-cat-679.html'
            },

            {
                id:'SWIMWEAR',
                source:'images/swim5.jpg',
                website:'Romwe',
                websiteLink :'http://www.romwe.com',
                name:'Hollow Out Weave Straps Bikini Set',
                price:'10.99',
                size: 'S',
                link: 'http://romwe.com/Hollow-Out-Weave-Straps-One-Piece-Bikini-Set-p-218287-cat-679.html'
            },

            {
                id:'SWIMWEAR',
                source:'images/swim6.jpg',
                website:'Romwe',
                websiteLink : 'http://www.romwe.com',
                name:'Double Scoop Neck Velvet Bikini Set',
                price:'14.99',
                size: 'S',
                link: 'http://romwe.com/Double-Scoop-Neck-Velvet-Bikini-Set-p-235288-cat-679.html'
            },

            {
                id:'SWIMWEAR',
                source:'images/swim7.jpg',
                website:'Romwe',
                websiteLink : 'http://www.romwe.com',
                name:'Leopard Print High Leg Bikini Set',
                price:'12.99',
                size: 'S',
                link: 'http://romwe.com/Leopard-Print-High-Leg-Bikini-Set-p-235749-cat-679.html'
            },

            {
                id:'SWIMWEAR',
                source:'images/swim8.jpg',
                website:'Romwe',
                websiteLink : 'http://www.romwe.com',
                name:'Knot Front Side Tie Ribbed Bikini Set',
                price:'12.99',
                size: 'S',
                link: 'http://www.romwe.com/Knot-Front-Side-Tie-Ribbed-Bikini-Set-p-235560-cat-679.html'
            },

            {
                id:'SWIMWEAR',
                source:'images/swim9.jpg',
                website:'Romwe',
                websiteLink : 'http://www.romwe.com',
                name:'Color Block Lace Up Tankini Set',
                price:'16.99',
                size: 'S',
                link: 'http://romwe.com/Color-Block-Lace-Up-Tankini-Set-p-217443-cat-679.html'
            },

            {
                id:'SWIMWEAR',
                source:'images/swim10.jpg',
                website:'Romwe',
                websiteLink : 'http://www.romwe.com',
                name:'Calico Print Scoop Neck Bikini Set',
                price:'12.99',
                size: 'S',
                link: 'http://romwe.com/Calico-Print-Scoop-Neck-Bikini-Set-p-219694-cat-679.html'
            },

            {
                id:'SWIMWEAR',
                source:'images/swim11.jpg',
                website:'Romwe',
                websiteLink : 'http://www.romwe.com',
                name:'Double Scoop Neck Bikini Set',
                price:'14.99',
                size: 'S',
                link: 'http://romwe.com/Double-Scoop-Neck-Bikini-Set-p-235578-cat-679.html'
            },

            {
                id:'SWIMWEAR',
                source:'images/swim12.jpg',
                website:'Romwe',
                websiteLink : 'http://www.romwe.com',
                name:'Graphic Print Bardot Bikini Set',
                price:'13.99',
                size: 'S',
                link: 'http://romwe.com/Graphic-Print-Bardot-Bikini-Set-p-220840-cat-679.html'
            },

            {
                id:'BOTTOMS',
                source:'images/b1.jpg',
                website:'Romwe',
                websiteLink : 'http://www.romwe.com',
                name:'Destroyed Fishnet Insert Fray Trim Denim Skirt',
                price:'14.99',
                size: 'S',
                link: 'http://romwe.com/Destroyed-Fishnet-Insert-Fray-Trim-Denim-Skirt-p-233142-cat-682.html'
            },

            {
                id:'BOTTOMS',
                source:'images/b2.jpg',
                website:'Romwe',
                websiteLink : 'http://www.romwe.com',
                name:'Blue High Waist Casual Jeans',
                price:'18.99',
                size: 'S',
                link: 'http://romwe.com/Blue-High-Waist-Casual-Jeans-p-207271-cat-681.html'
            },

            {
                id:'BOTTOMS',
                source:'images/b3.jpg',
                website:'Romwe',
                websiteLink : 'http://www.romwe.com',
                name:'Black Mesh Insert Striped Leggings',
                price:'10.99',
                size: 'S',
                link: 'http://romwe.com/Black-Mesh-Insert-Striped-Leggings-p-216239-cat-683.html'
            },

            {
                id:'BOTTOMS',
                source:'images/b4.jpg',
                website:'Romwe',
                websiteLink : 'http://www.romwe.com',
                name:'Black Lace Up Hem Leggings',
                price:'6.99',
                size: 'S',
                link: 'http://romwe.com/Black-Lace-Up-Hem-Leggings-p-210685-cat-683.html'
            },

            {
                id:'BOTTOMS',
                source:'images/b5.jpg',
                website: 'FashionNova',
                websiteLink : 'http://www.fashionnova.com',
                name:'Dont Stop Now Jeans - Dark',
                price:'29.99',
                size: '5',
                link: 'https://www.fashionnova.com/collections/jeans/products/dont-stop-now-jeans-dark'
            },

            {
                id:'BOTTOMS',
                source:'images/b6.jpg',
                website: 'FashionNova',
                websiteLink : 'http://www.fashionnova.com',
                name:'Klum Jeans - Dark',
                price:'22.99',
                size: '5',
                link: 'https://www.fashionnova.com/collections/jeans/products/klum-jeans-dark'
            },

            {
                id:'BOTTOMS',
                source:'images/b7.jpg',
                website: 'FashionNova',
                websiteLink : 'http://www.fashionnova.com',
                name:'Back In The Day Jeans - Blue',
                price:'37.99',
                size: '5',
                link: 'https://www.fashionnova.com/collections/jeans/products/back-in-the-day-jeans-blue'
            },

            {
                id:'BOTTOMS',
                source:'images/b8.jpg',
                website: 'FashionNova',
                websiteLink : 'http://www.fashionnova.com',
                name:'Lookin Good Jeans - Dark Wash',
                price:'32.99',
                size: '5',
                link: 'https://www.fashionnova.com/collections/jeans/products/lookin-good-jeans-dark-wash'
            },

            {
                id:'BOTTOMS',
                source:'images/b9.jpg',
                website: 'FashionNova',
                websiteLink : 'https://www.fashionnova.com/',
                name:'On A Wave Jeans - Light Blue',
                price:'19.99',
                size: 'S',
                link: 'https://www.fashionnova.com/collections/jeans/products/on-a-wave-jeans-light-blue'
            },

            {
                id:'BOTTOMS',
                source:'images/b10.jpg',
                website: 'FashionNova',
                websiteLink : 'http://www.fashionnova.com',
                name:'Express Yourself Jeans - Light',
                price:'29.99',
                size: '5',
                link: 'https://www.fashionnova.com/collections/jeans/products/express-yourself-jeans-light'
            },

            {
                id:'BOTTOMS',
                source:'images/b11.jpg',
                website: 'FashionNova',
                websiteLink : 'http://www.fashionnova.com',
                name:'Stevie Jeans - Light',
                price:'34.99',
                size: '5',
                link: 'https://www.fashionnova.com/collections/jeans/products/stevie-jeans-light'
            },

            {
                id:'BOTTOMS',
                source:'images/b12.jpg',
                website: 'FashionNova',
                websiteLink : 'http://www.fashionnova.com',
                name:'Pure Vanity Skinny Jeans - Medium Wash',
                price:'19.99',
                size: 'S',
                link: 'https://www.fashionnova.com/collections/jeans/products/pure-vanity-skinny-jeans-medium-wash-1'
            },

            {
                id:'MATCHING SETS',
                source:'images/ms1.jpg',
                website:'FashionNova',
                websiteLink : 'http://www.fashionnova.com',
                name:'From Another Life Set - Mustard',
                price:'44.99',
                size: 'S',
                link: 'https://www.fashionnova.com/collections/matching-sets/products/from-another-life-set-mustard'
            },

            {
                id:'MATCHING SETS',
                source:'images/ms2.jpg',
                website:'FashionNova',
                websiteLink : 'http://www.fashionnova.com',
                name:'Brooke Set - Fuchsia',
                price:'34.99',
                size: 'S',
                link: 'https://www.fashionnova.com/collections/matching-sets/products/brooke-set-fuchsia'
            },

            {
                id:'MATCHING SETS',
                source:'images/ms3.jpg',
                website:'FashionNova',
                websiteLink : 'http://www.fashionnova.com',
                name:'All Of Us Top - Red',
                price:'19.99',
                size: 'S',
                link: 'https://www.fashionnova.com/collections/matching-sets/products/all-of-us-top-red'
            },

            {
                id:'MATCHING SETS',
                source:'images/ms4.jpg',
                website:'FashionNova',
                websiteLink : 'http://www.fashionnova.com',
                name:'Have Fun Smocked Top - Mustard',
                price:'17.99',
                size: 'S',
                link: 'https://www.fashionnova.com/collections/matching-sets/products/have-fun-smocked-top-mustard'
            },

            {
                id:'MATCHING SETS',
                source:'images/ms5.jpg',
                website:'FashionNova',
                websiteLink : 'http://www.fashionnova.com',
                name:'Amily Tie Dye Top - Navy/Brown',
                price:'17.99',
                size: 'S',
                link: 'https://www.fashionnova.com/collections/matching-sets/products/amily-tie-dye-top-navy-brown'
            },

            {
                id:'MATCHING SETS',
                source:'images/ms6.jpg',
                website:'FashionNova',
                websiteLink : 'http://www.fashionnova.com',
                name:'Pretty In Punk Top - Olive',
                price:'22.99',
                size: 'S',
                link: 'https://www.fashionnova.com/collections/matching-sets/products/pretty-in-punk-top-olive'
            },

            {
                id:'MATCHING SETS',
                source:'images/ms7.jpg',
                website:'FashionNova',
                websiteLink : 'http://www.fashionnova.com',
                name:'Vicki Tube Top - Black',
                price:'17.99',
                size: 'S',
                link: 'https://www.fashionnova.com/collections/matching-sets/products/viki-tube-top-black'
            },

            {
                id:'MATCHING SETS',
                source:'images/ms8.jpg',
                website:'FashionNova',
                websiteLink : 'http://www.fashionnova.com',
                name:'Cassandra Top - Navy',
                price:'12.99',
                size: 'S',
                link: 'https://www.fashionnova.com/collections/matching-sets/products/cassandra-top-navy'
            },

            {
                id:'MATCHING SETS',
                source:'images/ms9.jpg',
                website:'FashionNova',
                websiteLink : 'http://www.fashionnova.com',
                name:'Loves Ones Lace Set - White',
                price:'39.99',
                size: 'S',
                link: 'https://www.fashionnova.com/collections/matching-sets/products/loves-ones-lace-set-white'
            },

            {
                id:'MATCHING SETS',
                source:'images/ms10.jpg',
                website:'FashionNova',
                websiteLink : 'http://www.fashionnova.com',
                name:'Play My Song Sequin Set - Silver',
                price:'34.99',
                size: 'S',
                link: 'https://www.fashionnova.com/collections/matching-sets/products/play-my-song-sequin-set-silver'
            },

            {
                id:'MATCHING SETS',
                source:'images/ms11.jpg',
                website:'FashionNova',
                websiteLink : 'http://www.fashionnova.com',
                name:'Jax Top - Heather Grey',
                price:'22.99',
                size: 'S',
                link: 'https://www.fashionnova.com/collections/matching-sets/products/jax-top-heather-grey'
            },

            {
                id:'MATCHING SETS',
                source:'images/ms12.jpg',
                website:'FashionNova',
                websiteLink : 'http://www.fashionnova.com',
                name:'Euphoria Crushed Velvet Set - Blue',
                price:'22.99',
                size: 'S',
                link: 'https://www.fashionnova.com/collections/matching-sets/products/euphoria-crushed-velvet-set-blue'
            },

            {
                id: 'ACCESSORIES',
                source: 'images/a1.jpg',
                website: 'Romwe',
                websiteLink : 'http://www.romwe.com',
                name: 'Vertical Zipper Detail Nylon Backpack',
                price: '14.99',
                size: 'one-size',
                link: 'http://romwe.com/Vertical-Zipper-Detail-Nylon-Backpack-p-234500-cat-765.html'
            },

            {
                id:'ACCESSORIES',
                source:'images/a2.jpg',
                website: 'Romwe',
                websiteLink : 'http://www.romwe.com',
                name:'Black Front Zipper Nylon Mesh Backpack',
                price:'9.99',
                size: 'one-size',
                link: 'http://romwe.com/Black-Front-Zipper-Nylon-Mesh-Backpack-p-193551-cat-765.html'
            },

            {
                id:'ACCESSORIES',
                source:'images/a3.jpg',
                website: 'Romwe',
                websiteLink : 'http://www.romwe.com',
                name:'Burgundy Pocket Front Double Handle Velvet Backpack',
                price:'18.99',
                size: 'one-size',
                link: 'http://romwe.com/Burgundy-Pocket-Front-Double-Handle-Velvet-Backpack-p-204994-cat-765.html'
            },

            {
                id:'ACCESSORIES',
                source:'images/a4.jpg',
                website: 'Romwe',
                websiteLink : 'http://www.romwe.com',
                name:'Grey Zipper Detail Velvet Backpack',
                price:'13.99',
                size: 'one-size',
                link: 'http://romwe.com/Grey-Zipper-Detail-Velvet-Backpack-p-209285-cat-765.html'
            },

            {   id:'ACCESSORIES',
                source:'images/a5.jpg',
                website: 'Romwe',
                websiteLink : 'http://www.romwe.com',
                name:'Champagne Gold 12Pcs Makeup Brush Set With Leather Bag',
                price:'10.99',
                size: 'one-size',
                link: 'http://romwe.com/Champagne-Gold-12Pcs-Makeup-Brush-Set-With-Leather-Bag-p-205200-cat-717.html'
            },

            {
                id:'ACCESSORIES',
                source:'images/a6.jpg',
                website: 'Romwe',
                websiteLink : 'http://www.romwe.com',
                name:'10PCS White Professional Makeup Brush Set',
                price:'8.99',
                size: 'one-size',
                link: 'http://www.romwe.com/10PCS-White-Professional-Makeup-Brush-Set-p-193781-cat-717.html'
            },

            {
                id:'ACCESSORIES',
                source:'images/a7.jpg',
                website: 'Romwe',
                websiteLink : 'http://www.romwe.com',
                name:'Makeup Tool Set With Puffs And Makeup Brushes',
                price:'9.99',
                size: 'one-size',
                link: 'http://romwe.com/Makeup-Tool-Set-With-Puffs-And-Makeup-Brushes-p-216425-cat-717.html'
            },

            {
                id:'ACCESSORIES',
                source:'images/a8.jpg',
                website: 'Romwe',
                websiteLink : 'http://www.romwe.com',
                name:'10PCS Green Professional Makeup Brush Set',
                price:'7.99',
                size: 'one-size',
                link: 'http://www.romwe.com/10PCS-Green-Professional-Makeup-Brush-Set-p-216584-cat-717.html'
            },

            {
                id:'ACCESSORIES',
                source:'images/a9.jpg',
                website: 'Romwe',
                websiteLink : 'http://www.romwe.com',
                name:'Khaki Vintage PU Backpack',
                price:'19.99',
                size: 'one-size',
                link: 'http://romwe.com/Khaki-Vintage-PU-Backpack-p-209567-cat-765.html'
            },

            {
                id:'ACCESSORIES',
                source:'images/a10.jpg',
                website: 'Romwe',
                websiteLink : 'http://www.romwe.com',
                name:'Clear Frame Polygon Sunglasses',
                price:'7.99',
                size: 'one-size',
                link: 'http://romwe.com/Clear-Frame-Polygon-Sunglasses-p-224250-cat-695.html'
            },

            {
                id:'ACCESSORIES',
                source:'images/a11.jpg',
                website: 'Romwe',
                websiteLink : 'http://www.romwe.com',
                name:'Rose Gold Frame Clear Lens Double Bridge Glasses',
                price:'7.99',
                size: 'one-size',
                link: 'http://romwe.com/Rose-Gold-Frame-Clear-Lens-Double-Bridge-Glasses-p-211518-cat-695.html'
            },

            {
                id:'ACCESSORIES',
                source:'images/a12.jpg',
                website: 'Romwe',
                websiteLink : 'http://www.romwe.com',
                name:'Buckled Flap Drawstring Backpack - Black',
                price:'20.99',
                size: 'one-size',
                link: 'http://romwe.com/Buckled-Flap-Drawstring-Backpack---Black-p-165714-cat-765.html'
            }
        ];

        $scope.getData = function(value){
            $scope.filtered = $scope.img.filter(test=>test.id == value);
            $scope.breadcrumbs = value;
            $scope.hideCrossfade = true;
            $scope.hideBanner = true;
            $scope.showBreadcrumbs = true;
            $scope.showDetailed = false;
            $scope.showContainer = true;
            $scope.showBreadcrumbs2 = false;
        };

        $scope.showData = function(source, website, name, price, size, link, websiteLink) {
            $scope.imgSrc = source;
            $scope.website = website;
            $scope.name = name;
            $scope.name2 = name.toUpperCase();
            $scope.price = price;
            $scope.size = size;
            $scope.link = link;
            $scope.websiteLink = websiteLink;
            $scope.showContainer = false;
            $scope.showDetailed = true;
            $scope.showBreadcrumbs = false;
            $scope.showBreadcrumbs2 = true;
        }

    });

})();
