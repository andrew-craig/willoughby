import React, { useRef, useEffect, useState } from "react"
import mapboxgl from "mapbox-gl"
import Markers from "./markers"
import "mapbox-gl/dist/mapbox-gl.css"

const MAPBOX_TOKEN = "pk.eyJ1IjoiYW5kcmV3Y3JhaWciLCJhIjoiY2lqdGQydmY0MDFoYXZha2d6azg2NXIzaCJ9.LSLqBs5zrPgSAxrv9SGA6Q"

const places = [
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz0nt103",
        "title": "Amman, Jordan",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          35.91156,
          31.94517
        ],
        "type": "Point"
      },
      "id": "00e184168b21284089050a43fdc7c32f"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-iq8by4bbd",
        "title": "Gaupne, Norway",
        "description": "2016",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          7.288055,
          61.401978
        ],
        "type": "Point"
      },
      "id": "028525dc7fdad2c7b25e910f4f6543a8"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz2a7tb6",
        "title": "Montreal, Canada",
        "description": "2015",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -73.575439,
          45.514045
        ],
        "type": "Point"
      },
      "id": "032d5e809929196f9e80889e6c5a2760"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijyo7frcb",
        "title": "Kununurra, Australia",
        "description": "",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          128.737792,
          -15.749962
        ],
        "type": "Point"
      },
      "id": "043d5e1bf463e63f96d71388cc174030"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz1afeeh",
        "title": "Dehli, India",
        "description": "2010",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          77.211914,
          28.623103
        ],
        "type": "Point"
      },
      "id": "056bcbbeaaa3cf30761f76c99294c61b"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijtzz54y7",
        "title": "Punta Arenas, Chile",
        "description": "2015",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -70.905761,
          -53.159946
        ],
        "type": "Point"
      },
      "id": "059cedac073565b01ce9afbe0dbfd1b7"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz1djb3l",
        "title": "Namche Bazar, Nepal",
        "description": "2012",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          86.717834,
          27.793528
        ],
        "type": "Point"
      },
      "id": "05b3489da88fb4e2a0b96def5f1fadd4"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik03byeyq",
        "title": "Orlando, FL, USA",
        "description": "",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -81.386718,
          28.545925
        ],
        "type": "Point"
      },
      "id": "085bea10066fcd422474c797a7e50768"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz1uvy2y",
        "title": "Maun, Botswana",
        "description": "2011",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          23.433837,
          -19.973348
        ],
        "type": "Point"
      },
      "id": "0a3f90659117d069871fcd997f8410bf"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijysvcy21",
        "title": "Izmir, Turkey",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          27.114257,
          38.407329
        ],
        "type": "Point"
      },
      "id": "0ffc001ddec4b1420c5ae2e5b2635917"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijyo2puq2",
        "title": "Bristol, England",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -2.590026,
          51.454006
        ],
        "type": "Point"
      },
      "id": "102c115e7d64e4dcec4a0e9ee41f885b"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik03eidjv",
        "title": "Jackson, WY, USA",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -110.780639,
          43.508721
        ],
        "type": "Point"
      },
      "id": "103130b4136509ecf15cd93e791d804d"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijyt2hqg6",
        "title": "Fethiye, Turkey",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          29.128875,
          36.63206
        ],
        "type": "Point"
      },
      "id": "10b4ad7b4014b3d52abe2d4f137729ea"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik03cqfjs",
        "title": "Baltimore, MD, USA",
        "description": "2002",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -76.618652,
          39.291797
        ],
        "type": "Point"
      },
      "id": "11fc923b9a4045f32f88cbd518dcdfe4"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijyt38b17",
        "title": "Kas, Turkey",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          29.646606,
          36.202174
        ],
        "type": "Point"
      },
      "id": "139ed19b4327f9b463d5c0f3e9279779"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijyo6azx8",
        "title": "Cairns, Australia",
        "description": "",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          145.766601,
          -16.888659
        ],
        "type": "Point"
      },
      "id": "14b36193a9ce70203a4b3eb08a6af443"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz27b742",
        "title": "Philadelphia, PA",
        "description": "",
        "marker-size": "large",
        "marker-color": "#f86767",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -75.177383,
          39.948174
        ],
        "type": "Point"
      },
      "id": "14fc10be6b3f239feb347269d28c3bff"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik03237m3",
        "title": "Salzburg, Austria",
        "description": "",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          13.051757,
          47.813154
        ],
        "type": "Point"
      },
      "id": "16f5d0d462c2f70c0deceb6972d9794a"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz27w8c3",
        "title": "New York, NY",
        "description": "",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -73.979187,
          40.747256
        ],
        "type": "Point"
      },
      "id": "18402e7bf6fe4168605cbb8f686dac50"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijyo729wa",
        "title": "Kakadu, Australia",
        "description": "",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          132.448425,
          -12.342684
        ],
        "type": "Point"
      },
      "id": "187fefb0a9e29afcceed5d0258cc5993"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz22x5s4",
        "title": "Santa Barbara, CA",
        "description": "2010",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -119.767456,
          34.447688
        ],
        "type": "Point"
      },
      "id": "1964bb62e6a5702c99d294bedabbdade"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijyt10su5",
        "title": "Selcuk, Turkey",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          27.368316,
          37.949341
        ],
        "type": "Point"
      },
      "id": "1e788496bc0cac5c68fde89fb15dc705"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik038oyhh",
        "title": "Roswell, NM, USA",
        "description": "2012",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -104.523925,
          33.394759
        ],
        "type": "Point"
      },
      "id": "268b82836e607b708f310a612db949c1"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz1bmhvj",
        "title": "Udaipur, India",
        "description": "2010",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          73.696289,
          24.577099
        ],
        "type": "Point"
      },
      "id": "2821d745439a681d0b4b5b7d5561550d"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik032ucn6",
        "title": "Rome, Italy",
        "description": "",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          12.469482,
          41.902277
        ],
        "type": "Point"
      },
      "id": "2a8c8aa8e86fceebbc18f64726260bb8"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijtzwigi4",
        "title": "San Diego, CA",
        "description": "2010",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -117.147216,
          32.713355
        ],
        "type": "Point"
      },
      "id": "2b7bc596b51cdaa1829114ead297bde6"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijtzznae8",
        "title": "Isla Navarino, Chile",
        "description": "2015",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -67.642822,
          -55.009126
        ],
        "type": "Point"
      },
      "id": "3197913453a28377676f7eb02e03e2be"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijyo55726",
        "title": "Melbourne, Australia",
        "description": "",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          144.975585,
          -37.788081
        ],
        "type": "Point"
      },
      "id": "3438de9097fbebd3eda3746d091d228c"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik031q2y2",
        "title": "Zurich, Switzerland",
        "description": "",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          8.547363,
          47.368594
        ],
        "type": "Point"
      },
      "id": "36b0e919ef1d5e0b473ab895ab228695"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz2agpn7",
        "title": "Quebec, Canada",
        "description": "2015",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -71.246337,
          46.845164
        ],
        "type": "Point"
      },
      "id": "36ca6468587339f31d3b16db40705ee2"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik039zqmk",
        "title": "Dallas / Forth Worth, TX, USA",
        "description": "2012",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -97.080688,
          32.764181
        ],
        "type": "Point"
      },
      "id": "36fca5796f6fc192ddecd44db10c0888"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik03acdtl",
        "title": "Austin, TX, USA",
        "description": "2012, 2015",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -97.734375,
          30.287531
        ],
        "type": "Point"
      },
      "id": "39f438995178a33622c89e0dbe500aa5"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijyt40jw8",
        "title": "Beirut, Lebanon",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          35.500602,
          33.894642
        ],
        "type": "Point"
      },
      "id": "3a259407d97c730734adf18a64bad477"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz18q9jf",
        "title": "Jodhpur, India",
        "description": "2010",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          73.037109,
          26.273714
        ],
        "type": "Point"
      },
      "id": "3bcc52bb390e6feb858586f9b4d80dbc"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijyswo123",
        "title": "Aydin, Turkey",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          27.844848,
          37.834734
        ],
        "type": "Point"
      },
      "id": "3be53c2729d7be57626f7176ad6ac504"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-iq8bxd0sc",
        "title": "Andalsnes, Norway",
        "description": "2016",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          7.690429,
          62.559186
        ],
        "type": "Point"
      },
      "id": "3c2347449c1303b5a231d8ff21828e44"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijtzxexa6",
        "title": "San Jose, Mexico",
        "description": "2015",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -109.701232,
          23.051934
        ],
        "type": "Point"
      },
      "id": "3c672666013823bd0d13195206d47eee"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik037juaf",
        "title": "Monument Valley, USA",
        "description": "2012",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -110.175018,
          36.992681
        ],
        "type": "Point"
      },
      "id": "3eb39c92c62a257063f94c569c90f9ea"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz0jck90",
        "title": "Jerusalem, Israel",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          35.212554,
          31.776045
        ],
        "type": "Point"
      },
      "id": "4526e4893e70256d6d050f9cd90a671e"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-iq8bvlk79",
        "title": "Trondheim, Norway",
        "description": "2016",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          10.38208,
          63.435773
        ],
        "type": "Point"
      },
      "id": "45ccb11788940ac0cd1bd99098347292"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik03dtgsu",
        "title": "Chicago, MI, USA",
        "description": "2015",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -87.648925,
          41.885921
        ],
        "type": "Point"
      },
      "id": "4c981d2aa1033025a4910f533921ffef"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz0q4bk5",
        "title": "Jarash, Jordan",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          35.894393,
          32.275522
        ],
        "type": "Point"
      },
      "id": "4d89cf704c594f74921a031f51e2faa7"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijtzune41",
        "title": "San Francisco",
        "description": "2010, 2015",
        "marker-size": "large",
        "marker-color": "#f86767",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -122.445373,
          37.790251
        ],
        "type": "Point"
      },
      "id": "4d8cc5b0b201662f6aa884b3ec617fa2"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz213ao1",
        "title": "Monterey, CA",
        "description": "2010",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -121.879577,
          36.593478
        ],
        "type": "Point"
      },
      "id": "4de678ef9490c6cdbb4761ca12506f5b"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz22cg43",
        "title": "Cambria, CA",
        "description": "2010",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -121.079635,
          35.558484
        ],
        "type": "Point"
      },
      "id": "506e4b412220538e1d59bae1b510f074"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijtz7avk0",
        "title": "Sydney",
        "description": "",
        "marker-size": "large",
        "marker-color": "#f86767",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          151.20758,
          -33.867279
        ],
        "type": "Point"
      },
      "id": "51de19052c1027e12fa914aa5f3fb146"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijyo25jy1",
        "title": "Cardiff, Wales",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -3.180541,
          51.464274
        ],
        "type": "Point"
      },
      "id": "56c9a887349b22cb2011c14c90367324"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijtzvqy63",
        "title": "Yosemite National Park",
        "description": "2010",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -119.501037,
          37.853169
        ],
        "type": "Point"
      },
      "id": "594fcdab4f683609229d3682a69cfb0b"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz20urc0",
        "title": "Santa Cruz, CA",
        "description": "2010",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -122.016906,
          36.991584
        ],
        "type": "Point"
      },
      "id": "5a3d37d509c7fe08d065e689760d15de"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz1mcn6r",
        "title": "Hoi An, Vietnam",
        "description": "2013",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          108.326568,
          15.881432
        ],
        "type": "Point"
      },
      "id": "5eeedb00a2893c972bde8feb53be06fe"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik03c8qar",
        "title": "Washington, DC, USA",
        "description": "2016",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -77.036132,
          38.891032
        ],
        "type": "Point"
      },
      "id": "622040ca79e5e5f9c60d671602469df1"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijyo80n7d",
        "title": "Perth, Australi",
        "description": "",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          115.861816,
          -31.942839
        ],
        "type": "Point"
      },
      "id": "626bad433be17120048270d69b7f3b92"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz14vwsd",
        "title": "Haifa, Israel",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          34.993515,
          32.81267
        ],
        "type": "Point"
      },
      "id": "676de0e56f8ebc5df46c23251e711841"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-iq8bspk93",
        "title": "Malmo, Sweden",
        "description": "2016",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          13.007812,
          55.596971
        ],
        "type": "Point"
      },
      "id": "67b93a7127b5b94873155b34978875f5"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijyo3a9m4",
        "title": "Cambridge, England",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          0.131835,
          52.210972
        ],
        "type": "Point"
      },
      "id": "6ad68577d4c4c0ec0f701c2fe1e45dc5"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-iq8bttn95",
        "title": "Helsinki, Finland",
        "description": "2016",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          24.949951,
          60.174306
        ],
        "type": "Point"
      },
      "id": "6bb5e6a6abb2466f84c51deacf58265f"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz1a0h0g",
        "title": "Jaipur, India",
        "description": "2010",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          75.805664,
          26.902476
        ],
        "type": "Point"
      },
      "id": "6ca77c66c10eead99216439a627e3d02"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijyt5ipa9",
        "title": "Byblos, Lebanon",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          35.646042,
          34.121468
        ],
        "type": "Point"
      },
      "id": "76eaffd23fd3d91f453959ebeee538be"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-iq8br1mu0",
        "title": "Dresden, Germany",
        "description": "2016",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          13.743896,
          51.055207
        ],
        "type": "Point"
      },
      "id": "77b020e964498c6fd933ce81002a3d8a"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz1b78gi",
        "title": "Jaisalmer, India",
        "description": "2010",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          70.933227,
          26.926967
        ],
        "type": "Point"
      },
      "id": "795fba1a2065dd8273162db28c7dc13e"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz13uzra",
        "title": "Wadi Rum, Jordan",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          35.370483,
          29.506549
        ],
        "type": "Point"
      },
      "id": "7960bb81407c06aadb87ca5f478bba2e"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijysy6mf4",
        "title": "Antalya, Turkey",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          30.701057,
          36.886331
        ],
        "type": "Point"
      },
      "id": "79e83486b8411a91331d300a106f71d7"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik03aljtm",
        "title": "San Antonio, TX, USA",
        "description": "2012, 2015",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -98.492431,
          29.430029
        ],
        "type": "Point"
      },
      "id": "7af8268652c40d3e67ceed6957a6c78c"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik0313k30",
        "title": "Paris, France",
        "description": "2004, 2016",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          2.373046,
          48.893615
        ],
        "type": "Point"
      },
      "id": "7af91f3deebfe7d70c2f6fe841b26389"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-iq8bups86",
        "title": "Oslo, Norway",
        "description": "2016",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          10.755615,
          59.916483
        ],
        "type": "Point"
      },
      "id": "7bb8f87dc3960b82be18835065c0b9d4"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz26p2p1",
        "title": "Page, AZ",
        "description": "2012",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -111.470031,
          36.925743
        ],
        "type": "Point"
      },
      "id": "7be8c0ea2549fa4ba42c384622fe9ce7"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijyswa5p2",
        "title": "Pamukkale, Turkey",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          29.120635,
          37.906283
        ],
        "type": "Point"
      },
      "id": "7ea4ee12f0309a6dd31811010f319b31"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz26aln0",
        "title": "Williams, AZ",
        "description": "2012",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -112.186889,
          35.252908
        ],
        "type": "Point"
      },
      "id": "81a88a4d422fa4e23043a4b56833ffa8"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ioucutlu3",
        "title": "Prague, Czech Republic",
        "description": "2016",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          14.415435,
          50.087106
        ],
        "type": "Point"
      },
      "id": "84ba3b37b66a46dd1381490efa451772"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik037vf8g",
        "title": "Canyon De Chelly National Monument, USA",
        "description": "2012",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -109.491119,
          36.145637
        ],
        "type": "Point"
      },
      "id": "85479ef6d8bce92ac6a83b1b1af57725"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik033pxn8",
        "title": "Florence, Italy",
        "description": "",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          11.260986,
          43.771093
        ],
        "type": "Point"
      },
      "id": "8939e8e016bf6e4d8dd16ab668f06423"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz1cwspk",
        "title": "Kathmandu, Nepal",
        "description": "2010",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          85.317077,
          27.690824
        ],
        "type": "Point"
      },
      "id": "8b28f9bfecbf61744c5101a1cbd22874"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijtzqny20",
        "title": "Los Angeles",
        "description": "2010",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -118.394165,
          34.007135
        ],
        "type": "Point"
      },
      "id": "8b897027d44216b841e440710f4b8210"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijyo8qujf",
        "title": "Yamba, Australia",
        "description": "",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          153.36914,
          -29.439597
        ],
        "type": "Point"
      },
      "id": "8c283b0b2b7edfc52596233c810c9fb4"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ioucrun81",
        "title": "Bratislava, Slovakia",
        "description": "2016",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          17.111206,
          48.158757
        ],
        "type": "Point"
      },
      "id": "8c6164053f1947bdbabac6313f0360bf"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik039fabj",
        "title": "Big Bend National Park, TX, USA",
        "description": "2012",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -103.134155,
          29.42046
        ],
        "type": "Point"
      },
      "id": "8ec8e562c400b350d9de5f8b3c2c495a"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijtzn2kj1",
        "title": "Grand Canyon National Park, AZ",
        "description": "2012",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -112.107238,
          36.049098
        ],
        "type": "Point"
      },
      "id": "8edf06188b652f657993ca289aa9026c"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik034jju9",
        "title": "Salt Lake City, USA",
        "description": "",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -111.862792,
          40.747256
        ],
        "type": "Point"
      },
      "id": "8f817fc2489d9761aaa8f2da28547b37"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik03g2sby",
        "title": "Vancouver, Canada",
        "description": "",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -123.134765,
          49.224772
        ],
        "type": "Point"
      },
      "id": "90ade4eaca1f4d019cae3e0a419aff89"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz1pdnou",
        "title": "Auckland, New Zealand",
        "description": "2013",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          174.748535,
          -36.862042
        ],
        "type": "Point"
      },
      "id": "93de60c960f850c5dcfb61bf28bd920a"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz1rs0ix",
        "title": "Cape Town, South Africa",
        "description": "2006",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          18.424072,
          -33.925129
        ],
        "type": "Point"
      },
      "id": "9436858602499293a572207a53db1bb5"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik0339777",
        "title": "Napoli, Italy",
        "description": "",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          14.227294,
          40.838749
        ],
        "type": "Point"
      },
      "id": "9c3df0d1b189e23cf228b8615ce946ec"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz0so6q7",
        "title": "Madaba, Jordan",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          35.794143,
          31.714733
        ],
        "type": "Point"
      },
      "id": "9e1d6b06c923ccc975839981a5848bcb"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik0394bji",
        "title": "Carlsbad, NM, USA",
        "description": "2012",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -104.221801,
          32.398515
        ],
        "type": "Point"
      },
      "id": "9ebc46613d77e0b1e4eac4e1f446dfd1"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz1q0z8v",
        "title": "Queenstown, New Zealand",
        "description": "2010",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          168.719787,
          -45.01336
        ],
        "type": "Point"
      },
      "id": "9eda67c56ad937d7f8cc4f74a350ee60"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik031fg81",
        "title": "Geneva, Switzerland",
        "description": "",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          6.152343,
          46.17983
        ],
        "type": "Point"
      },
      "id": "9fa2f88e1c1854019662ff94eb3d8daa"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik03b76jo",
        "title": "New Orleans, LA, USA",
        "description": "2012",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -90.076904,
          29.954934
        ],
        "type": "Point"
      },
      "id": "a19019a1598fc155b184ccded6d14dbd"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz1f3pjm",
        "title": "Hong Kong",
        "description": "2012",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          114.257812,
          22.350075
        ],
        "type": "Point"
      },
      "id": "a291597030979fef32e8d3dedcbf2b6f"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz221je2",
        "title": "Big Sur, CA",
        "description": "2010",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -121.810913,
          36.269743
        ],
        "type": "Point"
      },
      "id": "a3a610ca1770652786472c3514fbb490"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijtzm8ya0",
        "title": "Las Vegas",
        "description": "2012",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -115.158691,
          36.173356
        ],
        "type": "Point"
      },
      "id": "a55715ec70c1930a19fa87ae9bcff927"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz1iprxo",
        "title": "Sapa, Vietnam",
        "description": "2013",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          103.844833,
          22.338644
        ],
        "type": "Point"
      },
      "id": "a5ed5e9fc134eb21625b083b8781770e"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijyo6i159",
        "title": "Darwin, Australia",
        "description": "",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          130.825195,
          -12.425847
        ],
        "type": "Point"
      },
      "id": "a61b39f9a6afccc7b0d8fa7de8bc1bcb"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz1k7dtq",
        "title": "Da Lat, Vietnam",
        "description": "2013",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          108.446044,
          11.934539
        ],
        "type": "Point"
      },
      "id": "a6958416f83cd8139880a0ac466367a0"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijyo8fd5e",
        "title": "Newcastle, Australia",
        "description": "",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          151.787109,
          -32.925707
        ],
        "type": "Point"
      },
      "id": "a896d05a6518a08f8faf00f2528d60e4"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-iju023s11",
        "title": "Gallipoli Peninsular, Turkey",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          26.27655,
          40.20405
        ],
        "type": "Point"
      },
      "id": "b16fbd1f3bfd86f8919785bcd5533c6d"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz14nfoc",
        "title": "Acre, Israel",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          35.081405,
          32.929165
        ],
        "type": "Point"
      },
      "id": "b302bba9c1553f613aa05d675d622226"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijyo30ih3",
        "title": "Bath, England",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -2.348327,
          51.370065
        ],
        "type": "Point"
      },
      "id": "b37f97ec490fb2a4bf337e0c25834216"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijyo7qfdc",
        "title": "Broome, Australia",
        "description": "",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          122.233886,
          -17.94738
        ],
        "type": "Point"
      },
      "id": "b6d3fada9446e1a0aa1eb90fcf0c7f10"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik0367rze",
        "title": "Albuquerque, USA",
        "description": "2012",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -106.644287,
          35.083955
        ],
        "type": "Point"
      },
      "id": "b9f78bc096259c7af476364427edfb43"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ioucsewp2",
        "title": "Brno, Czech Republic",
        "description": "2016",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          16.605834,
          49.192474
        ],
        "type": "Point"
      },
      "id": "bc830fad7e16614819bfc69a2bc5ba08"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik032m3p5",
        "title": "Venice, Italy",
        "description": "",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          12.337646,
          45.444716
        ],
        "type": "Point"
      },
      "id": "bfc8efbf83eb815a37d9984161afa1ef"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz145e2b",
        "title": "Aqaba, Jordan",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          35.005187,
          29.51611
        ],
        "type": "Point"
      },
      "id": "c46904d24df2dd0a24da26239fe57998"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz1oailt",
        "title": "Siem Reap, Vietnam",
        "description": "2013",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          103.859939,
          13.361562
        ],
        "type": "Point"
      },
      "id": "c891f3d6058516cfc90ac39ff2a6996c"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz0jnzz1",
        "title": "Tel Aviv, Israel",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          34.789581,
          32.06861
        ],
        "type": "Point"
      },
      "id": "c8b32e0a41d76c223b923f6a648b7185"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-iq8buzjn7",
        "title": "Stavanger, Norway",
        "description": "2016",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          5.723876,
          58.967003
        ],
        "type": "Point"
      },
      "id": "c9fff7c6f1adbdd6ac245588387ac6a3"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz0w4768",
        "title": "Karak, Jordan",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          35.703678,
          31.179762
        ],
        "type": "Point"
      },
      "id": "ca40108845ac2623afca2d7176b35210"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-iq8bv7u38",
        "title": "Bergen, Norway",
        "description": "2016",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          5.317382,
          60.397575
        ],
        "type": "Point"
      },
      "id": "d1bc3ef5aeb628c5cca6d0dcdc3038bd"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-iq8byv5qe",
        "title": "Aurland, Norway",
        "description": "2016",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          7.211151,
          60.913412
        ],
        "type": "Point"
      },
      "id": "d43a603b79908655268c6e31f6468f98"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijyo61dx7",
        "title": "Gold Coast, Australia",
        "description": "",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          153.413085,
          -27.994401
        ],
        "type": "Point"
      },
      "id": "d4bc8b0da3622154cc8370c5f6e8abf5"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz1qu7jw",
        "title": "Christchurch, New Zealand",
        "description": "2010",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          172.683105,
          -43.592327
        ],
        "type": "Point"
      },
      "id": "da2d1972d70036dfdb9fa107c9706970"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik03f22vw",
        "title": "Spokane, WA, USA",
        "description": "2013",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -117.34497,
          47.661687
        ],
        "type": "Point"
      },
      "id": "dae1130b1be843c00a648362bfb7437f"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-iq8brn8u1",
        "title": "Berlin, Germany",
        "description": "2016",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          13.392333,
          52.51622
        ],
        "type": "Point"
      },
      "id": "dbc363f91ccdb11f2d6592bb02ff64be"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz1jnj0p",
        "title": "Ho Chi Minh, Vietnam",
        "description": "2013",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          106.704711,
          10.752366
        ],
        "type": "Point"
      },
      "id": "dc6c2a039529cd7c27c402821943fb08"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijyo1ohu0",
        "title": "London, England",
        "description": "2014, 2016",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -0.131835,
          51.508742
        ],
        "type": "Point"
      },
      "id": "dc9d1565d15232496eea5310328614f8"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz13jb19",
        "title": "Petra, Jordan",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          35.488586,
          30.3231
        ],
        "type": "Point"
      },
      "id": "dcc06a08f64e2dd6b9c6cd16ab86a643"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz1fqeon",
        "title": "Ha Noi, Vietnam",
        "description": "2013",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          105.902709,
          20.976827
        ],
        "type": "Point"
      },
      "id": "dd2d8018c4c1149faa6eef6fcaeb6683"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijysv03v0",
        "title": "Ayvalik, Turkey",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          26.684417,
          39.314112
        ],
        "type": "Point"
      },
      "id": "de4aa0f0a7100cd8b09abaf1c6c2a0a3"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik035fleb",
        "title": "Rocky Mountain National Park, USA",
        "description": "",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -105.622558,
          40.111688
        ],
        "type": "Point"
      },
      "id": "df30c4fdbc5c106255aab47555d34c31"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik032dpr4",
        "title": "Vienna, Austria",
        "description": "",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          16.369628,
          48.20271
        ],
        "type": "Point"
      },
      "id": "e0070e8687443f11b3a968a6d30dfd75"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz297cs4",
        "title": "Boston, MA",
        "description": "2015",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -71.065063,
          42.362602
        ],
        "type": "Point"
      },
      "id": "e1ba01103eb43e3631d6df2a891e7fb5"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz171nhe",
        "title": "Safed, Jordan",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          35.494079,
          32.960858
        ],
        "type": "Point"
      },
      "id": "e1cb0b8b306bc722984d352c7c933296"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijyo90hig",
        "title": "Noosa, Australia",
        "description": "",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          153.083496,
          -26.39679
        ],
        "type": "Point"
      },
      "id": "e1e7b5b25923cd58e508252e9999bec3"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijtzx4e75",
        "title": "La Paz, Mexico",
        "description": "2015",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -110.31372,
          24.156778
        ],
        "type": "Point"
      },
      "id": "e6032c396e472b319955a8c2b7c2ef0f"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik035yyqd",
        "title": "Santa Fe, USA",
        "description": "2012",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -105.941162,
          35.692994
        ],
        "type": "Point"
      },
      "id": "e8132559c2bdfe136bd007c1fe0977c3"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-iq8bs5yb2",
        "title": "Copenhagen, Denmark",
        "description": "2016",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          12.560119,
          55.686875
        ],
        "type": "Point"
      },
      "id": "e8ce850f9184df519475e3cc33bf14f6"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik03bknap",
        "title": "Miami, FL, USA",
        "description": "",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -80.24414,
          25.799891
        ],
        "type": "Point"
      },
      "id": "eb93ae902b5aaf1db69c3387dd30beef"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijyo3pqe5",
        "title": "Edinburugh, Scotland",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -3.186035,
          55.95535
        ],
        "type": "Point"
      },
      "id": "ebcede8f973fdc63d7ee6ea8db7ec3e8"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijtzvci72",
        "title": "Napa Valley, CA",
        "description": "2015",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -122.280578,
          38.283469
        ],
        "type": "Point"
      },
      "id": "ed7b484fd09a9549fb10f08777e32244"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik03fhkax",
        "title": "Seattle, WA, USA",
        "description": "2013, 2015",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -122.343749,
          47.591346
        ],
        "type": "Point"
      },
      "id": "edc822699166e183d15df6048599dad4"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik03dlaut",
        "title": "Toronto, Canada",
        "description": "2002",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -79.387207,
          43.659924
        ],
        "type": "Point"
      },
      "id": "f04ccf7a094689933d2f383748f256e6"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-iju019so0",
        "title": "Istanbul, Turkey",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          28.970947,
          41.013065
        ],
        "type": "Point"
      },
      "id": "f076e5d2996863d8b621231f3b2b755d"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz0raw16",
        "title": "Azraq, Jordan",
        "description": "2014",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          36.829605,
          31.881639
        ],
        "type": "Point"
      },
      "id": "f0c751e3ae1ea4aaf267b78aa6fda771"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz29nil5",
        "title": "Newport, RI",
        "description": "2002",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -71.400146,
          41.828642
        ],
        "type": "Point"
      },
      "id": "f37cb96e44b78ef3913dfeb0af382d7a"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik03axjvn",
        "title": "Houston, TX, USA",
        "description": "2012",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -95.361328,
          29.773913
        ],
        "type": "Point"
      },
      "id": "f39cebc2196ffe7e93681cd1d14aa178"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-iq8btfw04",
        "title": "Stockholm, Sweden",
        "description": "2016",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          18.067016,
          59.319177
        ],
        "type": "Point"
      },
      "id": "f7c27c27ae3c39a26126f3e4f2ce96f4"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz1nmbas",
        "title": "Ha Long Bay, Vietnam",
        "description": "2013",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          107.042541,
          20.901154
        ],
        "type": "Point"
      },
      "id": "f86ab806841d18a9e05759766debb508"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ioucqrn20",
        "title": "Budapest, Hungary",
        "description": "2016",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          19.039306,
          47.502358
        ],
        "type": "Point"
      },
      "id": "fcb31a1570fc79267c1248d3e90570ab"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ijz1vddwz",
        "title": "Livingstone, Zambia",
        "description": "2006",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          25.872802,
          -17.85329
        ],
        "type": "Point"
      },
      "id": "fd3c12a13e83399cd9065cc3220c30ea"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "marker-ik0356eva",
        "title": "Denver, USA",
        "description": "",
        "marker-size": "medium",
        "marker-color": "#1087bf",
        "marker-symbol": ""
      },
      "geometry": {
        "coordinates": [
          -104.963378,
          39.757879
        ],
        "type": "Point"
      },
      "id": "fe7e3ebe9048950fa36252d08f4e61bd"
    }
  ]

const mapContainerStyle = {
  width: "100%",
  height: "400px",
}

const Map = () => {
  const mapContainerRef = useRef(null)

  const [map, setMap] = useState(null)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      accessToken: MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [25, 18],
      zoom: 0.5,
    })
    map.addControl(new mapboxgl.NavigationControl(), "top-right")

    setMap(map)

    return () => map.remove()
  }, [])

  return (
    <div ref={mapContainerRef} style={mapContainerStyle}>
      {places && map && <Markers map={map} places={places} />}
    </div>
  )
}

export default Map