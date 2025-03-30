const products = [
    {
        name: "Sony Alpha A6700",
        description:
            "The α6700 combines the latest AI technology with Sony's outstanding α-series image quality in a compact APS-C camera body. Offering enhanced subject recognition, the latest technology for capturing stills and movies, and E-mount lens compatibility, the lightweight α6700 is designed for creative adventures, anytime, anywhere",
        price: 1500,
        discountPrice: 1300,
        countInStock: 10,
        sku: "OX-SH-001",
        brand: "Sony",
        collection: "Digital camera",
        images: [
            {
                url: "https://www.mpb.com/media-service/341f363e-50bc-4ace-a059-5804cd2fa966",
                altText: "Sony Alpha A6700",
            }
        ],
        rating: 4.5,
        numReviews: 10,
    },
    {
        name: "Sony Alpha A7C II",
        description:
            "Compact and lightweight, the α7C II is the full-frame camera that serious creators have been waiting for. Packed with cutting-edge capture technology for both stills and movies, it's the essential tool for capturing the world the way you want to",
        price: 1900,
        discountPrice: 1800,
        countInStock: 5,
        sku: "OX-SH-002",
        brand: "Sony",
        collection: "Digital camera",
        images: [
            {
                url: "https://www.mpb.com/media-service/59f7d773-5909-4ffa-9420-7565d4d57ba8",
                altText: "Sony Alpha A7C II",
            }
        ],
        rating: 4.5,
        numReviews: 5,
    },
    {
        name: "Sony Alpha A6400",
        description:
            "The Alpha a6400 from Sony is an APS-C-format mirrorless camera that adopts many of the features normally reserved for their full-frame lineup. This includes an autofocus acquisition of 0.02 seconds, Real-time Eye AF and Real-time Tracking capabilities, high-speed shooting up to 11 fps and silent shooting up to 8 fps, both with AF/AE tracking, an upgraded BIONZ X image processing engine, an LCD touchscreen that tilts 180° up and 74° down, UHD 4K movie recording with full pixel readout and no pixel binning, internal recording for time-lapse videos, and more",
        price: 750,
        discountPrice: 700,
        countInStock: 10,
        sku: "OX-SH-003",
        brand: "Sony",
        collection: "Digital camera",
        images: [
            {
                url: "https://www.mpb.com/media-service/8bed0ab1-a9e1-4ea8-9d63-f2c6c9ec47d1",
                altText: "Sony Alpha A6400",
            }
        ],
        rating: 4.3,
        numReviews: 15,
    },
    {
        name: "Sony FE 70-300mm f/4.5-5.6 G OSS",
        description:
            "Spanning a useful range of telephoto focal lengths, the FE 70-300mm f/4.5-5.6 G OSS from Sony is a versatile zoom lens designed for full-frame E-mount mirrorless cameras. Complementing the reach, this lens' optical design incorporates four aspherical elements and two extra-low dispersion glass elements to control spherical and chromatic aberrations throughout the zoom range for increased clarity, sharpness, and colour accuracy. A Nano AR coating has also been applied to individual lens elements to minimise lens flare and ghosting for increased contrast and colour fidelity when working in strong lighting conditions. Well-suited to a variety of telephoto needs, this zoom lens balances both a versatile focal length range along with a sophisticated optical design for maintained image quality",
        price: 650,
        discountPrice: 600,
        countInStock: 5,
        sku: "OX-SH-004",
        brand: "Sony",
        collection: "Lenses",
        images: [
            {
                url: "https://www.mpb.com/media-service/4c314ca1-0d5a-4ddc-991f-640393caf9d4",
                altText: "Sony FE 70-300mm f/4.5-5.6 G OSS",
            }
        ],
        rating: 4.5,
        numReviews: 10,
    },
    {
        name: "Sony FE 28-70mm f3.5-5.6 OSS",
        description:
            "The Sony FE 28-70mm f3.5-5.6 OSS lens covers every department. The versatile focal range makes it the ideal lens to record the moment as you see it without compromising quality. The fantastic build ensures quality throughout install confidence as you shoot. It is the ideal lens for all purposes, covering all bases in one lens",
        price: 160,
        discountPrice: 130,
        countInStock: 10,
        sku: "OX-SH-005",
        brand: "Sony",
        collection: "Lenses",
        images: [
            {
                url: "https://www.mpb.com/media-service/02696285-1794-4340-89de-5f6d4b65239e",
                altText: "Sony FE 28-70mm f3.5-5.6 OSS",
            }
        ],
        rating: 4.6,
        numReviews: 12,
    },
    {
        name: "Fujifilm XF 18-55mm f/2.8-4 R LM OIS",
        description:
            "Ideal for general use! The Fuji 18-55mm f/2.8-4 lens delivers fantastic photographs. Made to cover all bases, the lens boasts an impressive f/2.8 aperture. Allowing you to capture any moment with real sharpness, no matter what lighting situation. It is the ideal all purpose lens",
        price: 250,
        discountPrice: 220,
        countInStock: 6,
        sku: "OX-SH-006",
        brand: "Fujifilm",
        collection: "Digital camera",
        images: [
            {
                url: "https://www.mpb.com/media-service/30c2c1db-c0d7-4fbf-9e45-1a925c836edb",
                altText: "Fujifilm XF 18-55mm f/2.8-4 R LM OIS",
            }
        ],
        rating: 4.5,
        numReviews: 7,
    },
    {
        name: "Fujifilm X-E4",
        description:
            "A camera is a tool designed to capture a precious memory that will never happen again. A split second in your lifetime. No other device performs as well as a dedicated camera to capture these memories in the highest quality possible. However, we realise that it’s not practical to carry a large, heavy dedicated camera wherever you go, but at the same time you don’t want to sacrifice the quality of your captured images, this is why Fujifilm created the X-E4. Using the same sensor and processor as our flagship X Series camera, in one of the smallest bodies we’ve made, you don’t need to compromise anymore. The X-E4 is designed to help you Make More of those memories while carrying Less",
        price: 1000,
        discountPrice: 950,
        countInStock: 3,
        sku: "OX-SH-007",
        brand: "Fujifilm",
        collection: "Digital camera",
        images: [
            {
                url: "https://www.mpb.com/media-service/fc49719f-f49a-41f8-8fea-4fc5f7615612",
                altText: "Fujifilm X-E4",
            }
        ],
        rating: 4.3,
        numReviews: 8,
    },
    {
        name: "Fujifilm X100V",
        description:
            "The Fujifilm X100V compact camera boasts a redesigned 23mm f/2 lens. Powered by the X-Processor 4, the X100V’s 26-megapixel APS-C sensor has backside illumination (BSI). The X100V can shoot bursts of up to 20fps with its electronic shutter or 11fps mechanically. The camera’s native ISO is 160–12,800, or 80–51,200 expanded. The X100V added a tilting touchscreen, albeit with no rear D-pad, and weighs just 478g \[16.86oz\]. You can shoot 4K video up to 30p, and the X100V outputs 4:2:2 10-bit footage",
        price: 1500,
        discountPrice: 1400,
        countInStock: 2,
        sku: "OX-SH-008",
        brand: "Fujifilm",
        collection: "Digital camera",
        images: [
            {
                url: "https://www.mpb.com/media-service/1606dcec-3cf0-4ff3-a27e-d6742931e8b0",
                altText: "Fujifilm X100V",
            }
        ],
        rating: 4.8,
        numReviews: 20,
    },
    {
        name: "Contax T2",
        description:
            "The Contax T2 is a photographer's dream, combining classic rangefinder simplicity with exceptional Zeiss optics. Its sleek, titanium body is built to last, comfortably fitting in your hand for effortless street photography. With a sharp Carl Zeiss Sonnar lens and a near-silent shutter, you'll capture fleeting moments with stunning clarity and discretion, making it a joy to use and a timeless treasure for any photography enthusiast",
        price: 1250,
        discountPrice: 1200,
        countInStock: 1,
        sku: "OX-SH-009",
        brand: "Contax",
        collection: "Film camera",
        images: [
            {
                url: "https://www.mpb.com/media-service/f3d3f357-1592-4c60-9e67-031926d0f7d2",
                altText: "Contax T2",
            }
        ],
        rating: 4.9,
        numReviews: 3,
    },
    {
        name: "Leica M4",
        description:
            "The M4 started production in November 1966, as the direct successor of the M3 and M2, featuring frame lines for 35 mm, 50 mm, 90 mm and 135 mm lenses in a 0.72 magnification viewfinder. It has the frame counter of the M3, with automatic reset after reloading",
        price: 1700,
        discountPrice: 1500,
        countInStock: 6,
        sku: "OX-SH-010",
        brand: "Leica",
        collection: "Film camera",
        images: [
            {
                url: "https://www.mpb.com/media-service/2ca54fd0-374f-4dbc-bf00-925a123ae166",
                altText: "Leica M4",
            }
        ],
        rating: 4.5,
        numReviews: 15,
    },
    {
        name: "Leica Q2",
        description:
            "Leica Camera is pleased to announce the introduction of its latest camera, and the new evolution of one of its most popular recent releases, the Leica Q2. The Leica Q2 features a brand new 47.3 megapixel full frame sensor, integrated weather sealing throughout the body and built-in Summilux 28mm f/1.7 lens, a brand new electronic viewfinder, lightning-fast autofocus and burst shooting, 4K video, a revised button layout and refined design",
        price: 3900,
        discountPrice: 3850,
        countInStock: 1,
        sku: "OX-SH-011",
        brand: "Leica",
        collection: "Digital camera",
        images: [
            {
                url: "https://www.mpb.com/media-service/021d84da-3d39-4cce-a66f-24ecbace3579",
                altText: "Leica Q2",
            }
        ],
        rating: 4.5,
        numReviews: 12,
    },
    {
        name: "Leica Q3",
        description:
            "The compact Leica Q3 full frame camera delivers amazing image quality for photos and video in virtually any kind of lighting. It is exceptionally easy to use, and seamlessly connected, empowering anyone to create audio-visual content in breath-taking quality.  Capturing a unique point of view with the Leica Q3 means committing to a camera that integrates easily, naturally, and intuitively into everyday creative processes. A unique companion that combines style and cutting-edge technology",
        price: 5500,
        discountPrice: 5300,
        countInStock: 2,
        sku: "OX-SH-012",
        brand: "Leica",
        collection: "Digital camera",
        images: [
            {
                url: "https://www.mpb.com/media-service/9929caa3-18e7-4c5f-aebb-40607fc24376",
                altText: "Leica Q3",
            }
        ],
        rating: 4.7,
        numReviews: 13,
    },
    {
        name: "Nikon AF-S Nikkor 70-200mm f/2.8G ED VR II",
        description:
            "The Nikon AF-S 70-200mm f/2.8G IF-ED VR II lens provides exciting quality. Perfect for versatility, the lens provides a perfect springboard to better images. The fantastic optics delivers great image quality in a f/2.8 aperture lens. The ideal professional all rounder",
        price: 850,
        discountPrice: 750,
        countInStock: 5,
        sku: "OX-SH-013",
        brand: "Nikon",
        collection: "Lenses",
        images: [
            {
                url: "https://www.mpb.com/media-service/6872520b-a2bd-4b9e-ae1a-17c9f7d09d54",
                altText: "Nikon AF-S Nikkor 70-200mm f/2.8G ED VR II",
            }
        ],
        rating: 4.3,
        numReviews: 12,
    },
    {
        name: "Nikon Df",
        description:
            "Based on a vintage design, the Nikon DF Digital SLR Camera offers an outstanding full frame sensor to match the adored 35mm ratio. With the combination of a full frame sensor and 16.2 megapixels to rely on, you will always be able to catch the right moment with confidence. The impressive low light performance boasts versatile options for the photographer looking to step up their game",
        price: 1250,
        discountPrice: 1200,
        countInStock: 3,
        sku: "OX-SH-014",
        brand: "Nikon",
        collection: "Digital camera",
        images: [
            {
                url: "https://www.mpb.com/media-service/092ad1b8-8baa-47b1-8e85-c3fd63258450",
                altText: "Nikon Df",
            }
        ],
        rating: 4.4,
        numReviews: 12,
    },
    {
        name: "Ricoh GR III",
        description:
            "The long-awaited instalment in the popular series of fast, compact cameras, the Ricoh GR III continues the legacy of being a pocketable powerhouse, offering impressive image quality, fast response, and immense portability. Featuring a redeveloped imaging feature-set, the GR III incorporates a 24.2MP APS-C CMOS sensor and GR Engine 6 to realise smooth tonality, rich colour and high sensitivity from ISO 100-102400, along with the ability to produce high-resolution 14-bit DNG stills or Full HD video. Complementing the sensor design is an updated 28mm-equivalent prime lens, which features a bright f/2.8 design, to suit everyday shooting with a comfortably wide field of view. Additionally, a first for GR, a 3-axis Shake Reduction System compensates for the effects of camera shake to help render sharper handheld shots when working with slower shutter speeds",
        price: 950,
        discountPrice: 900,
        countInStock: 6,
        sku: "OX-SH-015",
        brand: "Ricoh",
        collection: "Digital camera",
        images: [
            {
                url: "https://www.mpb.com/media-service/f9c69b9b-6e30-43b9-b1d7-259e429e1129",
                altText: "Ricoh GR III",
            }
        ],
        rating: 4.6,
        numReviews: 15,
    },
    {
        name: "Canon EF 24-70mm f/4 L IS USM",
        description:
            "The Canon EF 24-70mm f/4 L IS USM lens provides the photographer with fantastic quality. Part of the prestigious L series, it offers a unique chance to record a range of subjects all in one lens. The fast f/4 lens ensures you are always in the moment as you photograph, helping you deliver excellence to your clients",
        price: 550,
        discountPrice: 500,
        countInStock: 6,
        sku: "OX-SH-016",
        brand: "Canon",
        collection: "Lenses",
        images: [
            {
                url: "https://www.mpb.com/media-service/037bcc94-8e15-4c8f-9d82-85d64fb9a8ee",
                altText: "Canon EF 24-70mm f/4 L IS USM",
            }
        ],
        rating: 4.3,
        numReviews: 15,
    },
    {
        name: "Canon PowerShot G7 X",
        description:
            "Perfect for travel! The Canon PowerShot G7 X Digital Compact Camera offers fantastic quality. Ideal for the photographer looking to record the moment without the added weight, the camera offers a unique fusion of the two. Perfect for travelling, the lightweight nature makes it an incredibly exciting option to record the moment as you see it, all in a portable camera",
        price: 800,
        discountPrice: 700,
        countInStock: 5,
        sku: "OX-SH-017",
        brand: "Canon",
        collection: "Digital camera",
        images: [
            {
                url: "https://www.mpb.com/media-service/0ed306c0-b42f-4628-b7e9-6aabe7203b6e",
                altText: "Canon PowerShot G7 X",
            }
        ],
        rating: 4.6,
        numReviews: 12,
    },
    {
        name: "Leica Minilux",
        description:
            "The Leica Minilux is a premium point-and-shoot film camera boasting Leica quality in a compact package. Known for its sleek design and high-performing Leica Summarit 40mm f/2.4 lens, it captures sharp images and offers both program and aperture priority modes for creative control. While some find the viewfinder small, enthusiasts love its simplicity and excellent results, making it a great choice for photographers seeking a luxurious take on everyday film photography",
        price: 950,
        discountPrice: 900,
        countInStock: 3,
        sku: "OX-SH-018",
        brand: "Leica",
        collection: "Film camera",
        images: [
            {
                url: "https://www.mpb.com/media-service/3d0f0db6-8a14-4c96-9e0f-ad3964fff91f",
                altText: "Leica Minilux",
            }
        ],
        rating: 4.2,
        numReviews: 11,
    },
    {
        name: "Fujifilm X-T30 II",
        description:
            "Every element of FUJIFILM X-T30 II has been designed with photographers in mind. From the dial-based operation, and compact, lightweight body, to the latest-generation APS-C sensor, it lights up the imagination and inspires creativity. What’s more, X-T30 II fuses cutting edge, convenient features – such as a rear touchscreen and a discreet built-in flash – with a vintage aesthetic charm to make photography a truly immersive experience",
        price: 850,
        discountPrice: 800,
        countInStock: 7,
        sku: "OX-SH-019",
        brand: "Fujifilm",
        collection: "Digital camera",
        images: [
            {
                url: "https://www.mpb.com/media-service/8ce75102-bb2d-4cdc-ae15-efbe43cb1d40",
                altText: "Fujifilm X-T30 II",
            }
        ],
        rating: 4.7,
        numReviews: 15,
    },
    {
        name: "Ricoh GR IIIx",
        description:
            "The RICOH GR IIIx has been developed in response to user requests for a new GR-series camera that will add a new perspective to the highly acclaimed RICOH GR III. The GR III was released in March 2019, featuring a 28mm wide-angle lens and designed to further enhance the essential values of the GR-series: optimising image quality, snapshot capabilities and portability. The newly designed 26.1mm GR lens provides a 40mm angle of view in the 35mm format, close to the photographer’s own effective field of view. Depending on the way the lens is used, this versatile angle of view can create different image renditions: you can capture an image similar to those taken at a 30mm semi-wide angle, or create a completely different visual expression as if taken at a 50mm standard angle. The camera also provides a range of new and upgraded post-shooting functions to edit captured images to the photographer’s preference",
        price: 1100,
        discountPrice: 1000,
        countInStock: 3,
        sku: "OX-SH-020",
        brand: "Ricoh",
        collection: "Digital camera",
        images: [
            {
                url: "https://www.mpb.com/media-service/fce34e45-863c-49e1-9de2-991961d481fa",
                altText: "Ricoh GR IIIx",
            }
        ],
        rating: 4.6,
        numReviews: 12,
    },
]

module.exports = products