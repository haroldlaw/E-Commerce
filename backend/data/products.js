const products = [
    {
        name: "Sony A6700",
        description:
            "The Sony A6700 system camera is a full-frame innovation in APS-C format. Experience outstanding image quality, precise autofocus and unlimited creativity in a small, manageable package.",
        price: 1500,
        discountPrice: 1300,
        countInStock: 10,
        sku: "OX-SH-001",
        brand: "Sony",
        collection: "Digital",
        images: [
            {
                url: "/uploads/sony-a6700.webp",
                altText: "Sony A6700",
            }
        ],
        rating: 4.5,
        numReviews: 15,
    },
    {
        name: "Sony A7C II",
        description:
            "The Sony A7C Mark II is the worthy successor to the A7C. Enjoy the latest high-end performances in a compact body. The camera has an improved sensor, processor, autofocus and up to 7-stops image stabilisation.",
        price: 2200,
        discountPrice: 1900,
        countInStock: 5,
        sku: "OX-SH-002",
        brand: "Sony",
        collection: "Digital",
        images: [
            {
                url: "/uploads/sony-a7c-ii.webp",
                altText: "Sony A7C II",
            }
        ],
        rating: 5.0,
        numReviews: 3,
    },
    {
        name: "Sony A6400",
        description:
            "The Sony A6400 is an EISA award-winning camera featuring fast automatic focus of just 0.02 seconds, enhanced Eye Autofocus and newly-developed Real-Time Tracking.",
        price: 750,
        discountPrice: 700,
        countInStock: 10,
        sku: "OX-SH-003",
        brand: "Sony",
        collection: "Digital",
        images: [
            {
                url: "/uploads/sony-a6400.webp",
                altText: "Sony A6400",
            }
        ],
        rating: 4.5,
        numReviews: 54,
    },
    {
        name: "Sony FE 70-300mm F4.5-5.6 G OSS",
        description:
            "The Sony FE 70-300mm F4.5-5.6 G OSS is a versatile zoom lens, designed for full frame E-mount mirrorless cameras. The Sony FE 70-300mm F4.5-5.6 G OSS is a weatherproof telephoto lens with image stabilisation and high resolution over the whole zoom range.",
        price: 1150,
        discountPrice: 1100,
        countInStock: 5,
        sku: "OX-SH-004",
        brand: "Sony",
        collection: "Lens",
        images: [
            {
                url: "/uploads/sony-fe-70-300mm-f-4-5-5-6-g-oss.webp",
                altText: "Sony FE 70-300mm F4.5-5.6 G OSS",
            }
        ],
        rating: 4.7,
        numReviews: 13,
    },
    {
        name: "Sigma 24-70mm F/2.8 DG DN ART Sony FE",
        description:
            "The Sigma 24-70mm F2.8 DG DN (A) is a versatile wide-angle to short telephoto zoom lens. The lens features an F/2.8 constant maximum aperture and is a true workhorse for Sony's full-frame E-mount system cameras",
        price: 1100,
        discountPrice: 1000,
        countInStock: 9,
        sku: "OX-SH-005",
        brand: "Sigma",
        collection: "Lens",
        images: [
            {
                url: "/uploads/sigma-24-70mm-f-2-8-dg-dn-art-sony-fe.webp",
                altText: "Sigma 24-70mm F/2.8 DG DN ART Sony FE",
            }
        ],
        rating: 4.7,
        numReviews: 33,
    },
    {
        name: "Fujifilm XF 70-300mm F/4.0-5.6 R LM OIS WR",
        description:
            "The 70-300mm is a telephoto zoom lens that can be used for a variety of photography purposes thanks to its variable focal length. With built-in image stabilization, fast and silent autofocus and a weatherproof body, this lens should not be missing from your camera equipmentIdeal for general use! The Fuji 18-55mm f/2.8-4 lens delivers fantastic photographs. Made to cover all bases, the lens boasts an impressive f/2.8 aperture. Allowing you to capture any moment with real sharpness, no matter what lighting situation. It is the ideal all purpose lens.",
        price: 800,
        discountPrice: 750,
        countInStock: 6,
        sku: "OX-SH-006",
        brand: "Fujifilm",
        collection: "Lens",
        images: [
            {
                url: "/uploads/fujifilm-xf-70-300mm-f-4-0-5-6-r-lm-ois-wr.webp",
                altText: "Fujifilm XF 70-300mm F/4.0-5.6 R LM OIS WR",
            }
        ],
        rating: 4.6,
        numReviews: 7,
    },
    {
        name: "Fujifilm X-S20",
        description:
            "The Fujifilm X-S20 is the ultimate all-in-one camera combining top-quality performance with a compact, lightweight body.",
        price: 1300,
        discountPrice: 1200,
        countInStock: 3,
        sku: "OX-SH-007",
        brand: "Fujifilm",
        collection: "Digital",
        images: [
            {
                url: "/uploads/fujifilm-xs20.webp",
                altText: "Fujifilm X-S20",
            }
        ],
        rating: 4.1,
        numReviews: 5,
    },
    {
        name: "Fujifilm X100VI",
        description:
            "The Fujifilm X100VI combines the distinctive look and feel of analog photography with contemporary, superior image quality.",
        price: 2000,
        discountPrice: 1900,
        countInStock: 2,
        sku: "OX-SH-008",
        brand: "Fujifilm",
        collection: "Digital",
        images: [
            {
                url: "/uploads/fujifilm-x100vi.webp",
                altText: "Fujifilm X100VI",
            }
        ],
        rating: 4.8,
        numReviews: 10,
    },
    {
        name: "Pentax 17",
        description:
            "The Pentax 17 pays tribute to the world of photography. It is an analogue camera with film rolls and is ideal for photographers who want to express their originality and creativity or for those who want to explore the world of analogue.",
        price: 500,
        discountPrice: 450,
        countInStock: 1,
        sku: "OX-SH-009",
        brand: "Pentax",
        collection: "Film",
        images: [
            {
                url: "/uploads/pentax17.webp",
                altText: "Pentax 17",
            }
        ],
        rating: 4.8,
        numReviews: 5,
    },
    {
        name: "Panasonic Lumix DC-TZ99",
        description:
            "The Panasonic Lumix DC-TZ99 is the ideal camera for those who want to combine compact dimensions with powerful performance. Thanks to the 30x LEICA 24-720mm zoom lens, you'll effortlessly capture everything from spontaneous moments with kids to breathtaking travel shots.",
        price: 550,
        discountPrice: 500,
        countInStock: 6,
        sku: "OX-SH-010",
        brand: "Panasonic",
        collection: "Digital",
        images: [
            {
                url: "/uploads/panasonic-lumix-dc-tz99.webp",
                altText: "Panasonic Lumix DC-TZ99",
            }
        ],
        rating: 4.3,
        numReviews: 2,
    },
    {
        name: "Nikon Z6 III",
        description:
            "The Nikon Z6 III is Nikon's flagship within the well-known Z series when it comes to innovations and precision. This system camera is designed for photo and videographers who do not want to compromise.",
        price: 2450,
        discountPrice: 2350,
        countInStock: 1,
        sku: "OX-SH-011",
        brand: "Nikon",
        collection: "Digital",
        images: [
            {
                url: "/uploads/nikon-z6-iii.webp",
                altText: "Nikon Z6 III",
            }
        ],
        rating: 5.0,
        numReviews: 2,
    },
    {
        name: "Nikon ZF",
        description:
            "With the Nikon ZF, you get a full-frame mirrorless camera that is tucked into a classic body, but features a wide range of modern technologies",
        price: 1900,
        discountPrice: 1800,
        countInStock: 2,
        sku: "OX-SH-012",
        brand: "Nikon",
        collection: "Digital",
        images: [
            {
                url: "/uploads/nikon-zf.webp",
                altText: "Nikon ZF",
            }
        ],
        rating: 4.6,
        numReviews: 6,
    },
    {
        name: "Nikkor AF-S 24-70mm f/2.8E ED VR",
        description:
            "The Nikkor AF-S 24-70mm f/2.8 ED VR is the most widely used top-class zoom lens from the NIKKOR range and now also features Vibration Reduction (VR). This powerful zoom lens has a high brightness throughout the entire zoom range. Faster, stronger, and more stable than ever and extremely accurate; that is the Nikkor AF-S 24-70mm f/2.8 ED VR.",
        price: 2300,
        discountPrice: 2200,
        countInStock: 5,
        sku: "OX-SH-013",
        brand: "Nikon",
        collection: "Lens",
        images: [
            {
                url: "/uploads/nikon-af-s-24-70mm-f-2-8e-ed-vr.webp",
                altText: "Nikkor AF-S 24-70mm f/2.8E ED VR",
            }
        ],
        rating: 4.8,
        numReviews: 16,
    },
    {
        name: "Fujifilm XF 56mm F/1.2 R WR",
        description:
            "The Fujifilm XF 56 mm F/1.2 R WR is a tremendously fast mid-telephoto lens, ideal for portrait photography.",
        price: 1000,
        discountPrice: 950,
        countInStock: 3,
        sku: "OX-SH-014",
        brand: "Sigma",
        collection: "Lens",
        images: [
            {
                url: "/uploads/fujifilm-xf-56mm-f-1-2-r-wr.webp",
                altText: "Fujifilm XF 56mm F/1.2 R WR",
            }
        ],
        rating: 4.7,
        numReviews: 3,
    },
    {
        name: "Ricoh GR III HDF",
        description:
            "The Ricoh GR III HDF is virtually the same camera as the Ricoh GR III, with one important difference, the Highlight Diffusion Filter (HDF). With this built-in filter, you as a photographer can add a nostalgic, cinematic atmosphere to your images.",
        price: 1150,
        discountPrice: 1100,
        countInStock: 6,
        sku: "OX-SH-015",
        brand: "Ricoh",
        collection: "Digital",
        images: [
            {
                url: "/uploads/ricoh-gr-iii-hdf.webp",
                altText: "Ricoh GR III HDF",
            }
        ],
        rating: 4.6,
        numReviews: 15,
    },
    {
        name: "Canon EOS R7",
        description:
            "The Canon EOS R7 is a fast APS-C system camera for the demanding hobbyist. The crop sensor with 32.5 megapixels guarantees razor-sharp photos and breathtaking videos in 4K resolution.",
        price: 1300,
        discountPrice: 1200,
        countInStock: 6,
        sku: "OX-SH-016",
        brand: "Canon",
        collection: "Digital",
        images: [
            {
                url: "/uploads/canon-eos-r7.webp",
                altText: "Canon EOS R7",
            }
        ],
        rating: 4.5,
        numReviews: 42,
    },
    {
        name: "Canon Powershot G7X Mark III",
        description:
            "The Canon Powershot G7X Mark III black is a compact camera with striking image quality. The Canon Powershot G7X Mark III has the possibility to stream live, take vertical video and the long-awaited microphone input is included! A real vlogging camera!",
        price: 1000,
        discountPrice: 900,
        countInStock: 5,
        sku: "OX-SH-017",
        brand: "Canon",
        collection: "Digital",
        images: [
            {
                url: "/uploads/canon-powershot-g7x-mark-iii.webp",
                altText: "Canon Powershot G7X Mark III",
            }
        ],
        rating: 4.8,
        numReviews: 20,
    },
    {
        name: "Fujifilm X-T5",
        description:
            "The Fujifilm X-T5 incorporates the nostalgic look & feel of analog cameras with staggering results.",
        price: 1800,
        discountPrice: 1700,
        countInStock: 3,
        sku: "OX-SH-018",
        brand: "Fujifilm",
        collection: "Digital",
        images: [
            {
                url: "/uploads/fujifilm_xt5.webp",
                altText: "Fujifilm X-T5",
            }
        ],
        rating: 4.7,
        numReviews: 8,
    },
    {
        name: "Fujifilm GFX 100RF",
        description:
            "The Fujifilm GFX 100RF is a premium compact camera that allows you to take razor-sharp photos with a whopping 102 megapixel resolution. The Fujifilm GFX 100RF is perfect for any photographer looking for a first-class shooting experience and uncompromising image quality.",
        price: 5500,
        discountPrice: 5300,
        countInStock: 3,
        sku: "OX-SH-019",
        brand: "Fujifilm",
        collection: "Digital",
        images: [
            {
                url: "/uploads/fujifilm-gfx-100rf.webp",
                altText: "Fujifilm GFX 100RF",
            }
        ],
        rating: 5.0,
        numReviews: 3,
    },
    {
        name: "Panasonic Lumix DC-S5IIX",
        description:
            "The Panasonic Lumix DC-S5IIX is an addition to the popular LUMIX S series. The system camera has incredible photo and video performance in an attractive, compact design. Compared to the LUMIX S5 II, the LUMIX S5 II X goes the extra mile for professional videographers, in a sleek, matte black design.",
        price: 2000,
        discountPrice: 1900,
        countInStock: 5,
        sku: "OX-SH-020",
        brand: "Panasonic",
        collection: "Digital",
        images: [
            {
                url: "/uploads/panasonic-lumix-dc-s5-iix.webp",
                altText: "Panasonic Lumix DC-S5IIX",
            }
        ],
        rating: 4.8,
        numReviews: 1,
    },
]

module.exports = products